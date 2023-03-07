import Image from "next/image";

const PropertyDetails = () => {
  return (
    <div className="flex flex-row gap-8 justify-between mt-24">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black ">
              3 bedroomed house
            </h1>
            <h2 className="text-xl  text-black ">Harare, Cranborne</h2>
          </div>
          <h1 className="text-2xl font-semibold text-black ">USD$30000</h1>
        </div>
        <Image
          src="/images/house3.jpg"
          height={800}
          width={800}
          alt="property"
        />
      </div>
      <div className="shadow bg-white flex-col gap-4 flex p-4">
        <h1 className="text-2xl font-semibold text-black ">Contact Agent</h1>
      </div>
    </div>
  );
};
export default PropertyDetails;
