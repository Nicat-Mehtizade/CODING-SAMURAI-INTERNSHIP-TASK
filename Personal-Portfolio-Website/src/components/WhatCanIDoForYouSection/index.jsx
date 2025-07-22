import { FaRegLightbulb } from "react-icons/fa";
import { TfiSignal } from "react-icons/tfi";
import { GiAchievement } from "react-icons/gi";

const WhatCanIDoForYouSection = ({ mode }) => {
  return (
    <div className="py-10 px-3">
      <h1
        className={`text-2xl md:text-4xl font-semibold text-center mb-15 ${
          mode == "light" ? "text-black" : "text-white"
        }`}
      >
        What I Can For You
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div
          className={`relative rounded-lg p-15 h-[250px] transition duration-300 hover:-translate-y-4 hover:shadow-2xl ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-3 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Development
          </h1>
          <p
            className={`font-medium text-sm md:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe
            ea vitae possimus repudiandae quaerat.
          </p>
          <div className="bg-[#2CA46D] w-15 h-15 rounded-full absolute -top-6 left-15 flex items-center justify-center">
            <FaRegLightbulb
              className={`text-2xl ${
                mode == "light" ? "text-black" : "text-white"
              }`}
            />
          </div>
        </div>
        <div
          className={`relative rounded-lg p-15 h-[250px] transition duration-300 hover:-translate-y-4 hover:shadow-2xl ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-3 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Web Design
          </h1>
          <p
            className={`font-medium text-sm md:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            explicabo rerum repellendus quidem doloribus eveniet.
          </p>
          <div className="bg-[#2CA46D] w-15 h-15 rounded-full absolute -top-6 left-15 flex items-center justify-center">
            <TfiSignal
              className={`text-2xl ${
                mode == "light" ? "text-black" : "text-white"
              }`}
            />
          </div>
        </div>
        <div
          className={`relative rounded-lg p-15 h-[250px] transition duration-300 hover:-translate-y-4 hover:shadow-2xl ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-3 ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Full Support
          </h1>
          <p
            className={`font-medium text-sm md:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            nihil, voluptatibus numquam in ducimus officiis.
          </p>
          <div className="bg-[#2CA46D] w-15 h-15 rounded-full absolute -top-6 left-15 flex items-center justify-center">
            <GiAchievement 
              className={`text-2xl ${
                mode == "light" ? "text-black" : "text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanIDoForYouSection;
