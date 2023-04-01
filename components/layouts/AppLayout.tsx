import Navbar from "../navbar/Navbar";
import TransparentNavbar from "../navbar/TransparentNavbar";
import Topbar from "../navbar/Topbar";
import Footer from "../footer/Footer";
import { useState } from "react";
import BookAppointmentModal from "../modal/BookAppointmentModal";

type LayoutProps = {
  children: any;
};

const AppLayout = ({ children }: LayoutProps) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="px-4 md:px-64 items-center justify-center flex flex-col font-sans bg-background-black text-white">
      <Topbar bookAppintment={() => setShowModal(true)} />
      <TransparentNavbar />
      {children}
      <Footer />
      {showModal && <BookAppointmentModal close={() => setShowModal(false)} />}
    </div>
  );
};

export default AppLayout;
