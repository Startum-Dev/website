import Image from "next/image";

interface CardProps {
  image: string;
  heading: string;
}
const SolarCard = ({ image, heading }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-72 w-96">
      <div className="relative w-full h-full">
        <Image src={image} fill alt="image" />
      </div>
      <div className="flex flex-row items-center justify-center bg-primary-black py-4 px-8 rounded shadow w-4/5 relative -mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <h1 className="font-bold text-sm">{heading}</h1>
      </div>
    </div>
  );
};
export default SolarCard;
