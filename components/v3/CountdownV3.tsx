"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Blossom } from "./Flowers";

function diff(target: Date) {
  const t = target.getTime() - Date.now();
  const c = Math.max(t, 0);
  return {
    done: t <= 0,
    days: Math.floor(c / 86400000),
    hours: Math.floor((c / 3600000) % 24),
    minutes: Math.floor((c / 60000) % 60),
    seconds: Math.floor((c / 1000) % 60),
  };
}

export default function CountdownV3({ target }: { target: Date }) {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: t?.days },
    { label: "Hours", value: t?.hours },
    { label: "Mins", value: t?.minutes },
    { label: "Secs", value: t?.seconds },
  ];

  if (t?.done) {
    return (
      <p className="text-center font-display text-2xl text-wine">
        Today we bloom into forever 🌸
      </p>
    );
  }

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-4">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="relative rounded-2xl border border-blushDeep/40 bg-white/70 px-1 py-4 text-center shadow-sm backdrop-blur"
        >
          <Blossom
            size={18}
            className="absolute -left-2 -top-2 rotate-12 drop-shadow"
          />
          <div className="font-display text-2xl font-bold tabular-nums text-wine sm:text-4xl">
            {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-rosePetal/80 sm:text-xs">
            {u.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
