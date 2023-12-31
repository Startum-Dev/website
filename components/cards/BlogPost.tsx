import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className=" flex flex-col overflow-hidden m-2">
      <div className="p-4 h-48 w-full overflow-hidden relative">
        <Image fill src="/images/im.jpg" alt="img" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h5 className="font-bold text-primary-black">Lates News</h5>
          <p className="text-sm text-primary-black">05/03/2023</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-primary-black">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
            eiusmod tempor incididun consectetur...
          </p>
          <div className="items-center justify-end flex flex-row w-full my-4">
            <Link href="#">
              <text className="text-sm text-primary-yellow">Read More...</text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
