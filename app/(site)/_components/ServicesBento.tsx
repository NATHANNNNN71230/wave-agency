import { ServiceCard } from "./ServiceCard";

const items = [
  { title: "Création de sites", description: "Vitrines & e‑commerce sur‑mesure.", href: "/services/creation-de-sites" },
  { title: "Identité & Print", description: "Logo, cartes NFC, signalétique.", href: "/services/identite-print" },
  { title: "Marketing & Social", description: "Community management & influence.", href: "/services/marketing-social" },
  { title: "Événementiel & Média", description: "Photo/vidéo/drone, photobooth.", href: "/services/evenementiel-media" },
];

export default function ServicesBento() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <ServiceCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
