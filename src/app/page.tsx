import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { EmotionalBridge } from '@/components/EmotionalBridge';
import { TheChoice } from '@/components/TheChoice';
import BeforeAfter from '@/components/BeforeAfter';
import HowItWorks from '@/components/HowItWorks';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import Testimonials from '@/components/Testimonials';
import { BuyingTeaser } from '@/components/BuyingTeaser';
import { OriginPreview } from '@/components/OriginPreview';
import { ContactForm } from '@/components/ContactForm';
import { ClosingLine } from '@/components/ClosingLine';

export const metadata = {
  title: 'The Parker Group | Delmarva Real Estate',
  description: 'Delaware\'s most trusted real estate firm. Selling, buying, and guiding families through the biggest decisions of their lives.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <EmotionalBridge />
      <TheChoice />
      <BeforeAfter />
      <HowItWorks />
      <WhoThisIsFor />
      <Testimonials />
      <BuyingTeaser />
      <OriginPreview />
      <ContactForm />
      <ClosingLine />
    </main>
  );
}
