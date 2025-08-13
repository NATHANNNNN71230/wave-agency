export default function NotFound(){
  return (
    <main className="min-h-dvh grid place-items-center p-10 text-center">
      <div>
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-2 text-zinc-400">Cette page n'existe pas (encore).</p>
        <a href="/" className="mt-6 inline-block rounded-xl bg-white/10 px-6 py-3 hover:bg-white/20">Retour à l'accueil</a>
      </div>
    </main>
  );
}
