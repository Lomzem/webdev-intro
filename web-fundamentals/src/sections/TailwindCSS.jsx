import { CodeBlock, RunsBadge, CompareCards, Callout } from "../components";

export default function TailwindCSS() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="Build Time (your machine)" color="amber" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        Traditional CSS means writing styles in separate files and inventing
        class names like{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1.5 rounded text-rose-300">
          .card-wrapper-outer-container
        </code>
        .{" "}
        <strong className="text-rose-300">Tailwind CSS</strong> flips this: you
        apply small, single-purpose utility classes directly in your HTML/JSX.
        No separate CSS file, no naming things.
      </p>

      <CompareCards
        before={{
          label: "Traditional CSS",
          content: (
            <div className="space-y-3">
              <CodeBlock
                title="styles.css"
                code={
                  <span>
                    <span className="text-violet-300">{".card"}</span>
                    <span className="text-zinc-400">{" {\n"}</span>
                    <span className="text-sky-300">{"  background"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"white"}</span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-sky-300">{"  border-radius"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"12px"}</span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-sky-300">{"  padding"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"24px"}</span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-sky-300">{"  box-shadow"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">
                      {"0 4px 6px\n    rgba(0,0,0,0.1)"}
                    </span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-zinc-400">{"}\n\n"}</span>
                    <span className="text-violet-300">{".card-title"}</span>
                    <span className="text-zinc-400">{" {\n"}</span>
                    <span className="text-sky-300">{"  font-size"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"1.5rem"}</span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-sky-300">{"  font-weight"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"700"}</span>
                    <span className="text-zinc-400">{";\n"}</span>
                    <span className="text-sky-300">{"  color"}</span>
                    <span className="text-zinc-400">{": "}</span>
                    <span className="text-amber-300">{"#1a1a2e"}</span>
                    <span className="text-zinc-400">{";\n}"}</span>
                  </span>
                }
              />
              <CodeBlock
                title="Component.jsx"
                code={
                  <span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-amber-300">{" className"}</span>
                    <span className="text-zinc-400">{"="}</span>
                    <span className="text-emerald-400">"card"</span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-400">{"  <"}</span>
                    <span className="text-red-400">h2</span>
                    <span className="text-amber-300">{" className"}</span>
                    <span className="text-zinc-400">{"="}</span>
                    <span className="text-emerald-400">"card-title"</span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-300">
                      {"    Hello World\n"}
                    </span>
                    <span className="text-zinc-400">{"  </"}</span>
                    <span className="text-red-400">h2</span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-400">{"</"}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-zinc-400">{">"}</span>
                  </span>
                }
              />
            </div>
          ),
        }}
        after={{
          label: "Tailwind CSS",
          content: (
            <div className="space-y-3">
              <CodeBlock
                title="Component.jsx — that's it, no CSS file needed"
                accent="rose"
                code={
                  <span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-amber-300">{" className"}</span>
                    <span className="text-zinc-400">{"="}</span>
                    <span className="text-emerald-400">
                      {'"bg-white\n  rounded-xl\n  p-6\n  shadow-md"'}
                    </span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-400">{"  <"}</span>
                    <span className="text-red-400">h2</span>
                    <span className="text-amber-300">{" className"}</span>
                    <span className="text-zinc-400">{"="}</span>
                    <span className="text-emerald-400">
                      {'"text-2xl\n    font-bold\n    text-slate-900"'}
                    </span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-300">
                      {"    Hello World\n"}
                    </span>
                    <span className="text-zinc-400">{"  </"}</span>
                    <span className="text-red-400">h2</span>
                    <span className="text-zinc-400">{">\n"}</span>
                    <span className="text-zinc-400">{"</"}</span>
                    <span className="text-red-400">div</span>
                    <span className="text-zinc-400">{">"}</span>
                  </span>
                }
              />
              <p className="text-xs text-zinc-500 leading-relaxed">
                Each class does one thing:{" "}
                <code className="text-rose-300">bg-white</code> = white
                background,{" "}
                <code className="text-rose-300">rounded-xl</code> = rounded
                corners,{" "}
                <code className="text-rose-300">p-6</code> = padding,{" "}
                <code className="text-rose-300">shadow-md</code> = drop
                shadow.
              </p>
            </div>
          ),
        }}
        accentBefore="border-zinc-700 bg-zinc-900/50"
        accentAfter="border-rose-900/40 bg-rose-950/10"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "No Naming",
            desc: 'You never have to invent class names like ".sidebar-nav-link-active-state" again.',
            icon: "🏷️",
          },
          {
            title: "Tiny Output",
            desc: "Tailwind scans your code and only generates CSS for the classes you actually use. Unused styles are never shipped.",
            icon: "📦",
          },
          {
            title: "Co-located",
            desc: "Styles live right next to the markup they affect. No jumping between files.",
            icon: "📍",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="rounded-xl border border-rose-900/30 bg-rose-950/10 p-4"
          >
            <div className="text-2xl mb-2">{b.icon}</div>
            <h4 className="font-display font-bold text-rose-300 mb-1">
              {b.title}
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      <Callout color="#fb7185" icon="🔑">
        <strong className="text-rose-300">
          Tailwind doesn't run in the browser.
        </strong>{" "}
        During the build (when Vite bundles your app), Tailwind scans your
        JSX files for class names like{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
          bg-white
        </code>{" "}
        and generates a plain CSS file containing only those rules. The
        browser receives normal, standard CSS — it has no idea Tailwind
        was involved. This page you're reading right now uses Tailwind!
      </Callout>
    </div>
  );
}
