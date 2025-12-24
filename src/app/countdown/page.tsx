"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ChristmasBackground from "@/components/ChristmasBackground";

export default function CountdownPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-25T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        router.replace("/surprise");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
      <ChristmasBackground />
      
      {/* Snowman Image - Bottom Left */}
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
        className="fixed z-20"
        style={{ bottom: '-70px', left: '-40px' }}
      >
        <Image
          src="/snowman.png"
          alt="Snowman"
          width={400}
          height={400}
          className="object-contain"
          style={{ maxWidth: '400px', height: 'auto' }}
        />
      </motion.div>
      
      {/* Canta2 Image - Bottom Right */}
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
        style={{ bottom: '-50px' }}
      >
        <Image
          src="/canta2.png"
          alt="Canta2"
          width={400}
          height={400}
          className="object-contain"
          style={{ maxWidth: '400px', height: 'auto' }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-normal text-white mb-12 relative z-10" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 900, WebkitTextStroke: '0.5px rgba(0,0,0,0.1)', letterSpacing: '0.05em' }}>
         Countdown to Christmas Birthday 
        </h1>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-16">
          {/* Days */}
          <motion.div
            className="bg-red-800 rounded-2xl p-6 md:p-8 border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl md:text-7xl font-black text-white mb-2">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">Days</div>
          </motion.div>

          {/* Hours */}
          <motion.div
            className="bg-red-800 rounded-2xl p-6 md:p-8 border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl md:text-7xl font-black text-white mb-2">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">Hours</div>
          </motion.div>

          {/* Minutes */}
          <motion.div
            className="bg-red-800 rounded-2xl p-6 md:p-8 border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl md:text-7xl font-black text-white mb-2">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">Minutes</div>
          </motion.div>

          {/* Seconds */}
          <motion.div
            className="bg-red-800 rounded-2xl p-6 md:p-8 border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl md:text-7xl font-black text-white mb-2">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">Seconds</div>
          </motion.div>
        </div>
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
        className="mt-32 relative z-10"
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

