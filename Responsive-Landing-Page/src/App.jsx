import "./App.css";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyPeoplesLoveAppCoSection from "./components/WhyPeopleLovesAppCoSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyPeoplesLoveAppCoSection/>
      <AboutSection/>
      <FeaturesSection/>
    </>
  );
}

export default App;
