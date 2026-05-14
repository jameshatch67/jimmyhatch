import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Hatch",
  description: "James Hatch — Yale University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
