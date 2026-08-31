"use client";

import { motion } from "framer-motion";
import { Blossom, Marigold, Leaf } from "./Flowers";

// A circular floral wreath that blooms in, then slowly rotates & breathes.
export default function Wreath({ children }: { children: React.ReactNode }) {
  const count = 16;
  const flowers = Array.from({ length: count });

  return (
    <div className="relative mx-auto flex aspect-square w-[320px] items-center justify-center sm:w-[420px]">
      {/* rotating ring of flowers */}
      <motion.div
        className="absolute inset-0 animate-spinSlow"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {flowers.map((_, i) => {
          const angle = (i / count) * 360;
          const isBlossom = i % 3 !== 2;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(-50%) translateY(-150px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4 + i * 0.05,
                type: "spring",
                stiffness: 120,
              }}
            >
              <div
                className="-ml-5 -mt-5 animate-spinReverse"
                style={{ transformOrigin: "center" }}
              >
                {i % 4 === 0 ? (
                  <Leaf size={26} />
                ) : isBlossom ? (
                  <Blossom size={40} />
                ) : (
                  <Marigold size={36} />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* soft glow */}
      <div className="absolute inset-8 rounded-full bg-white/50 blur-2xl" />

      {/* center content */}
      <div className="relative z-10 animate-breathe px-6 text-center">
        {children}
      </div>
    </div>
  );
}
