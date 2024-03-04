import { useEffect, useState } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from './components/UI/Hero';
import Education from './components/UI/Education';
import Experience from "./components/UI/Expereince"; 
import Project from "./components/UI/Project";
import ProjectDetails from "./components/UI/ProjectDetails";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []); 

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return <>
    <Header />
      <main>
        <Hero/>
        <Experience/>
        <Project openModal={openModal} setOpenModal={setOpenModal} />
        <Education/>
        <Contact/>
      </main>
    {/* <Footer /> */}
    {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          } 
  </>
}

export default App;
