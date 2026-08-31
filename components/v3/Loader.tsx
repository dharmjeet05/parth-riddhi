"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Petal, Leaf } from "./Flowers";
import { wedding } from "@/lib/wedding";

const HOLD_MS = 2800; // how long the loader stays before lifting away

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), HOLD_MS);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const outer = Array.from({ length: 8 });
  const inner = Array.from({ length: 8 });

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-petalCream via-blush/40 to-blush"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* Blooming flower */}
          <motion.div
            className="relative h-44 w-44"
            initial={{ rotate: -35, scale: 0.6 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* two little leaves that grow first */}
            {[-1, 1].map((dir) => (
              <div
                key={dir}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${dir * 130}deg)` }}
              >
                <div className="absolute left-1/2 top-[6px] -translate-x-1/2">
                  <motion.div
                    className="origin-bottom"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <Leaf size={30} />
                  </motion.div>
                </div>
              </div>
            ))}

            {/* outer petals */}
            {outer.map((_, i) => (
              <div
                key={`o${i}`}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 45}deg)` }}
              >
                <div className="absolute left-1/2 top-[10px] -translate-x-1/2">
                  <motion.div
                    className="origin-bottom text-blushDeep"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  >
                    <Petal size={48} />
                  </motion.div>
                </div>
              </div>
            ))}

            {/* inner petals (offset + brighter) */}
            {inner.map((_, i) => (
              <div
                key={`i${i}`}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 45 + 22.5}deg)` }}
              >
                <div className="absolute left-1/2 top-[34px] -translate-x-1/2">
                  <motion.div
                    className="origin-bottom text-rosePetal"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.07,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <Petal size={30} />
                  </motion.div>
                </div>
              </div>
            ))}

            {/* center */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-marigold to-terracotta shadow-inner"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 180 }}
            />
          </motion.div>

          {/* names */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-10 text-[11px] uppercase tracking-[0.45em] text-wine/60"
          >
            Shubh Vivah
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mt-2 font-display text-2xl font-bold text-wine sm:text-3xl"
          >
            {wedding.groom} &amp; {wedding.bride}
          </motion.h2>

          {/* 0 → 100 progress line */}
          <div className="mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-blushDeep/25">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-rosePetal to-marigold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
