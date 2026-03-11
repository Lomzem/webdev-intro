import { RunsBadge, DiagramBox, Callout } from "../components";

export default function Runtimes() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        JavaScript was born in the browser in 1995. For years, that was the{" "}
        <em>only</em> place it could run. Then{" "}
        <strong className="text-sky-300">Node.js</strong> came along in 2009
        and changed everything — it let you run JavaScript on servers, on your
        laptop, anywhere. A <strong className="text-sky-300">runtime</strong> is
        the engine that actually executes your JavaScript code.
      </p>

      {/* Two environments diagram */}
      <DiagramBox>
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Two different worlds, same language
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Your machine */}
          <div className="rounded-xl border-2 border-sky-700/50 bg-sky-950/20 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🖥️</span>
              <h4 className="font-display font-bold text-sky-300 text-lg">
                Your Machine / Server
              </h4>
            </div>
            <RunsBadge location="Your Machine" color="cyan" />
            <div className="space-y-2 mt-3">
              {[
                {
                  name: "Node.js",
                  desc: "The OG. Uses Chrome's V8 engine. Massive ecosystem (npm).",
                },
                {
                  name: "Bun",
                  desc: "The new kid. Blazingly fast. Built-in bundler, test runner, package manager.",
                },
                {
                  name: "Deno",
                  desc: "Made by Node's creator. TypeScript built-in. Security-focused.",
                },
              ].map((rt) => (
                <div
                  key={rt.name}
                  className="rounded-lg bg-sky-950/40 border border-sky-900/40 p-3"
                >
                  <span className="font-mono text-sm font-bold text-sky-200">
                    {rt.name}
                  </span>
                  <p className="text-xs text-zinc-400 mt-0.5">{rt.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-3 pt-3 border-t border-sky-900/30">
              Can access: file system, network, databases, processes
              <br />
              Cannot access: DOM, window, document
            </div>
          </div>

          {/* User's browser */}
          <div className="rounded-xl border-2 border-violet-700/50 bg-violet-950/20 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              <h4 className="font-display font-bold text-violet-300 text-lg">
                User's Web Browser
              </h4>
            </div>
            <RunsBadge location="User's Browser" color="violet" />
            <div className="space-y-2 mt-3">
              {[
                {
                  name: "V8",
                  desc: "Chrome, Edge, Opera, Brave. Google's JS engine.",
                },
                {
                  name: "SpiderMonkey",
                  desc: "Firefox. Mozilla's engine. The original JS engine.",
                },
                {
                  name: "JavaScriptCore",
                  desc: "Safari. Apple's engine (also called Nitro).",
                },
              ].map((rt) => (
                <div
                  key={rt.name}
                  className="rounded-lg bg-violet-950/40 border border-violet-900/40 p-3"
                >
                  <span className="font-mono text-sm font-bold text-violet-200">
                    {rt.name}
                  </span>
                  <p className="text-xs text-zinc-400 mt-0.5">{rt.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-3 pt-3 border-t border-violet-900/30">
              Can access: DOM, window, fetch, localStorage
              <br />
              Cannot access: file system, databases, processes
            </div>
          </div>
        </div>
      </DiagramBox>

      <div className="grid md:grid-cols-2 gap-6">
        <Callout color="#38bdf8" icon="⚡">
          <strong className="text-sky-300">When you run</strong>{" "}
          <code className="font-mono text-sky-200 bg-sky-950/50 px-1.5 rounded">
            npm run dev
          </code>{" "}
          — that's <strong>Node.js</strong> (a JS runtime) running on your laptop.
          It starts the Vite dev server, watches your files, and serves your
          app to the browser.
        </Callout>

        <Callout color="#a78bfa" icon="🌐">
          <strong className="text-violet-300">When a user opens your app</strong>{" "}
          — their browser's built-in JS engine (V8, SpiderMonkey, etc.)
          executes the JavaScript bundle that Vite produced. Completely
          separate from your machine.
        </Callout>
      </div>

      <Callout color="#38bdf8" icon="🧠">
        <strong className="text-sky-300">Why this matters:</strong> Same
        language (JavaScript), but different environments with different
        capabilities. Code that reads files from disk (
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          fs.readFile
        </code>
        ) works in Node/Bun but will crash in a browser. Code that manipulates
        the page (
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          document.querySelector
        </code>
        ) works in browsers but not in Node/Bun.
      </Callout>
    </div>
  );
}
