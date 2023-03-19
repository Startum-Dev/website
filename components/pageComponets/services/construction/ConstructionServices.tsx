import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        What we do
      </h1>
      <p className="text-xs md:text-sm text-text-color text-center md:px-32">
        CL construction delivers high quality, reliable construction services
        for the society and governmental establishments. In addition, we have
        broad expertise with commercial clients. we are fully licensed
        specialist in all facets of building maintenance and refurbishment,
        programmed maintenance works and other specialised works. Through
        experience we offer the highest standards for safety, quality, and
        integrity. Dedicated to excellence, we utilise innovative building
        contraction, maintenance and renovation skills to change and improve the
        way Projects are designed, managed and build.
      </p>
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
          <p className="text-xs md:text-sm text-text-color text-center md:px-32">
            Shop fitting works, General Repairs and maintenance, Painting,
            Carpentry, Glazing, Plumbing, Electrical, maintenance and
            installations, Waterproofing, Tiling, Flooring, Civil works, Water
            and sewer reticulation, Steel works
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="p-4 w-full h-96 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-text-color text-center md:px-32">
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
    </div>
  );
};
export default ServicesTab;
