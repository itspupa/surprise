"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SurpriseButton() {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const targetDate = new Date("2025-12-25T00:00:00").getTime();
      const now = new Date().getTime();
      if (now >= targetDate) {
        setTargetReached(true);
      }
    };

    // Check immediately
    checkTime();

    // Check every second
    const interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href={targetReached ? "/surprise" : "/countdown"}>
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

