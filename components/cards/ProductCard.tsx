import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden m-2">
      <div className=" p-4 h-80  w-80 overflow-hidden relative hover:grayscale">
        <Image
          fill
          src="/images/man.jpg"
          alt="img"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col py-4 gap-2">
          <h5 className="font-bold text-black text-base">Manhole Cover</h5>
          <p className="font-bold text-base text-primary-yellow">$34.00</p>
          <div className="flex">
            <button className="flex py-2 px-6 bg-primary-yellow text-white text-base font-bold">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
