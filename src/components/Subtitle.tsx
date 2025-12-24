"use client";

import { motion } from "framer-motion";

export default function Subtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl lg:text-8xl font-black mt-6 tracking-tight relative z-10"
      style={{ fontFamily: 'var(--font-playfair)', fontWeight: 900, WebkitTextStroke: '0.5px rgba(0,0,0,0.1)' }}
    >
      <span className="text-white" style={{ fontWeight: 900 }}>A man who is special to me</span>
    </motion.p>
  );
}

