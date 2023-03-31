import ProductCard from "../../../cards/ProductCard";
import Input from "../../../inputs/Input";
import { BsSearch } from "react-icons/bs";
const ProductsTab = () => {
  return (
    <div className="w-full h-full flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="col-span-4 flex flex-row items-center justify-between">
        <div className="flex-row flex items-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <h1 className="font-bold text-sm text-color">Filters:</h1>
            <select className="bg-primary-black border-2 border-faint-gold rounded px-4 py-2 w-40">
              <option>Default</option>
              <option>By Price</option>
              <option>Type</option>
              <option>New</option>
            </select>
          </div>
        </div>
        <div className="flex-row flex items-center gap-2">
          <div className="hidden md:flex flex-row items-center gap-2">
            <Input placeholder="search for product" />
            <button className="flex py-2 h-11 px-6 bg-primary-yellow text-white text-base hover:bg-primary-black font-bold">
              Search
            </button>
          </div>
          <div className="md:hidden flex flex-row items-center bg-primary-yellow p-4 rounded hover:bg-primary-black">
            <BsSearch />
          </div>
        </div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};
export default ProductsTab;
