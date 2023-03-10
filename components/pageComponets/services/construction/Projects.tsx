import ProjectCard from "../../../cards/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-gray-200 flex flex-col w-screen p-12 gap-8">
      <div className="flex fles-row items-center justify-between px-24">
        <h1 className="text-3xl font-semibold ">Our Projects</h1>
        <Link href="#">
          <h5>View All Projects</h5>
        </Link>
      </div>
      <hr />
      <div className="flex flex-row gap-4 items-center justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
export default Projects;
