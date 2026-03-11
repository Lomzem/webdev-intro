import { CodeBlock, RunsBadge, DiagramBox, Callout } from "../components";

export default function PackageManagers() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="Your Dev Machine" color="cyan" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        Remember the Old Days — downloading{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1.5 rounded">
          jquery.min.js
        </code>{" "}
        manually and dropping it in a folder? A{" "}
        <strong className="text-lime-300">package manager</strong> automates
        that. It's like{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1.5 rounded">
          apt
        </code>{" "}
        for Ubuntu or{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1.5 rounded">
          brew
        </code>{" "}
        for macOS, but for JavaScript libraries.
      </p>

      {/* The big three */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            name: "npm",
            full: "Node Package Manager",
            desc: "Comes pre-installed with Node.js. The default. The one you're using.",
            highlight: true,
            detail: "Millions of packages on the npm registry (npmjs.com).",
          },
          {
            name: "pnpm",
            full: "Performant npm",
            desc: "Faster and uses less disk space. Shares packages across projects via symlinks.",
            highlight: false,
            detail: "Drop-in replacement — same commands, better internals.",
          },
          {
            name: "bun",
            full: "Bun (also a JS runtime)",
            desc: "Blazingly fast. Does everything — package manager, bundler, test runner, and JS runtime in one tool.",
            highlight: false,
            detail: "Newest of the three. Growing fast in popularity.",
          },
        ].map((pm) => (
          <div
            key={pm.name}
            className={`rounded-xl border p-5 space-y-2 ${
              pm.highlight
                ? "border-lime-700/50 bg-lime-950/20"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-lime-300">
                {pm.name}
              </span>
              {pm.highlight && (
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-lime-400/15 text-lime-400 px-2 py-0.5 rounded-full">
                  You're using this
                </span>
              )}
            </div>
            <div className="text-xs text-zinc-600 font-mono">{pm.full}</div>
            <p className="text-sm text-zinc-400 leading-relaxed">{pm.desc}</p>
            <p className="text-xs text-zinc-600 italic">{pm.detail}</p>
          </div>
        ))}
      </div>

      {/* package.json explained */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lime-300 text-xl">
          package.json — Your Project's Manifest
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Every JS project has a{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1.5 rounded text-lime-300">
            package.json
          </code>{" "}
          file at its root. It lists your project's dependencies (libraries you
          use) and defines scripts (commands you can run). Think of it like a
          recipe card for your project.
        </p>

        <CodeBlock
          title="package.json"
          accent="emerald"
          code={
            <span>
              <span className="text-zinc-400">{"{\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{'"name"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"my-react-app"'}</span>
              <span className="text-zinc-400">{",\n"}</span>

              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{'"scripts"'}</span>
              <span className="text-zinc-400">{": {\n"}</span>
              <span className="text-zinc-500">
                {"    // These are shortcuts you run with: npm run <name>\n"}
              </span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"dev"'}</span>
              <span className="text-zinc-400">{":     "}</span>
              <span className="text-emerald-400">{'"vite"'}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"build"'}</span>
              <span className="text-zinc-400">{":   "}</span>
              <span className="text-emerald-400">{'"vite build"'}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"preview"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"vite preview"'}</span>
              <span className="text-zinc-400">{"\n  },\n"}</span>

              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{'"dependencies"'}</span>
              <span className="text-zinc-400">{": {\n"}</span>
              <span className="text-zinc-500">
                {"    // Libraries your app NEEDS to run in the browser\n"}
              </span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"react"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"^19.2.0"'}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"react-dom"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"^19.2.0"'}</span>
              <span className="text-zinc-400">{"\n  },\n"}</span>

              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{'"devDependencies"'}</span>
              <span className="text-zinc-400">{": {\n"}</span>
              <span className="text-zinc-500">
                {
                  "    // Tools used only during development (not shipped to users)\n"
                }
              </span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"vite"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"^7.3.0"'}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{'"tailwindcss"'}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{'"^4.2.0"'}</span>
              <span className="text-zinc-400">{"\n  }\n"}</span>
              <span className="text-zinc-400">{"}"}</span>
            </span>
          }
        />
      </div>

      {/* Key commands */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lime-300 text-xl">
          The Commands You'll Actually Use
        </h3>
        <div className="space-y-3">
          {[
            {
              cmd: "npm install",
              alias: "npm i",
              desc: "Reads package.json and downloads everything listed in dependencies and devDependencies into a folder called node_modules/. Run this once when you clone a project, or after someone adds a new dependency.",
            },
            {
              cmd: "npm install react",
              alias: "npm i react",
              desc: "Adds a specific package to your project. Updates package.json automatically so your teammates get it too.",
            },
            {
              cmd: "npm install -D tailwindcss",
              alias: "npm i -D tailwindcss",
              desc: "The -D flag adds it as a devDependency — a tool for development only, not shipped to users. Bundlers, linters, and Tailwind go here.",
            },
            {
              cmd: "npm run dev",
              alias: null,
              desc: 'Runs the "dev" script from package.json. In your project, that\'s "vite" — which starts the dev server.',
            },
            {
              cmd: "npm run build",
              alias: null,
              desc: 'Runs the "build" script. In your project, that\'s "vite build" — which produces the optimized files for production.',
            },
          ].map((c) => (
            <div
              key={c.cmd}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-shrink-0 sm:w-64">
                <code className="font-mono text-sm font-semibold text-lime-300">
                  {c.cmd}
                </code>
                {c.alias && (
                  <div className="text-xs font-mono text-zinc-600 mt-0.5">
                    short: {c.alias}
                  </div>
                )}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* node_modules */}
      <DiagramBox>
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            What npm install actually does
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="px-4 py-3 rounded-xl border border-lime-800/40 bg-lime-950/20 text-center">
            <div className="font-mono text-sm text-lime-300 font-bold">
              package.json
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              "I need react, react-dom, vite..."
            </div>
          </div>

          <div className="text-lime-500 text-3xl md:rotate-0 rotate-90">⟹</div>

          <div className="px-6 py-4 rounded-2xl bg-lime-950/30 border-2 border-lime-700/40 text-center">
            <div className="text-2xl mb-1">📦</div>
            <div className="font-mono text-sm font-bold text-lime-300">
              npm install
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              Downloads from npmjs.com
            </div>
          </div>

          <div className="text-lime-500 text-3xl md:rotate-0 rotate-90">⟹</div>

          <div className="px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800/60 text-center">
            <div className="font-mono text-sm text-zinc-300 font-bold">
              node_modules/
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              Folder with all downloaded packages
            </div>
            <div className="text-xs text-zinc-600 mt-1 italic">
              Often 200MB+ — never commit this to git!
            </div>
          </div>
        </div>
      </DiagramBox>

      <Callout color="#a3e635" icon="🔑">
        <strong className="text-lime-300">
          Package managers run on your machine, never in the browser.
        </strong>{" "}
        When you run{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          npm install
        </code>
        , it downloads code to your{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          node_modules/
        </code>{" "}
        folder. The bundler (Vite) then picks the pieces it needs from there and
        includes them in the final bundle. The user's browser never sees npm,
        node_modules, or package.json — it just gets the finished JS and CSS
        files.
      </Callout>

      <Callout color="#a3e635" icon="💡">
        <strong className="text-lime-300">npm vs pnpm in practice:</strong> They
        use the same registry (npmjs.com), the same package.json format, and
        nearly identical commands (
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          pnpm install
        </code>
        ,{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          pnpm run dev
        </code>
        ). pnpm is faster because it stores packages globally and symlinks them
        into each project instead of making full copies. If npm works for you,
        stick with it — you can always switch later with zero code changes.
      </Callout>
    </div>
  );
}
