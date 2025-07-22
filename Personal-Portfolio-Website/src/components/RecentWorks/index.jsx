const RecentWorks = ({ mode }) => {
  return (
    <div className="py-10 px-3">
      <h1
        className={`text-2xl lg:text-4xl font-bold text-center mb-5 ${
          mode == "light" ? "text-black" : "text-white"
        }`}
      >
        RecentWorks
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image1.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image2.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image3.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image4.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image5.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden">
          <img className="relative " src="./image6.png" alt="image1" />
          <div className="absolute opacity-0 w-full h-full flex transition duration-300 flex-col justify-center items-center gap-4 top-0 bg-green-500/50 group-hover:opacity-100">
            <h1 className="text-white text-3xl font-bold">Web Design</h1>
            <button className="bg-white text-black rounded-lg py-2 px-4 cursor-pointer font-semibold transition duration-300 hover:bg-green-600 hover:text-white">Open Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
