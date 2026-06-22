import { type ReactNode } from "react";
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}
export function SectionHeading({
  title,
  subtitle,
  badge,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""} ${className}`}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
