import { BasketProvider } from "./BasketContext";
import { BatchTrace } from "./BatchTrace";
import { FAQ } from "./FAQ";
import { FloatingWhatsApp, Footer, Marquee, MobileCTA } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PlanBuilder } from "./PlanBuilder";
import { Products } from "./Products";
import { PurityJourney, PurityPromise } from "./PurityJourney";
import { Testimonials } from "./Testimonials";
import { TrustStats } from "./TrustStats";

export function Site() {
  return (
    <BasketProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <TrustStats />
        <PurityJourney />
        <PlanBuilder />
        <Products />
        <PurityPromise />
        <BatchTrace />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
      <FloatingWhatsApp />
    </BasketProvider>
  );
}
