import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = ({ mode, setMode }) => {
  const handleDarkMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <div className="flex items-center gap-2 justify-between p-7">
      <div>
        <button
          className={`font-black text-xl text-nowrap ${
            mode == "light" ? "text-blue-950 " : "text-white"
          }`}
        >
          Nijat Mehdizadeh
        </button>
      </div>
      <div className="flex items-center gap-1 lg:gap-3">
        <nav
          className={`hidden md:flex items-center gap-5  ${
            mode == "light" ? "text-blue-950 " : "text-white"
          }`}
        >
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#Home"
          >
            Home
          </a>
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#About"
          >
            About
          </a>
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#Skills"
          >
            Skills
          </a>
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#Experiences"
          >
            Experiences
          </a>
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#Portfolio"
          >
            Portfolio
          </a>
          <a
            className="transition duration-300 hover:text-green-600 text-lg font-semibold"
            href="#Contact"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="cursor-pointer" onClick={() => handleDarkMode()}>
            {mode && mode == "light" ? (
              <div className="flex items-center gap-2">
                <MdDarkMode className="text-gray-600 text-xl" />
                <p className="font-semibold text-lg">Dark</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MdSunny className="text-yellow-500 text-xl" />
                <p className="font-semibold text-lg text-white">Light</p>
              </div>
            )}
          </button>
          <button className={`block md:hidden text-xl ${mode=="light" ? "text-black":"text-white"}`}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
