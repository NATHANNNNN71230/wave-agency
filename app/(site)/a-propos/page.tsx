import Image from "next/image";
export default function AProposPage(){
  return (
    <main className="min-h-dvh bg-black">
      <section className="container py-16 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-4xl font-bold">À propos</h1>
          <p className="mt-4 text-zinc-300">Wave Agency conçoit des expériences web modernes et performantes. Nous allions design audacieux, animations subtiles et SEO technique.</p>
          <ul className="mt-6 text-zinc-300 list-disc list-inside">
            <li>Délais rapides, process clair</li>
            <li>Perf ≥ 95, accessibilité soignée</li>
            <li>Stack moderne: Next.js, Tailwind, Framer Motion</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Image src="/logo.png" width={800} height={600} alt="Wave Agency Logo" className="w-full h-auto" />
        </div>
      </section>
    </main>
  );
}
