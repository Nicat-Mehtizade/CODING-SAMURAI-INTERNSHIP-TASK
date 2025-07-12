import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import GooglePlayAndAppStoreSection from "./components/GooglePlayAndAppStoreSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import TeamSection from "./components/TeamSection";
import WhyPeoplesLoveAppCoSection from "./components/WhyPeopleLovesAppCoSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyPeoplesLoveAppCoSection/>
      <AboutSection/>
      <FeaturesSection/>
      <GooglePlayAndAppStoreSection/>
      <PricingSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default App;
