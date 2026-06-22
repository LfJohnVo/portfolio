import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ children, variant = "primary", href, className = "", ...props }: ButtonProps) {
  const baseStyles = "flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all";
  
  const variants = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]",
    secondary: "text-[#0077B5] bg-white/5 border border-[#0077B5]/40 hover:bg-[#0077B5]/10 hover:border-[#0077B5] backdrop-blur-sm shadow-[0_0_15px_rgba(0,119,181,0.2)] hover:shadow-[0_10px_25px_-5px_rgba(0,119,181,0.4)]",
    outline: "text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClassName}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClassName}
      {...props}
    >
      {children}
    </motion.button>
  );
}
