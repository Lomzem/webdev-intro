/* ─── Shared UI components ─── */

import type { ReactNode } from "react";

type BadgeColor = "cyan" | "violet" | "emerald" | "amber" | "rose";

interface RunsBadgeProps {
  location: string;
  color: BadgeColor;
}

interface CodeBlockProps {
  title?: string;
  code: ReactNode;
  accent?:
    | "amber"
    | "emerald"
    | "sky"
    | "violet"
    | "rose"
    | "orange"
    | "teal"
    | "blue"
    | "zinc";
}

interface CompareCardSide {
  label?: string;
  content: ReactNode;
}

interface CompareCardsProps {
  before: CompareCardSide;
  after: CompareCardSide;
  accentBefore?: string;
  accentAfter?: string;
}

interface DiagramBoxProps {
  children: ReactNode;
  className?: string;
}

interface SequenceStep {
  from: string;
  to: string;
  label: string;
  color: string;
  direction?: "left" | "right";
}

interface SequenceDiagramProps {
  steps: SequenceStep[];
  className?: string;
}

interface FlowItem {
  label: string;
  color: string;
}

interface FlowDiagramProps {
  items: (string | FlowItem)[];
  direction?: "right" | "down";
}

interface CalloutProps {
  children: ReactNode;
  color?: string;
  icon?: string;
}

/** Colored badge showing WHERE something runs */
export function RunsBadge({ location, color }: RunsBadgeProps) {
  const colors: Record<BadgeColor, string> = {
    cyan: "bg-cyan-950 text-cyan-300 border-cyan-800",
    violet: "bg-violet-950 text-violet-300 border-violet-800",
    emerald: "bg-emerald-950 text-emerald-300 border-emerald-800",
    amber: "bg-amber-950 text-amber-300 border-amber-800",
    rose: "bg-rose-950 text-rose-300 border-rose-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold font-mono px-3 py-1 rounded-full border ${colors[color]}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${color === "cyan" ? "bg-cyan-400" : color === "violet" ? "bg-violet-400" : color === "emerald" ? "bg-emerald-400" : color === "amber" ? "bg-amber-400" : "bg-rose-400"}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${color === "cyan" ? "bg-cyan-400" : color === "violet" ? "bg-violet-400" : color === "emerald" ? "bg-emerald-400" : color === "amber" ? "bg-amber-400" : "bg-rose-400"}`}
        />
      </span>
      RUNS ON: {location}
    </span>
  );
}

/** Syntax-highlighted-ish code block */
export function CodeBlock({ title, code, accent = "zinc" }: CodeBlockProps) {
  const headerBg: Record<string, string> = {
    amber: "bg-amber-950/50 border-amber-900/50",
    emerald: "bg-emerald-950/50 border-emerald-900/50",
    sky: "bg-sky-950/50 border-sky-900/50",
    violet: "bg-violet-950/50 border-violet-900/50",
    rose: "bg-rose-950/50 border-rose-900/50",
    orange: "bg-orange-950/50 border-orange-900/50",
    teal: "bg-teal-950/50 border-teal-900/50",
    blue: "bg-blue-950/50 border-blue-900/50",
    zinc: "bg-zinc-900 border-zinc-800",
  };

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
      <div
        className={`flex items-center gap-2 px-4 py-2.5 border-b ${headerBg[accent] || headerBg.zinc}`}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {title && (
          <span className="text-xs font-mono text-zinc-500 ml-2">{title}</span>
        )}
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** Side-by-side or stacked comparison cards */
export function CompareCards({
  before,
  after,
  accentBefore,
  accentAfter,
}: CompareCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div
        className={`rounded-xl border p-5 ${accentBefore || "border-red-900/50 bg-red-950/20"}`}
      >
        <div className="text-xs font-semibold font-mono uppercase tracking-wider text-red-400 mb-3">
          {before.label || "Before"}
        </div>
        {before.content}
      </div>
      <div
        className={`rounded-xl border p-5 ${accentAfter || "border-emerald-900/50 bg-emerald-950/20"}`}
      >
        <div className="text-xs font-semibold font-mono uppercase tracking-wider text-emerald-400 mb-3">
          {after.label || "After"}
        </div>
        {after.content}
      </div>
    </div>
  );
}

/** A whiteboard-style diagram container */
export function DiagramBox({ children, className = "" }: DiagramBoxProps) {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** Sequence diagram built from steps */
export function SequenceDiagram({
  steps,
  className = "",
}: SequenceDiagramProps) {
  return (
    <div className={`space-y-0 ${className}`}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-stretch gap-0">
          {/* Step number */}
          <div className="flex flex-col items-center mr-4 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 flex-shrink-0"
              style={{
                borderColor: step.color,
                color: step.color,
                backgroundColor: step.color + "15",
              }}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-px flex-1 bg-zinc-800 min-h-4" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                style={{
                  backgroundColor: step.color + "20",
                  color: step.color,
                }}
              >
                {step.from}
              </span>
              <span className="text-zinc-600 text-lg">
                {step.direction === "left" ? "◂──" : "──▸"}
              </span>
              <span
                className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                style={{
                  backgroundColor: step.color + "20",
                  color: step.color,
                }}
              >
                {step.to}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Flow diagram: boxes connected by arrows */
export function FlowDiagram({ items, direction = "right" }: FlowDiagramProps) {
  return (
    <div
      className={`flex ${direction === "down" ? "flex-col" : "flex-row flex-wrap"} items-center gap-2 justify-center`}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {typeof item === "string" ? (
            <div className="px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800/80 text-sm font-mono text-zinc-300 text-center">
              {item}
            </div>
          ) : (
            <div
              className="px-4 py-2 rounded-xl border text-sm font-mono text-center font-semibold"
              style={{
                borderColor: item.color + "60",
                backgroundColor: item.color + "15",
                color: item.color,
              }}
            >
              {item.label}
            </div>
          )}
          {i < items.length - 1 && (
            <span className="text-zinc-600 text-lg flex-shrink-0">
              {direction === "down" ? "▾" : "▸"}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/** A callout/highlight box */
export function Callout({
  children,
  color = "#fbbf24",
  icon = "💡",
}: CalloutProps) {
  return (
    <div
      className="rounded-xl border px-5 py-4 flex gap-3"
      style={{
        borderColor: color + "30",
        backgroundColor: color + "08",
      }}
    >
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div className="text-sm leading-relaxed text-zinc-300">{children}</div>
    </div>
  );
}
