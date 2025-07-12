import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-[999] p-2 md:p-4 ${scrolled ? "bg-[#202877]": "bg-transparent"}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between py-2">
          <div>
            <img
              className="w-30"
              src="https://appco.themetags.com/img/logo-white-1x.png"
              alt="logo"
            />
          </div>
          <nav className="hidden md:flex items-center gap-5 ">
            <a
              className="text-white/70 transition duration-200 hover:text-white"
              href=""
            >
              About
            </a>
            <a
              className="text-white/70 transition duration-200 hover:text-white"
              href=""
            >
              Features
            </a>
            <a
              className="text-white/70 transition duration-200 hover:text-white"
              href=""
            >
              Pricing
            </a>
            <a
              className="text-white/70 transition duration-200 hover:text-white"
              href=""
            >
              Team
            </a>
            <a
              className="text-white/70 transition duration-200 hover:text-white"
              href=""
            >
              Contact
            </a>
          </nav>
          <button className="block md:hidden text-white text-2xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
