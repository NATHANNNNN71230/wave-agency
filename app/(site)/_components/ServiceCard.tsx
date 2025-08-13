"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = { title: string; description: string; href: string };

export function ServiceCard({ title, description, href }: Props) {
  return (
    <motion.a
      whileHover={{ y: -4 }}
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition"
    >
      <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-40" style={{background:"radial-gradient(60%_60%_at_30%_10%,rgba(124,62,255,.25),transparent)"}}/>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ArrowUpRight className="size-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>
    </motion.a>
  );
}
