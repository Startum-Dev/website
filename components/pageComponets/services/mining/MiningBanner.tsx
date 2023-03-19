import { useState } from "react";

interface BannerProps {
  machineryTab: () => void;
  consumablesTab: () => void;
  minesTab: () => void;
  explorationTab: () => void;
}

const MiningBanner = ({
  machineryTab,
  consumablesTab,
  minesTab,
  explorationTab
}: BannerProps) => {
  const [activeTab, setActiveTab] = useState("mines");
  return (
    <div
      className="w-screen  bg-realeastatebg flex flex-row items-center justify-center pt-4 md:pt-24 bg-cover"
      style={{ height: 400 }}
    >
      <div>
        <h1 className="hidden md:absolute md:flex  left-0 text-white font-semibold text-xl mt-8 ml-10">
          Mining
        </h1>
      </div>
      <div className="bg-primary-yellow w-2/3 md:w-1/3 p-1 rounded">
        <div className="flex flex-col md:flex-row items-center bg-primary-black justify-evenly p-2 border-2 border-gray-100 rounded">
          <div
            className={`p-4 font-bold ${
              activeTab === "mines" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("mines");
                minesTab();
              }}
            >
              Mines
            </button>
          </div>
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
              activeTab === "exploration" ? "bg-primary-yellow" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setActiveTab("exploration");
                explorationTab();
              }}
            >
              Exploration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiningBanner;
