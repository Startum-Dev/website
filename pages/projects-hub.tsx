import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Image from "next/image";

const Blog = () => {
  return (
    <AppLayout>
      <BannerSmall heading="Projects Hub" />
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Our Projects
          </h1>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
              <Image
                fill
                src="/images/grind.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4 items-center justify-center">
              <h1 className="text-xl md:text-3xl font-semibold text-text-color">
                Sponsorship.
              </h1>
              <p className="text-xs md:text-sm text-text-color text-center">
                Our growth strategy emphasizes responsible growth. It assists us
                in driving the economy in a sustainable manner while managing
                risk and creating a safe environment.We are not only assisting
                in the creation of jobs, but also in the development of
                communities, the promotion of economic mobility, and the
                resolution of society&apos; s most pressing issues all over the
                world.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4 items-center justify-center">
              <h1 className="text-xl md:text-3xl font-semibold text-text-color">
                Investment
              </h1>
              <p className="text-xs md:text-sm text-text-color text-center">
                Our growth strategy emphasizes responsible growth. It assists us
                in driving the economy in a sustainable manner while managing
                risk and creating a safe environment.We are not only assisting
                in the creation of jobs, but also in the development of
                communities, the promotion of economic mobility, and the
                resolution of society&apos; s most pressing issues all over the
                world.
              </p>
            </div>
            <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
              <Image
                fill
                src="/images/grind.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
              <Image
                fill
                src="/images/grind.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4 items-center justify-center">
              <h1 className="text-xl md:text-3xl font-semibold text-text-color">
                Alliance(Partnership)
              </h1>
              <p className="text-xs md:text-sm text-text-color text-center">
                Our growth strategy emphasizes responsible growth. It assists us
                in driving the economy in a sustainable manner while managing
                risk and creating a safe environment.We are not only assisting
                in the creation of jobs, but also in the development of
                communities, the promotion of economic mobility, and the
                resolution of society&apos; s most pressing issues all over the
                world.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className=" p-4 flex flex-col w-full h-96 overflow-hidden relative gap-4 items-center justify-center">
              <h1 className="text-xl md:text-3xl font-semibold text-text-color">
                Outright Purchase
              </h1>
              <p className="text-xs md:text-sm text-text-color text-center">
                Our growth strategy emphasizes responsible growth. It assists us
                in driving the economy in a sustainable manner while managing
                risk and creating a safe environment.We are not only assisting
                in the creation of jobs, but also in the development of
                communities, the promotion of economic mobility, and the
                resolution of society&apos; s most pressing issues all over the
                world.
              </p>
            </div>
            <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
              <Image
                fill
                src="/images/grind.jpg"
                alt="img"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
