import { IoPlayOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      <div
        className=" pt-15 relative background-image bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(https://appco.themetags.com/img/app-hero-bg.jpg)`,
        }}
      >
        <div className="max-w-[1500px] mx-auto z-10 relative flex flex-col lg:flex-row items-center min-h-screen justify-center h-full gap-10">
          <div className="flex flex-col items-center lg:items-start pt-5 lg:pt-0 w-full lg:w-[40%] lg:pb-10 px-3 lg:px-0">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl tracking-wide mb-4 text-center lg:text-start">
              Brainstorming for Desired Usability
            </h1>
            <p className="text-white font-medium text-xs lg:text-[16px] mb-5 text-center lg:text-start">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <div className="bg-white lg:w-[75%] rounded-full p-1 flex items-center justify-between mb-5">
              <input
                className="focus:outline-0 pl-3"
                type="text"
                placeholder="info@yourdomain.com"
              />
              <button className="bg-[#6730E3] text-white rounded-full p-3 ring-1 ring-[#6730E3] cursor-pointer transition duration-300 hover:bg-white hover:text-[#6730E3]">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-5">
              <button className=" bg-white text-[#0d6efd] rounded-full p-3 text-2xl cursor-pointer ring-1 ring-white transition duration-300 hover:bg-[#6f42c1]">
                <IoPlayOutline />
              </button>
              <p className="text-white">Watch Video Overview</p>
            </div>
          </div>
          <div>
            <img
              className="w-100 lg:w-130"
              src="https://appco.themetags.com/img/app-product.png"
              alt=""
            />
          </div>
        </div>
      </div>
{/* 
      <div className="absolute bottom-[-88%] sm:bottom-[-98%] md:bottom-[-95%] lg:-bottom-42 xl:-bottom-15 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,160L24,154.7C48,149,96,139,144,154.7C192,171,240,213,288,208C336,203,384,149,432,144C480,139,528,181,576,202.7C624,224,672,224,720,202.7C768,181,816,139,864,112C912,85,960,75,1008,85.3C1056,96,1104,128,1152,144C1200,160,1248,160,1296,154.7C1344,149,1392,139,1416,133.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      <div className="absolute w-full hidden sm:block sm:-bottom-60 md:-bottom-57 lg:bottom-[-100px]">
        <img src="https://appco.themetags.com/img/hero-bg-shape-1.svg" alt="wave shape" className="max-w-full h-auto" />
      </div>
    </>
  );
};

export default HeroSection;
