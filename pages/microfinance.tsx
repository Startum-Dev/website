import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";
import MicrofinanceBanner from "../components/pageComponets/services/microfinance/MicrofinanceBanner";
import ServicesTab from "../components/pageComponets/services/microfinance/ServicesTab";
import ProductsTab from "../components/pageComponets/services/microfinance/ProductsTab";
import { useState } from "react";

const Microfinance = () => {
  const [switchtab, setSwitchtab] = useState(true);
  return (
    <AppLayout>
      <MicrofinanceBanner
        productsTab={() => setSwitchtab(true)}
        servicesTab={() => setSwitchtab(false)}
      />
      {switchtab ? <ProductsTab /> : <ServicesTab />}
    </AppLayout>
  );
};

export default Microfinance;
