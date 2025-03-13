import { useEffect, useState, Suspense, lazy } from "react";
import Aos from "aos";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Hero = lazy(() => import('./components/UI/Hero'));
const Education = lazy(() => import('./components/UI/Education'));
const Experience = lazy(() => import("./components/UI/Expereince"));
const Project = lazy(() => import("./components/UI/Project"));
const ProjectDetails = lazy(() => import("./components/UI/ProjectDetails"));
const Contact = lazy(() => import("./components/UI/Contact"));

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Project openModal={openModal} setOpenModal={setOpenModal} />
        <Education />
        <Contact />
      </main>
      {/* <Footer /> */}
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Suspense>
  );
}

export default App;
