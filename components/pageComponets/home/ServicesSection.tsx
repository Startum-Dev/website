import MobileServicesCarousel2 from "../../courosel/MobileServiceCourousel2";
import ServicesCarousel2 from "../../courosel/ServicesCourosel2";

const ServicesSection = () => {
  return (
    <div
      className="bg-primary-black  items-center jutsif-center flex flex-col w-screen md:px-64 py-24 gap-4 md:gap-8 px-4"
      id="services"
    >
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Our Services
      </h1>
      <p className="text-sx font-semibold text-text-color -mt-6">
        we are diversified into seven major industries
      </p>
      <div className="hidden  md:flex md:flex-row md:items-center md:justify-cencter gap-1 md:gap-4">
        <ServicesCarousel2 />
      </div>
      <div className="flex flex-col md:hidden">
        <MobileServicesCarousel2 />
      </div>
    </div>
  );
};
export default ServicesSection;
