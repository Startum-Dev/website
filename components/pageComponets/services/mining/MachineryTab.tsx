import Image from "next/image";

const MachineryTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Machinery
      </h1>
      <p className="text-xs md:text-sm text-text-color text-center">
        Our construction sector has a complete collection of high end machinery
        that makes sure we do the job better thab any one else
      </p>
      <div className="w-screen p-8 bg-primary-black flex flex-col items-center gap-8 justify-center">
        <div className="flex flex-row items-center justify-start">
          <h1 className="text-xl md:text-4xl font-semibold text-text-color">
            Earth moving machines
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/grad.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Crane</h2>
            </div>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/mac2.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Fork Lift</h2>
            </div>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/tipper.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Tipper</h2>
            </div>
            mining
          </div>
        </div>
      </div>
      <div className="w-screen p-8 bg-background-black flex flex-col items-center gap-8 justify-center">
        <div className="flex flex-row items-center justify-start">
          <h1 className="text-xl md:text-4xl font-semibold text-text-color">
            Earth moving machines
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/grad.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Crane</h2>
            </div>
          </div>
          <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/mac2.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Fork Lift</h2>
            </div>
          </div>
          <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/tipper.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Tipper</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen p-8 bg-primary-black flex flex-col items-center gap-8 justify-center">
        <div className="flex flex-row items-center justify-start">
          <h1 className="text-xl md:text-4xl font-semibold text-text-color">
            Earth moving machines
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/grad.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Crane</h2>
            </div>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/mac2.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Fork Lift</h2>
            </div>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/tipper.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">Tipper</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MachineryTab;
