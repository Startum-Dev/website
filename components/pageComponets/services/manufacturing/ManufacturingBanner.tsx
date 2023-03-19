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
      <div>
        <h1 className="hidden md:absolute left-0 text-white font-semibold text-xl mt-8 ml-10">
          Manufacturing
        </h1>
      </div>
      <div className="bg-primary-yellow w-2/3 md:w-1/3 p-1 rounded">
        <div className="flex flex-col md:flex-row items-center bg-primary-black justify-evenly p-2 border-2 border-gray-100 rounded">
          <div
            className={`p-4 font-bold ${
              isActive ? "bg-primary-yellow" : ""
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
              !isActive ? "bg-primary-yellow" : ""
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
