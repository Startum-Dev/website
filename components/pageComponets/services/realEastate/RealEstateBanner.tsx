import RealEstateSearchbar from "./RealEstateSearchBar";

const RealEastateBanner = () => {
  return (
    <div
      className="w-screen  bg-realeastatebg flex flex-row items-center justify-center pt-4 md:pt-24 bg-cover"
      style={{ height: 300 }}
    >
      <div>
        <h1 className="absolute left-0 text-white font-semibold text-xl mt-8 ml-10">
          Chaînes Lloyd Manufacturing
        </h1>
      </div>
    </div>
  );
};
export default RealEastateBanner;
