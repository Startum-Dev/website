import Image from "next/image";

const MinesTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Our Mines
      </h1>

      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/build.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-text-color">
            Shop fitting works, General Repairs and maintenance, Painting,
            Carpentry, Glazing, Plumbing, Electrical, maintenance and
            installations, Waterproofing, Tiling, Flooring, Civil works, Water
            and sewer reticulation, Steel works
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="p-4 w-full h-96 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-text-color">
            Structural steel design, Earth works, Roads rehabilitation, Hard
            Stands, Renewable energy, Fencing, Civil Consultancy, Bridges, Site
            Clearance, Excavations, Compaction, Roads Resurfacing
          </p>
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/land.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/build.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-text-color">
            Shop fitting works, General Repairs and maintenance, Painting,
            Carpentry, Glazing, Plumbing, Electrical, maintenance and
            installations, Waterproofing, Tiling, Flooring, Civil works, Water
            and sewer reticulation, Steel works
          </p>
        </div>
      </div>
    </div>
  );
};
export default MinesTab;
