"use client";

import { motion } from "framer-motion";
import { Marigold, Leaf } from "./Flowers";

// A hanging marigold toran that gently sways — the strands arc like a real garland.
export default function Garland({ strands = 15 }: { strands?: number }) {
  const items = Array.from({ length: strands });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center"
    >
      <div className="flex w-full max-w-3xl items-start justify-between px-1">
        {items.map((_, i) => {
          // arc: middle strands hang lower than the edges
          const t = i / (strands - 1);
          const arc = Math.sin(t * Math.PI); // 0 → 1 → 0
          const drop = 14 + arc * 46;
          const flowerSize = i % 2 === 0 ? 26 : 20;
          return (
            <motion.div
              key={i}
              className="flex origin-top flex-col items-center"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i, type: "spring", stiffness: 60 }}
            >
              {/* strand */}
              <div
                className="w-[2px] bg-gradient-to-b from-sageDeep/70 to-sage/60"
                style={{ height: drop }}
              />
              {/* swaying flower + leaf cluster */}
              <div
                className="origin-top animate-swayStrand"
                style={{ animationDelay: `${(i % 5) * 0.3}s` }}
              >
                {i % 3 === 0 && (
                  <Leaf size={14} className="mx-auto -mb-1 drop-shadow-sm" />
                )}
                <Marigold size={flowerSize} className="drop-shadow-sm" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
