import { FaDownload } from "react-icons/fa";

const AboutMeSection = ({ mode }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-5 p-5">
      <div className="lg:w-[45%]">
        <h1
          className={`text-4xl font-semibold mb-3 ${
            mode == "light" ? "text-black" : "text-white"
          }`}
        >
          About Me
        </h1>
        <p className={`font-medium mb-6 ${mode=="light" ? "text-black": "text-white"}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          velit incidunt corporis tempora autem. Architecto, nostrum. Culpa
          voluptatem recusandae quisquam esse possimus aperiam beatae, fuga,
          dolor obcaecati iste placeat rerum, sint suscipit debitis. Voluptate
          quidem exercitationem voluptas dolorum tenetur sit.
        </p>
        <button className="flex items-center gap-2 bg-[#2CA46D] text-white font-bold py-3 px-6 rounded-full text-sm">
          <p>Download CV</p>
          <FaDownload />
        </button>
      </div>
      <div>
        <img
          src="https://theme.nanoit.biz/tf-nickberg-demo/nick-berg/assets/img/about.png"
          alt="AboutMe Image"
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
