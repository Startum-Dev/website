import Link from "next/link";
import PropertyCard from "../../../cards/PropertyCard";
import BlogPost from "../../../cards/BlogPost";
import Image from "next/image";

const BuyTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Purchurse your own property today
      </h1>
      <p className="text-xs md:text-sm text-text-color">
        Tired of being a tenend? From our large and diversified portifolio of
        products we can help you purchase your own property at a very low and
        affordable prices. Terms and conditions apply.
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
    </div>
  );
};
export default BuyTab;
