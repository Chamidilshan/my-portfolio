import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from './components/UI/Hero';
import Education from './components/UI/Education';
import Experience from "./components/UI/Expereince";

function App() {
  useEffect(() => {
    Aos.init();
  }, []); 

  return <>
    <Header />
      <main>
        <Hero/>
        <Experience/>
        <Education/>
      </main>
    <Footer />
  </>
}

export default App;
