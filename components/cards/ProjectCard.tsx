import Link from "next/link";
import Image from "next/image";
import Hero from "../pageComponets/home/Hero";

const ProjectCard = () => {
  return (
    <div className=" border-b-2 border-gray-500  flex flex-col overflow-hidden m-2 p-1">
      <Image src="/images/imba.jpg" width={350} height={400} alt="img" />
      <Link href="#">
        <h5 className="font-semibold text-sx">Park street mall</h5>
      </Link>
    </div>
  );
};
export default ProjectCard;
