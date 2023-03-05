import ServicesCard from "../../cards/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="bg-gray-300  items-center jutsif-center flex flex-col w-screen md:px-64 py-24 gap-8">
      <h1 className="text-black text-6xl font-bold p-8">Our Services</h1>
      <p className="text-2xl text-black -mt-12">
        we are diversified into seven major industries
      </p>
      <div className="flex flex-row  items-center justify-cencter gap-4 mt-16">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
      <div className="flex flex-row items-center justify-cencter gap-4">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
};
export default ServicesSection;
