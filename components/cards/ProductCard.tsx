import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-white shadow rounded flex flex-col overflow-hidden m-2">
      <div className=" p-4 h-48 w-full overflow-hidden relative">
        <Image fill src="/images/house3.jpg" alt="img" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between  py-4 px-1">
          <h5 className="font-bold text-xl text-black">Product 1</h5>
          <p className="text-sm text-xl text-black">$3.00</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
