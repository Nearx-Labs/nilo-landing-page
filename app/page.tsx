import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Limits } from "@/components/sections/Limits";
import { Problem } from "@/components/sections/Problem";
import { Trust } from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Problem />
        <HowItWorks />
        <Trust />
        <Limits />
      </main>
      <Footer />
    </>
  );
}
