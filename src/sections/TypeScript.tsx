import {
  CodeBlock,
  RunsBadge,
  CompareCards,
  Callout,
  DiagramBox,
} from "../components";

export default function TypeScript() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="Build Time (your machine)" color="amber" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        JavaScript is <em>dynamically typed</em> — a variable can be a number
        one moment and a string the next. This flexibility is great for small
        scripts, but in a large app it leads to bugs that are hard to track
        down. <strong className="text-pink-300">TypeScript</strong> is
        JavaScript with types added on top. It catches mistakes <em>before</em>{" "}
        your code runs.
      </p>

      {/* Before/After */}
      <CompareCards
        before={{
          label: "JavaScript — runtime surprise",
          content: (
            <CodeBlock
              title="utils.js"
              code={
                <span>
                  <span className="text-violet-300">{"function "}</span>
                  <span className="text-amber-300">{"add"}</span>
                  <span className="text-zinc-400">{"(a, b) {\n"}</span>
                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-violet-300">{"return "}</span>
                  <span className="text-zinc-400">{"a + b;\n"}</span>
                  <span className="text-zinc-400">{"}\n\n"}</span>
                  <span className="text-amber-300">{"add"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-emerald-400">{"5"}</span>
                  <span className="text-zinc-400">{", "}</span>
                  <span className="text-emerald-400">{'"3"'}</span>
                  <span className="text-zinc-400">{");\n"}</span>
                  <span className="text-zinc-400">
                    {'// Returns "53" not 8!'}
                  </span>
                  <span className="text-zinc-400">{"\n"}</span>
                  <span className="text-zinc-400">
                    {"// JS silently concatenated\n"}
                  </span>
                  <span className="text-zinc-400">
                    {"// strings instead of adding.\n"}
                  </span>
                  <span className="text-zinc-400">
                    {"// No error. Just wrong."}
                  </span>
                </span>
              }
            />
          ),
        }}
        after={{
          label: "TypeScript — caught at build time",
          content: (
            <CodeBlock
              title="utils.ts"
              accent="rose"
              code={
                <span>
                  <span className="text-violet-300">{"function "}</span>
                  <span className="text-amber-300">{"add"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-sky-300">{"a"}</span>
                  <span className="text-zinc-400">{": "}</span>
                  <span className="text-pink-300">{"number"}</span>
                  <span className="text-zinc-400">{", "}</span>
                  <span className="text-sky-300">{"b"}</span>
                  <span className="text-zinc-400">{": "}</span>
                  <span className="text-pink-300">{"number"}</span>
                  <span className="text-zinc-400">{") {\n"}</span>
                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-violet-300">{"return "}</span>
                  <span className="text-zinc-400">{"a + b;\n"}</span>
                  <span className="text-zinc-400">{"}\n\n"}</span>
                  <span className="text-amber-300">{"add"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-emerald-400">{"5"}</span>
                  <span className="text-zinc-400">{", "}</span>
                  <span className="text-red-400">{'"3"'}</span>
                  <span className="text-zinc-400">{");\n"}</span>
                  <span className="text-red-400">
                    {"// ❌ Error: Argument of\n"}
                  </span>
                  <span className="text-red-400">
                    {"// type 'string' is not\n"}
                  </span>
                  <span className="text-red-400">
                    {"// assignable to 'number'.\n"}
                  </span>
                  <span className="text-zinc-400">
                    {"// Caught BEFORE running!"}
                  </span>
                </span>
              }
            />
          ),
        }}
        accentBefore="border-zinc-700 bg-zinc-900/50"
        accentAfter="border-pink-900/40 bg-pink-950/10"
      />

      <p className="text-zinc-400 leading-relaxed">
        TypeScript is a <strong className="text-pink-200">superset</strong> of
        JavaScript — every valid JS file is already valid TS. You just{" "}
        <em>add</em> type annotations where you want them. The TypeScript
        compiler strips the types away and outputs plain JavaScript that the
        browser can run.
      </p>

      {/* How it works */}
      <DiagramBox>
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            TypeScript compilation
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="flex flex-col gap-2">
            {[
              { name: "App.tsx", desc: "React + types" },
              { name: "utils.ts", desc: "Logic + types" },
              { name: "api.ts", desc: "API calls + types" },
            ].map((f) => (
              <div
                key={f.name}
                className="px-3 py-1.5 rounded border border-pink-800/40 bg-pink-950/20 text-xs font-mono flex items-center gap-3"
              >
                <span className="text-pink-300">{f.name}</span>
                <span className="text-zinc-500">{f.desc}</span>
              </div>
            ))}
          </div>

          <div className="text-pink-400 text-3xl md:rotate-0 rotate-90">⟹</div>

          <div className="px-6 py-4 rounded-2xl bg-pink-950/30 border-2 border-pink-700/40 text-center">
            <div className="text-3xl mb-1">🔍</div>
            <div className="font-display font-bold text-pink-300">
              TypeScript
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Type checks → strips types
            </div>
          </div>

          <div className="text-pink-400 text-3xl md:rotate-0 rotate-90">⟹</div>

          <div className="flex flex-col gap-2">
            {[
              { name: "App.js", desc: "Plain JS" },
              { name: "utils.js", desc: "Plain JS" },
              { name: "api.js", desc: "Plain JS" },
            ].map((f) => (
              <div
                key={f.name}
                className="px-3 py-1.5 rounded border border-zinc-700 bg-zinc-800/60 text-xs font-mono flex items-center gap-3"
              >
                <span className="text-zinc-300">{f.name}</span>
                <span className="text-zinc-500">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </DiagramBox>

      {/* A more realistic example */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-pink-300 text-xl">
          A Real-World Example
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Types really shine when working with data from an API. Without types,
          you're guessing what fields exist on an object. With types, your
          editor tells you <em>exactly</em> what's available.
        </p>

        <CodeBlock
          title="types.ts — define the shape of your data"
          accent="rose"
          code={
            <span>
              <span className="text-zinc-400">
                {"// This describes what a Post looks like.\n"}
              </span>
              <span className="text-zinc-400">
                {"// It doesn't create anything — it's just a blueprint.\n\n"}
              </span>
              <span className="text-violet-300">{"interface "}</span>
              <span className="text-pink-300">{"Post"}</span>
              <span className="text-zinc-400">{" {\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"id"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"number"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"title"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"string"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"body"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"string"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"author"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"string"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"createdAt"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"Date"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-zinc-400">{"}"}</span>
            </span>
          }
        />

        <CodeBlock
          title="PostCard.tsx — your editor now knows every field"
          accent="rose"
          code={
            <span>
              <span className="text-violet-300">{"function "}</span>
              <span className="text-amber-300">{"PostCard"}</span>
              <span className="text-zinc-400">{"({ "}</span>
              <span className="text-sky-300">{"post"}</span>
              <span className="text-zinc-400">{" }: { "}</span>
              <span className="text-sky-300">{"post"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"Post"}</span>
              <span className="text-zinc-400">{" }) {\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"return "}</span>
              <span className="text-zinc-400">{"(\n"}</span>
              <span className="text-zinc-400">{"    <"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"      <"}</span>
              <span className="text-red-400">{"h2"}</span>
              <span className="text-zinc-400">{">{post."}</span>
              <span className="text-sky-300">{"title"}</span>
              <span className="text-zinc-400">{"}</"}</span>
              <span className="text-red-400">{"h2"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"      <"}</span>
              <span className="text-red-400">{"p"}</span>
              <span className="text-zinc-400">{">{post."}</span>
              <span className="text-sky-300">{"body"}</span>
              <span className="text-zinc-400">{"}</"}</span>
              <span className="text-red-400">{"p"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"      <"}</span>
              <span className="text-red-400">{"span"}</span>
              <span className="text-zinc-400">{">By {post."}</span>
              <span className="text-sky-300">{"author"}</span>
              <span className="text-zinc-400">{"}</"}</span>
              <span className="text-red-400">{"span"}</span>
              <span className="text-zinc-400">{">\n\n"}</span>
              <span className="text-zinc-400">{"      {post."}</span>
              <span className="text-red-400">{"naem"}</span>
              <span className="text-zinc-400">{"}\n"}</span>
              <span className="text-red-400">
                {"      // ❌ Error: Property 'naem'\n"}
              </span>
              <span className="text-red-400">
                {"      // does not exist on type 'Post'.\n"}
              </span>
              <span className="text-red-400">
                {"      // Did you mean 'name'?\n"}
              </span>
              <span className="text-zinc-400">{"    </"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-zinc-400">{">\n"}</span>
              <span className="text-zinc-400">{"  );\n}"}</span>
            </span>
          }
        />
      </div>

      {/* File extensions */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-pink-300 text-xl">
          File Extensions: The Complete Picture
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Now you can understand all four extensions and when to use each one.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              ext: ".js",
              name: "JavaScript",
              desc: "Plain JavaScript. No JSX, no types. Use for utility functions, config files, constants.",
              example: "utils.js, config.js, api.js",
              color: "#fbbf24",
            },
            {
              ext: ".jsx",
              name: "JavaScript + JSX",
              desc: "JavaScript that contains JSX (HTML-like syntax). Use for React components written without TypeScript.",
              example: "App.jsx, Header.jsx, Button.jsx",
              color: "#a78bfa",
            },
            {
              ext: ".ts",
              name: "TypeScript",
              desc: "JavaScript with type annotations. No JSX. Use for utility functions, API helpers, type definitions.",
              example: "utils.ts, types.ts, api.ts",
              color: "#fb7185",
            },
            {
              ext: ".tsx",
              name: "TypeScript + JSX",
              desc: "The full package — typed JavaScript with JSX. Use for React components with TypeScript. This is what most modern React projects use.",
              example: "App.tsx, Header.tsx, Button.tsx",
              color: "#f472b6",
            },
          ].map((f) => (
            <div
              key={f.ext}
              className="rounded-xl border p-5 space-y-2"
              style={{
                borderColor: f.color + "35",
                backgroundColor: f.color + "08",
              }}
            >
              <div className="flex items-center gap-3">
                <code
                  className="font-mono text-xl font-bold"
                  style={{ color: f.color }}
                >
                  {f.ext}
                </code>
                <span className="text-sm text-zinc-400">{f.name}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              <div className="text-xs font-mono text-zinc-500">
                e.g. {f.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Callout color="#fb7185" icon="🔑">
          <strong className="text-pink-300">
            TypeScript doesn't run in the browser.
          </strong>{" "}
          Just like Tailwind, TypeScript is a <strong>build-time tool</strong>.
          Vite (via its bundler) strips all the type annotations out and
          produces plain JavaScript. The browser receives normal{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            .js
          </code>{" "}
          — it has no idea you wrote TypeScript.
        </Callout>

        <Callout color="#fb7185" icon="💡">
          <strong className="text-pink-300">
            This project uses .jsx — and that's fine.
          </strong>{" "}
          The app you're reading right now is written in plain JavaScript (.jsx
          files). You don't <em>have</em> to use TypeScript. But most production
          React apps do, because catching type errors at build time beats
          debugging them in production. When you're ready, switching is as
          simple as renaming{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            .jsx
          </code>{" "}
          →{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            .tsx
          </code>{" "}
          and adding types gradually.
        </Callout>
      </div>
    </div>
  );
}
