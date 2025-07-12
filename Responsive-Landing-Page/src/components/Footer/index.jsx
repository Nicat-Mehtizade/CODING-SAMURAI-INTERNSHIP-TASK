import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover overflow-hidden pt-15"
      style={{
        backgroundImage: `url(https://appco.themetags.com/img/footer-bg.png)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center h-full mb-15 px-5">
          <div>
            <img
              src="https://appco.themetags.com/img/logo-white-1x.png"
              className="mb-5"
            />
            <p className="text-white mb-4">
              Holisticly empower premium architectures without value-added
              ideas. Seamlessly evolve cross-platform experiences.
            </p>
            <div className="flex items-center gap-5">
              <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                <FaFacebookF />
              </button>
              <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                <CiTwitter />
              </button>
              <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                <IoLogoInstagram />
              </button>
              <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                <FaPinterestP />
              </button>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <h1 className="text-white font-bold text-xl">Resources</h1>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Help
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Events
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Live Support
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Open Sources
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <h1 className="text-white font-bold text-xl">Company</h1>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                About Us
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Careers
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Customers
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Community
              </li>
              <li className="text-white/70 transition duration-300 hover:text-white cursor-pointer">
                Our Team
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-white">Location</h1>
              <li className="flex items-center gap-2 text-white">
                <IoLocationOutline />
                <p>121 King Melbourne Australia 3000</p>
              </li>
              <li className="flex items-center gap-2 text-white">
                <BsTelephone />
                <p>+61 2 83766284</p>
              </li>
              <li className="flex items-center gap-2 text-white">
                <FaRegEnvelope />
                <p>mail@example.com</p>
              </li>
              <li className="flex items-center gap-2 text-white">
                <TbWorld />
                <p>www.yourdomain.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-gray-400/30 px-5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between py-4 gap-3">
          <p className="text-white text-xs md:text-[16px]">
            © ThemeTags Design Agency, All rights reserved
          </p>
          <div className="flex items-center gap-3 text-sm md:text-[16px]">
            <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">Terms</button>
            <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">Security</button>
            <button className="text-white/70 transition duration-300 hover:text-white cursor-pointer">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
