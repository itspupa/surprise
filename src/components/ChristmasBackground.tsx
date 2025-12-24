"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function ChristmasBackground() {
  // Memoize random values to prevent re-rendering on each frame
  const bokehLights = useMemo(() => 
    [...Array(30)].map(() => ({
      width: 20 + Math.random() * 60,
      height: 20 + Math.random() * 60,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })), []
  );

  const snowflakes = useMemo(() => {
    const flakes = ['❄️', '✨', '⭐'];
    return [...Array(25)].map(() => ({
      emoji: flakes[Math.floor(Math.random() * flakes.length)],
      fontSize: 12 + Math.random() * 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, []);

  const sparkles = useMemo(() => 
    [...Array(40)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 3,
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base red background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-red-900" />
      
      {/* Dark shadow gradient at edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)'
        }}
      />
      
      {/* Bokeh lights */}
      {bokehLights.map((bokeh, i) => (
        <motion.div
          key={`bokeh-${i}`}
          className="absolute rounded-full bg-white/20 blur-xl"
          style={{
            width: `${bokeh.width}px`,
            height: `${bokeh.height}px`,
            left: `${bokeh.left}%`,
            top: `${bokeh.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bokeh.duration,
            repeat: Infinity,
            delay: bokeh.delay,
          }}
        />
      ))}
      
      {/* Golden snowflakes */}
      {snowflakes.map((snowflake, i) => (
        <motion.div
          key={`snowflake-${i}`}
          className="absolute text-yellow-300"
          style={{
            fontSize: `${snowflake.fontSize}px`,
            left: `${snowflake.left}%`,
            top: `${snowflake.top}%`,
            filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.8))',
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: snowflake.duration,
            repeat: Infinity,
            delay: snowflake.delay,
          }}
        >
          {snowflake.emoji}
        </motion.div>
      ))}
      
      {/* Golden sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            boxShadow: '0 0 6px 2px rgba(255, 215, 0, 0.8)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
}

