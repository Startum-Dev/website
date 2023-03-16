import AppLayout from "../components/layouts/AppLayout";
import MiningBanner from "../components/pageComponets/services/mining/MiningBanner";
import { useState } from "react";
import MinesTab from "../components/pageComponets/services/mining/MinesTab";
import ExplorationTab from "../components/pageComponets/services/mining/ExplorationTab";
import MachineryTab from "../components/pageComponets/services/mining/MachineryTab";
import ConsumablesTab from "../components/pageComponets/services/mining/ConsumablesTab";

const Mining = () => {
  const [showingtab, setShowingTab] = useState("mines");

  return (
    <AppLayout>
      <MiningBanner
        minesTab={() => setShowingTab("mines")}
        machineryTab={() => setShowingTab("machinery")}
        explorationTab={() => setShowingTab("explore")}
        consumablesTab={() => setShowingTab("consume")}
      />
      {showingtab == "mines" && <MinesTab />}
      {showingtab == "explore" && <ExplorationTab />}
      {showingtab == "machinery" && <MachineryTab />}
      {showingtab == "consume" && <ConsumablesTab />}
    </AppLayout>
  );
};

export default Mining;
