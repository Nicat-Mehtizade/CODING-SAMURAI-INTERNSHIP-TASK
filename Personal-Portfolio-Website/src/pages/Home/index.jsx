import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import AboutMeSection from "../../components/AboutMeSection";
import WhatCanIDoForYouSection from "../../components/WhatCanIDoForYouSection";
import MySkills from "../../components/MySkills";
import MyEducationAndExperienceSection from "../../components/MyEducationAndExperienceSection";
import RecentWorks from "../../components/RecentWorks";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [mode, setMode] = useState("light");
  const [visible,setVisible]=useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      localStorage.setItem("mode", "light");
    }
  }, []);

    useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ScrolltoTop=()=>{
    window.scrollTo({top:0})
  }

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
          <MySkills mode={mode}/>
          <MyEducationAndExperienceSection mode={mode}/>
          <RecentWorks mode={mode}/>
          <Contact mode={mode}/>
          <Footer mode={mode}/>
        </div>
      </div>
      <button onClick={()=>ScrolltoTop()} className={`fixed bottom-3 right-3 bg-green-600 p-3 rounded-full text-white cursor-pointer transition duration-300 hover:bg-green-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Home;
