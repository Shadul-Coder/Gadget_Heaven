import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="bg-[#f7f7f7]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster position="bottom-right" />
    </>
  );
};

export default Layout;