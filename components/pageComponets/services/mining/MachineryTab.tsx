import Image from "next/image";

const MachineryTab = () => {
  return (
    <div className="w-full h-full flex-col">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <h1 className="text-black text-3xl md:text-6xl font-bold">Machinery</h1>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
            <Image
              fill
              src="/images/grad.jpg"
              alt="img"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <div className="w-full h-96 overflow-hidden  grid gap-2 grid-cols-2">
            <div className="relative hover:grayscale">
              <Image
                fill
                src="/images/mac1.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="relative hover:grayscale">
              <Image
                fill
                src="/images/mac2.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="relative hover:grayscale">
              <Image
                fill
                src="/images/mac3.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="relative hover:grayscale">
              <Image
                fill
                src="/images/tipper.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MachineryTab;
