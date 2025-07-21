import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";

const Hero = ({ mode }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-evenly py-5 px-3">
      <div className="order-2 lg:order-1">
        <img
          className="max-w-[700px] w-full"
          src="./hero image.png"
          alt="hero image"
        />
      </div>
      <div className="order-1 lg:order-2">
        <p className="bg-[#2CA46D] text-white py-2 px-4 font-bold rounded-tl-full rounded-bl-full rounded-tr-full w-[150px] text-center mb-5">
          Hello There!
        </p>
        <h1
          className={`text-2xl lg:text-5xl font-bold mb-1 lg:mb-3 ${
            mode == "light" ? "text-black" : "text-white"
          }`}
        >
          I'M Nijat Mehdizadeh
        </h1>
        <p
          className={`text-2xl font-semibold mb-3 ${
            mode == "light" ? "text-black" : "text-white"
          }`}
        >
          Frontend Developer
        </p>
        <div className=" flex flex-col gap-2 mb-5">
          <div
            className={`flex items-center gap-2 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <IoLocationSharp />
            <p>3481 Melrose Place, Beverly Hills CA 90210.</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaPhoneAlt />
            <p>01872 - 12 34 56</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <IoMail />
            <p>yourmail@mail.com</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <BiCoinStack />
            <p>http://example.net</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button
            className={`border border-gray-200 rounded-full cursor-pointer transition duration-300 p-3 text-lg hover:bg-[#3B5998] hover:text-white ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaFacebookF />
          </button>
          <button
            className={`border border-gray-200 rounded-full cursor-pointer transition duration-300 p-3 text-lg hover:bg-[#1A90D9] hover:text-white ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaTwitter />
          </button>
          <button
            className={`border border-gray-200 rounded-full cursor-pointer transition duration-300 p-3 text-lg hover:bg-[#FF5252] hover:text-white ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaInstagram />
          </button>
          <button
            className={`border border-gray-200 rounded-full cursor-pointer transition duration-300 p-3 text-lg hover:bg-[#0077B5] hover:text-white ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaLinkedinIn />
          </button>
          <button
            className={`border border-gray-200 rounded-full cursor-pointer transition duration-300 p-3 text-lg hover:bg-[#01A4E0] hover:text-white ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <FaSkype />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
