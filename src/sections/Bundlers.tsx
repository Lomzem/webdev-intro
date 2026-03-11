import { CodeBlock, RunsBadge, DiagramBox, Callout } from "../components";

export default function Bundlers() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="Your Dev Machine" color="cyan" />
        <RunsBadge location="CI/CD Server" color="emerald" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        A <strong className="text-emerald-300">bundler</strong> takes all your
        source files — JavaScript, CSS, images, everything — and combines them
        into a small number of optimized files that browsers can load
        efficiently. Think of it like a compiler for web apps.
      </p>

      {/* Visual: many files → bundler → output */}
      <DiagramBox>
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            What a bundler does
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-center">
          {/* Input files */}
          <div className="flex flex-wrap gap-2 max-w-xs justify-center">
            {[
              "App.jsx",
              "Header.jsx",
              "utils.js",
              "api.js",
              "index.css",
              "button.css",
              "logo.svg",
              "config.js",
              "hooks.js",
              "types.js",
            ].map((f) => (
              <div
                key={f}
                className="px-2 py-1 rounded border border-zinc-700 bg-zinc-800/60 text-xs font-mono text-zinc-400"
              >
                {f}
              </div>
            ))}
          </div>

          {/* Arrow into bundler */}
          <div className="text-emerald-500 text-3xl lg:rotate-0 rotate-90">
            ⟹
          </div>

          {/* Bundler box */}
          <div className="px-6 py-4 rounded-2xl bg-emerald-950/40 border-2 border-emerald-700/50 text-center">
            <div className="text-3xl mb-1">⚡</div>
            <div className="font-display font-bold text-emerald-300 text-lg">
              Vite
            </div>
            <div className="text-xs text-zinc-500 mt-1">Bundler</div>
          </div>

          {/* Arrow out */}
          <div className="text-emerald-500 text-3xl lg:rotate-0 rotate-90">
            ⟹
          </div>

          {/* Output */}
          <div className="flex flex-col gap-2">
            {[
              { name: "index.html", size: "1.2 KB" },
              { name: "app.ab3f2.js", size: "48 KB" },
              { name: "style.c9e1.css", size: "12 KB" },
            ].map((f) => (
              <div
                key={f.name}
                className="px-3 py-1.5 rounded border border-emerald-800/50 bg-emerald-950/30 text-xs font-mono flex items-center gap-3"
              >
                <span className="text-emerald-300">{f.name}</span>
                <span className="text-zinc-600">{f.size}</span>
              </div>
            ))}
          </div>
        </div>
      </DiagramBox>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-emerald-300 text-xl">
            What Vite Does For You
          </h3>
          <ul className="space-y-3">
            {[
              [
                "Module Resolution",
                'You write import Button from "./Button" and Vite figures out how to connect everything.',
              ],
              [
                "Minification",
                "Removes whitespace, shortens variable names, shrinks your code to load faster.",
              ],
              [
                "Code Splitting",
                "Splits your bundle so users only download the code they need for the current page.",
              ],
              [
                "Asset Handling",
                "Images, fonts, SVGs — Vite processes them, optimizes them, and gives them unique filenames for caching.",
              ],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="text-emerald-500 mt-1 flex-shrink-0">▸</span>
                <div>
                  <span className="text-emerald-200 font-semibold">
                    {title}:
                  </span>{" "}
                  <span className="text-zinc-400">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-bold text-emerald-300 text-xl">
            Hot Module Replacement
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            HMR is magic. When you save a file, Vite instantly swaps{" "}
            <em>just that module</em> in the browser without a full page reload.
            Your app state is preserved — if you're filling out a form and
            change a CSS color, you don't lose your typed text.
          </p>
          <CodeBlock
            title="terminal"
            accent="emerald"
            code={
              <span>
                <span className="text-zinc-500">$</span>{" "}
                <span className="text-emerald-300">npm run dev</span>
                {"\n\n"}
                <span className="text-zinc-500">
                  {"  VITE v7.3.1  ready in 120 ms\n\n"}
                </span>
                <span className="text-emerald-400">
                  {"  ➜  Local:   http://localhost:5173/\n"}
                </span>
                <span className="text-zinc-500">
                  {"  ➜  press h + enter to show help\n\n"}
                </span>
                <span className="text-sky-300">{"  [hmr] "}</span>
                <span className="text-zinc-400">App.jsx updated — 3ms</span>
              </span>
            }
          />
        </div>
      </div>

      <Callout color="#34d399" icon="🔑">
        <strong className="text-emerald-300">Key insight:</strong> The bundler
        runs on <em>your computer</em> (or a build server). The user's browser{" "}
        <strong>never sees your source files</strong> — it only gets the
        optimized output. The browser doesn't know or care that you used Vite.
      </Callout>
    </div>
  );
}
