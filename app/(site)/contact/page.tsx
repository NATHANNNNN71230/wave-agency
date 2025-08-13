import type { Metadata } from "next";
import ContactForm from "./ContactForm";
export const metadata: Metadata = {
  title: "Contact • Wave Agency",
  description: "Parlez-nous de votre projet : réponse en 24h. Devis gratuit, sites modernes et performants en React/Next.js.",
};
export default function ContactPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Contact</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">Dites-nous ce que vous voulez construire. Réponse sous 24h.</p>
      <ContactForm />
      <section className="mt-10 text-sm text-zinc-400">
        <p>
          Ou contactez-nous directement :
          {" "}
          <a className="underline" href="mailto:waveagency.booking@gmail.com">waveagency.booking@gmail.com</a>
          {"  •  "}
          <a className="underline" href="https://wa.me/33744266719">WhatsApp</a>
        </p>
      </section>
    </main>
  );
}
