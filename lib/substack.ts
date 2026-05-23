// Fetches Jimmy Hatch's Substack ("The Belt of Pallas") RSS feed and returns
// the latest N posts. Cached at the edge via Next.js ISR — revalidates every
// 10 minutes, so a new Substack post appears on the site automatically within
// roughly that window. No build step or webhook required.

const FEED_URL = "https://jameshatch67.substack.com/feed";
const REVALIDATE_SECONDS = 600; // 10 min

export interface SubstackPost {
  title: string;
  url: string;
  date: string; // e.g. "May 2026"
}

function decodeCdata(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8212;/g, "—")
    .replace(/&#8211;/g, "–")
    .replace(/&#39;/g, "'")
    .trim();
}

function pickFirst(block: string, tag: string): string {
  // Match either <tag><![CDATA[...]]></tag> or <tag>...</tag>
  const re = new RegExp(
    `<${tag}>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
  );
  const m = block.match(re);
  if (!m) return "";
  return decodeCdata(m[1] ?? m[2] ?? "");
}

export async function getLatestSubstackPosts(
  limit = 3,
): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { "User-Agent": "furtherstill.net portfolio" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit);
    return items.map((m) => {
      const block = m[1];
      const title = pickFirst(block, "title");
      const url = pickFirst(block, "link");
      const pubDate = pickFirst(block, "pubDate");
      const d = pubDate ? new Date(pubDate) : null;
      const date =
        d && !isNaN(d.getTime())
          ? d.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })
          : "";
      return { title, url, date };
    });
  } catch {
    return [];
  }
}
