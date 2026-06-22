import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "outline" | "glow";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full";
  
  const variants = {
    default: "bg-white/5 text-slate-300 border border-white/10",
    primary: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    outline: "bg-transparent text-slate-400 border border-slate-700",
    glow: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.2)]"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
