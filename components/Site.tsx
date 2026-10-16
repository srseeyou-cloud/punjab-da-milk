import { BasketProvider } from "./BasketContext";
import { BatchTrace } from "./BatchTrace";
import { FAQ } from "./FAQ";
import { Footer, Marquee, MobileCTA } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PlanBuilder } from "./PlanBuilder";
import { Products } from "./Products";
import { PurityJourney, PurityPromise } from "./PurityJourney";
import { Testimonials } from "./Testimonials";

export function Site() {
  return (
    <BasketProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <PurityPromise />
        <PlanBuilder />
        <Products />
        <PurityJourney />
        <BatchTrace />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </BasketProvider>
  );
}
