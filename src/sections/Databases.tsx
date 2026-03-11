import {
  CodeBlock,
  RunsBadge,
  DiagramBox,
  CompareCards,
  Callout,
} from "../components";

export default function Databases() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 items-center">
        <RunsBadge location="Your Server" color="emerald" />
      </div>

      <p className="text-lg leading-relaxed text-zinc-300">
        You know what a database is from your CS classes. But in web dev, you
        rarely write raw SQL strings. Instead, you use a{" "}
        <strong className="text-indigo-300">query builder</strong> or{" "}
        <strong className="text-indigo-300">ORM</strong> (Object-Relational
        Mapper) that lets you write type-safe queries in TypeScript — so your
        editor catches mistakes before they hit production.
      </p>

      <CompareCards
        before={{
          label: "Raw SQL strings",
          content: (
            <CodeBlock
              title="api/posts.ts"
              code={
                <span>
                  <span className="text-zinc-500">
                    {"// No type safety.\n"}
                  </span>
                  <span className="text-zinc-500">
                    {"// Typo in a column name?\n"}
                  </span>
                  <span className="text-zinc-500">
                    {"// You won't know until runtime.\n\n"}
                  </span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-sky-300">{"result"}</span>
                  <span className="text-zinc-400">{" = "}</span>
                  <span className="text-violet-300">{"await "}</span>
                  <span className="text-sky-300">{"pool"}</span>
                  <span className="text-zinc-400">{"."}</span>
                  <span className="text-amber-300">{"query"}</span>
                  <span className="text-zinc-400">{"(\n"}</span>
                  <span className="text-emerald-400">
                    {"  `SELECT id, titl, author\n"}
                  </span>
                  <span className="text-emerald-400">{"   FROM posts\n"}</span>
                  <span className="text-emerald-400">
                    {"   WHERE status = $1`"}
                  </span>
                  <span className="text-zinc-400">{",\n"}</span>
                  <span className="text-zinc-400">{"  ["}</span>
                  <span className="text-emerald-400">{"'published'"}</span>
                  <span className="text-zinc-400">{"]\n"}</span>
                  <span className="text-zinc-400">{");\n\n"}</span>
                  <span className="text-zinc-500">
                    {"// result.rows is `any[]`\n"}
                  </span>
                  <span className="text-zinc-500">
                    {'// "titl" typo? No error.'}
                  </span>
                </span>
              }
            />
          ),
        }}
        after={{
          label: "Drizzle ORM (type-safe)",
          content: (
            <CodeBlock
              title="api/posts.ts"
              accent="violet"
              code={
                <span>
                  <span className="text-violet-300">{"import "}</span>
                  <span className="text-zinc-400">{"{ "}</span>
                  <span className="text-sky-300">{"db"}</span>
                  <span className="text-zinc-400">{" } "}</span>
                  <span className="text-violet-300">{"from "}</span>
                  <span className="text-emerald-400">{"'./db'"}</span>
                  <span className="text-zinc-400">{";\n"}</span>
                  <span className="text-violet-300">{"import "}</span>
                  <span className="text-zinc-400">{"{ "}</span>
                  <span className="text-sky-300">{"posts"}</span>
                  <span className="text-zinc-400">{" } "}</span>
                  <span className="text-violet-300">{"from "}</span>
                  <span className="text-emerald-400">{"'./schema'"}</span>
                  <span className="text-zinc-400">{";\n\n"}</span>
                  <span className="text-violet-300">{"const "}</span>
                  <span className="text-sky-300">{"result"}</span>
                  <span className="text-zinc-400">{" = "}</span>
                  <span className="text-violet-300">{"await "}</span>
                  <span className="text-sky-300">{"db"}</span>
                  <span className="text-zinc-400">{"."}</span>
                  <span className="text-amber-300">{"select"}</span>
                  <span className="text-zinc-400">{"()\n"}</span>
                  <span className="text-zinc-400">{"  ."}</span>
                  <span className="text-amber-300">{"from"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-sky-300">{"posts"}</span>
                  <span className="text-zinc-400">{")\n"}</span>
                  <span className="text-zinc-400">{"  ."}</span>
                  <span className="text-amber-300">{"where"}</span>
                  <span className="text-zinc-400">{"(\n"}</span>
                  <span className="text-zinc-400">{"    "}</span>
                  <span className="text-amber-300">{"eq"}</span>
                  <span className="text-zinc-400">{"("}</span>
                  <span className="text-sky-300">{"posts"}</span>
                  <span className="text-zinc-400">{"."}</span>
                  <span className="text-sky-300">{"status"}</span>
                  <span className="text-zinc-400">{", "}</span>
                  <span className="text-emerald-400">{"'published'"}</span>
                  <span className="text-zinc-400">{"));\n\n"}</span>
                  <span className="text-zinc-500">
                    {"// result is Post[] — fully typed!\n"}
                  </span>
                  <span className="text-zinc-500">
                    {"// posts.titl would be a TS error."}
                  </span>
                </span>
              }
            />
          ),
        }}
        accentBefore="border-zinc-700 bg-zinc-900/50"
        accentAfter="border-indigo-900/40 bg-indigo-950/10"
      />

      {/* Drizzle */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-indigo-300 text-xl">
          Drizzle ORM
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          <strong className="text-indigo-200">Drizzle</strong> is a TypeScript
          ORM that maps closely to SQL — if you know SQL, you already know
          Drizzle. You define your tables as TypeScript schemas, and Drizzle
          generates types from them. Queries look like SQL but with full
          autocomplete and type checking.
        </p>

        <CodeBlock
          title="schema.ts — define your tables in TypeScript"
          accent="violet"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">
                {"pgTable, serial, text, timestamp"}
              </span>
              <span className="text-zinc-400">{" }\n  "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">
                {"'drizzle-orm/pg-core'"}
              </span>
              <span className="text-zinc-400">{";\n\n"}</span>
              <span className="text-violet-300">{"export const "}</span>
              <span className="text-sky-300">{"posts"}</span>
              <span className="text-zinc-400">{" = "}</span>
              <span className="text-amber-300">{"pgTable"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-emerald-400">{"'posts'"}</span>
              <span className="text-zinc-400">{", {\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"id"}</span>
              <span className="text-zinc-400">{":        "}</span>
              <span className="text-amber-300">{"serial"}</span>
              <span className="text-zinc-400">{"()."}</span>
              <span className="text-sky-300">{"primaryKey"}</span>
              <span className="text-zinc-400">{"(),\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"title"}</span>
              <span className="text-zinc-400">{":     "}</span>
              <span className="text-amber-300">{"text"}</span>
              <span className="text-zinc-400">{"()."}</span>
              <span className="text-sky-300">{"notNull"}</span>
              <span className="text-zinc-400">{"(),\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"author"}</span>
              <span className="text-zinc-400">{":    "}</span>
              <span className="text-amber-300">{"text"}</span>
              <span className="text-zinc-400">{"()."}</span>
              <span className="text-sky-300">{"notNull"}</span>
              <span className="text-zinc-400">{"(),\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"createdAt"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-amber-300">{"timestamp"}</span>
              <span className="text-zinc-400">{"()."}</span>
              <span className="text-sky-300">{"defaultNow"}</span>
              <span className="text-zinc-400">{"(),\n"}</span>
              <span className="text-zinc-400">{"});\n\n"}</span>
              <span className="text-zinc-500">
                {"// TypeScript now knows: a post has id (number),\n"}
              </span>
              <span className="text-zinc-500">
                {"// title (string), author (string), createdAt (Date)."}
              </span>
            </span>
          }
        />

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              label: "SQL-like",
              desc: "Queries mirror SQL so closely that knowing one means knowing the other. No new query language to learn.",
            },
            {
              label: "Type-safe",
              desc: "Schema generates TypeScript types. Mistype a column? Your editor catches it instantly.",
            },
            {
              label: "Lightweight",
              desc: "Thin layer over SQL — no heavy abstraction. You see exactly what query runs.",
            },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-indigo-900/30 bg-indigo-950/10 p-3"
            >
              <div className="font-mono text-xs font-bold text-indigo-300 mb-1">
                {f.label}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Convex */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-indigo-300 text-xl">
          Convex: A Different Approach
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          <strong className="text-indigo-200">Convex</strong> takes a completely
          different approach. Instead of connecting to a database and writing
          queries yourself, Convex <em>is</em> the backend. You write TypeScript
          functions that Convex runs on its servers — no SQL, no database setup,
          no connection strings.
        </p>

        <CodeBlock
          title="convex/posts.ts — server-side function"
          accent="violet"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"query"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">
                {"'./_generated/server'"}
              </span>
              <span className="text-zinc-400">{";\n\n"}</span>
              <span className="text-violet-300">{"export const "}</span>
              <span className="text-sky-300">{"listPosts"}</span>
              <span className="text-zinc-400">{" = "}</span>
              <span className="text-amber-300">{"query"}</span>
              <span className="text-zinc-400">{"({\n"}</span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-sky-300">{"handler"}</span>
              <span className="text-zinc-400">{": "}</span>
              <span className="text-violet-300">{"async "}</span>
              <span className="text-zinc-400">{"(ctx) => {\n"}</span>
              <span className="text-zinc-400">{"    "}</span>
              <span className="text-violet-300">{"return await "}</span>
              <span className="text-sky-300">{"ctx"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"db"}</span>
              <span className="text-zinc-400">{"\n"}</span>
              <span className="text-zinc-400">{"      ."}</span>
              <span className="text-amber-300">{"query"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-emerald-400">{'"posts"'}</span>
              <span className="text-zinc-400">{")\n"}</span>
              <span className="text-zinc-400">{"      ."}</span>
              <span className="text-amber-300">{"order"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-emerald-400">{'"desc"'}</span>
              <span className="text-zinc-400">{")\n"}</span>
              <span className="text-zinc-400">{"      ."}</span>
              <span className="text-amber-300">{"collect"}</span>
              <span className="text-zinc-400">{"();\n"}</span>
              <span className="text-zinc-400">{"  },\n"}</span>
              <span className="text-zinc-400">{"});"}</span>
            </span>
          }
        />

        <CodeBlock
          title="src/PostList.tsx — in your React app"
          accent="violet"
          code={
            <span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"useQuery"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">{"'convex/react'"}</span>
              <span className="text-zinc-400">{";\n"}</span>
              <span className="text-violet-300">{"import "}</span>
              <span className="text-zinc-400">{"{ "}</span>
              <span className="text-sky-300">{"api"}</span>
              <span className="text-zinc-400">{" } "}</span>
              <span className="text-violet-300">{"from "}</span>
              <span className="text-emerald-400">
                {"'../convex/_generated/api'"}
              </span>
              <span className="text-zinc-400">{";\n\n"}</span>
              <span className="text-violet-300">{"function "}</span>
              <span className="text-amber-300">{"PostList"}</span>
              <span className="text-zinc-400">{"() {\n"}</span>
              <span className="text-zinc-500">
                {"  // Fully typed — knows the return shape\n"}
              </span>
              <span className="text-zinc-400">{"  "}</span>
              <span className="text-violet-300">{"const "}</span>
              <span className="text-sky-300">{"posts"}</span>
              <span className="text-zinc-400">{" = "}</span>
              <span className="text-amber-300">{"useQuery"}</span>
              <span className="text-zinc-400">{"("}</span>
              <span className="text-sky-300">{"api"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"posts"}</span>
              <span className="text-zinc-400">{"."}</span>
              <span className="text-sky-300">{"listPosts"}</span>
              <span className="text-zinc-400">{");\n\n"}</span>
              <span className="text-zinc-500">
                {"  // Data updates in REAL TIME — no refetching needed.\n"}
              </span>
              <span className="text-zinc-500">
                {"  // Another user adds a post? It appears instantly.\n"}
              </span>
              <span className="text-zinc-400">{"}"}</span>
            </span>
          }
        />

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              label: "No SQL",
              desc: "Query with TypeScript, not SQL strings. The API is designed for TypeScript-first developers.",
            },
            {
              label: "Real-time",
              desc: "Data syncs live to all connected clients. No polling, no WebSocket setup — it's built in.",
            },
            {
              label: "No infra to manage",
              desc: "No database to provision, no connection strings, no migrations server. Convex handles it all.",
            },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-indigo-900/30 bg-indigo-950/10 p-3"
            >
              <div className="font-mono text-xs font-bold text-indigo-300 mb-1">
                {f.label}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Where it runs */}
      <DiagramBox>
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Traditional ORM vs Convex
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-4 space-y-3">
            <div className="font-display font-bold text-zinc-200">
              Drizzle / Prisma / raw SQL
            </div>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              <div className="rounded bg-zinc-800/60 px-3 py-1.5">
                React app (browser)
              </div>
              <div className="text-zinc-600 text-center">↕ HTTP / JSON</div>
              <div className="rounded bg-zinc-800/60 px-3 py-1.5">
                Your API server (Express, Hono, etc.)
              </div>
              <div className="text-zinc-600 text-center">↕ SQL</div>
              <div className="rounded bg-zinc-800/60 px-3 py-1.5">
                PostgreSQL / MySQL / SQLite
              </div>
            </div>
            <p className="text-xs text-zinc-500">
              You manage the API server and database yourself.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-800/40 bg-indigo-950/10 p-4 space-y-3">
            <div className="font-display font-bold text-indigo-200">Convex</div>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              <div className="rounded bg-zinc-800/60 px-3 py-1.5">
                React app (browser)
              </div>
              <div className="text-indigo-500 text-center">
                ↕ WebSocket (real-time)
              </div>
              <div className="rounded bg-indigo-950/40 border border-indigo-800/30 px-3 py-1.5 text-indigo-300">
                Convex cloud (functions + database)
              </div>
            </div>
            <p className="text-xs text-zinc-500">
              Convex is both your API and your database. One fewer thing to
              manage.
            </p>
          </div>
        </div>
      </DiagramBox>

      <Callout color="#818cf8" icon="🔑">
        <strong className="text-indigo-300">
          All database code runs on the server, never in the browser.
        </strong>{" "}
        Whether you use Drizzle, Convex, or raw SQL — the browser never touches
        your database directly. With Drizzle, your API server runs the queries.
        With Convex, their cloud runs the queries. Either way, the React app in
        the browser only communicates via HTTP or WebSocket.
      </Callout>

      <Callout color="#818cf8" icon="💡">
        <strong className="text-indigo-300">Which should you pick?</strong> If
        you want full control and already know SQL,{" "}
        <strong className="text-indigo-200">Drizzle</strong> gives you type-safe
        queries with minimal abstraction. If you want to skip backend/database
        setup entirely and get real-time sync for free,{" "}
        <strong className="text-indigo-200">Convex</strong> handles the
        infrastructure so you can focus on your app. Both are excellent choices
        — it depends on how much control vs convenience you want.
      </Callout>
    </div>
  );
}
