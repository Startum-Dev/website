import Link from "next/link";
import BlogPost from "../../cards/BlogPost";

const OurBlog = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <h1 className="text-black 3xl md:text-6xl font-bold p-8">Our Blog</h1>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
      <div className="flex flex-row items-center justify-end w-full my-12">
        <Link href="#">
          <text className="text-ocean-blue text-base md:text-xl">
            More Blogs
          </text>
        </Link>
      </div>
    </div>
  );
};
export default OurBlog;
