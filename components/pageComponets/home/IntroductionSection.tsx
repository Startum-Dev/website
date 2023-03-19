import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ServicesCarousel from "../../courosel/ServicesCourosel";
import MobileServicesCarousel from "../../courosel/MobileServiceCourosel";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <div className="hidden md:flex md:flex-row w-2/3 relative -mt-32">
        <ServicesCarousel />
      </div>
      <div className="w-2/3 md:hidden relative -mt-32 mb-12">
        <MobileServicesCarousel />
      </div>
      <div className="flex flex-col w-full  md:grid md:grid-cols-2 px-8 md:w-2/3 md:py-24">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="h-40 w-36 sm:h-44 sm:w-40 md:h-80 md:w-64 bg-primary-black overflow-hidden relative">
              <Image src="/images/wala.png" fill alt="img" />
            </div>
            <div className="h-40 w-36 sm:h-44 sm:w-40 md:h-80 md:w-64  overflow-hidden relative">
              <Image src="/images/dez.png" fill alt="img" />
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <div className="h-40 w-36 sm:h-44 sm:w-40 md:h-80 md:w-64  overflow-hidden relative">
              <Image src="/images/man.png" fill alt="img" />
            </div>
            <div className="h-40 w-36 sm:h-44 sm:w-40 md:h-80 md:w-64 bg-primary-black overflow-hidden relative">
              <Image src="/images/mine.png" fill alt="img" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 ">
          <h1 className="text-sx font-bold text-text-color">ABOUT US</h1>
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Chaînes Lloyd Incorporated
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            Chaînes Lloyd Incorporated is a diversified and integrating company
            which ventures in several sectors mainly Mining, Manufacturing,
            Construction, Real Estate, Energy & Petroleum, Medical & Healthcare
            and Microfinance.Our main aim is to deliver value for money and
            create customer and clientele satisfaction in the society or
            industries we are operating in. We are truly grateful for your
            continuous support and guidance. Since the company was established
            in 2021, CL has cultivated its status as a pioneer through an art
            and essence of finding solutions through product and service
            diversification.
          </p>
          <div className="flex">
            <Link href="/about-us">
              <button className="flex py-2 px-6 bg-primary-yellow text-white text-base font-bold hover:bg-primary-black">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroductionSection;
