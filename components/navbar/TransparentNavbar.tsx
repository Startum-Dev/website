import Link from "next/link";
import {
  BsWhatsapp,
  BsInstagram,
  BsTwitter,
  BsSearch,
  BsXCircleFill
} from "react-icons/bs";
import MobileDropDownMenu from "../dropdowns/MobileDropDownMenu";
import ButtonBlue from "../buttons/ButtonBlue";
import Image from "next/image";
import React, { useState } from "react";

export default function TransparentNavbar() {
  const [showMobileSearchbar, setShowMobileSearhBar] = useState(false);

  return (
    <div className="fixed top-0 w-screen bg-white  p-4 md:px-64 items-center justify-between shadow flex py-2 h-20 z-10 text-primary-blue">
      <Image src="/images/logo.png" height={120} width={240} alt="logo" />
      <div className="hidden md:flex w-96 items-center justify-center gap-4">
        <Link href="/">
          <text className="text-black text-lg font-semibold">Home</text>
        </Link>
        <Link href="/blog">
          <text className="text-black text-lg font-semibold">Blog</text>
        </Link>
        <Link href="/about-us">
          <text className="text-black text-lg font-semibold">About</text>
        </Link>
        <Link href="/contact-us">
          <text className="text-black text-lg font-semibold">Contact</text>
        </Link>
      </div>
      <div className=" hidden md:flex items-center justify-between gap-4">
        <Link href="/#services">
          <ButtonBlue text="Our Services" onClick={() => {}} />
        </Link>
      </div>
      <div className="flex items-center md:hidden gap-4">
        <MobileDropDownMenu />
      </div>
    </div>
  );
}
