import AppLayout from "../components/layouts/AppLayout";
import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import BlogPost from "../components/cards/BlogPost";
import Input from "../components/inputs/Input";

const Blog = () => {
  return (
    <AppLayout>
      <BannerSmall heading="Blog" />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((post, i) => (
              <BlogPost key={i} />
            ))}
          </div>
        </div>
        <div>
          <Input placeholder="search" />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
