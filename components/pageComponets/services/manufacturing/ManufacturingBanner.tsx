import { useState } from "react";

interface BannerProps {
  productsTab: () => void;
  servicesTab: () => void;
}

const ManufacturingBanner = ({ productsTab, servicesTab }: BannerProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div
      className="w-screen  bg-manubg flex flex-row items-center justify-center pt-4  md:pt-24 bg-cover "
      style={{ height: 300 }}
    >
      <div className="bg-white w-1/3 p-4 rounded">
        <div className="flex flex-row items-center bg-gray-300 justify-evenly p-2 border-2 border-gray-100 rounded">
          <div
            className={`p-4 font-bold ${
              isActive ? "bg-white" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setIsActive(true);
                productsTab();
              }}
            >
              Manufacturing Products
            </button>
          </div>
          <div
            className={`p-4 font-bold ${
              !isActive ? "bg-white" : ""
            } rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}
          >
            <button
              onClick={() => {
                setIsActive(false);
                servicesTab();
              }}
            >
              Manufacturing Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManufacturingBanner;
