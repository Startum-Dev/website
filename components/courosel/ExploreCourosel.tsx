import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ExploreCarousel = () => {
  return (
    <Carousel autoPlay>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/slider1.jpg"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/backg.png"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/intro.png"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/slider1.jpg"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/backg.png"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/intro.png"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
      <div
        className="md:col-span-2 items-center justify-center flex flex-col w-full mt-12 relative"
        style={{ height: 600 }}
      >
        <Image
          src="/images/intro.png"
          fill
          className="w-full rounded-3xl"
          alt="img"
        />
      </div>
    </Carousel>
  );
};

export default ExploreCarousel;
