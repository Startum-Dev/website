import Link from "next/link";
import {
  BsWhatsapp,
  BsEnvelope,
  BsPhone,
  BsInstagram,
  BsClock,
  BsCalendar
} from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="w-full w-screen  bg-primary-black h-12 items-center justify-between shadow flex  text-primary-blue font-sans">
      <div className="flex flex-row items-center justify-center px-12 gap-4 divide-x">
        <Link href="mailto:chaineslloyd.co.zw@gmail.com">
          <span className="flex flex-row items-center justify-center gap-2 hover:text-primary-yellow">
            <BsEnvelope size={24} />
            <p className="text-xs">chaineslloyd.co.zw@gmail.com</p>
          </span>
        </Link>
        <Link href="tel:+263715666790">
          <span className="flex flex-row items-center justify-center gap-2 ml-4 hover:text-primary-yellow">
            <BsPhone size={24} />
            <p className="text-xs ">+263 715 666 790</p>
          </span>
        </Link>
        <div className="flex flex-row items-center justify-center">
          <Link href="https://wa.me/+263715666790">
            <span className="flex flex-row items-center justify-center gap-2 ml-4 hover:text-primary-yellow">
              <BsWhatsapp size={24} />
            </span>
          </Link>
          <Link href="https://www.instagram.com/chaineslloyd_cl/">
            <span className="flex flex-row items-center justify-center gap-2 ml-4 hover:text-primary-yellow">
              <BsInstagram size={24} />
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-primary-yellow items-center justify-center flex flex-row h-full px-12 gap-4">
        <span className="items-center justify-center flex flex-row h-full gap-2 text-xs text-white font-semibold">
          <BsClock />
          <p className="font-semibold">Open hours Mon to Fri 0800 - 1700</p>
        </span>
        <button className="items-center justify-center flex flex-row h-full gap-2 text-xs text-white font-semibold text-primary-black">
          <BsCalendar />
          <p className="font-bold">Book Appointment</p>
        </button>
      </div>
    </div>
  );
};
export default Topbar;
