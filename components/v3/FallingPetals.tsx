"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Petal } from "./Flowers";

const COLORS = ["#F2A9C4", "#E06B8B", "#F4A300", "#FFC24B", "#FFF9F5"];

// Soft drifting flower petals across the whole page.
export default function FallingPetals({ count = 22 }: { count?: number }) {
  // Random values differ between server and client, which would cause a
  // hydration mismatch. So we only render the petals after mount (client-only).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
        size: 10 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 160,
        color: COLORS[i % COLORS.length],
        spin: Math.random() > 0.5 ? 360 : -360,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-50px]"
          style={{ left: `${p.left}%`, color: p.color }}
          initial={{ y: -50, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, p.drift, 0],
            rotate: [0, p.spin],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Petal size={p.size} />
        </motion.span>
      ))}
    </div>
  );
}
