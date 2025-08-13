import Steps from "../_components/Steps";
export default function ProcessusPage(){
  return (
    <main className="min-h-dvh bg-black text-white">
      <section className="container py-24">
        <h1 className="text-4xl font-bold">Notre processus</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">Une méthode claire, rapide et collaborative pour livrer un site beau, rapide et SEO‑first.</p>
        <Steps />
      </section>
    </main>
  );
}
