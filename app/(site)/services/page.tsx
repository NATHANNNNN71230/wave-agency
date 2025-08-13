export default function ServicesPage(){
  const services = [
    {t:"Création de sites", d:"Vitrines & e‑commerce sur‑mesure. Design unique, code propre, résultats mesurables."},
    {t:"Identité & Print", d:"Logo, charte, cartes NFC, signalétique, enseignes néon, vitrophanie."},
    {t:"Marketing & Social", d:"Community management, influence, contenus qui engagent."},
    {t:"Événementiel & Média", d:"Photo/vidéo/drone + location photobooth."},
  ];
  return (
    <main className="min-h-dvh bg-black">
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(s=> (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-zinc-300">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
