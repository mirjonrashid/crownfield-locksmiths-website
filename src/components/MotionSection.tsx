"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionSection({
  children,
  className,
  delay = 0,
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
