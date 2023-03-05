import AppLayout from "../components/layouts/AppLayout";
import Hero from "../components/pageComponets/home/Hero";
import IntroductionSection from "../components/pageComponets/home/IntroductionSection";
import ServicesSection from "../components/pageComponets/home/ServicesSection";
import OurBlog from "../components/pageComponets/home/BlogSection";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <IntroductionSection />
      <ServicesSection />
      <OurBlog />
    </AppLayout>
  );
}
