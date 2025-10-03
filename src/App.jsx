import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import GadgetsSection from "./components/GadgetsSection/GadgetsSection";
import axios from "axios";
import { Suspense, useState } from "react";
import Loading from "./components/Loading/Loading";

const gadgetsRes = axios("AllProduct.json");

function App() {
  const [selected, setSelected] = useState("All Product");
  const [selectedData, setSelectedData] = useState([]);
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
        <Suspense fallback={<Loading></Loading>}>
          <GadgetsSection
            gadgetsRes={gadgetsRes}
            selected={selected}
            handleSelected={handleSelected}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          ></GadgetsSection>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;