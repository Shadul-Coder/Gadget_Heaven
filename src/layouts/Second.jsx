import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../utility/ScrollToTop";

const Second = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="bg-[#f7f7f7]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster position="top-right" />
    </>
  );
};

export default Second;