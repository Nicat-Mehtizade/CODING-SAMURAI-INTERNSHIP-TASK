import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import AboutMeSection from "../../components/AboutMeSection";
import WhatCanIDoForYouSection from "../../components/WhatCanIDoForYouSection";

const Home = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      localStorage.setItem("mode", "light");
    }
  }, []);

  return (
    <div
      className={`transition duration-300 ${
        mode == "light" ? "bg-white" : "bg-[#232A34]"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        <div>
          <Header mode={mode} setMode={setMode} />
          <Hero mode={mode} />
          <AboutMeSection mode={mode}/>
          <WhatCanIDoForYouSection mode={mode}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
