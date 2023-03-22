import Link from "next/link";
import MobileDropDownMenu from "../dropdowns/MobileDropDownMenu";
import ServicesDropDownMenu from "../dropdowns/ServicesDropDown";
import Image from "next/image";
import React, { useState } from "react";

export default function TransparentNavbar() {
  const [showMobileSearchbar, setShowMobileSearhBar] = useState(false);

  return (
    <div className="fixed top-0 w-screen bg-primary-black  p-4 md:px-64 items-center justify-between shadow flex py-2 h-20 z-20 text-primary-blue font-sans">
      <Image src="/images/logo.png" height={120} width={240} alt="logo" />
      <div className="hidden md:flex w-96 items-center justify-center gap-14">
        <Link href="/">
          <button className="font-sans text-white hover:text-primary-yellow hover:underline hover:underline-offset-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold">
            HOME
          </button>
        </Link>
        <ServicesDropDownMenu />
        <Link href="/blog">
          <button className="text-white hover:text-primary-yellow hover:underline hover:underline-offset-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold">
            BLOG
          </button>
        </Link>
        <Link href="/about-us">
          <button className="text-white hover:text-primary-yellow hover:underline hover:underline-offset-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold">
            ABOUT
          </button>
        </Link>
        <Link href="/contact-us">
          <button className="text-white hover:text-primary-yellow hover:underline hover:underline-offset-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold">
            CONTACT
          </button>
        </Link>
      </div>
      <div className=" hidden md:flex items-center justify-between gap-4">
        <Link href="/projects-hub">
          <button className="rounded border-2 border-white text-white hover:text-primary-yellow hover:border-primary-yellow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm font-bold p-2">
            PROJECT HUB
          </button>
        </Link>
      </div>
      <div className="flex items-center md:hidden gap-4">
        <MobileDropDownMenu />
      </div>
    </div>
  );
}
