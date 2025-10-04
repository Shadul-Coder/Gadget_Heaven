import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import GadgetsSection from "./components/GadgetsSection/GadgetsSection";
import { useState } from "react";
import { useLoaderData } from "react-router";

function App() {
  const { data } = useLoaderData();
  const [selected, setSelected] = useState("All Product");
  const handleSelected = (category) => {
    setSelected(category);
  };
  return (
    <>
      <header className="bg-[#f7f7f7]">
        <HeroSection
          selected={selected}
          handleSelected={handleSelected}
        ></HeroSection>
      </header>
      <main className="bg-[#f7f7f7]">
        <GadgetsSection
          productData={data}
          selected={selected}
          handleSelected={handleSelected}
        ></GadgetsSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;