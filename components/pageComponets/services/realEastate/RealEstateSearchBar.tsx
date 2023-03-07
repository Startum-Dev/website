import StateButton from "../../../buttons/StateButtons";
import Input from "../../../inputs/Input";
import ButtonBlue from "../../../buttons/ButtonBlue";
import { useState } from "react";

const RealEstateSearchbar = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row items-center justify-center gap-4">
        <StateButton
          text="For Sale"
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
        <StateButton
          text="For Sale"
          isActive={!isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
      <div className="bg-white flex flex-col md:grid md:grid-cols-5 gap-4 p-12">
        <div className="md:col-span-2">
          <Input placeholder="Property Type" />
        </div>
        <div className="md:col-span-2">
          <Input placeholder="City or Surburb" />
        </div>
        <div>
          <ButtonBlue text="search property" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default RealEstateSearchbar;
