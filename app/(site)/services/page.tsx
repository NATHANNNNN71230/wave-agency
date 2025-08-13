import type { Metadata } from "next";
import { ServiceCard } from "../_components/ServiceCard";
export const metadata: Metadata = {
  title: "Services • Wave Agency",
  description: "Création de sites vitrine & e-commerce, identité & print, marketing/social, événementiel & média.",
};
const items = [
  { title: "Création de sites", desc: "Vitrines & e‑commerce sur‑mesure. Design unique, performance, SEO technique.", href: "/contact?subject=Creation%20de%20site" },
  { title: "Identité & Print", desc: "Logo, charte, cartes NFC, vitrophanie, signalétique, enseignes néon.", href: "/contact?subject=Identite%20%26%20Print" },
  { title: "Marketing & Social", desc: "Community management, collab. influenceurs, planning éditorial, contenus.", href: "/contact?subject=Marketing%20%26%20Social" },
  { title: "Événementiel & Média", desc: "Photo/vidéo/drone, prises de vue, location photobooth.", href: "/contact?subject=Evenementiel%20%26%20Media" },
];
export default function ServicesPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Services</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">Des offres claires, centrées sur l’impact: design soigné, code propre, résultats mesurables.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map(({ title, desc, href }) => (
          <ServiceCard key={title} title={title} description={desc} href={href} />
        ))}
      </div>
      <div className="mt-10">
        <a href="/contact" onClick={() => (window as any).plausible?.("CTA_DemandeDevis")}
          className="rounded-2xl bg-white/10 px-6 py-3 text-white hover:bg-white/20">
          Demander un devis
        </a>
      </div>
    </main>
  );
}
