"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ChristmasBackground from "@/components/ChristmasBackground";
import Link from "next/link";
import Image from "next/image";

export default function SurprisePage() {
  // Memoize heart positions to prevent re-rendering
  const heartData = useMemo(() => 
    [...Array(200)].map((_, i) => {
      const angle = (i * 360) / 200;
      // Increase distance to cover full screen (use viewport dimensions)
      const distance = 400 + Math.random() * 600;
      const x = Math.cos((angle * Math.PI) / 180) * distance;
      const y = Math.sin((angle * Math.PI) / 180) * distance;
      const emoji = ['💖', '💕', '💗', '💓', '💝', '❤️', '🧡', '💛'][Math.floor(Math.random() * 8)];
      const offsetX = (Math.random() - 0.5) * 200;
      const offsetY = (Math.random() - 0.5) * 200;
      return { x, y, emoji, offsetX, offsetY };
    }), []
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <ChristmasBackground />
      
      {/* Heart Explosion Animation */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        {heartData.map((heart, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 1 
            }}
            animate={{ 
              x: heart.x + heart.offsetX,
              y: heart.y + heart.offsetY,
              scale: [0, 1.5, 0],
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.01,
              ease: "easeOut"
            }}
            className="absolute text-4xl md:text-6xl"
            style={{
              left: '50%',
              top: '50%',
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </div>
      
      {/* Canta Image - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        }}
        className="fixed bottom-4 left-0 z-20"
      >
        <Image
          src="/canta.png"
          alt="Canta"
          width={400}
          height={400}
          className="object-contain"
          style={{ maxWidth: '400px', height: 'auto' }}
        />
      </motion.div>
      
      {/* Cake Image - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        }}
        className="fixed right-0 z-20"
        style={{ bottom: 0 }}
      >
        <Image
          src="/cake.png"
          alt="Cake"
          width={300}
          height={300}
          className="object-contain"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      </motion.div>
      
      {/* กระดิ่ง Image - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.5
          }
        }}
        className="fixed right-0 z-20"
        style={{ top: '-45px' }}
      >
        <Image
          src="/กระดิ่ง.png"
          alt="กระดิ่ง"
          width={200}
          height={200}
          className="object-cover rounded-lg"
          style={{ maxWidth: '200px', height: 'auto', width: 'auto' }}
        />
      </motion.div>
      
      {/* Happy Birthday Oleg - Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.5
          }
        }}
        className="relative z-10 mb-6 ml-60"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-normal text-white relative z-10" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 900, WebkitTextStroke: '0.5px rgba(0,0,0,0.1)' }}>
          Merry Christmas Oleg
        </h1>
      </motion.div>
      
      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.5
          }
        }}
        className="rounded-2xl p-8 md:p-12 max-w-4xl w-full relative z-10 overflow-hidden ml-60 mt-16"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%),
            #228B22
          `,
          border: 'none',
          outline: 'none'
        }}
      >
        <p className="text-xl md:text-2xl text-white leading-relaxed font-bold text-left" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}>
          Thank you for coming into my life. Every day is more meaningful because of you. May this year be the year with the most smiles, and may Oleg be the happiest person in the world. I love you.💝
        </p>
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            delay: 1.2,
            duration: 0.5
          }
        }}
        className="mt-16 relative z-10 ml-60"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-800 text-white px-6 py-3 rounded-full font-black text-lg cursor-pointer border-[3px] border-white"
            style={{ fontWeight: 900 }}
          >
            <span className="text-white">Back to Home</span> 🎄
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}

