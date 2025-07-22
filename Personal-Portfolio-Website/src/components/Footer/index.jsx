const Footer = ({ mode }) => {
  return (
    <div className="flex flex-col items-center gap-3 py-10 px-3">
      <button
        className={`font-black text-xl text-nowrap cursor-pointer ${
          mode == "light" ? "text-blue-950 " : "text-white"
        }`}
      >
        Nijat Mehdizadeh
      </button>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Facebook</button>
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Twitter</button>
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Google-Plus</button>
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Linkedin</button>
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Youtube</button>
        <button className={`font-medium border-b-1 border-gray-300/50 cursor-pointer transition duration-300 hover:text-green-500 ${mode=="light" ? "text-black":"text-white"}`}>Skype</button>
      </div>
    </div>
  );
};

export default Footer;
