import ServicesCard from "../../cards/ServicesCard";

const ServicesSection = () => {
  return (
    <div
      className="bg-gray-300  items-center jutsif-center flex flex-col w-screen md:px-64 py-24 gap-4 md:gap-8 px-4"
      id="services"
    >
      <h1 className="text-black text-3xl md:text-6xl font-bold p-8">
        Our Services
      </h1>
      <p className="text-xl md:text-2xl text-black -mt-12 text-center">
        we are diversified into seven major industries
      </p>
      <div className="flex flex-row  items-center justify-cencter gap-1 md:gap-4 mt-16">
        <ServicesCard logo="/images/manufatcuring.png" url="/manufacturing" />
        <ServicesCard logo="/images/construction.png" url="/construction" />
        <ServicesCard logo="/images/energy.png" url="/energy-and-petroleum" />
        <ServicesCard logo="/images/mining.png" url="/mining" />
      </div>
      <div className="grid grid-cols-4 md:flex md:flex-row md:items-center md:justify-cencter gap-1 md:gap-4">
        <ServicesCard logo="/images/microfinance.png" url="/microfinance" />
        <ServicesCard logo="/images/health.png" url="/medical-and-health" />
        <ServicesCard logo="/images/real-eastate.png" url="/real-eastate" />
      </div>
    </div>
  );
};
export default ServicesSection;
