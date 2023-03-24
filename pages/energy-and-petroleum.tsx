import AppLayout from "../components/layouts/AppLayout";
import EnergyBanner from "../components/pageComponets/services/enerygy/EnergyBanner";
import PetroleumTab from "../components/pageComponets/services/enerygy/petroleumTab";
import SolarTab from "../components/pageComponets/services/enerygy/solarTab";
import GasTab from "../components/pageComponets/services/enerygy/gasTab";
import { useState } from "react";

const EnergyAndPetroleum = () => {
  const [showTab, setShowTab] = useState("petroleum");
  return (
    <AppLayout>
      <EnergyBanner
        solarTab={() => setShowTab("solar")}
        gasTab={() => setShowTab("gas")}
        petroleumTab={() => setShowTab("petroleum")}
      />
      {showTab === "petroleum" && <PetroleumTab />}
      {showTab === "gas" && <GasTab />}
      {showTab === "solar" && <SolarTab />}
    </AppLayout>
  );
};

export default EnergyAndPetroleum;
