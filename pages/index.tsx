import AppLayout from "../components/layouts/AppLayout";
import Hero from "../components/pageComponets/home/Hero";
import IntroductionSection from "../components/pageComponets/home/INtroductionSection";


export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <IntroductionSection />
    </AppLayout>
  );
}
