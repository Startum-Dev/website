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
    <div className="fixed top-0 w-screen bg-white  p-4 md:px-64 items-center justify-between flex py-2 h-20 z-10 text-primary-blue">
      <Image src="/images/logo.png" height={120} width={240} alt="logo" />
      <div className="hidden md:flex w-96 items-center justify-center gap-4">
        <Link href="#">
          <text className="text-black text-lg font-semibold">Home</text>
        </Link>
        <Link href="#">
          <text className="text-black text-lg font-semibold">Blog</text>
        </Link>
        <Link href="#">
          <text className="text-black text-lg font-semibold">About</text>
        </Link>
        <Link href="#">
          <text className="text-black text-lg font-semibold">Contact</text>
        </Link>
      </div>
      <div className=" hidden md:flex items-center justify-between gap-4">
        <ButtonBlue text="Our Services" onClick={() => {}} />
      </div>
      <div className="flex items-center md:hidden gap-4">
        <BsSearch onClick={() => setShowMobileSearhBar(true)} />
        <MobileDropDownMenu />
      </div>
      {showMobileSearchbar && (
        <div className="absolute top-0 w-screen flex md:hidden left-0 bg-gray-200 h-12 px-4 items-center justify-center">
          <div className="flex w-64 items-center flex-row ">
            <BsXCircleFill
              onClick={() => setShowMobileSearhBar(false)}
              className="-ml-6"
            />
          </div>
        </div>
      )}
    </div>
  );
}
