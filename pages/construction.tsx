import AppLayout from "../components/layouts/AppLayout";
import IntroSection from "../components/pageComponets/services/construction/IntroSection";
import Projects from "../components/pageComponets/services/construction/Projects";
import ConstructionServices from "../components/pageComponets/services/construction/ConstructionServices";

const Construction = () => {
  return (
    <AppLayout>
      <IntroSection />
      <Projects />
      <ConstructionServices />
    </AppLayout>
  );
};

export default Construction;
