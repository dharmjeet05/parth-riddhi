"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Blossom } from "./Flowers";
import type { GalleryPhoto } from "@/lib/wedding";

// Soft rounded photo cards in a masonry — each keeps its natural shape.
export default function GalleryV3({ images }: { images: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 [&>*]:mb-3">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileTap={{ scale: 0.97 }}
            className="relative block w-full overflow-hidden rounded-[1.4rem] border-2 border-white shadow-lg ring-1 ring-blushDeep/30"
          >
            <Blossom
              size={22}
              className="absolute -right-1 -top-1 z-10 rotate-12 drop-shadow"
            />
            <Image
              src={img.src}
              alt={`Parth & Riddhi photo ${i + 1}`}
              width={img.w}
              height={img.h}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-auto w-full transition-transform duration-700 hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-wine/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 text-3xl text-white/90"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <motion.div
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative overflow-hidden rounded-[1.6rem] border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={`Parth & Riddhi photo ${active + 1}`}
                width={images[active].w}
                height={images[active].h}
                className="h-auto max-h-[83vh] w-auto max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
