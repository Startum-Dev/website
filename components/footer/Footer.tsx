import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen bg-black md:px-64 flex flex-col py-24">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src="images/logo.png" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl">Quick Links</h2>
          <div className="grid grid-cols-2">
            <Link href="#">
              <text className="text-white text-base">Mining</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Real Eastat</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Construction</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Energy and Petroleum</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Manufacturing</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Health Care</text>
            </Link>
            <Link href="#">
              <text className="text-white text-base">Microfinance</text>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl">Contact Us</h2>
          <Link href="#">
            <text className="text-white text-base">
              +263 715 666 790/784 617 130
            </text>
          </Link>
          <Link href="#">
            <text className="text-white text-base">
              chaineslloyd.co.zw@gmail.com
            </text>
          </Link>
          <Link href="#">
            <text className="text-white text-base">chaineslloyed</text>
          </Link>
        </div>
      </div>
      <hr className="my-12 bg-white" />
      <div className="w-full items-center justify-center flex fles-row">
        <text className="text-white text-xs">
          Copyright © 2023 "Chaînes Lloyd All rights reserved.
        </text>
      </div>
    </div>
  );
};
export default Footer;
