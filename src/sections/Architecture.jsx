import { RunsBadge, DiagramBox, Callout } from "../components";

export default function Architecture() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        You've now seen every piece individually. Here's how they all fit
        together. Regardless of which specific tools you pick, the modern web
        stack follows the same fundamental pattern: code is{" "}
        <strong className="text-blue-300">authored</strong> on a dev machine,{" "}
        <strong className="text-blue-300">built</strong> into optimized output,{" "}
        <strong className="text-blue-300">served</strong> to browsers, and{" "}
        <strong className="text-blue-300">connected</strong> to backend services.
      </p>

      {/* Main architecture diagram */}
      <DiagramBox className="!border-blue-800/40 !bg-blue-950/10">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            The Modern Web Architecture
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Dev Machine */}
          <div className="rounded-2xl border-2 border-cyan-700/50 bg-zinc-950/80 p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🖥️</span>
              <h4 className="font-display font-bold text-cyan-300">
                Development
              </h4>
            </div>
            <RunsBadge location="Your Machine" color="cyan" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  JS Runtime
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Node.js / Bun — runs your dev tools
                </div>
              </div>
              <div className="text-cyan-600 text-center">▾</div>
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  Bundler + Dev Server
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Vite / Webpack — bundles code, HMR
                </div>
              </div>
              <div className="text-cyan-600 text-center">▾</div>
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  Build-Time Tools
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  TypeScript, Tailwind, ESLint
                </div>
              </div>
            </div>
            <div className="text-xs text-zinc-600 font-mono pt-2 border-t border-cyan-900/20">
              npm run dev → localhost:5173
            </div>
          </div>

          {/* Production / Static Host */}
          <div className="space-y-6">
            {/* Build output */}
            <div className="rounded-2xl border-2 border-amber-700/50 bg-zinc-950/80 p-5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">📦</span>
                <h4 className="font-display font-bold text-amber-300">
                  Build Output
                </h4>
              </div>
              <RunsBadge location="Build Step / CI" color="amber" />
              <p className="text-xs text-zinc-500">
                <code className="text-amber-300">npm run build</code> produces
                optimized static files:
              </p>
              <div className="space-y-1">
                {["index.html", "assets/app.ab3f.js", "assets/style.c9.css"].map(
                  (f) => (
                    <div
                      key={f}
                      className="font-mono text-xs text-amber-200/80 bg-amber-950/30 rounded px-2 py-1"
                    >
                      dist/{f}
                    </div>
                  )
                )}
              </div>
              <div className="text-xs text-zinc-600 font-mono pt-2 border-t border-amber-900/20">
                Deployed to a CDN or static host
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-1 text-zinc-600">
                <span className="text-xs font-mono">served to</span>
                <span className="text-2xl">⬇</span>
              </div>
            </div>

            {/* Browser */}
            <div className="rounded-2xl border-2 border-violet-700/50 bg-zinc-950/80 p-5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🌐</span>
                <h4 className="font-display font-bold text-violet-300">
                  User's Browser
                </h4>
              </div>
              <RunsBadge location="User's Browser" color="violet" />
              <div className="space-y-2 text-sm">
                <div className="rounded-lg bg-violet-950/30 border border-violet-900/30 p-3">
                  <div className="font-mono text-xs text-violet-300 font-bold">
                    Frontend Framework
                  </div>
                  <div className="text-zinc-500 text-xs mt-0.5">
                    React / Vue / Svelte — builds & updates UI
                  </div>
                </div>
                <div className="rounded-lg bg-violet-950/30 border border-violet-900/30 p-3">
                  <div className="font-mono text-xs text-violet-300 font-bold">
                    Client Libraries
                  </div>
                  <div className="text-zinc-500 text-xs mt-0.5">
                    TanStack Query, router, state management
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Server */}
          <div className="rounded-2xl border-2 border-emerald-700/50 bg-zinc-950/80 p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">⚙️</span>
              <h4 className="font-display font-bold text-emerald-300">
                Backend Server
              </h4>
            </div>
            <RunsBadge location="Server / Cloud" color="emerald" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  API Endpoints
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  REST or GraphQL — your app's interface
                </div>
              </div>
              <div className="text-emerald-600 text-center">▾</div>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  Business Logic
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Auth, validation, processing
                </div>
              </div>
              <div className="text-emerald-600 text-center">▾</div>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  Database
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  PostgreSQL, MongoDB, Redis, etc.
                </div>
              </div>
            </div>
            <div className="text-xs text-zinc-600 font-mono pt-2 border-t border-emerald-900/20">
              Can be any language: JS, Python, Go, Rust...
            </div>
          </div>
        </div>

        {/* Connection arrows */}
        <div className="mt-6 pt-4 border-t border-zinc-800">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-violet-500" />
              <span className="text-violet-400">
                Browser ↔ Server communicate via HTTP (JSON)
              </span>
              <div className="w-8 border-t-2 border-emerald-500" />
            </div>
          </div>
        </div>
      </DiagramBox>

      {/* Key principles */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-blue-300 text-xl">
          Core Principles (No Matter What You Pick)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Separation of Concerns",
              desc: "Each layer has one job. The bundler builds. The framework renders. The server stores data. Swap any piece without rewriting the rest.",
              icon: "🧩",
            },
            {
              title: "Build vs Runtime",
              desc: "Some tools run once at build time (TypeScript, Tailwind, bundler) and some run every time a user visits (React, TanStack Query, your API). Knowing which is which avoids confusion.",
              icon: "⏱️",
            },
            {
              title: "Client vs Server",
              desc: "The browser is the client. Your API is the server. They communicate over HTTP with JSON. The browser can't access databases; the server can't access the DOM.",
              icon: "🔀",
            },
            {
              title: "Static vs Dynamic",
              desc: "Some content never changes (CSS, images, compiled JS) and can be served from a CDN. Dynamic content (user data, personalized pages) requires a server.",
              icon: "📄",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-blue-900/30 bg-blue-950/10 p-4"
            >
              <div className="text-2xl mb-2">{p.icon}</div>
              <h4 className="font-display font-bold text-blue-300 mb-1">
                {p.title}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common stacks */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-blue-300 text-xl">
          Common Stacks in the Wild
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "Vite + React + Separate API",
              tags: ["CSR", "Headless"],
              desc: "Frontend is static files on a CDN. Backend is a separate server (Express, Django, Go, etc). Simplest architecture. Great for SPAs and dashboards.",
              color: "#a78bfa",
            },
            {
              name: "Next.js (Full-stack)",
              tags: ["SSR", "SSG", "API Routes"],
              desc: "One codebase handles both frontend and backend. Server components fetch data, API routes handle mutations. Popular for public-facing apps.",
              color: "#2dd4bf",
            },
            {
              name: "Astro + Headless CMS",
              tags: ["SSG", "Islands"],
              desc: "Mostly static HTML generated at build time. Interactive React/Vue components only where needed. Ideal for content sites, blogs, and docs.",
              color: "#fbbf24",
            },
            {
              name: "React Native / Expo",
              tags: ["Mobile", "Cross-platform"],
              desc: "Same React concepts, but renders to native iOS/Android instead of the DOM. Still talks to a backend API the same way.",
              color: "#fb7185",
            },
          ].map((stack) => (
            <div
              key={stack.name}
              className="rounded-xl border p-4 flex flex-col sm:flex-row gap-4"
              style={{
                borderColor: stack.color + "25",
                backgroundColor: stack.color + "06",
              }}
            >
              <div className="sm:w-64 flex-shrink-0">
                <div
                  className="font-display font-bold"
                  style={{ color: stack.color }}
                >
                  {stack.name}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {stack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        color: stack.color,
                        backgroundColor: stack.color + "15",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {stack.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Callout color="#60a5fa" icon="🚀">
        <strong className="text-blue-300">The typical dev workflow:</strong>
        <ol className="mt-2 space-y-1 text-zinc-400 list-decimal list-inside">
          <li>Write components in your framework of choice + style with Tailwind or CSS</li>
          <li>
            <code className="text-cyan-300 text-xs">npm run dev</code> — bundler
            serves your app locally with HMR
          </li>
          <li>Your app runs in the browser, fetches data from an API</li>
          <li>
            <code className="text-amber-300 text-xs">npm run build</code> —
            TypeScript checks, Tailwind compiles, bundler optimizes
          </li>
          <li>Deploy — static files to a CDN, or a server for SSR</li>
        </ol>
      </Callout>

      <div className="rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-950/20 to-violet-950/20 p-6 text-center space-y-3">
        <div className="text-3xl">🎓</div>
        <h3 className="font-display font-bold text-xl text-blue-200">
          You now understand the modern web stack.
        </h3>
        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Every piece has a clear role and a clear place where it runs. The
          package manager downloads libraries to your machine. The bundler
          builds on your machine. TypeScript and Tailwind run at build time.
          The framework runs in the browser (or on the server, for SSR).
          Your API runs on a server. Data flows between them via HTTP.{" "}
          <strong className="text-zinc-300">
            The specific tools change — the architecture doesn't.
          </strong>
        </p>
      </div>
    </div>
  );
}
