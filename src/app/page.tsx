
import Navbar from '@/components/axionbyte/Navbar';
import HeroSection from '@/components/axionbyte/HeroSection';
import AboutSection from '@/components/axionbyte/AboutSection';
import ServicesSection from '@/components/axionbyte/ServiceSection';
import PortfolioSection from '@/components/axionbyte/PortfolioSection';
import ContactSection from '@/components/axionbyte/ContactSection';
import Footer from '@/components/axionbyte/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
