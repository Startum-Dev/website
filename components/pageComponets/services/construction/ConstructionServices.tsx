import Image from "next/image";

const ConstructionServices = () => {
  return (
    <div className="p-24 flex flex-col w-full gap-8">
      <h1 className="text-black font-semibold text-3xl">Our Services</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full border-b-2 border-gray-200 p-2">
          <h1 className="text-black font-semibold text-6xl">Architecture</h1>
        </div>
        <div className="w-full border-b-2 border-gray-200 p-2">
          <h1 className="text-black font-semibold text-6xl">Consultancy</h1>
        </div>
        <div className="w-full border-b-2 border-gray-200 p-2">
          <h1 className="text-black font-semibold text-6xl">Interior design</h1>
        </div>
      </div>
    </div>
  );
};
export default ConstructionServices;
