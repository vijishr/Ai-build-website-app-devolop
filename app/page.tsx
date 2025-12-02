import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { EndToEndProcess } from "@/components/EndToEndProcess";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <EndToEndProcess />
      <Pricing />
      <Footer />
    </main>
  );
}