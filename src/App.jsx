import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import { useEffect, useState } from "react";

function App() {
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideBanner(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Banner hideBanner={hideBanner} />
      <Navbar />
      <div className="main-content">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;