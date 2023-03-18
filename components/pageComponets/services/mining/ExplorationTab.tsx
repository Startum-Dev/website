import ExploreCarousel from "../../../courosel/ExploreCourosel";

const ExplorationTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-black text-3xl md:text-6xl font-bold">Exproration</h1>
      <p className="text-xl md:text-2xl text-black text-center">
        Slitting, leveling and tension leveling, shearing and slearing, plate
        burning, annealing, turning and polishing, warehousing and repackaging,
        chemical milling, grinding, plasma cutting, saw cutting, heat treating,
        honing, galvanizing, laser cutting, centerless grinding, export
        packaging, production shearing and coil leveling.
      </p>
      <div className="w-full flex flex-col  gap-4">
        <ExploreCarousel />
      </div>
    </div>
  );
};
export default ExplorationTab;
