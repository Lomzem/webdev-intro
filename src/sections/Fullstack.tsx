import {
  Callout,
  DiagramBox,
  SequenceDiagram,
  CodeBlock,
  RunsBadge,
} from "../components";

export default function Fullstack() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        So far, every tool we've discussed falls clearly on one side: the
        bundler runs on your machine, React runs in the browser, the API runs
        on a server. <strong className="text-teal-300">Fullstack frameworks</strong>{" "}
        like Next.js and Remix deliberately blur that line — they let you write
        React code that runs on <em>both</em> the server and the client.
      </p>

      {/* The problem CSR has */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-teal-300 text-xl">
          The Problem with Client-Side Rendering
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          With a pure client-side React app (what Vite gives you), here's
          what happens when someone visits your page:
        </p>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "Browser",
                to: "Server",
                label:
                  'Requests the page — server sends back a nearly empty HTML file with just a <div id="root"></div>',
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "Server",
                label:
                  "Downloads the JavaScript bundle (could be 200KB+ gzipped for a large app)",
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "Browser",
                label:
                  "Parses and executes the JS — React builds the page from scratch. User sees a blank screen or spinner until this finishes.",
                color: "#fb923c",
              },
              {
                from: "Browser",
                to: "API Server",
                label:
                  "React realizes it needs data, fires off fetch() calls — more waiting",
                color: "#fb923c",
              },
              {
                from: "Browser",
                to: "User",
                label:
                  "Finally renders the complete page. On slow connections or old phones, this can take several seconds.",
                color: "#fbbf24",
                direction: "left",
              },
            ]}
          />
        </div>

        <p className="text-zinc-400 leading-relaxed">
          This is fine for dashboards and apps behind a login. But for public
          pages — a blog, a storefront, a landing page — those seconds of
          blank screen hurt. And search engines (Google) may not index
          JavaScript-rendered content well.
        </p>
      </div>

      {/* The SSR solution */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-teal-300 text-xl">
          Server-Side Rendering (SSR): The Fix
        </h3>
        <div className="flex flex-wrap gap-3 items-center mb-2">
          <RunsBadge location="Your Server" color="emerald" />
          <span className="text-zinc-600 text-sm">then</span>
          <RunsBadge location="User's Browser" color="violet" />
        </div>
        <p className="text-zinc-400 leading-relaxed">
          With SSR, the server runs your React components <em>before</em>{" "}
          sending anything to the browser. It fetches the data, renders the
          HTML, and sends a complete page. The browser shows content
          immediately, then React "hydrates" (attaches event listeners) to
          make it interactive.
        </p>

        <div className="rounded-xl border border-teal-900/30 bg-teal-950/10 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "Browser",
                to: "Server",
                label: "Requests the page",
                color: "#2dd4bf",
              },
              {
                from: "Server",
                to: "Database",
                label:
                  "Server runs your React component AND fetches data — all on the server",
                color: "#34d399",
              },
              {
                from: "Server",
                to: "Browser",
                label:
                  "Sends fully rendered HTML with real content — not an empty shell. User sees the page instantly.",
                color: "#2dd4bf",
                direction: "left",
              },
              {
                from: "Browser",
                to: "Browser",
                label:
                  'React "hydrates" — attaches click handlers, makes the page interactive. Page was already visible.',
                color: "#a78bfa",
              },
            ]}
          />
        </div>
      </div>

      {/* The rendering spectrum */}
      <DiagramBox>
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            The spectrum of rendering approaches
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* CSR */}
          <div className="flex-1 rounded-xl border-2 border-violet-700/40 bg-violet-950/20 p-4 space-y-2">
            <div className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
              Client-Side Rendering (CSR)
            </div>
            <div className="text-lg font-display font-bold text-violet-300">
              Vite + React
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Server sends an empty HTML shell. Browser downloads JS, React
              builds the entire page. All rendering happens in the browser.
            </p>
            <div className="text-xs text-zinc-500 pt-2 border-t border-violet-900/30 space-y-1">
              <div className="flex gap-2">
                <span className="text-emerald-400">+</span> Simple mental model, easy to deploy (static files)
              </div>
              <div className="flex gap-2">
                <span className="text-red-400">−</span> Blank screen until JS loads, poor SEO
              </div>
            </div>
          </div>

          {/* SSR */}
          <div className="flex-1 rounded-xl border-2 border-teal-700/40 bg-teal-950/20 p-4 space-y-2">
            <div className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
              Server-Side Rendering (SSR)
            </div>
            <div className="text-lg font-display font-bold text-teal-300">
              Next.js / Remix
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Server runs React and sends <em>fully rendered HTML</em>. Browser
              receives a complete page instantly, then React hydrates to make
              it interactive.
            </p>
            <div className="text-xs text-zinc-500 pt-2 border-t border-teal-900/30 space-y-1">
              <div className="flex gap-2">
                <span className="text-emerald-400">+</span> Fast first paint, great SEO, link previews work
              </div>
              <div className="flex gap-2">
                <span className="text-red-400">−</span> Needs a running server, more complex deployment
              </div>
            </div>
          </div>

          {/* SSG */}
          <div className="flex-1 rounded-xl border-2 border-amber-700/40 bg-amber-950/20 p-4 space-y-2">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              Static Site Generation (SSG)
            </div>
            <div className="text-lg font-display font-bold text-amber-300">
              Next.js / Astro
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Pages are rendered to HTML at <em>build time</em>, not at request
              time. No server needed at runtime — just static files, but with
              real content baked in.
            </p>
            <div className="text-xs text-zinc-500 pt-2 border-t border-amber-900/30 space-y-1">
              <div className="flex gap-2">
                <span className="text-emerald-400">+</span> Fastest possible, cheapest hosting, great SEO
              </div>
              <div className="flex gap-2">
                <span className="text-red-400">−</span> Content is stale until next build, not for dynamic data
              </div>
            </div>
          </div>
        </div>
      </DiagramBox>

      {/* What Next.js code looks like */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-teal-300 text-xl">
          What Does This Look Like in Code?
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          In Next.js (App Router), components are{" "}
          <strong className="text-teal-200">server components by default</strong>.
          They run on the server and can directly access databases, read files,
          or call internal services — things a browser can never do. The
          component looks like normal React, but the framework runs it on the
          server and sends the rendered HTML to the browser.
        </p>

        <CodeBlock
          title="app/posts/page.tsx — Next.js server component"
          accent="teal"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"db"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">{"'@/lib/database'"}</span>
              <span className="text-zinc-400">{";\n\n"}</span>

              <span className="text-zinc-500">{"// This runs on the SERVER. The browser never\n"}</span>
              <span className="text-zinc-500">{"// sees this code or your database credentials.\n\n"}</span>

              <span className="text-violet-300">{"export default async function "}</span>
              <span className="text-amber-300">{"PostsPage"}</span>
              <span className="text-zinc-400">{"() {\n"}</span>

              <span className="text-zinc-500">{"  // Query the database directly — no API layer needed\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"const "}</span>
              <span className="text-sky-300">{"posts"}</span>
              <span className="text-zinc-400">{" = "}</span>
              <span className="text-violet-300">{"await "}</span>
              <span className="text-sky-300">{"db"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"query"}</span>
              <span className="text-zinc-400">{"(\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-emerald-400">{"`SELECT id, title, author\n"}</span>
              <span className="text-emerald-400">{"     FROM posts\n"}</span>
              <span className="text-emerald-400">{"     ORDER BY created_at DESC`"}</span>
              <span className="text-zinc-400">{"\n  );\n\n"}</span>

              <span className="text-zinc-500">{"  // This JSX is rendered to HTML on the server,\n"}</span>
              <span className="text-zinc-500">{"  // then sent to the browser as a complete page.\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"return "}</span>
              <span className="text-zinc-400">{"(\n"}</span>
              <span className="text-zinc-400">{"    <"}</span>
              <span className="text-red-400">{"ul"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"      {"}</span>
              <span className="text-sky-300">{"posts"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"map"}</span>
              <span className="text-zinc-400">{"(post =>\n"}</span>
              <span className="text-zinc-400">{"        <"}</span>
              <span className="text-red-400">{"li"}</span>
              <span className="text-amber-300">{" key"}</span>
              <span className="text-zinc-400">{"={post.id}>\n"}</span>
              <span className="text-zinc-400">{"          {post.title} "}</span>
              <span className="text-zinc-500">{"— "}</span>
              <span className="text-zinc-400">{"{post.author}\n"}</span>
              <span className="text-zinc-400">{"        </"}</span>
              <span className="text-red-400">{"li"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"      )}\n"}</span>
              <span className="text-zinc-400">{"    </"}</span>
              <span className="text-red-400">{"ul"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"  );\n}"}</span>
            </span>
          }
        />

        <Callout color="#2dd4bf" icon="🤯">
          <strong className="text-teal-300">This component queries a database directly.</strong>{" "}
          No{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">useState</code>,
          no{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">useEffect</code>,
          no{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">fetch()</code>{" "}
          to an API, no{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">useQuery</code>.
          The SQL runs on the server, the JSX is rendered to HTML on the server,
          and the browser receives a finished page. Your database credentials
          and query logic never leave the server — the browser only gets the
          resulting HTML. The component is{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">async</code>{" "}
          — something not possible in client-side React.
        </Callout>
      </div>

      {/* When to use what */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-teal-300 text-xl">
          When to Use What
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Use CSR (Vite + React) when...",
              color: "#a78bfa",
              items: [
                "Building a dashboard or admin panel",
                "The app is behind authentication (no SEO needed)",
                "You want the simplest possible setup",
                "You already have a separate backend API",
                "You're learning and want a clear client/server split",
              ],
            },
            {
              title: "Use SSR/SSG (Next.js) when...",
              color: "#2dd4bf",
              items: [
                "Building a public-facing website (blog, storefront, docs)",
                "SEO matters — you need Google to index your content",
                "First-load performance is critical (e-commerce)",
                "You want link previews on social media to work",
                "You want one codebase for frontend + backend logic",
              ],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-xl border p-5"
              style={{
                borderColor: col.color + "30",
                backgroundColor: col.color + "08",
              }}
            >
              <h4
                className="font-display font-bold mb-3"
                style={{ color: col.color }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400">
                    <span style={{ color: col.color }} className="flex-shrink-0">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Callout color="#2dd4bf" icon="💡">
        <strong className="text-teal-300">They're not competing — they're tradeoffs.</strong>{" "}
        Many teams use both: a Next.js app for their public marketing site and
        a Vite + React SPA for their logged-in dashboard. The right choice
        depends on your use case, not which is "better." Understanding CSR
        first makes SSR much easier to learn, because you already know what
        React is doing — SSR just moves <em>where</em> it does it.
      </Callout>
    </div>
  );
}
