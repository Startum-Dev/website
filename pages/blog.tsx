import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";

const Blog = () => {
  return (
    <AppLayout>
      <BannerSmall heading="Blog" />
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
        <div className="flex flex-col md:col-span-3">
          <div className="flex flex-col md:grid md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((post, i) => (
              <BlogPost key={i} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:flex-col">
          <Input placeholder="search" />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
