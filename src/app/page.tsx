"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import SurpriseButton from "@/components/SurpriseButton";
import ChristmasBackground from "@/components/ChristmasBackground";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 text-center relative pt-8 md:pt-12">
      <ChristmasBackground />
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6 relative z-10"
      >
        <Image
          src="/cake.png"
          alt="Birthday Cake"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </motion.div>
      <Title />
      <Subtitle />
      <SurpriseButton />
    </main>
  );
}
