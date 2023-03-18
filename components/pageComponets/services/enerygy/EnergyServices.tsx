import Image from "next/image";

const EnergyServices = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-black text-3xl md:text-6xl font-bold">
        Our Services
      </h1>

      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/grind.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center">
          <p className="text-xl md:text-2xl text-black text-center">
            Slitting, leveling and tension leveling, shearing and slearing,
            plate burning, annealing, turning and polishing, warehousing and
            repackaging, chemical milling, grinding, plasma cutting, saw
            cutting, heat treating, honing, galvanizing, laser cutting,
            centerless grinding, export packaging, production shearing and coil
            leveling.
          </p>
        </div>
      </div>
    </div>
  );
};
export default EnergyServices;
