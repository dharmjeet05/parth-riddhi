"use client";

import { motion } from "framer-motion";
import { Blossom, Leaf } from "./Flowers";

// Floral divider that blooms as it scrolls into view.
export default function OrnamentV3() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center gap-2 py-2"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-blushDeep/60 sm:w-24" />
      <Leaf size={18} className="-rotate-45" />
      <Blossom size={26} className="animate-breathe" />
      <Leaf size={18} className="rotate-45 scale-x-[-1]" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-blushDeep/60 sm:w-24" />
    </motion.div>
  );
}
