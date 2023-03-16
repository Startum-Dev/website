import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";
import { useState } from "react";
import HealthCareBanner from "../components/pageComponets/services/healthCare/HealthCareBnner";
import ProductsTab from "../components/pageComponets/services/healthCare/ProductsTab";
import ServicesTab from "../components/pageComponets/services/healthCare/ServicesTab";

const MedicalAndHealthCare = () => {
  const [switchtab, setSwitchtab] = useState(true);
  return (
    <AppLayout>
      <HealthCareBanner
        productsTab={() => setSwitchtab(true)}
        servicesTab={() => setSwitchtab(false)}
      />
      {switchtab ? <ProductsTab /> : <ServicesTab />}
    </AppLayout>
  );
};

export default MedicalAndHealthCare;
