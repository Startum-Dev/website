import StateButton from "../../../../buttons/StateButtons";
import Input from "../../../../inputs/Input";
import ButtonBlue from "../../../../buttons/ButtonBlue";
import { useState } from "react";

const RealEstateSearchbar = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex w-full flex-col gap-8 bg-primary-black">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-4 p-12">
        <div className="md:col-span-4">
          <Input placeholder="Property Type" />
        </div>
        <div className="flex flex-row items-center justify-center bg-background-black  rounded hover:shadow hover:bg-primary-black">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
export default RealEstateSearchbar;
