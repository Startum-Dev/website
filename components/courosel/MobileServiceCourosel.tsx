import React, { Component } from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const MobileServicesCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showStatus={false}
      showArrows={false}
      className="bg-primary-black p-4 bg-white"
    >
      <Link href="/construction">
        <div className="w-52 h-52 flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
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
      <Link href="energy-and-petroleum">
        <div className="w-full h-full flex flex-col border-2 border-faint-gold items-start justify-center gap-4 p-4 relative">
          <Image fill src="/images/petrosilver.png" alt="img" />
        </div>
      </Link>
      <Link href="/microfinance">
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
    </Carousel>
  );
};

export default MobileServicesCarousel;
