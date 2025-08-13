"use client";
import { motion } from "framer-motion";
const steps = [
  { n: 1, t: "Brief & objectifs", d: "On clarifie le besoin, la cible et le résultat attendu. Scope, délais, budget." },
  { n: 2, t: "Conception & copy", d: "Arborescence, wireframes, messages clés. Focus SEO & conversion." },
  { n: 3, t: "Design & animations", d: "UI sur-mesure, micro-interactions (Framer), respect accessibilité." },
  { n: 4, t: "Intégration & QA", d: "Next.js, performance, responsive, tests, analytics & events." },
  { n: 5, t: "Mise en ligne & suivi", d: "Déploiement, Search Console, optimisations continues." },
];
export default function ProcessTimeline() {
  return (
    <div className="mt-10 grid gap-6">
      {steps.map((s, i) => (
        <motion.div key={s.n} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.05, duration: 0.35 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
            style={{ background:
              "radial-gradient(60% 60% at 15% -10%, rgba(124,62,255,.25), transparent 60%), radial-gradient(80% 60% at 120% 120%, rgba(255,255,255,.06), transparent 70%)"
            }} />
          <div className="relative z-10 flex items-start gap-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-semibold text-white">{s.n}</div>
            <div>
              <h3 className="text-white font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-zinc-300">{s.d}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
