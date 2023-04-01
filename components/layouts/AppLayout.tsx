import Navbar from "../navbar/Navbar";
import TransparentNavbar from "../navbar/TransparentNavbar";
import Topbar from "../navbar/Topbar";
import Footer from "../footer/Footer";

type LayoutProps = {
  children: any;
};

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="px-4 md:px-64 items-center justify-center flex flex-col font-sans bg-background-black text-white">
      <Topbar />
      <TransparentNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
