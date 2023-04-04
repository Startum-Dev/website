import AppLayout from "../components/layouts/AppLayout";
import RealEastateBanner from "../components/pageComponets/services/realEastate/shared/RealEstateBanner";
import RentTab from "../components/pageComponets/services/realEastate/RentTab";
import BuyTab from "../components/pageComponets/services/realEastate/BuyTab";
import { useState } from "react";

const RealEstate = () => {
  const [displayTab, setDisplayTab] = useState("buy");
  return (
    <AppLayout>
      <RealEastateBanner
        buyTab={() => setDisplayTab("buy")}
        rentTab={() => setDisplayTab("rent")}
      />
      {displayTab === "buy" && <BuyTab />}
      {displayTab === "rent" && <RentTab />}
    </AppLayout>
  );
};

export default RealEstate;
