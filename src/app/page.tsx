import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <NewsSection />
      <ServicesSection />
      <CaseStudiesSection />
    </div>
  );
}