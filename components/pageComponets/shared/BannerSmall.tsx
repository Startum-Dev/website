interface BannerProps {
  heading: string;
}

const BannerSmall = ({ heading }: BannerProps) => {
  return (
    <div className="w-screen h-96 bg-realeastatebg flex flex-row items-center justify-start p-24 bg-cover">
      <h1 className="text-white text-3xl font-bold">{heading}</h1>
    </div>
  );
};
export default BannerSmall;
