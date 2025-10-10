import { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import GadgetsSection from "../components/GadgetsSection/GadgetsSection";

const Home = () => {
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
          selected={selected}
          handleSelected={handleSelected}
        ></GadgetsSection>
      </main>
    </>
  );
};

export default Home;