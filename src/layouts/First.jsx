import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utility/ScrollToTop";

const First = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default First;