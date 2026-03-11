import {
  CodeBlock,
  RunsBadge,
  SequenceDiagram,
  Callout,
} from "../components";

export default function DataFetching() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="User's Browser" color="violet" />
        <span className="text-zinc-600 text-sm">+</span>
        <RunsBadge location="Your Backend Server" color="emerald" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        React handles the UI, but where does the <em>data</em> come from? Your
        app needs to talk to a backend server — to fetch a list of posts, load
        a user profile, or submit a form. This is done with HTTP requests from
        the browser to your API.
      </p>

      {/* fetch example */}
      <CodeBlock
        title="PostList.jsx — fetching data in React"
        accent="orange"
        code={
          <span>
            <span className="text-violet-300">{"import "}</span>
            <span className="text-zinc-400">{"{ "}</span>
            <span className="text-sky-300">{"useState"}</span>
            <span className="text-zinc-400">{", "}</span>
            <span className="text-sky-300">{"useEffect"}</span>
            <span className="text-zinc-400">{" } "}</span>
            <span className="text-violet-300">{"from "}</span>
            <span className="text-emerald-400">{"'react'"}</span>
            <span className="text-zinc-400">{";\n\n"}</span>
            <span className="text-violet-300">{"function "}</span>
            <span className="text-amber-300">{"PostList"}</span>
            <span className="text-zinc-400">{"() {\n"}</span>
            <span className="text-zinc-400">{"  "}</span>
            <span className="text-violet-300">{"const "}</span>
            <span className="text-zinc-400">{"["}</span>
            <span className="text-sky-300">{"posts"}</span>
            <span className="text-zinc-400">{", "}</span>
            <span className="text-sky-300">{"setPosts"}</span>
            <span className="text-zinc-400">{"] = "}</span>
            <span className="text-amber-300">{"useState"}</span>
            <span className="text-zinc-400">{"([]);\n\n"}</span>
            <span className="text-zinc-400">{"  "}</span>
            <span className="text-amber-300">{"useEffect"}</span>
            <span className="text-zinc-400">{"(() => {\n"}</span>
            <span className="text-zinc-500">
              {"    // This runs IN THE BROWSER\n"}
            </span>
            <span className="text-zinc-400">{"    "}</span>
            <span className="text-amber-300">{"fetch"}</span>
            <span className="text-zinc-400">{"("}</span>
            <span className="text-emerald-400">
              {"'https://api.yourapp.com/posts'"}
            </span>
            <span className="text-zinc-400">{")\n"}</span>
            <span className="text-zinc-400">{"      .then(r => r.json())\n"}</span>
            <span className="text-zinc-400">{"      .then("}</span>
            <span className="text-sky-300">{"setPosts"}</span>
            <span className="text-zinc-400">{");\n"}</span>
            <span className="text-zinc-400">{"  }, []);\n"}</span>
            <span className="text-zinc-400">{"}"}</span>
          </span>
        }
      />

      {/* Sequence diagram */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-orange-300 text-xl">
          Sequence: Fetching Data from Your API
        </h3>
        <div className="rounded-xl border border-orange-900/30 bg-orange-950/10 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "User",
                to: "Browser",
                label: "Opens a page that displays a list of blog posts",
                color: "#fb923c",
              },
              {
                from: "Browser (React)",
                to: "Browser (React)",
                label:
                  "React renders the component — shows a loading spinner while data is being fetched",
                color: "#a78bfa",
              },
              {
                from: "Browser (React)",
                to: "Your API Server",
                label:
                  "fetch('https://api.yourapp.com/posts') — an HTTP GET request over the internet",
                color: "#38bdf8",
              },
              {
                from: "Your API Server",
                to: "Database",
                label:
                  "Server receives the request, queries the database: SELECT * FROM posts",
                color: "#34d399",
              },
              {
                from: "Database",
                to: "Your API Server",
                label: "Database returns the rows of post data",
                color: "#34d399",
                direction: "left",
              },
              {
                from: "Your API Server",
                to: "Browser (React)",
                label:
                  'Server formats data as JSON and sends it back: [{"id": 1, "title": "Hello"}, ...]',
                color: "#38bdf8",
                direction: "left",
              },
              {
                from: "Browser (React)",
                to: "Browser (React)",
                label:
                  "React receives the JSON, calls setPosts(data), re-renders with the actual posts",
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "User",
                label: "User sees the list of blog posts appear on screen",
                color: "#fbbf24",
                direction: "left",
              },
            ]}
          />
        </div>
      </div>

      {/* TanStack Query */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-orange-300 text-xl">
          TanStack Query: Data Fetching on Steroids
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Raw <code className="font-mono text-xs bg-zinc-800 px-1 rounded">fetch()</code>{" "}
          works, but you quickly need to handle: loading states, error states,
          caching (don't re-fetch data you already have), retries on failure,
          background refetching, pagination...{" "}
          <strong className="text-orange-300">TanStack Query</strong> handles all
          of this for you.
        </p>

        <CodeBlock
          title="PostList.jsx — with TanStack Query"
          accent="orange"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"useQuery"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">
                {"'@tanstack/react-query'"}
              </span>
              <span className="text-zinc-400">{";\n\n"}</span>
              <span className="text-violet-300">{"function "}</span>
              <span className="text-amber-300">{"PostList"}</span>
              <span className="text-zinc-400">{"() {\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"const "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">data</span>
              <span className="text-zinc-400">{", "}</span>
              <span className="text-sky-300">isLoading</span>
              <span className="text-zinc-400">{", "}</span>
              <span className="text-sky-300">error</span>
              <span className="text-zinc-400">{" } = "}</span>
              <span className="text-amber-300">{"useQuery"}</span>
              <span className="text-zinc-400">{"({\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"queryKey"}</span>
              <span className="text-zinc-400">{": ["}</span>
              <span className="text-emerald-400">{"'posts'"}</span>
              <span className="text-zinc-400">{"],\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"queryFn"}</span>
              <span className="text-zinc-400">{": () =>\n"}</span>
              <span className="text-zinc-400">{"      "}</span>
              <span className="text-amber-300">{"fetch"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-emerald-400">{"'/api/posts'"}</span>
              <span className="text-zinc-400">{").\n"}</span>
              <span className="text-zinc-400">
                {"        then(r => r.json()),\n"}
              </span>
              <span className="text-zinc-400">{"  });\n\n"}</span>
              <span className="text-zinc-500">
                {"  // isLoading, error, data — all managed for you!\n"}
              </span>
              <span className="text-zinc-500">
                {"  // Caching, retries, background refetch — all automatic!\n"}
              </span>
              <span className="text-zinc-400">{"}"}</span>
            </span>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              label: "Caching",
              desc: "Fetched data is cached. Navigate away and back — instant, no re-fetch.",
            },
            {
              label: "Loading States",
              desc: "isLoading is true while fetching. Show a spinner, then the data.",
            },
            {
              label: "Error Handling",
              desc: "If the request fails, error has the details. Automatic retries too.",
            },
            {
              label: "Background Refetch",
              desc: "Stale data is shown instantly, then silently refreshed in the background.",
            },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-orange-900/30 bg-orange-950/10 p-3"
            >
              <div className="font-mono text-xs font-bold text-orange-300 mb-1">
                {f.label}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Callout color="#fb923c" icon="🔑">
        <strong className="text-orange-300">
          All of this runs in the browser.
        </strong>{" "}
        TanStack Query is a client-side library — it runs in the user's
        browser alongside React. It makes HTTP requests to your backend API,
        manages the responses, and tells React when to re-render. Your
        backend server is a completely separate program.
      </Callout>
    </div>
  );
}
