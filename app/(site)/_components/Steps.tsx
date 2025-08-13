"use client";
import { motion } from "framer-motion";
const steps = [
  { n: 1, t: "Kickoff & vision", d: "Brief express, objectifs, palette, inspirations, roadmap 5–7 jours." },
  { n: 2, t: "Design system & Hero", d: "Tokens, composants clés, hero animé (split/blur text)." },
  { n: 3, t: "Pages & contenus", d: "Accueil, Services, Réalisations. Copywriting + SEO on‑page." },
  { n: 4, t: "CMS & interactions", d: "Sanity, formulaires, micro‑interactions (glare, spotlight)." },
  { n: 5, t: "QA & lancement", d: "Perf ≥95, accessibilité AA, déploiement Vercel & Search Console." },
];
export default function Steps(){
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s)=> (
          <motion.div key={s.n} whileHover={{ y:-4 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-40" style={{background:"radial-gradient(60%_60%_at_30%_10%,rgba(124,62,255,.25),transparent)"}}/>
            <div className="text-sm text-zinc-400">Étape {s.n}</div>
            <h3 className="mt-1 text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-zinc-300">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
