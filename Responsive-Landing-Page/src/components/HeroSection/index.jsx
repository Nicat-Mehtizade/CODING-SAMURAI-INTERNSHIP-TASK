import { IoPlayOutline } from "react-icons/io5";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <div
        id="hero"
        className=" pt-15 relative background-image bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(https://appco.themetags.com/img/app-hero-bg.jpg)`,
        }}
      >
        <div className="max-w-[1500px] mx-auto z-10 relative flex flex-col lg:flex-row items-center min-h-screen justify-center h-full gap-10">
          <div className="flex flex-col items-center lg:items-start pt-5 lg:pt-0 w-full lg:w-[40%] lg:pb-10 px-3 lg:px-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-bold text-2xl md:text-3xl lg:text-5xl tracking-wide mb-4 text-center lg:text-start"
            >
              Brainstorming for Desired Usability
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white font-medium text-xs lg:text-[16px] mb-5 text-center lg:text-start"
            >
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white lg:w-[75%] rounded-full p-1 flex items-center justify-between mb-5"
            >
              <input
                className="focus:outline-0 pl-3"
                type="text"
                placeholder="info@yourdomain.com"
              />
              <button className="bg-[#6730E3] text-white rounded-full p-3 ring-1 ring-[#6730E3] cursor-pointer transition duration-300 hover:bg-white hover:text-[#6730E3]">
                Subscribe
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-5"
            >
              <button className=" bg-white text-[#0d6efd] rounded-full p-3 text-2xl cursor-pointer ring-1 ring-white transition duration-300 hover:bg-[#6f42c1]">
                <IoPlayOutline />
              </button>
              <p className="text-white">Watch Video Overview</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              className="w-100 lg:w-130"
              src="https://appco.themetags.com/img/app-product.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute w-full hidden sm:block sm:-bottom-60 md:-bottom-57 lg:bottom-[-100px]">
        <img
          src="https://appco.themetags.com/img/hero-bg-shape-1.svg"
          alt="wave shape"
          className="max-w-full h-auto"
        />
      </div>
    </>
  );
};

export default HeroSection;
