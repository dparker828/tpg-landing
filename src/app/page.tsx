import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EmotionalBridge from "@/components/EmotionalBridge";
import BeforeAfter from "@/components/BeforeAfter";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ClosingLine from "@/components/ClosingLine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <EmotionalBridge />
        <BeforeAfter />
        <WhatWeDo />
        <HowItWorks />
        <WhoThisIsFor />
        <Testimonials />
        <ContactForm />
        <ClosingLine />
      </main>
      <Footer />
    </>
  );
}
