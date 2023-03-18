import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import EnergyBanner from "../components/pageComponets/services/enerygy/EnergyBanner";
import EnergyServices from "../components/pageComponets/services/enerygy/EnergyServices";

const EnergyAndPetroleum = () => {
  return (
    <AppLayout>
      <EnergyBanner />
      <EnergyServices />
    </AppLayout>
  );
};

export default EnergyAndPetroleum;
