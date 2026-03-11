import { CodeBlock, Callout } from "../components";

export default function OldDays() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        Before modern tooling existed, building a website meant creating raw
        files by hand and opening them directly in a browser. No build step, no
        dev server, no package manager. Just you, a text editor, and a folder of
        files.
      </p>

      <CodeBlock
        title="index.html — the entire app in one file"
        accent="amber"
        code={
          <span className="text-zinc-300">
            <span className="text-zinc-500">
              {"<!-- Every library loaded via a <script> tag -->\n"}
              {"<!-- ORDER MATTERS — load jQuery before your code! -->\n"}
            </span>
            <span className="text-red-400">{"<script"}</span>
            <span className="text-amber-300"> src</span>
            <span className="text-zinc-500">=</span>
            <span className="text-emerald-400">"libs/jquery-3.2.1.min.js"</span>
            <span className="text-red-400">{">"}</span>
            <span className="text-red-400">{"</script>\n"}</span>
            <span className="text-red-400">{"<script"}</span>
            <span className="text-amber-300"> src</span>
            <span className="text-zinc-500">=</span>
            <span className="text-emerald-400">"libs/bootstrap.min.js"</span>
            <span className="text-red-400">{">"}</span>
            <span className="text-red-400">{"</script>\n"}</span>
            <span className="text-red-400">{"<script"}</span>
            <span className="text-amber-300"> src</span>
            <span className="text-zinc-500">=</span>
            <span className="text-emerald-400">"libs/lodash.min.js"</span>
            <span className="text-red-400">{">"}</span>
            <span className="text-red-400">{"</script>\n"}</span>
            <span className="text-red-400">{"<script"}</span>
            <span className="text-amber-300"> src</span>
            <span className="text-zinc-500">=</span>
            <span className="text-emerald-400">"js/utils.js"</span>
            <span className="text-red-400">{">"}</span>
            <span className="text-red-400">{"</script>\n"}</span>
            <span className="text-red-400">{"<script"}</span>
            <span className="text-amber-300"> src</span>
            <span className="text-zinc-500">=</span>
            <span className="text-emerald-400">"js/app.js"</span>
            <span className="text-red-400">{">"}</span>
            <span className="text-red-400">{"</script>\n"}</span>
            <span className="text-zinc-500">
              {"\n<!-- Move one script above another? Everything breaks. -->"}
            </span>
          </span>
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "No Modules",
            desc: "Every .js file shared the same global scope. Your variable names could collide with a library's. Naming things was a minefield.",
            icon: "🌍",
          },
          {
            title: "Manual Dependencies",
            desc: "Want to use a library? Download the .js file, drop it in a folder, add a <script> tag. Want to update it? Do it all again.",
            icon: "📦",
          },
          {
            title: "No Hot Reload",
            desc: "Changed one line of CSS? Hit Ctrl+R and wait for the entire page to reload. Every. Single. Time.",
            icon: "🔄",
          },
          {
            title: "Global Scope Pollution",
            desc: 'Every variable was window.something. Two files both define "init()"? Last one wins. Good luck debugging that.',
            icon: "💥",
          },
          {
            title: "No Optimization",
            desc: "The browser downloaded every single file separately — 15 script tags = 15 HTTP requests. On a slow connection, this was brutal.",
            icon: "🐌",
          },
          {
            title: "Copy-Paste Reuse",
            desc: 'Want the same header on 20 pages? Copy-paste the HTML into each file. Need to change it? Update all 20. Miss one? "Whoops."',
            icon: "📋",
          },
        ].map((pain, i) => (
          <div
            key={i}
            className="rounded-xl border border-amber-900/30 bg-amber-950/10 p-4"
          >
            <div className="text-2xl mb-2">{pain.icon}</div>
            <h4 className="font-display font-bold text-amber-300 mb-1">
              {pain.title}
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{pain.desc}</p>
          </div>
        ))}
      </div>

      <Callout color="#fbbf24" icon="📄">
        <strong className="text-amber-300">File extensions you'll see:</strong>{" "}
        In the old days, it was simple —{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-amber-200">
          .html
        </code>{" "}
        for markup,{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-amber-200">
          .css
        </code>{" "}
        for styles, and{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-amber-200">
          .js
        </code>{" "}
        for JavaScript. The{" "}
        <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-amber-200">
          .js
        </code>{" "}
        extension means "plain JavaScript" and it's still the most common one
        you'll see. As we go through this guide, you'll learn about new
        extensions that build on top of it.
      </Callout>

      <Callout color="#fbbf24" icon="🧠">
        <strong className="text-amber-300">The takeaway:</strong> Raw
        HTML/CSS/JS works, and it's how the web started. But as apps grew
        bigger, developers needed better tools to manage complexity. That's what
        the rest of this guide is about — the tools that make modern web
        development actually bearable.
      </Callout>
    </div>
  );
}
