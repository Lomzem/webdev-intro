import { RunsBadge, DiagramBox, Callout } from "../components";

export default function Architecture() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        Here's the full picture of how all these pieces fit together in{" "}
        <strong className="text-blue-300">your</strong> app. Three distinct
        environments, each with a clear role.
      </p>

      {/* Main architecture diagram */}
      <DiagramBox className="!border-blue-800/40 !bg-blue-950/10">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Your Full Architecture
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Dev Machine */}
          <div className="rounded-2xl border-2 border-cyan-700/50 bg-zinc-950/80 p-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🖥️</span>
              <h4 className="font-display font-bold text-cyan-300">
                Your Dev Machine
              </h4>
            </div>
            <RunsBadge location="Development" color="cyan" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  Node.js
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  JS runtime — runs Vite & your dev tools
                </div>
              </div>
              <div className="text-cyan-600 text-center">▾</div>
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  Vite Dev Server
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Bundles code, serves to browser, HMR
                </div>
              </div>
              <div className="text-cyan-600 text-center">▾</div>
              <div className="rounded-lg bg-cyan-950/30 border border-cyan-900/30 p-3">
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  Tailwind CSS
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Scans your JSX → generates CSS
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
              <RunsBadge location="Build Step" color="amber" />
              <p className="text-xs text-zinc-500">
                <code className="text-amber-300">npm run build</code> produces
                static files:
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
                Deployed to CDN / static host (Vercel, Netlify)
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
                    React
                  </div>
                  <div className="text-zinc-500 text-xs mt-0.5">
                    Builds & updates the UI from your components
                  </div>
                </div>
                <div className="rounded-lg bg-violet-950/30 border border-violet-900/30 p-3">
                  <div className="font-mono text-xs text-violet-300 font-bold">
                    TanStack Query
                  </div>
                  <div className="text-zinc-500 text-xs mt-0.5">
                    Manages data fetching, caching, sync
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
                Your Backend Server
              </h4>
            </div>
            <RunsBadge location="Your Server" color="emerald" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  API Endpoints
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  /api/posts, /api/users, /api/auth
                </div>
              </div>
              <div className="text-emerald-600 text-center">▾</div>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  Business Logic
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  Validation, auth, processing
                </div>
              </div>
              <div className="text-emerald-600 text-center">▾</div>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-3">
                <div className="font-mono text-xs text-emerald-300 font-bold">
                  Database
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">
                  PostgreSQL, MongoDB, etc.
                </div>
              </div>
            </div>
            <div className="text-xs text-zinc-600 font-mono pt-2 border-t border-emerald-900/20">
              Separate deployment, separate codebase
            </div>
          </div>
        </div>

        {/* Connection arrows */}
        <div className="mt-6 pt-4 border-t border-zinc-800">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-violet-500" />
              <span className="text-violet-400">
                Browser fetches API data via HTTP
              </span>
              <div className="w-8 border-t-2 border-emerald-500" />
            </div>
          </div>
        </div>
      </DiagramBox>

      {/* Summary */}
      <div className="grid md:grid-cols-2 gap-4">
        <Callout color="#60a5fa" icon="🧩">
          <strong className="text-blue-300">
            "Headless" means decoupled.
          </strong>{" "}
          Your React frontend and your backend API are completely separate
          applications. The frontend is just static files served from a CDN.
          The backend is a server that responds to API calls. They communicate
          via HTTP (JSON). You can swap out either one without touching the other.
        </Callout>

        <Callout color="#60a5fa" icon="🚀">
          <strong className="text-blue-300">Your dev workflow:</strong>
          <ol className="mt-2 space-y-1 text-zinc-400 list-decimal list-inside">
            <li>Write React components + Tailwind</li>
            <li>
              <code className="text-cyan-300 text-xs">npm run dev</code> — Vite
              serves your app locally
            </li>
            <li>React runs in your browser, fetches from your API</li>
            <li>
              <code className="text-amber-300 text-xs">npm run build</code> — Vite
              produces static files
            </li>
            <li>Deploy static files to any host</li>
          </ol>
        </Callout>
      </div>

      <div className="rounded-2xl border border-blue-800/30 bg-gradient-to-br from-blue-950/20 to-violet-950/20 p-6 text-center space-y-3">
        <div className="text-3xl">🎓</div>
        <h3 className="font-display font-bold text-xl text-blue-200">
          You now understand the modern web stack.
        </h3>
        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Every piece has a clear role and a clear place where it runs. The
          bundler builds on your machine. Tailwind compiles at build time.
          React runs in the browser. Your API runs on a server. Data flows
          between them via HTTP.{" "}
          <strong className="text-zinc-300">That's it.</strong> Everything else
          is details.
        </p>
      </div>
    </div>
  );
}
