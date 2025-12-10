'use client';

import { TranslationProvider } from '@/hooks/useTranslation';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { WhyUs } from '@/components/sections/WhyUs';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { BackToTop } from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Header />
        <main>
          <Hero />
          <Marquee />
          <WhyUs />
          <Services />
          <Pricing />
          <Process />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <BackToTop />
      </TranslationProvider>
    </ThemeProvider>
  );
}
