import Image from "next/image";
import Link from "next/link";

interface ServicesCardProps {
  logo: string;
  url: string;
}
const ServicesCard = ({ logo, url }: ServicesCardProps) => {
  return (
    <Link href={url}>
      <div className="relative bg-white hover:bg-black rounded-xl h-12 w-20 p-4 md:h-48 md:w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <Image fill src={logo} alt="img" className="hover:hidden" />
      </div>
    </Link>
  );
};
export default ServicesCard;
