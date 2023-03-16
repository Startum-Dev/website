import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";
import ManufacturingBanner from "../components/pageComponets/services/manufacturing/ManufacturingBanner";
import ProductsTab from "../components/pageComponets/services/manufacturing/ProductsTab";
import ServicesTab from "../components/pageComponets/services/manufacturing/ServicesTab";
import { useState } from "react";

const Manufacturing = () => {
  const [switchtab, setSwitchtab] = useState(true);
  return (
    <AppLayout>
      <ManufacturingBanner
        productsTab={() => setSwitchtab(true)}
        servicesTab={() => setSwitchtab(false)}
      />
      {switchtab ? <ProductsTab /> : <ServicesTab />}
    </AppLayout>
  );
};

export default Manufacturing;
