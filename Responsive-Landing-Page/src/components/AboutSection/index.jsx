const AboutSection = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://appco.themetags.com/img/about-bg-shape.svg)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around px-5 md:px-0">
          <div className="md:w-[50%] ">
            <h1 className="font-semibold text-2xl md:text-[40px] mb-8 text-center md:text-start">Use Your Android or ios Device to Manage Everything</h1>
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white rounded-lg w-40 h-15 md:w-22 md:h-16 flex justify-center items-center shadow-lg">
                <img
                  src="https://appco.themetags.com/img/image-icon-1.png"
                  alt=""
                />
              </div>

              <p className="text-gray-500 text-xs md:text-[16px]">
                Proactively syndicate open-source e-markets after low-risk
                high-yield synergy. Professionally simplify visionary
                technology.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white rounded-lg w-40 h-15 md:w-22 md:h-16 flex justify-center items-center shadow-lg">
                <img
                  src="https://appco.themetags.com/img/image-icon-2.png"
                  alt=""
                />
              </div>

              <p className="text-gray-500 text-xs md:text-[16px]">
                Intrinsicly aggregate cutting-edge internal or "organic" sources
                through pandemic manufactured products. Synergistically.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white rounded-lg w-40 h-15 md:w-22 md:h-16 flex justify-center items-center shadow-lg">
                <img
                  src="https://appco.themetags.com/img/image-icon-3.png"
                  alt=""
                />
              </div>
              <p className="text-gray-500 text-xs md:text-[16px]">
                Completely administrate empowered e-tailers after extensive
                experiences. Holisticly leverage existing quality networks.
              </p>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-white rounded-lg w-40 h-15 md:w-22 md:h-16 flex justify-center items-center shadow-lg">
                <img
                  src="https://appco.themetags.com/img/image-icon-4.png"
                  alt=""
                />
              </div>
              <p className="text-gray-500 text-xs md:text-[16px]">
                Intrinsicly incentivize functionalized metrics whereas go
                forward networks. Collaboratively fabricate clicks-and-mortar
                intellectual.
              </p>
            </div>
          </div>
          <div>
            <img src="https://appco.themetags.com/img/image-11.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
