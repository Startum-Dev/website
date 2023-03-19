import React, { Component } from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ServicesCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showStatus={false}
      showArrows={false}
    >
      <div className="flex grid grid-cols-4 w-full h-64 p-8 gap-8 bg-primary-black">
        <Link href="/construction">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/consilver.png" alt="img" />
          </div>
        </Link>
        <Link href="/real-eastate">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/realsilver.png" alt="img" />
          </div>
        </Link>
        <Link href="/manufacturing">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/mansilver.png" alt="img" />
          </div>
        </Link>
        <Link href="energy-and-petroleum">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/petrosilver.png" alt="img" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-4 w-full h-64 p-8 gap-8 bg-primary-black">
        <Link href="energy-and-petroleum">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/petrosilver.png" alt="img" />
          </div>
        </Link>
        <Link href="/microffinance">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
            <Image fill src="/images/microsilver.png" alt="img" />
          </div>
        </Link>
        <Link href="medical-and-health">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative ">
            <Image fill src="/images/health.png" alt="img" />
          </div>
        </Link>
        <Link href="/mining">
          <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative ">
            <Image fill src="/images/minesilver.png" alt="img" />
          </div>
        </Link>
      </div>
    </Carousel>
  );
};

export default ServicesCarousel;
