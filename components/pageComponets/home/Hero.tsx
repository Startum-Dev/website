const Hero = () => {
  return (
    <div className="h-screen w-screen bg-hero bg-cover flex flex-col md:grid md:grid-cols-2 items-center justify-center px-8 md:px-64">
      <div className="items-center justify-center">
        <h1 className="text-white text-4xl md:text-8xl font-bold">
          SUSTAINABILITY, QUALITY & INNOVATION
        </h1>
        <p className="text-base md:text-2xl text-white">
          Constructing a legacy that will live forever
        </p>
      </div>
    </div>
  );
};
export default Hero;
