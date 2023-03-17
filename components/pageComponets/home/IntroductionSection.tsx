import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DemoCarousel from "../../courosel/Courosel";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col w-screen md:grid md:grid-cols-2 px-8 md:px-64 md:py-24">
      <div className="items-start justify-start">
        <h1 className="text-black text-3xl md:text-6xl font-bold">
          Chaînes Lloyd
        </h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-xl md:text-2xl text-black">
          Chaînes Lloyd Incorporated is a diversified and integrating company
          which ventures in several sectors mainly Mining, Manufacturing,
          Construction, Real Estate, Energy & Petroleum, Medical & Healthcare
          and Microfinance.Our main aim is to deliver value for money and create
          customer and clientele satisfaction in the society or industries we
          are operating in. We are truly grateful for your continuous support
          and guidance. Since the company was established in 2021, CL has
          cultivated its status as a pioneer through an art and essence of
          finding solutions through product and service diversification.
        </p>
      </div>
      <div className="col-span-2">
        <DemoCarousel />
      </div>
    </div>
  );
};
export default IntroductionSection;
