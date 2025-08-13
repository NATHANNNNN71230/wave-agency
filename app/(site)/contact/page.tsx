export default function ContactPage(){
  return (
    <main className="min-h-dvh bg-black">
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <form className="mt-8 grid gap-4 max-w-xl" action="https://formsubmit.co/waveagency.booking@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nouveau message depuis Wave Agency" />
          <input type="hidden" name="_captcha" value="false" />
          <input name="name" placeholder="Nom" className="rounded-xl bg-white/[0.06] px-4 py-3 outline-none focus:ring-2 ring-white/30" required />
          <input type="email" name="email" placeholder="Email" className="rounded-xl bg-white/[0.06] px-4 py-3 outline-none focus:ring-2 ring-white/30" required />
          <input name="phone" placeholder="Téléphone" className="rounded-xl bg-white/[0.06] px-4 py-3 outline-none focus:ring-2 ring-white/30" />
          <textarea name="message" placeholder="Votre message" rows={5} className="rounded-xl bg-white/[0.06] px-4 py-3 outline-none focus:ring-2 ring-white/30" required />
          <button className="rounded-xl bg-white/10 px-6 py-3 hover:bg-white/20">Envoyer</button>
        <form
  className="mt-8 grid gap-4 max-w-xl"
  action="https://formsubmit.co/waveagency.booking@gmail.com"
  method="POST"
  onSubmit={() => (window as any).plausible?.("Form_Contact_Submit")}
>
      </section>
    </main>
  );
}
