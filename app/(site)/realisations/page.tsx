import CaseCard from "./CaseCard";
export default function RealisationsPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Réalisations</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">
        Quelques projets récents. Études de cas détaillées sur demande.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CaseCard title="Studio Noon — refonte vitrine" tag="Site vitrine • Next.js" />
        <CaseCard title="E-shop minimal" tag="E-commerce • UX clean" />
        <CaseCard title="Identité & landing" tag="Branding • Hero animé" />
      </div>
      <div className="mt-10">
        <a href="/contact" className="rounded-2xl bg-white/10 px-6 py-3 text-white hover:bg-white/20">
          Discuter de votre projet
        </a>
      </div>
    </main>
  );
}
