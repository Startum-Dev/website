import Link from "next/link";
import PropertyCard from "../../../cards/PropertyCard";
import BlogPost from "../../../cards/BlogPost";
import Image from "next/image";
import RealEstateSearchbar from "./shared/RealEstateSearchBar";
import BuyPropertyFAQ from "./buyTabComponets/BuyPropertyFAQ";

const RentTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-8 gap-16">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Rent property
      </h1>
      <p className="text-xs md:text-sm text-text-color text-center">
        Are you looking for the perfect rental property? Whether it be a short
        term stay of a few weeks or months, or a long-term home for several
        years, We offer a diversity of options to suit your every need. Discover
        rental properties that support the widest range of lifestyles. From
        students and young professionals starting out, to couples testing the
        waters before advancing to home ownership, our apartments and houses for
        rent offer you the chance to live the tenant life the way you’ve always
        wanted. Select your rental type below to find your dream rental property
        today.
      </p>
      <div className="w-screen p-8 bg-primary-black flex flex-col items-center gap-8 justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-xl md:text-4xl font-semibold text-text-color">
            Rental Types
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-row bg-background-black shadow rounded w-full md:w-1/2 h-52 p-2">
            <div className="flex flex-col w-full h-full relative ">
              <Image src="/images/imba.jpg" fill alt="image" />
            </div>
            <div className="flex flex-col justify-center px-4">
              <h2 className="text-text-color font-bold">Long Term Rentals</h2>
              <p className="text-xs md:text-sm text-text-color ">
                If you&apos;re looking for the perfect place to call home for
                more than a few months, Chaînes Lloyd Real Eastate has the
                largest portfolio of quality long-term rental properties for
                families, professionals or students. We make it easy to search
                and compare a range of rental properties located in the most
                sought-after neighbourhoods.
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-background-black shadow rounded w-full md:w-1/2 h-52 p-2">
            <div className="flex flex-col w-full h-full relative ">
              <Image src="/images/imba.jpg" fill alt="image" />
            </div>
            <div className="flex flex-col justify-center px-4">
              <h2 className="text-text-color font-bold">
                Holiday letting / Short term rentals
              </h2>
              <p className="text-xs md:text-sm text-text-color ">
                Holiday rental properties provide tourists and business people
                who wish to unwind for a couple of days with a home away from
                home. Whether you prefer a self-catering holiday villa, luxury
                unit or seaside mansion, we have an abundance of short term
                rentals and holiday accommodation to make your getaway a
                memorable experience.
              </p>
            </div>
          </div>
          <div className="w-screen p-8 bg-background-black flex flex-col items-center gap-8 justify-center">
            <div className="flex flex-row items-center justify-center">
              <h1 className="text-xl md:text-4xl font-semibold text-text-color">
                Choose your ideal style of living
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
                <div className="w-full h-full relative">
                  <Image src="/images/imba.jpg" fill alt="image" />
                </div>
                <div className="flex flex-row items-center justify-center py-4">
                  <h2 className="text-text-color  font-bold">Hotels</h2>
                </div>
              </div>
              <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
                <div className="w-full h-full relative">
                  <Image src="/images/imba.jpg" fill alt="image" />
                </div>
                <div className="flex flex-row items-center justify-center py-4">
                  <h2 className="text-text-color  font-bold">Lodges</h2>
                </div>
              </div>
              <div className="flex flex-col bg-primary-black shadow rounded p-2 h-96 w-96">
                <div className="w-full h-full relative">
                  <Image src="/images/imba.jpg" fill alt="image" />
                </div>
                <div className="flex flex-row items-center justify-center py-4">
                  <h2 className="text-text-color  font-bold">Guest Houses</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyPropertyFAQ />
    </div>
  );
};
export default RentTab;
