import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import GadgetsSection from "./components/GadgetsSection/GadgetsSection";
import axios from "axios";
import { Suspense } from "react";

const gadgetsRes = axios("AllProduct.json");

function App() {
  return (
    <>
      <header className="bg-[#f7f7f7]">
        <HeroSection></HeroSection>
      </header>
      <main className="bg-[#f7f7f7]">
        <Suspense fallback={<h1>Loading...</h1>}>
          <GadgetsSection gadgetsRes={gadgetsRes}></GadgetsSection>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;