const Hero = () => {
  return (
    <div className="h-screen w-screen  bg-cover flex flex-col md:grid md:grid-cols-2 items-center justify-center px-8 md:px-64 relative">
      <video
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen top-0 object-cover"
      >
        <source src="videos/backg.mp4" />
      </video>
      <div className="absolute bg-transparent-white w-screen h-screen top-0"></div>
      <div className="items-center justify-center z-10">
        <h1 className="text-primary-yellow text-4xl md:text-8xl font-bold">
          SUSTAINABILITY, QUALITY & INNOVATION
        </h1>
        <p className="text-base md:text-2xl text-primary-yellow">
          Constructing a legacy that will live forever
        </p>
      </div>
    </div>
  );
};
export default Hero;
