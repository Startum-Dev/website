import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";
import RealEastateSection from "../components/pageComponets/services/realEastate/RealEstateSection";
import RealEastateBanner from "../components/pageComponets/services/realEastate/RealEstateBanner";

const RealEstate = () => {
  return (
    <AppLayout>
      <RealEastateBanner />
      <RealEastateSection />
    </AppLayout>
  );
};

export default RealEstate;
