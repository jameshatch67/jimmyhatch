export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="mb-16">
        <img
          src="/portrait.jpg"
          alt="Mina"
          className="mb-8 w-full max-w-md rounded-sm shadow-sm"
        />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Jimmy Hatch
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          Yale Jackson School
        </p>
        <nav className="mt-8 flex gap-6 text-sm uppercase tracking-wider text-neutral-500">
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#book" className="hover:text-neutral-900">Book</a>
          <a href="#writing" className="hover:text-neutral-900">Writing</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
      </header>

      <section id="about" className="mb-16 scroll-mt-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--accent)]">
          About
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-neutral-800">
          <p>
            I lecture two courses at the Yale Jackson School of Global Affairs &mdash;{" "}
            <em>The Impact of War on Its (Willing and Unwilling) Participants</em>{" "}
            and <em>Courage and Its Shadows</em>. Previous to this, I was an
            undergrad here at Yale, and previous to that I served for over two
            decades in the US Special Operations Forces. My career ended when I
            was seriously wounded in 2009.
          </p>
          <p>
            I love dogs &mdash; they&rsquo;ve saved my life in combat. In 2014 I
            founded{" "}
            <a
              href="https://spikesk9fund.org"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Spike&rsquo;s K9 Fund
            </a>{" "}
            to act as an advocate for our nation&rsquo;s working canine officers.
          </p>
          <p>
            When I&rsquo;m not prepping for class, I write, read, and carcasstoss
            (skydive) as often as possible.
          </p>
        </div>
      </section>

      <section id="book" className="mb-16 scroll-mt-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--accent)]">
          Book
        </h2>
        <a
          href="https://www.touchingthedragon.com"
          target="_blank"
          rel="noreferrer"
          className="group block border-l-2 border-[color:var(--accent)] pl-5"
        >
          <h3 className="text-2xl font-semibold text-neutral-900 group-hover:underline">
            Touching the Dragon
          </h3>
          <p className="mt-2 text-base text-neutral-700">
            And Other Techniques for Surviving Life&rsquo;s Wars
          </p>
          <p className="mt-3 text-sm uppercase tracking-wider text-neutral-500 group-hover:text-neutral-900">
            touchingthedragon.com →
          </p>
        </a>
      </section>

      <section id="writing" className="mb-16 scroll-mt-16">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[color:var(--accent)]">
          Research &amp; Writing
        </h2>
        <a
          href="https://jameshatch67.substack.com"
          target="_blank"
          rel="noreferrer"
          className="group mb-6 block rounded-sm bg-neutral-100 px-5 py-4 hover:bg-neutral-200/70"
        >
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Substack
          </p>
          <p className="mt-1 text-lg font-medium text-neutral-900 group-hover:underline">
            The Belt of Pallas
          </p>
          <p className="mt-1 text-sm text-neutral-600 italic">
            Observations from the unlikely.
          </p>
        </a>
        <ul className="divide-y divide-neutral-200">
          <li className="py-4">
            <a
              href="https://longreads.com/2019/12/27/my-semester-with-the-snowflakes/"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-medium text-neutral-900 group-hover:underline">
                My Semester with the Snowflakes
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                GEN · December 2019
              </p>
            </a>
          </li>
          <li className="py-4">
            <a
              href="https://jameshatch67.substack.com/p/lacrosse-teamwork-and-life"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-medium text-neutral-900 group-hover:underline">
                Lacrosse, Teamwork, and Life
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                The Belt of Pallas · May 2026
              </p>
            </a>
          </li>
          <li className="py-4">
            <a
              href="https://jameshatch67.substack.com/p/simple-soldiers"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-medium text-neutral-900 group-hover:underline">
                Simple Soldiers
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                The Belt of Pallas · April 2026
              </p>
            </a>
          </li>
          <li className="py-4">
            <a
              href="https://jameshatch67.substack.com/p/war-is-stupidity-with-a-body-count"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <h3 className="text-lg font-medium text-neutral-900 group-hover:underline">
                War Is Stupidity With a Body Count
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                The Belt of Pallas · April 2026
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section id="contact" className="mb-16 scroll-mt-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--accent)]">
          Contact
        </h2>
        <div className="space-y-2 text-lg text-neutral-800">
          <p>
            <span className="text-neutral-500">Email · </span>
            <a href="mailto:james.hatch@yale.edu" className="underline-offset-4 hover:underline">
              james.hatch@yale.edu
            </a>
          </p>
          <p>
            <span className="text-neutral-500">Office · </span>
            Horchow Hall, Yale Jackson School
          </p>
          <p>
            <span className="text-neutral-500">Instagram · </span>
            <a
              href="https://instagram.com/Soulioliolio"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              @Soulioliolio
            </a>
          </p>
        </div>
      </section>

      <footer className="mt-24 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} Jimmy Hatch
      </footer>
    </main>
  );
}
