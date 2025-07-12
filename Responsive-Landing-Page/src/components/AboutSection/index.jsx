import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover"
      id="about"
      style={{
        backgroundImage: `url(https://appco.themetags.com/img/about-bg-shape.svg)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around px-5 md:px-0">
          <div className="md:w-[50%] ">
            <motion.h1
              animate={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-semibold text-2xl md:text-[40px] mb-8 text-center md:text-start"
            >
              Use Your Android or ios Device to Manage Everything
            </motion.h1>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
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
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
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
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
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
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-5"
            >
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
            </motion.div>
          </div>
          <motion.div
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="https://appco.themetags.com/img/image-11.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
