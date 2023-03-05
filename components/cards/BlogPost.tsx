import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="bg-white shadow rounded-xl flex flex-col overflow-hidden">
      <div className=" p-4 h-48 w-full overflow-hidden ">
        <img src="images/qoute.png" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between px-4">
          <h5 className="font-bold">Lates News</h5>
          <p className="text-sm">05/03/2023</p>
        </div>
        <div className="flex flex-col px-4">
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
            eiusmod tempor incididun consectetur...
          </p>
          <div className="items-center justify-end flex flex-row w-full">
            <Link href="#">
              <text className="text-sm text-ocean-blue">Read More</text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
