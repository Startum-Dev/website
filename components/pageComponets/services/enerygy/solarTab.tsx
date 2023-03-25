import Image from "next/image";
import SolarCard from "./components/SolarCard";

const SolarTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Solar
      </h1>
      <div className="w-full flex-col md:grid md:grid-cols-3 gap-4">
        <SolarCard image="/images/sol1.jpg" heading="Technical Services" />
        <SolarCard image="/images/sol2.jpg" heading="Energy panels" />
        <SolarCard image="/images/sol3.jpg" heading="Wind Generators" />
        <SolarCard image="/images/sol4.jpg" heading="Solar PV Systems" />
        <SolarCard image="/images/sol5.jpg" heading="Inspection Checklist" />
        <SolarCard image="/images/sol6.jpg" heading="Solar Technology" />
        <SolarCard image="/images/sol9.jpg" heading="Energy Manufacture" />
        <SolarCard image="/images/sol8.jpg" heading="Solar Equipment" />
        <SolarCard image="/images/sol7.jpg" heading="Solar Technology" />
      </div>
    </div>
  );
};
export default SolarTab;
