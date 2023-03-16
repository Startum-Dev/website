import AppLayout from "../components/layouts/AppLayout";
import IntroSection from "../components/pageComponets/services/construction/IntroSection";
import Projects from "../components/pageComponets/services/construction/Projects";
import ConstructionServices from "../components/pageComponets/services/construction/ConstructionServices";
import { useState } from "react";
import ConstructionBanner from "../components/pageComponets/services/construction/ConstructionBanner";
import ConsumablesTab from "../components/pageComponets/services/construction/Consumables";
import MachineryTab from "../components/pageComponets/services/construction/Machinery";
import ServicesTab from "../components/pageComponets/services/construction/ConstructionServices";

const Construction = () => {
  const [showtab, setShowTab] = useState("machinery");
  return (
    <AppLayout>
      <ConstructionBanner
        machineryTab={() => setShowTab("machinery")}
        consumablesTab={() => setShowTab("consumables")}
        servicesTab={() => setShowTab("services")}
      />
      {showtab == "machinery" && <MachineryTab />}
      {showtab == "consumables" && <ConsumablesTab />}
      {showtab == "services" && <ServicesTab />}
    </AppLayout>
  );
};

export default Construction;
