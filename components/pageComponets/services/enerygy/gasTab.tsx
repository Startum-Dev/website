import Image from "next/image";

const GasTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Gas
      </h1>

      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center md:px-64">
          <p className="text-xs md:text-sm text-text-color text-center">
            We are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country. We
            are also a reliable supplier of gas accross the whole country.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/tank3.png"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/truck.png"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-3xl font-semibold text-text-color">
            Liquified Petroleum Gas
          </h1>
          <p className="text-xs md:text-sm text-text-color text-center w-full">
            We offer ranges of LPG products, in compliance with all the
            concerning market standards and regulations that is Purified Propane
            [Commercial Propane (Heating)], Iso-Butane (High purity and
            Butane-mix) and Autogas [Commercial (Heating) and Special LPG-mix]
            At CL Product services we offer gas barbecue grills, gas cooktops,
            ovens, gas fireplaces, portable heaters, water heaters, gas kights,
            gas logs and a variety of outdoor fire features, like fire pits,
            fire bowls, luau torches and tiki torches.
          </p>
        </div>
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-3xl font-semibold text-text-color">
            Natural Gas
          </h1>
          <div className="w-full">
            <p className="text-xs md:text-sm text-text-color text-center w-full">
              We supply natural or industrial gases which are nitrogen, oxygen,
              carbon dioxide, argon, hydrogen, acetylene and helium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GasTab;
