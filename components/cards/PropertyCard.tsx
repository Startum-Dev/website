import Link from "next/link";
import Image from "next/image";

const PropertyCard = () => {
  return (
    <div className="bg-white shadow rounded flex flex-col overflow-hidden m-2">
      <div className=" p-4 h-48 w-full overflow-hidden relative">
        <Image fill src="/images/house3.jpg" alt="img" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col  px-4">
          <h5 className="font-bold text-black">3 Bedroomed House</h5>
          <p className="text-sm text-black">Harare, Cranborne</p>
        </div>
        <div className="flex flex-col px-4">
          <p className="text-black">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
            eiusmod tempor incididun consectetur...
          </p>
          <hr className="my-4" />
          <div className="items-center justify-end flex flex-row w-full mb-4">
            <Link href="#">
              <text className="text-sm text-ocean-blue">View Property</text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
