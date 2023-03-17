import Navbar from "../navbar/Navbar";
import TransparentNavbar from "../navbar/TransparentNavbar";
import Footer from "../footer/Footer";

type LayoutProps = {
  children: any;
};

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="px-4 md:px-64 items-center justify-center gap-8 flex flex-col bg-white font-sans">
      <TransparentNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
