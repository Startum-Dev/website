import Link from "next/link";
import PropertyCard from "../../../cards/PropertyCard";
import BlogPost from "../../../cards/BlogPost";
import Image from "next/image";
import RealEstateSearchbar from "./shared/RealEstateSearchBar";
import BuyPropertyFAQ from "./buyTabComponets/BuyPropertyFAQ";

const BuyTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-8 gap-16">
      <h1 className="text-3xl md:text-6xl font-semibold text-primary-black">
        Buy property
      </h1>
      <p className="text-xs md:text-sm text-primary-black text-center">
        Ready to fall in love with your dream home? Chaînes Lloyd Real Eastate
        boasts a large array of property for sale across the nation. From
        commercial property to vacant land, developments, farms and residential
        homes of all shapes and sizes, our global footprint ensures we can offer
        you the very best of whatever you&apos;re looking for. We offer
        unparalleled, area focused expertise, whether you&apos;re seasoned at
        looking at property for sale, or it&apos;s your first time in the
        property market and you need guidance on how to buy property. Start your
        property search with us today.
      </p>
      <div className="flex md:w-2/3 flex-col gap-4">
        <h1 className="text-xl md:text-2xl font-semibold text-primary-black">
          Find your dream property
        </h1>
        <RealEstateSearchbar />
      </div>
      <div className="w-screen p-8 bg-primary-black flex flex-col items-center gap-8 justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-xl md:text-4xl font-semibold text-primary-black">
            Choose your ideal style of living
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/imba.jpg" fill alt="image" />
            </div>
            <Link href="/realEastate/residential">
              <div className="flex flex-row items-center justify-center py-4">
                <h2 className="text-text-color  font-bold">
                  Residential Houses
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/imba.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">
                Cormercial Properties
              </h2>
            </div>
          </div>
          <div className="flex flex-col bg-background-black shadow rounded p-2 h-96 w-96">
            <div className="w-full h-full relative">
              <Image src="/images/imba.jpg" fill alt="image" />
            </div>
            <div className="flex flex-row items-center justify-center py-4">
              <h2 className="text-text-color  font-bold">
                Student Accomodation
              </h2>
            </div>
          </div>
        </div>
      </div>
      <BuyPropertyFAQ />
    </div>
  );
};
export default BuyTab;
