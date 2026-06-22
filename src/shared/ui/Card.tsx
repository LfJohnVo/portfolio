import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = true, ...props }: CardProps) {
  return (
    <motion.div
      {...props}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:border-white/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}
