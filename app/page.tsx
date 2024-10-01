import { CallToAction, Footer, Header, Hero, LogoTicker, Pricing, ProductShowcase, Testimonials } from "@/sections";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
