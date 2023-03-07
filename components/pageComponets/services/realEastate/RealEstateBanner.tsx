import RealEstateSearchbar from "./RealEstateSearchBar";

const RealEastateBanner = () => {
  return (
    <div
      className="w-screen  bg-realeastatebg flex flex-row items-center justify-center pt-4 md:p-24 bg-cover"
      style={{ height: 500 }}
    >
      <RealEstateSearchbar />
    </div>
  );
};
export default RealEastateBanner;
