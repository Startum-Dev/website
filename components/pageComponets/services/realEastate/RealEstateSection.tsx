import Link from "next/link";
import PropertyCard from "../../../cards/PropertyCard";
import BlogPost from "../../../cards/BlogPost";

const RealEastateSection = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <h1 className="text-black 3xl md:text-6xl font-bold p-8">
        Featured Properties
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((property, i) => (
          <PropertyCard key={i} />
        ))}
      </div>
    </div>
  );
};
export default RealEastateSection;
