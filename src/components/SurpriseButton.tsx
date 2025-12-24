"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SurpriseButton() {
  return (
    <Link href="/countdown">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 bg-red-800 px-8 py-4 rounded-full shadow-lg font-black text-xl md:text-2xl z-10 relative cursor-pointer border-[3px] border-white"
        style={{ fontWeight: 900 }}
      >
        <span className="text-white">Surprise</span> 🎁
      </motion.button>
    </Link>
  );
}

