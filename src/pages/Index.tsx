import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className='min-h-screen bg-background'>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
