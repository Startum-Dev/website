import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Microfinance
      </h1>

      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/grind.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/laser.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
      <p className="text-xs md:text-sm text-text-color text-center">
        CL provides a broad range of banking, investing, asset management, and
        other financial and risk management products and services to
        individuals, small and middle market businesses, and major corporations.
        Our experience and capabilities in raising capital for several clients
        from different sectors of the economy which provide goods and services
        to Individuals, Non-Government Organizations, large Corporates, the
        Mines, Government, the Banking Sector, Telecoms Industry, Energy and
        Petroleum, Manufacturing, Construction, Medical and Healthcare, Real
        estate and infrastructure companies amongst others is the hallmark of
        our success. Our goal has always been to be the first choice advisors
        for anyone seeking project capital in Zimbabwe. To this end, our
        exclusive focus is to offer our clients a full spectrum of investment
        banking services including capital raising, debt syndication, deal
        structuring, corporate lease financing, working capital finance, mergers
        and acquisitions, private equity and research advisory. Our long-term
        commitment to Responsible Growth enables us to provide stability to our
        customers and clients through difficult times, continue to support the
        communities where we work and live, and generate more consistent
        earnings for our shareholders within a well-defined risk framework. Our
        commitment to ESG leadership has given us unique possibilities to
        strengthen client relationships and achieve shared success with the
        communities in which we work.
      </p>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/grind.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Promoting Sustainable Development
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            Our growth strategy emphasizes responsible growth. It assists us in
            driving the economy in a sustainable manner while managing risk and
            creating a safe environment.We are not only assisting in the
            creation of jobs, but also in the development of communities, the
            promotion of economic mobility, and the resolution of society&apos;
            s most pressing issues all over the world.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-4">
        <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Our Objective
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            To create long-term success by reinvesting profits in our people,
            our capabilities, our client experience, our communities, and our
            shareholders.
          </p>
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/grind.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
export default ServicesTab;
