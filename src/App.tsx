import { useState, useEffect, useRef, type ComponentType } from "react";
import OldDays from "./sections/OldDays";
import PackageManagers from "./sections/PackageManagers";
import Bundlers from "./sections/Bundlers";
import Runtimes from "./sections/Runtimes";
import Frameworks from "./sections/Frameworks";
import TypeScript from "./sections/TypeScript";
import TailwindCSS from "./sections/TailwindCSS";
import DataFetching from "./sections/DataFetching";
import Databases from "./sections/Databases";
import Fullstack from "./sections/Fullstack";
import Architecture from "./sections/Architecture";

interface Section {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  color: string;
  component: ComponentType;
}

const sections: Section[] = [
  {
    id: "old-days",
    num: "01",
    title: "The Old Days",
    subtitle: "Raw HTML, CSS & JS",
    color: "#fbbf24",
    component: OldDays,
  },
  {
    id: "package-managers",
    num: "02",
    title: "Package Managers",
    subtitle: "npm, pnpm & bun",
    color: "#a3e635",
    component: PackageManagers,
  },
  {
    id: "bundlers",
    num: "03",
    title: "Bundlers",
    subtitle: "Vite & Webpack",
    color: "#34d399",
    component: Bundlers,
  },
  {
    id: "runtimes",
    num: "04",
    title: "JS Runtimes",
    subtitle: "Node, Bun & Deno",
    color: "#38bdf8",
    component: Runtimes,
  },
  {
    id: "frameworks",
    num: "05",
    title: "Frontend Frameworks",
    subtitle: "React, Vue & Svelte",
    color: "#a78bfa",
    component: Frameworks,
  },
  {
    id: "typescript",
    num: "06",
    title: "TypeScript",
    subtitle: "Types for JavaScript",
    color: "#fb7185",
    component: TypeScript,
  },
  {
    id: "tailwind",
    num: "07",
    title: "CSS Frameworks",
    subtitle: "Tailwind CSS",
    color: "#f472b6",
    component: TailwindCSS,
  },
  {
    id: "data-fetching",
    num: "08",
    title: "Data Fetching",
    subtitle: "TanStack Query",
    color: "#fb923c",
    component: DataFetching,
  },
  {
    id: "fullstack",
    num: "09",
    title: "Fullstack Frameworks",
    subtitle: "Next.js, Remix & SSR",
    color: "#2dd4bf",
    component: Fullstack,
  },
  {
    id: "databases",
    num: "10",
    title: "Databases & ORMs",
    subtitle: "Drizzle, Convex & SQL",
    color: "#c084fc",
    component: Databases,
  },
  {
    id: "architecture",
    num: "11",
    title: "Putting It Together",
    subtitle: "The Full Picture",
    color: "#60a5fa",
    component: Architecture,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("old-days");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    observerRef.current = observer;

    // Small delay to let sections render
    const timeout = setTimeout(() => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className="noise-bg min-h-screen bg-zinc-950">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="font-display font-bold text-sm text-zinc-200">
              Web Fundamentals
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-zinc-950/95 backdrop-blur-xl border-r border-zinc-800/50 z-50 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo area */}
        <div className="p-6 pb-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚡</span>
            </div>
            <div>
              <div className="font-display font-bold text-zinc-100 text-sm leading-tight">
                Web Dev
              </div>
              <div className="font-display font-bold text-zinc-100 text-sm leading-tight">
                Fundamentals
              </div>
            </div>
          </div>
          <p className="text-[11px] text-zinc-600 mt-2 font-mono">
            A guide for CS students
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 group flex items-center gap-3 ${
                  isActive ? "bg-zinc-800/80" : "hover:bg-zinc-900"
                }`}
              >
                <span
                  className="font-mono text-[10px] font-bold w-5 flex-shrink-0 transition-colors"
                  style={{ color: isActive ? section.color : "#52525b" }}
                >
                  {section.num}
                </span>
                <div className="min-w-0">
                  <div
                    className="text-sm font-semibold truncate transition-colors"
                    style={{
                      color: isActive ? section.color : "#a1a1aa",
                    }}
                  >
                    {section.title}
                  </div>
                  <div className="text-[11px] text-zinc-600 truncate">
                    {section.subtitle}
                  </div>
                </div>
                {isActive && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: section.color }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800/50 space-y-3">
          <a
            href="https://github.com/Lomzem"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5"
          >
            <img
              src="https://github.com/Lomzem.png"
              alt="Lawjay Lee"
              className="w-7 h-7 rounded-full border border-zinc-800 group-hover:border-violet-500/60 transition-colors"
            />
            <div className="min-w-0">
              <div className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors truncate">
                Lawjay Lee
              </div>
              <div className="text-[10px] font-mono text-zinc-700 group-hover:text-violet-400/70 transition-colors">
                @Lomzem
              </div>
            </div>
          </a>
          <a
            href="https://github.com/Lomzem/webdev-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-700 hover:text-zinc-400 transition-colors"
          >
            <svg
              className="w-3 h-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Lomzem/webdev-intro
          </a>
          <p className="text-[10px] text-zinc-800 font-mono leading-relaxed">
            Built with Vite + React + Tailwind
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-72 pt-14 lg:pt-0">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-zinc-950 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-xs font-mono text-zinc-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                For sophomore CS students
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Modern Web Dev
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Demystified
                </span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                You know how to code. You've written C++, Python, maybe Java.
                But web development feels like a different universe — bundlers,
                frameworks, runtimes, SSR. This guide explains{" "}
                <strong className="text-zinc-200">what</strong> each piece does,{" "}
                <strong className="text-zinc-200">why</strong> it exists, and
                most importantly,{" "}
                <strong className="text-zinc-200">where it runs</strong>.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
                <a
                  href="https://github.com/Lomzem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-zinc-400 transition-colors"
                >
                  <img
                    src="https://github.com/Lomzem.png"
                    alt="Lawjay Lee"
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="font-medium text-zinc-500">Lawjay Lee</span>
                  <span className="font-mono text-zinc-700">@Lomzem</span>
                </a>
                <span className="text-zinc-800">·</span>
                <a
                  href="https://github.com/Lomzem/webdev-intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-700 hover:text-zinc-400 transition-colors"
                >
                  github.com/Lomzem/webdev-intro
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-6 pb-24 space-y-0">
          {sections.map((section, idx) => {
            const Component = section.component;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20 pt-20 pb-8"
              >
                {/* Section header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{
                        color: section.color,
                        backgroundColor: section.color + "15",
                      }}
                    >
                      {section.num}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{
                        background: `linear-gradient(to right, ${section.color}30, transparent)`,
                      }}
                    />
                  </div>
                  <h2
                    className="font-display font-extrabold text-3xl sm:text-4xl"
                    style={{ color: section.color }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-zinc-500 mt-1 font-medium">
                    {section.subtitle}
                  </p>
                </div>

                {/* Section content */}
                <Component />

                {/* Divider */}
                {idx < sections.length - 1 && (
                  <div className="mt-16 flex justify-center">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-16 px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
            <a
              href="https://github.com/Lomzem"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <img
                src="https://github.com/Lomzem.png"
                alt="Lawjay Lee"
                className="w-14 h-14 rounded-full border-2 border-zinc-800 group-hover:border-violet-500/60 transition-all duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  Lawjay Lee
                </span>
                <span className="text-xs font-mono text-zinc-600 group-hover:text-violet-400/70 transition-colors">
                  @Lomzem
                </span>
              </div>
            </a>
            <a
              href="https://github.com/Lomzem/webdev-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-xs font-mono text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Lomzem/webdev-intro
            </a>
            <p className="text-[10px] text-zinc-900 mt-3 select-none">
              with a lot of help from opus 4.6
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
