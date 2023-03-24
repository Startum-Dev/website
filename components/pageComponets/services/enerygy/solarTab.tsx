import Image from "next/image";
import SolarCard from "./components/SolarCard";

const SolarTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Solar
      </h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
      </div>
    </div>
  );
};
export default SolarTab;
