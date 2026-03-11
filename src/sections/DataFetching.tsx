import {
  CodeBlock,
  RunsBadge,
  SequenceDiagram,
  CompareCards,
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
        app needs to talk to a backend server — to fetch a list of posts, load a
        user profile, or submit a form. This is done with HTTP requests from the
        browser to your API.
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
            <span className="text-zinc-400">
              {"      .then(r => r.json())\n"}
            </span>
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
          The{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            fetch()
          </code>{" "}
          +{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            useEffect
          </code>{" "}
          approach above works for simple cases, but real apps need loading
          spinners, error messages, caching, retries, and more. Watch how
          quickly the "manual" version balloons compared to{" "}
          <strong className="text-orange-300">TanStack Query</strong>.
        </p>

        <CompareCards
          before={{
            label: "Manual: useEffect + fetch (~35 lines)",
            content: (
              <CodeBlock
                title="PostList.jsx — doing it all yourself"
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
                    <span className="text-zinc-400">{"([]);\n"}</span>

                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"const "}</span>
                    <span className="text-zinc-400">{"["}</span>
                    <span className="text-sky-300">{"isLoading"}</span>
                    <span className="text-zinc-400">{", "}</span>
                    <span className="text-sky-300">{"setIsLoading"}</span>
                    <span className="text-zinc-400">{"] = "}</span>
                    <span className="text-amber-300">{"useState"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-violet-300">{"true"}</span>
                    <span className="text-zinc-400">{");\n"}</span>

                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"const "}</span>
                    <span className="text-zinc-400">{"["}</span>
                    <span className="text-sky-300">{"error"}</span>
                    <span className="text-zinc-400">{", "}</span>
                    <span className="text-sky-300">{"setError"}</span>
                    <span className="text-zinc-400">{"] = "}</span>
                    <span className="text-amber-300">{"useState"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-violet-300">{"null"}</span>
                    <span className="text-zinc-400">{");\n\n"}</span>

                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-amber-300">{"useEffect"}</span>
                    <span className="text-zinc-400">{"(() => {\n"}</span>
                    <span className="text-zinc-400">{"    "}</span>
                    <span className="text-amber-300">{"fetch"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-emerald-400">{"'/api/posts'"}</span>
                    <span className="text-zinc-400">{")\n"}</span>
                    <span className="text-zinc-400">
                      {"      .then(r => {\n"}
                    </span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-violet-300">{"if "}</span>
                    <span className="text-zinc-400">{"(!r.ok)\n"}</span>
                    <span className="text-zinc-400">{"          "}</span>
                    <span className="text-violet-300">{"throw new "}</span>
                    <span className="text-amber-300">{"Error"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-emerald-400">{"`${r.status}`"}</span>
                    <span className="text-zinc-400">{");\n"}</span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-violet-300">{"return "}</span>
                    <span className="text-zinc-400">{"r.json();\n"}</span>
                    <span className="text-zinc-400">{"      })\n"}</span>
                    <span className="text-zinc-400">
                      {"      .then(data => {\n"}
                    </span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-sky-300">{"setPosts"}</span>
                    <span className="text-zinc-400">{"(data);\n"}</span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-sky-300">{"setIsLoading"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-violet-300">{"false"}</span>
                    <span className="text-zinc-400">{");\n"}</span>
                    <span className="text-zinc-400">{"      })\n"}</span>
                    <span className="text-zinc-400">
                      {"      .catch(err => {\n"}
                    </span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-sky-300">{"setError"}</span>
                    <span className="text-zinc-400">{"(err);\n"}</span>
                    <span className="text-zinc-400">{"        "}</span>
                    <span className="text-sky-300">{"setIsLoading"}</span>
                    <span className="text-zinc-400">{"("}</span>
                    <span className="text-violet-300">{"false"}</span>
                    <span className="text-zinc-400">{");\n"}</span>
                    <span className="text-zinc-400">{"      });\n"}</span>
                    <span className="text-zinc-400">{"  }, []);\n\n"}</span>

                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"if "}</span>
                    <span className="text-zinc-400">{"(isLoading) "}</span>
                    <span className="text-violet-300">{"return "}</span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">Loading...</"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">;\n"}</span>
                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"if "}</span>
                    <span className="text-zinc-400">{"(error) "}</span>
                    <span className="text-violet-300">{"return "}</span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">Error!</"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">;\n\n"}</span>

                    <span className="text-zinc-500">
                      {"  // No caching.\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // No retries.\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // No background refetch.\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // Every page visit re-fetches.\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // And you wrote all this yourself.\n"}
                    </span>
                    <span className="text-zinc-400">{"}"}</span>
                  </span>
                }
              />
            ),
          }}
          after={{
            label: "TanStack Query: useQuery (~12 lines)",
            content: (
              <CodeBlock
                title="PostList.jsx — let the library handle it"
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

                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"if "}</span>
                    <span className="text-zinc-400">{"(isLoading) "}</span>
                    <span className="text-violet-300">{"return "}</span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">Loading...</"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">;\n"}</span>
                    <span className="text-zinc-400">{"  "}</span>
                    <span className="text-violet-300">{"if "}</span>
                    <span className="text-zinc-400">{"(error) "}</span>
                    <span className="text-violet-300">{"return "}</span>
                    <span className="text-zinc-400">{"<"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">Error!</"}</span>
                    <span className="text-red-400">{"p"}</span>
                    <span className="text-zinc-400">{">;\n\n"}</span>

                    <span className="text-zinc-500">
                      {"  // Caching ✓  Retries ✓\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // Background refetch ✓\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // Loading & error states ✓\n"}
                    </span>
                    <span className="text-zinc-500">
                      {"  // All in ~12 lines.\n"}
                    </span>
                    <span className="text-zinc-400">{"}"}</span>
                  </span>
                }
              />
            ),
          }}
          accentBefore="border-zinc-700 bg-zinc-900/50"
          accentAfter="border-orange-900/40 bg-orange-950/10"
        />

        {/* useMutation POST example */}
        <h3 className="font-display font-bold text-orange-300 text-xl !mt-10">
          Sending Data: POST Requests with useMutation
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            useQuery
          </code>{" "}
          is for <strong className="text-orange-200">reading</strong> data (GET
          requests). But what about{" "}
          <strong className="text-orange-200">sending</strong> data — creating a
          new post, submitting a form, deleting an item? That's where{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded text-orange-300">
            useMutation
          </code>{" "}
          comes in.
        </p>

        <CodeBlock
          title="CreatePost.tsx — sending typed data with useMutation"
          accent="orange"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"useMutation"}</span>
              <span className="text-zinc-400">{", "}</span>
              <span className="text-sky-300">{"useQueryClient"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">
                {"'@tanstack/react-query'"}
              </span>
              <span className="text-zinc-400">{";\n\n"}</span>

              <span className="text-zinc-500">
                {"// Define the shape of a new post\n"}
              </span>
              <span className="text-violet-300">{"interface "}</span>
              <span className="text-pink-300">{"NewPost"}</span>
              <span className="text-zinc-400">{" {\n"}</span>
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
              <span className="text-zinc-400">{"}\n\n"}</span>

              <span className="text-violet-300">{"function "}</span>
              <span className="text-amber-300">{"CreatePost"}</span>
              <span className="text-zinc-400">{"() {\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"const "}</span>
              <span className="text-sky-300">{"queryClient"}</span>
              <span className="text-zinc-400">{" = "}</span>
              <span className="text-amber-300">{"useQueryClient"}</span>
              <span className="text-zinc-400">{"();\n\n"}</span>

              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"const "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"mutate"}</span>
              <span className="text-zinc-400">{", "}</span>
              <span className="text-sky-300">{"isPending"}</span>
              <span className="text-zinc-400">{" } = "}</span>
              <span className="text-amber-300">{"useMutation"}</span>
              <span className="text-zinc-400">{"({\n"}</span>

              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"mutationFn"}</span>
              <span className="text-zinc-400">{": ("}</span>
              <span className="text-sky-300">{"newPost"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-pink-300">{"NewPost"}</span>
              <span className="text-zinc-400">{") =>\n"}</span>
              <span className="text-zinc-400">{"      "}</span>
              <span className="text-amber-300">{"fetch"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-emerald-400">{"'/api/posts'"}</span>
              <span className="text-zinc-400">{", {\n"}</span>
              <span className="text-zinc-400">{"        "}</span>
              <span className="text-sky-300">{"method"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'POST'"}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"        "}</span>
              <span className="text-sky-300">{"headers"}</span>
              <span className="text-zinc-400">{": { "}</span>
              <span className="text-emerald-400">{"'Content-Type'"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'application/json'"}</span>
              <span className="text-zinc-400">{" },\n"}</span>
              <span className="text-zinc-400">{"        "}</span>
              <span className="text-sky-300">{"body"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-amber-300">{"JSON"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"stringify"}</span>
              <span className="text-zinc-400">{"(newPost),\n"}</span>
              <span className="text-zinc-400">{"      }),\n\n"}</span>

              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"onSuccess"}</span>
              <span className="text-zinc-400">{": () => {\n"}</span>
              <span className="text-zinc-500">
                {"      // Refetch the posts list so the new one appears\n"}
              </span>
              <span className="text-zinc-400">{"      "}</span>
              <span className="text-sky-300">{"queryClient"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-amber-300">{"invalidateQueries"}</span>
              <span className="text-zinc-400">{"({ "}</span>
              <span className="text-sky-300">{"queryKey"}</span>
              <span className="text-zinc-400">{": ["}</span>
              <span className="text-emerald-400">{"'posts'"}</span>
              <span className="text-zinc-400">{"] });\n"}</span>
              <span className="text-zinc-400">{"    },\n"}</span>
              <span className="text-zinc-400">{"  });\n\n"}</span>

              <span className="text-zinc-500">
                {"  // TypeScript ensures you pass the right shape:\n"}
              </span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"mutate"}</span>
              <span className="text-zinc-400">{"({\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"title"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'My Post'"}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"body"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'Hello world!'"}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-sky-300">{"author"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'Alice'"}</span>
              <span className="text-zinc-400">{",\n"}</span>
              <span className="text-zinc-400">{"  });\n\n"}</span>

              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"mutate"}</span>
              <span className="text-zinc-400">{"({ "}</span>
              <span className="text-sky-300">{"title"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-emerald-400">{"'Oops'"}</span>
              <span className="text-zinc-400">{" });\n"}</span>
              <span className="text-red-400">
                {"  // ❌ Error: missing 'body' and 'author'\n"}
              </span>
              <span className="text-zinc-400">{"}"}</span>
            </span>
          }
        />

        <div className="rounded-xl border border-orange-900/30 bg-orange-950/10 p-6">
          <SequenceDiagram
            steps={[
              {
                from: "User",
                to: "Browser (React)",
                label: 'Fills out the "New Post" form and clicks Submit',
                color: "#fbbf24",
              },
              {
                from: "Browser (React)",
                to: "Your API Server",
                label:
                  "useMutation fires a POST /api/posts request with the form data as JSON in the body",
                color: "#38bdf8",
              },
              {
                from: "Your API Server",
                to: "Database",
                label:
                  "Server validates the data and runs INSERT INTO posts (...) VALUES (...)",
                color: "#34d399",
              },
              {
                from: "Database",
                to: "Your API Server",
                label: "Database confirms the row was created",
                color: "#34d399",
                direction: "left",
              },
              {
                from: "Your API Server",
                to: "Browser (React)",
                label:
                  "Server responds with 201 Created and the new post as JSON",
                color: "#38bdf8",
                direction: "left",
              },
              {
                from: "Browser (React)",
                to: "Browser (React)",
                label:
                  'onSuccess fires — invalidates the "posts" query, triggering a refetch so the list updates',
                color: "#a78bfa",
              },
              {
                from: "Browser",
                to: "User",
                label: "User sees their new post appear in the list",
                color: "#fbbf24",
                direction: "left",
              },
            ]}
          />
        </div>

        <Callout color="#fb923c" icon="💡">
          <strong className="text-orange-300">GET vs POST:</strong>{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            useQuery
          </code>{" "}
          = reading data (GET). Runs automatically when the component renders.{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            useMutation
          </code>{" "}
          = writing data (POST, PUT, DELETE). Runs only when you call{" "}
          <code className="font-mono text-xs bg-zinc-800 px-1 rounded">
            mutate()
          </code>{" "}
          — typically in response to a user action like clicking a button. After
          a successful mutation, you invalidate related queries so the cached
          data refreshes.
        </Callout>

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
        TanStack Query is a client-side library — it runs in the user's browser
        alongside React. It makes HTTP requests to your backend API, manages the
        responses, and tells React when to re-render. Your backend server is a
        completely separate program.
      </Callout>
    </div>
  );
}
