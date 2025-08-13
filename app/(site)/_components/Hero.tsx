"use client";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import SplitText from "./SplitText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora background léger */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="[background:radial-gradient(60%_50%_at_50%_10%,rgba(124,62,255,0.35),transparent_70%),radial-gradient(40%_50%_at_20%_60%,rgba(167,139,250,0.25),transparent_70%),radial-gradient(40%_60%_at_80%_40%,rgba(34,211,238,0.2),transparent_70%)] h-full" />
      </div>

      <div className="container py-28 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl md:text-6xl font-[Space_Grotesk] font-bold tracking-tight"
        >
          <ShinyText>Des sites audacieux qui convertissent</ShinyText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-2xl text-lg text-zinc-300"
        >
          <SplitText text="Wave Agency conçoit des expériences web rapides, élégantes et animées en React — taillées pour le SEO et la performance." />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* CTA principal + tracking Plausible */}
          <a
            href="/contact"
            onClick={() => (window as any).plausible?.("CTA_DemandeDevis")}
            className="rounded-2xl bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            Demander un devis
          </a>

          <a
            href="/realisations"
            className="rounded-2xl border border-white/20 px-6 py-3 text-white/80 hover:text-white"
          >
            Voir les réalisations
          </a>
        </motion.div>
      </div>

      {/* Star border subtile */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
