import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vridhi Credit — Fast & Reliable Loan Solutions" },
      { name: "description", content: "Vridhi Credit offers Loan Against Property, Business, Education and Personal Loans with a simple, transparent process. Call +91 91425 43546." },
      { property: "og:title", content: "Vridhi Credit — Fast & Reliable Loan Solutions" },
      { property: "og:description", content: "Transparent loan solutions for individuals and businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
