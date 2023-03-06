import Image from "next/image";

const VisionSection = () => {
  return (
    <div className="flex flex-col w-screen md:grid md:grid-cols-2 p-8 md:px-64 md:py-24">
      <div className="items-start justify-start">
        <img src="images/about.png" alt="img" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-black text-3xl md:text-6xl font-bold">Vision</h1>
        <p className="text-xl md:text-2xl text-black">
          Constructing a legacy that will live forever.
        </p>
        <h1 className="text-black text-3xl md:text-6xl font-bold">
          Mission Statement
        </h1>
        <p className="text-xl md:text-2xl text-black">
          Driven by the essence of clientele and stakeholders&apos; satisfaction
          in the society and industries we venture in. Deep affinity poesy for
          authenticity is our art, as quality is rare in a world of mimicry.
        </p>
      </div>
    </div>
  );
};
export default VisionSection;
