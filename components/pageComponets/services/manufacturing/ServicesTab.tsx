import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Manufacturing
      </h1>
      <p className="text-xs md:text-sm text-text-color text-center">
        CL is a professional manufacturer, certified distributor and trading
        integrating company, specializing in the design, production and sale of
        chemicals, ferrous and non ferrous metals. We serve our customers with
        the concept of honesty, pragmatism, innovation, and win-win, and have a
        good reputation in all the industries and markets we serve which are
        inclusive of chemical, automotive, mining, construction, agricultural,
        medical, mechanical sectors. Based on highly creative innovative ideas
        and technology, our approach to manufacture optimized structural,
        architectural chemicals and engineering figures has earned us a strong
        reputation among both domestic and foreign clients. We have significant
        experience and knowledge of relevant markets. This has helped us create
        a niche in the valuation of our products. During our valuation process,
        valuers analyse sales, making adjustments for the added value of
        improvements. Among the issues we consider in the valuation of plant and
        machinery, are the specific utility or usefulness of the asset, its
        contribution to the production of goods and services for which they are
        designed and deployed. Additionally, we also cover estimation in
        monetary terms, the worth of the plant and machinery in existing use or
        their contribution to profitability of the business after considering
        the market situation or standard of maintenance within Zimbabwe or any
        nation we will be operating in. Our services also extend to asset
        valuation in which we use both subjective and objective measurements
        depending on the purpose of valuation whether it is to prepare for a
        sale or prior to purchasing insurance.
      </p>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/grind.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/laser.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Services Offered
      </h1>
      <p className="text-xs md:text-sm text-text-color text-center">
        Slitting, leveling and tension leveling, shearing and slearing, plate
        burning, annealing, turning and polishing, warehousing and repackaging,
        chemical milling, grinding, plasma cutting, saw cutting, heat treating,
        honing, galvanizing, laser cutting, centerless grinding, export
        packaging, production shearing and coil leveling.
      </p>
    </div>
  );
};
export default ServicesTab;
