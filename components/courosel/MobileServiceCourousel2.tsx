import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const MobileServicesCarousel2 = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showStatus={false}
      className="w-screen bg-primary-black"
    >
      <div className="w-full h-96 flex flex-col items-start justify-center gap-4 p-4 relative">
        <Image fill src="/images/min.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            we offer top class mining services
          </p>
          <Link href="/mining">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 p-4 relative">
        <Image fill src="/images/coco.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            the best of the best at construction
          </p>
          <Link href="/construction">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 p-4 relative">
        <Image fill src="/images/fin.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            let us help you acquire financial freedom
          </p>
          <Link href="/microfinance">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 p-4 relative">
        <Image fill src="/images/eastate.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            with our real eastate services you can get a property to buy or rent
          </p>
          <Link href="/real-eastate">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col  items-start justify-center gap-4 p-4 relative ">
        <Image fill src="/images/power.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            come to us for all your power and fuel problems
          </p>
          <Link href="/energy-and-petroleum">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col  items-start justify-center gap-4 p-4 relative">
        <Image fill src="/images/fact.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            we also offer manufacturing of chemicals and many other products
          </p>
          <Link href="/manufacturing">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center gap-4 p-4 relative ">
        <Image fill src="/images/dodo.png" alt="img" />
        <div className="absolute flex flex-col gap-4 items-center justify-center bg-transparent-white w-full h-full left-0">
          <p className="font-semibold text-white">
            get medical support with our health and medicine service
          </p>
          <Link href="/health-and-medicine">
            <button className="border-2 border-primary-yellow rounded px-4 py-2 text-primary-yellow">
              Visit Now
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default MobileServicesCarousel2;
