import { useState, useEffect, useRef } from "react";
import OldDays from "./sections/OldDays";
import PackageManagers from "./sections/PackageManagers";
import Bundlers from "./sections/Bundlers";
import Runtimes from "./sections/Runtimes";
import Frameworks from "./sections/Frameworks";
import TailwindCSS from "./sections/TailwindCSS";
import DataFetching from "./sections/DataFetching";
import Fullstack from "./sections/Fullstack";
import Architecture from "./sections/Architecture";

const sections = [
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
    subtitle: "npm, pnpm & yarn",
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
    id: "tailwind",
    num: "06",
    title: "CSS Frameworks",
    subtitle: "Tailwind CSS",
    color: "#fb7185",
    component: TailwindCSS,
  },
  {
    id: "data-fetching",
    num: "07",
    title: "Data Fetching",
    subtitle: "TanStack Query",
    color: "#fb923c",
    component: DataFetching,
  },
  {
    id: "fullstack",
    num: "08",
    title: "Fullstack Frameworks",
    subtitle: "Next.js & Remix",
    color: "#2dd4bf",
    component: Fullstack,
  },
  {
    id: "architecture",
    num: "09",
    title: "Your Architecture",
    subtitle: "The Full Picture",
    color: "#60a5fa",
    component: Architecture,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("old-days");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef(null);

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
      { rootMargin: "-20% 0px -70% 0px" }
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

  const scrollTo = (id) => {
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
                  isActive
                    ? "bg-zinc-800/80"
                    : "hover:bg-zinc-900"
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
        <div className="p-4 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-700 font-mono leading-relaxed">
            Built with Vite + React + Tailwind
            <br />
            The very stack this guide teaches
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
                <strong className="text-zinc-200">why</strong> it exists, and most
                importantly,{" "}
                <strong className="text-zinc-200">where it runs</strong>.
              </p>
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
      </main>
    </div>
  );
}

export default App;
