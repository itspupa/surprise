"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 8,
            delay: i * 0.5,
            repeat: Infinity,
          }}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          💖
        </motion.span>
      ))}
    </div>
  );
}

