const MyEducationAndExperienceSection = ({ mode }) => {
  return (
    <div className="py-10">
      <h1
        className={`text-xl lg:text-4xl font-bold text-center mb-5 ${
          mode == "light" ? "text-black" : "text-white"
        }`}
      >
        My Education & Experience
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 py-10 px-3">
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            The Lawrenceville School
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2005</p>
            <p>-</p>
            <p>Secondary School Certificate</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            AleSmith Brewing Company
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2012</p>
            <p>-</p>
            <p>IT Exceutive.</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Adams State College
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2007</p>
            <p>-</p>
            <p>Higher Secondary Certificate.</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Applied Micro Circuits Corporation
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2013</p>
            <p>-</p>
            <p>Web Developer.</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Florida Hospital College of Health Sciences
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2012</p>
            <p>-</p>
            <p>Bechelor Degree.</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 lg:p-9   ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E]"
          }`}
        >
          <h1
            className={`text-sm lg:text-2xl font-bold ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Upwork/Elance/Peopleperhour/Fiverr.
          </h1>
          <div
            className={`flex items-center gap-1 font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            <p className="text-green-600">2014 to Present</p>
            <p>-</p>
            <p>Web Developer.</p>
          </div>
          <p
            className={`font-semibold text-xs lg:text-[16px] ${
              mode == "light" ? "text-black" : "text-white"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima odit dicta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyEducationAndExperienceSection;
