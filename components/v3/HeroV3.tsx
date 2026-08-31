"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding";
import Garland from "./Garland";
import Wreath from "./Wreath";

export default function HeroV3() {
  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-24 text-center">
      {/* soft watercolor wash */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_20%,#FCE3ED_0%,transparent_55%),radial-gradient(circle_at_75%_75%,#E8F0E2_0%,transparent_55%),linear-gradient(#FFF9F5,#FDEFF4)]" />

      {/* faint couple photo, fading to nothing toward the bottom */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 88%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 88%)",
        }}
      >
        <Image
          src={wedding.heroBg}
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <Garland />

      <Wreath>
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.4em] text-wine/70 sm:text-xs"
        >
          Shubh Vivah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-2 font-display text-4xl font-bold leading-tight text-wine sm:text-6xl"
        >
          {wedding.groom}
          <span className="my-1 block font-body text-2xl font-light italic text-rosePetal sm:text-3xl">
            weds
          </span>
          {wedding.bride}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-2 font-gujarati text-base text-wine/70 sm:text-lg"
        >
          {wedding.groomGu} · {wedding.brideGu}
        </motion.p>
      </Wreath>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-4 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 text-rosePetal">
          <span className="h-px w-8 bg-rosePetal/50" />
          <span className="text-lg">❀</span>
          <span className="h-px w-8 bg-rosePetal/50" />
        </div>
        <p className="mt-3 font-display text-2xl font-semibold text-wine sm:text-3xl">
          {wedding.dateLabel}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-wine/60">
          {wedding.dayLabel}
        </p>
      </motion.div>

      <motion.a
        href="#count3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 flex flex-col items-center text-wine/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          ❁
        </motion.span>
      </motion.a>
    </header>
  );
}
