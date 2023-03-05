import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import WhoWeAre from "../components/pageComponets/about/WhoWeAre";
import VisionSection from "../components/pageComponets/about/VisionSection";

const AboutUs = () => {
  return (
    <AppLayout>
      <BannerSmall heading="About Us" />
      <WhoWeAre />
      <VisionSection />
    </AppLayout>
  );
};

export default AboutUs;
