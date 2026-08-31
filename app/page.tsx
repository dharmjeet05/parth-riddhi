import Image from "next/image";
import Reveal from "@/components/Reveal";
import Loader from "@/components/v3/Loader";
import FallingPetals from "@/components/v3/FallingPetals";
import HeroV3 from "@/components/v3/HeroV3";
import CountdownV3 from "@/components/v3/CountdownV3";
import GalleryV3 from "@/components/v3/GalleryV3";
import OrnamentV3 from "@/components/v3/OrnamentV3";
import { Blossom, Marigold, Leaf } from "@/components/v3/Flowers";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <main className="relative">
      <Loader />
      <FallingPetals />

      <HeroV3 />

      {/* ── Countdown ──────────────────────────────── */}
      <section id="count3" className="relative z-10 px-5 py-16">
        <Reveal>
          <h2 className="section-heading mb-1 !text-wine">Counting Down</h2>
          <p className="mb-3 text-center text-rosePetal/80">
            to our happily ever after
          </p>
          <div className="mb-9">
            <OrnamentV3 />
          </div>
        </Reveal>
        <CountdownV3 target={wedding.date} />
      </section>

      {/* ── Our Story ──────────────────────────────── */}
      <section className="relative z-10 px-5 py-14">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <Marigold size={54} className="absolute -left-5 -top-5 z-10 animate-sway" />
              <Blossom size={48} className="absolute -bottom-5 -right-4 z-10 animate-breathe" />
              <Leaf size={40} className="absolute -bottom-3 left-6 z-10 -rotate-12" />
              <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl ring-1 ring-blushDeep/40">
                <Image
                  src={wedding.heroImage}
                  alt="Parth & Riddhi"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.35em] text-rosePetal">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-wine sm:text-4xl">
              Two Hearts, One Bloom
            </h2>
            <div className="my-5">
              <OrnamentV3 />
            </div>
            <p className="leading-relaxed text-wine/80">
              Two families, one beautiful beginning. What started as a warm
              introduction blossomed into a bond blessed by our elders. With
              laughter, chai, and endless conversations, {wedding.groom} and{" "}
              {wedding.bride} found in each other a partner for life.
            </p>
            <p className="mt-4 leading-relaxed text-wine/80">
              With the blessings of Lord Ganesha and our families, we joyfully
              invite you to watch our love come into full bloom.
            </p>
            <p className="mt-6 font-display text-xl font-semibold text-rosePetal">
              {wedding.hashtag}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────── */}
      <section className="relative z-10 px-5 py-14">
        <Reveal>
          <h2 className="section-heading mb-1 !text-wine">Our Moments</h2>
          <p className="mb-3 text-center text-rosePetal/80">
            Tap a photo to view 📸
          </p>
          <div className="mb-9">
            <OrnamentV3 />
          </div>
        </Reveal>
        <div className="mx-auto max-w-3xl">
          <GalleryV3 images={wedding.gallery} />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="relative z-10 mt-6 overflow-hidden bg-gradient-to-b from-blush to-blushDeep px-5 py-16 text-center text-wine">
        <div className="mb-5 flex justify-center gap-2">
          <Leaf size={22} className="-rotate-45" />
          <Blossom size={30} className="animate-breathe" />
          <Marigold size={28} className="animate-sway" />
          <Blossom size={30} className="animate-breathe" />
          <Leaf size={22} className="rotate-45 scale-x-[-1]" />
        </div>
        <p className="font-display text-3xl font-bold">
          {wedding.groom} &amp; {wedding.bride}
        </p>
        <p className="mt-3 text-sm text-wine/70">
          With love &amp; blessings · {wedding.dateLabel}
        </p>
        <p className="mt-4 text-lg font-semibold text-white">
          {wedding.hashtag}
        </p>
        <p className="mt-6 text-xs text-wine/60">
          Padharo &amp; bless the couple 🙏
        </p>
      </footer>
    </main>
  );
}
