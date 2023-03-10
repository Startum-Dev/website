import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="p-24 flex flex-col gap-8">
      <h1 className="text-black font-semibold text-3xl">
        We focus on projects of any sca that allow us to fundamentallyle
        re-think how people interact with structures
      </h1>
      <div className="relative">
        <Image
          src="/images/realbanner.png"
          height={200}
          width={250}
          className="w-full"
          alt="img"
        />
      </div>
    </div>
  );
};
export default IntroSection;
