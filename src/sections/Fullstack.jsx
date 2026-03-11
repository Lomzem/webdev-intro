import { Callout, DiagramBox } from "../components";

export default function Fullstack() {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-zinc-300">
        Frameworks like <strong className="text-teal-300">Next.js</strong> and{" "}
        <strong className="text-teal-300">Remix</strong> blur the line between
        client and server. They let you write React code that runs on the
        server <em>before</em> it reaches the browser.
      </p>

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
              Your Vite + React app
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Server sends an empty HTML shell. Browser downloads JS, React
              builds the entire page. All rendering happens in the browser.
            </p>
            <div className="text-xs font-mono text-zinc-600 pt-2 border-t border-violet-900/30">
              Tools: Vite, Create React App
            </div>
          </div>

          {/* SSR */}
          <div className="flex-1 rounded-xl border-2 border-teal-700/40 bg-teal-950/20 p-4 space-y-2 opacity-70">
            <div className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
              Server-Side Rendering (SSR)
            </div>
            <div className="text-lg font-display font-bold text-teal-300">
              Next.js / Remix
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Server runs React and sends <em>fully rendered HTML</em>. Browser
              receives a complete page instantly, then React "hydrates" to make
              it interactive.
            </p>
            <div className="text-xs font-mono text-zinc-600 pt-2 border-t border-teal-900/30">
              Pro: faster initial paint, better SEO
            </div>
          </div>

          {/* SSG */}
          <div className="flex-1 rounded-xl border-2 border-zinc-700/40 bg-zinc-900/50 p-4 space-y-2 opacity-50">
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
              Static Site Gen (SSG)
            </div>
            <div className="text-lg font-display font-bold text-zinc-300">
              Astro / 11ty
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Pages are built to HTML at <em>build time</em>, not at request
              time. No server needed — just static files. Great for blogs and
              docs.
            </p>
            <div className="text-xs font-mono text-zinc-600 pt-2 border-t border-zinc-800">
              Pro: fastest possible, cheapest hosting
            </div>
          </div>
        </div>
      </DiagramBox>

      <Callout color="#2dd4bf" icon="👉">
        <strong className="text-teal-300">
          For your app, you don't need SSR or SSG yet.
        </strong>{" "}
        Your Vite + React app uses <strong>client-side rendering (CSR)</strong>:
        React runs purely in the browser and talks to a separate backend API.
        This is the simplest mental model, and it's the right starting point.
        Once you understand how the client and server interact, then SSR/SSG
        will make much more sense when you encounter them later.
      </Callout>

      <div className="rounded-xl border border-teal-900/30 bg-teal-950/10 p-5">
        <h4 className="font-display font-bold text-teal-300 mb-2">
          Why do SSR frameworks exist?
        </h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          {[
            "SEO — search engines can't easily index JavaScript-rendered content (though this is improving)",
            "First paint speed — users see content before JS finishes downloading",
            "Social sharing — link previews need server-rendered HTML to work",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-teal-500 flex-shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500 mt-3 italic">
          These are real benefits, but they add complexity. For a
          dashboard or internal tool that requires login anyway, CSR is
          perfectly fine.
        </p>
      </div>
    </div>
  );
}
