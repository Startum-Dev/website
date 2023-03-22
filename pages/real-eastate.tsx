import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";
import RealEastateSection from "../components/pageComponets/services/realEastate/RealEstateSection";
import RealEastateBanner from "../components/pageComponets/services/realEastate/RealEstateBanner";
import RentTab from "../components/pageComponets/services/realEastate/RentTab";
import AuctionTab from "../components/pageComponets/services/realEastate/AuctionTab";
import BuyTab from "../components/pageComponets/services/realEastate/BuyTab";
import { useState } from "react";

const RealEstate = () => {
  const [displayTab, setDisplayTab] = useState("buy");
  return (
    <AppLayout>
      <RealEastateBanner
        buyTab={() => setDisplayTab("buy")}
        rentTab={() => setDisplayTab("rent")}
        auctionTab={() => setDisplayTab("auction")}
      />
      {displayTab === "buy" && <BuyTab />}
      {displayTab === "rent" && <RentTab />}
      {displayTab === "auction" && <AuctionTab />}
    </AppLayout>
  );
};

export default RealEstate;
