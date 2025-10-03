import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

const FirstLayout = () => {
  return (
    <>
      <header className="bg-[#f7f7f7]">
        <HeroSection></HeroSection>
      </header>
      <main className="bg-[#f7f7f7]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default FirstLayout;