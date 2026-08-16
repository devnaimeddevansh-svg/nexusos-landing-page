import Hero from "@/components/Hero";
import ProductDemo from "@/components/ProductDemo";
import Features from "@/components/Features";
import LiveCounter from "@/components/LiveCounter";
import FoundingOffer from "@/components/FoundingOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductDemo />
      <Features />
      <LiveCounter />
      <FoundingOffer />
      <FAQ />
      <Footer />
    </main>
  );
}
