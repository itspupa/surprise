"use client";

import { motion } from "framer-motion";

export default function BirthdayCake() {
  return (
    <div className="relative flex justify-center items-center mt-20">
      {/* ✨ Sparkles */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-white text-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ✨
        </motion.span>
      ))}

      {/* 🎂 Cake */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        {/* 🕯 Candles */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 1 + i * 0.3, repeat: Infinity }}
                className="w-2 h-12 bg-pink-400 rounded"
              />
              {/* 🔥 Flame */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-4 h-4 bg-yellow-400 rounded-full blur-sm -mt-2"
              />
            </div>
          ))}
        </div>

        {/* 🍰 Cake Body */}
        <div className="w-48 h-32 bg-pink-300 rounded-b-3xl shadow-xl relative">
          {/* 🍫 Cream drip */}
          <div className="absolute top-0 left-0 w-full h-6 bg-pink-200 rounded-t-3xl" />

          {/* 🍓 Decorations */}
          <div className="absolute bottom-6 w-full flex justify-around">
            <span>🍓</span>
            <span>🍒</span>
            <span>🍓</span>
          </div>
        </div>

        {/* 🎂 Plate */}
        <div className="w-56 h-4 bg-gray-300 rounded-full mx-auto mt-2 shadow-md" />
      </motion.div>
    </div>
  );
}
