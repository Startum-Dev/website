import { useState } from "react";

interface BannerProps {
  machineryTab: () => void;
  consumablesTab: () => void;
  servicesTab: () => void;
}

const ConstructionBanner = ({
  machineryTab,
  consumablesTab,
  servicesTab
}: BannerProps) => {
  const [activeTab, setActiveTab] = useState("machinery");
  return (
    <div
      className="w-screen  bg-constbg flex flex-row items-center justify-center pt-4 md:pt-24 bg-cover"
      style={{ height: 300 }}
    >
      <div>
        <h1 className="absolute left-0 text-white font-semibold text-xl mt-8 ml-10">
          Chaînes Lloyd Construction
        </h1>
      </div>
      <div className="bg-primary-yellow w-1/3 p-1 rounded">
        <div className="bg-white  flex flex-row items-center justify-evenly p-2">
          <div
            className={`p-4 font-bold ${
              activeTab === "machinery" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("machinery");
                machineryTab();
              }}
            >
              Machinery
            </button>
          </div>
          <div
            className={`p-4 font-bold ${
              activeTab === "consumables" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("consumables");
                consumablesTab();
              }}
            >
              Consumables
            </button>
          </div>
          <div
            className={`p-4 font-bold ${
              activeTab === "services" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("services");
                servicesTab();
              }}
            >
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConstructionBanner;
