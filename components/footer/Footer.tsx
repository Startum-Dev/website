import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen bg-primary-git gitblack md:px-64 flex flex-col py-24 px-8">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        <div className="relative flex flex-row gap-4 items-center justify-center">
          <div className="relative w-28 h-20  rounded-lg overflow-hidden">
            <Image fill src="/images/paypal.png" alt="img" />
          </div>
          <div className="relative w-28 h-20 rounded-lg overflow-hidden">
            <Image fill src="/images/visa.jpg" alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-xl md:text-2xl">Quick Links</h2>
          <div className="grid grid-cols-2">
            <Link href="#">
              <text className="text-white text-sm md:text-base">Mining</text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-base">
                Real Eastate
              </text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-base">
                Construction
              </text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-base">
                Energy and Petroleum
              </text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-basee">
                Manufacturing
              </text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-base">
                Health Care
              </text>
            </Link>
            <Link href="#">
              <text className="text-white text-sm md:text-base">
                Microfinance
              </text>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl md:text-2xl">Contact Us</h2>
          <Link href="#">
            <text className="text-white text-sm md:text-base">
              +263 715 666 790/784 617 130
            </text>
          </Link>
          <Link href="#">
            <text className="text-white text-sm md:text-base">
              chaineslloyd.co.zw@gmail.com
            </text>
          </Link>
          <Link href="#">
            <text className="text-white text-sm md:text-base">
              chaineslloyed
            </text>
          </Link>
        </div>
      </div>
      <hr className="my-12 bg-white" />
      <div className="w-full items-center justify-center flex fles-row">
        <text className="text-white text-xs">
          Copyright © 2023 Chaînes Lloyd All rights reserved.
        </text>
      </div>
    </div>
  );
};
export default Footer;
