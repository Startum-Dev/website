import { useState } from "react";

interface BannerProps {
  petroleumTab: () => void;
  gasTab: () => void;
  solarTab: () => void;
}

const EnergyBanner = ({ petroleumTab, gasTab, solarTab }: BannerProps) => {
  const [activeTab, setActiveTab] = useState("petroleum");
  return (
    <div
      className="w-screen  bg-realeastatebg flex flex-row items-center justify-center pt-4 md:pt-24 bg-cover"
      style={{ height: 400 }}
    >
      <div>
        <h1 className="hidden md:absolute md:flex  left-0 text-white font-semibold text-xl mt-8 ml-10">
          Petroleum & Energy
        </h1>
      </div>
      <div className="bg-primary-yellow w-2/3 md:w-1/3 p-1 rounded">
        <div className="flex flex-col md:flex-row items-center bg-primary-black justify-evenly p-2 border-2 border-gray-100 rounded">
          <div
            className={`p-4 font-bold ${
              activeTab === "petroleum" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("petroleum");
                petroleumTab();
              }}
            >
              Petroleum
            </button>
          </div>
          <div
            className={`p-4 font-bold ${
              activeTab === "gas" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("gas");
                gasTab();
              }}
            >
              Gas
            </button>
          </div>
          <div
            className={`p-4 font-bold ${
              activeTab === "solar" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("solar");
                solarTab();
              }}
            >
              Solar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnergyBanner;
