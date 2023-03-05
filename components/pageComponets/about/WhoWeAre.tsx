const WhoWeAre = () => {
  return (
    <div className="flex flex-col w-screen md:grid md:grid-cols-2  md:px-64 md:py-24">
      <div className="items-start justify-start">
        <h1 className="text-black text-6xl font-bold">Who we are</h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl text-black">
          Chaînes Lloyd Incorporated is a diversified and integrating company
          which ventures in several sectors mainly Mining, Manufacturing,
          Construction, Real Estate, Energy & Petroleum, Medical & Healthcare
          and Microfinance.
        </p>
        <p className="text-2xl text-black">
          Our main aim is to deliver value for money and create customer and
          clientele satisfaction in the society or industries we are operating
          in. We are truly grateful for your continuous support and guidance.
        </p>
        <p className="text-2xl text-black">
          Since the company was established in 2021, CL has cultivated its
          status as a pioneer through an art and essence of finding solutions
          through product and service diversification.
        </p>
      </div>
    </div>
  );
};
export default WhoWeAre;
