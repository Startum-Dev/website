import Image from "next/image";
import SolarCard from "./components/SolarCard";

const PetroleumTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Petroleum Services
      </h1>
      <div className="w-full flex-col md:grid md:grid-cols-2 gap-4">
        <SolarCard image="/images/sol1.jpg" heading="Diesel" />
        <SolarCard image="/images/sol2.jpg" heading="Petrol " />
        <SolarCard image="/images/sol3.jpg" heading="Lubricants " />
        <SolarCard image="/images/sol4.jpg" heading="Parffin" />
      </div>
    </div>
  );
};
export default PetroleumTab;
