import {
  CodeBlock,
  RunsBadge,
  CompareCards,
  SequenceDiagram,
  Callout,
} from "../components";

export default function Frameworks() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="User's Browser" color="violet" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        Frontend frameworks like <strong className="text-violet-300">React</strong>,
        Vue, and Svelte solve one big problem: updating the UI when data changes.
        Without a framework, you have to manually find DOM elements and change
        them yourself. With React, you describe <em>what the UI should look like</em>{" "}
        and React figures out how to update it efficiently.
      </p>

      {/* Before/After comparison */}
      <CompareCards
        before={{
          label: "Vanilla JavaScript (manual DOM)",
          content: (
            <CodeBlock
              title="app.js"
              code={
                <span>
                  <span className="text-zinc-500">
                    {"// Add a new todo item\n"}
                  </span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-sky-300">li</span>
                  <span className="text-zinc-400">{" = "}</span>
                  <span className="text-amber-300">document</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">createElement</span>
                  <span className="text-zinc-400">{"('li');\n"}</span>
                  <span className="text-sky-300">li</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">textContent</span>
                  <span className="text-zinc-400">{" = text;\n"}</span>
                  <span className="text-sky-300">li</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">className</span>
                  <span className="text-zinc-400">{" = 'todo-item';\n"}</span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-sky-300">btn</span>
                  <span className="text-zinc-400">{" = "}</span>
                  <span className="text-amber-300">document</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">createElement</span>
                  <span className="text-zinc-400">{"('button');\n"}</span>
                  <span className="text-sky-300">btn</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">textContent</span>
                  <span className="text-zinc-400">{" = 'Delete';\n"}</span>
                  <span className="text-sky-300">btn</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">onclick</span>
                  <span className="text-zinc-400">{" = () => {\n"}</span>
                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-sky-300">li</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">remove</span>
                  <span className="text-zinc-400">{"();\n"}</span>
                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-sky-300">updateCount</span>
                  <span className="text-zinc-400">{"();\n"};</span>
                  <span className="text-zinc-400">{"\n"}</span>
                  <span className="text-sky-300">li</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">appendChild</span>
                  <span className="text-zinc-400">{"(btn);\n"}</span>
                  <span className="text-amber-300">document</span>
                  <span className="text-zinc-400">.</span>
                  <span className="text-sky-300">getElementById</span>
                  <span className="text-zinc-400">{"('list')\n"}</span>
                  <span className="text-zinc-400">{"  ."}</span>
                  <span className="text-sky-300">appendChild</span>
                  <span className="text-zinc-400">{"(li);\n"}</span>
                  <span className="text-sky-300">updateCount</span>
                  <span className="text-zinc-400">{"();"}</span>
                </span>
              }
            />
          ),
        }}
        after={{
          label: "React (declarative)",
          content: (
            <CodeBlock
              title="App.jsx"
              accent="violet"
              code={
                <span>
                  <span className="text-violet-300">{"function "}</span>
                  <span className="text-amber-300">{"TodoList"}</span>
                  <span className="text-zinc-400">{"() {\n"}</span>
                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-zinc-400">{"["}</span>
                  <span className="text-sky-300">todos</span>
                  <span className="text-zinc-400">{", "}</span>
                  <span className="text-sky-300">setTodos</span>
                  <span className="text-zinc-400">{"] = "}</span>
                  <span className="text-amber-300">useState</span>
                  <span className="text-zinc-400">{"([]);\n\n"}</span>

                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-sky-300">{"remove"}</span>
                  <span className="text-zinc-400">{" = ("}</span>
                  <span className="text-sky-300">{"id"}</span>
                  <span className="text-zinc-400">{") =>\n"}</span>
                  <span className="text-zinc-400">{"    "}</span>
                  <span className="text-sky-300">{"setTodos"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-sky-300">{"todos"}</span>
                  <span className="text-zinc-400">{"."}</span>
                  <span className="text-sky-300">{"filter"}</span>
                  <span className="text-zinc-400">{"(t => t.id !== id));\n\n"}</span>

                  <span className="text-zinc-400">{"  "}</span>
                  <span className="text-violet-300">{"return "}</span>
                  <span className="text-zinc-400">{"(\n"}</span>
                  <span className="text-zinc-400">{"    <"}</span>
                  <span className="text-red-400">ul</span>
                  <span className="text-zinc-400">{">\n"}</span>
                  <span className="text-zinc-400">{"      {"}</span>
                  <span className="text-sky-300">todos</span>
                  <span className="text-zinc-400">{"."}</span>
                  <span className="text-sky-300">map</span>
                  <span className="text-zinc-400">{"(t =>\n"}</span>
                  <span className="text-zinc-400">{"        <"}</span>
                  <span className="text-red-400">li</span>
                  <span className="text-zinc-400">{">"}</span>
                  <span className="text-zinc-400">{"{t.text}\n"}</span>
                  <span className="text-zinc-400">{"          <"}</span>
                  <span className="text-red-400">button</span>
                  <span className="text-amber-300">{" onClick"}</span>
                  <span className="text-zinc-400">{"={() => "}</span>
                  <span className="text-sky-300">{"remove"}</span>
                  <span className="text-zinc-400">{"(t.id)}>\n"}</span>
                  <span className="text-zinc-400">
                    {"            Delete\n"}
                  </span>
                  <span className="text-zinc-400">{"          </"}</span>
                  <span className="text-red-400">button</span>
                  <span className="text-zinc-400">{">\n"}</span>
                  <span className="text-zinc-400">{"        </"}</span>
                  <span className="text-red-400">li</span>
                  <span className="text-zinc-400">{">)}\n"}</span>
                  <span className="text-zinc-400">{"    </"}</span>
                  <span className="text-red-400">ul</span>
                  <span className="text-zinc-400">{">\n"}</span>
                  <span className="text-zinc-400">{"  );\n}"}</span>
                </span>
              }
            />
          ),
        }}
        accentBefore="border-red-900/40 bg-red-950/10"
        accentAfter="border-violet-900/40 bg-violet-950/10"
      />

      <p className="text-zinc-400 leading-relaxed">
        With React, you just say <em>"here's my list of todos, render them."</em>{" "}
        When the list changes (add/delete), React automatically figures out the
        minimal DOM updates needed. You never manually create or remove elements.
      </p>

      <Callout color="#a78bfa" icon="📄">
        <strong className="text-violet-300">.js vs .jsx — what's the difference?</strong>{" "}
        Notice the React file above is called{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-violet-200">App.jsx</code>{" "}
        not{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-violet-200">App.js</code>.
        The{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-violet-200">.jsx</code>{" "}
        extension means "JavaScript + JSX" — JSX is that HTML-like syntax you see
        inside the React component (the{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">{"<ul>"}</code>,{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">{"<li>"}</code>,{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded">{"<button>"}</code>{" "}
        tags mixed with JavaScript). Browsers don't understand JSX — the bundler
        (Vite) transforms it into regular JavaScript function calls before shipping
        it. Use{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-violet-200">.jsx</code>{" "}
        for files that contain JSX markup, and plain{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-violet-200">.js</code>{" "}
        for files that don't (utilities, API helpers, constants, etc.).
      </Callout>

      {/* Sequence Diagram: Initial Page Load */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-violet-300 text-xl">
          Sequence: Loading a React App
        </h3>
        <div className="rounded-xl border border-violet-900/30 bg-violet-950/10 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "User",
                to: "Browser",
                label:
                  'Types "yourapp.com" into the address bar',
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "Server",
                label:
                  "Sends HTTP GET request to the server (or CDN) asking for the page",
                color: "#38bdf8",
              },
              {
                from: "Server",
                to: "Browser",
                label:
                  "Responds with index.html (a tiny HTML file) + links to JS/CSS bundles",
                color: "#34d399",
                direction: "left",
              },
              {
                from: "Browser",
                to: "Server",
                label:
                  "Downloads the JS bundle (app.ab3f2.js) — this contains ALL your React code",
                color: "#38bdf8",
              },
              {
                from: "Server",
                to: "Browser",
                label: "Sends the JavaScript bundle file",
                color: "#34d399",
                direction: "left",
              },
              {
                from: "Browser",
                to: "Browser",
                label:
                  "Executes React — React reads your components and builds the entire UI by creating DOM elements",
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "User",
                label:
                  "The page appears! Everything the user sees was built by React running in their browser",
                color: "#fbbf24",
                direction: "left",
              },
            ]}
          />
        </div>
      </div>

      {/* Sequence Diagram: User Interaction */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-violet-300 text-xl">
          Sequence: User Clicks a Button
        </h3>
        <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "User",
                to: "Browser",
                label: 'Clicks the "Add Todo" button',
                color: "#fbbf24",
              },
              {
                from: "Browser",
                to: "Browser",
                label:
                  "React's event handler fires (still in the browser!) — updates state via setState",
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "Browser",
                label:
                  "React re-renders the component, diffs the old vs new DOM, and applies minimal updates",
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "User",
                label:
                  "User sees the new todo appear instantly — NO server request was needed!",
                color: "#34d399",
                direction: "left",
              },
            ]}
          />
        </div>
        <Callout color="#a78bfa" icon="🔑">
          <strong className="text-violet-300">
            No server involved for UI updates!
          </strong>{" "}
          React runs entirely in the browser. When a user clicks a button, types
          in an input, or toggles a dropdown, React handles it{" "}
          <em>right there in the browser</em> — no network request, no server,
          no waiting. This is what makes React apps feel fast and responsive.
        </Callout>
      </div>
    </div>
  );
}
