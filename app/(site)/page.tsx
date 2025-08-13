import dynamic from "next/dynamic";
import Hero from "./_components/Hero";
import ServicesBento from "./_components/ServicesBento";
const Steps = dynamic(()=> import("./_components/Steps"), { ssr: false });
const SplashCursor = dynamic(()=> import("./_components/SplashCursor"), { ssr: false });

export default function Page(){
  return (
    <main className="min-h-dvh bg-black">
      <SplashCursor />
      <Hero />
      <ServicesBento />
      <Steps />
    </main>
  );
}
