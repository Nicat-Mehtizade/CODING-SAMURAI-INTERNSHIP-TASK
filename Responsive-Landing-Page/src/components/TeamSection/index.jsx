import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { motion } from "motion/react";

const TeamSection = () => {
  return (
    <div id="team" className="py-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-center items-center px-5">
          <motion.h1
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-center mb-5"
          >
            Our Team Members
          </motion.h1>
          <motion.p
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm md:text-xl text-center mb-15 md:w-[50%]"
          >
            Following reasons show advantages of adding AppCo to your lead
            pages, foster market positioning products without demos and
            checkouts.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full rounded-full object-cover max-w-[320px]"
                src="https://appco.themetags.com/img/team-4.jpg"
                alt=""
              />
              <div className="absolute inset-0 team-gradient flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-xl tracking-wide hidden group-hover:block relative z-11 transition duration-400">
                  Edna Mason
                </h1>
                <p className="text-white hidden group-hover:block relative z-11 transition duration-400 mb-5">
                  Senior Designer
                </p>
                <div className="text-white/60 hidden group-hover:flex relative z-11  items-center gap-5">
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <CiTwitter />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaGithub />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaDribbble />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full rounded-full object-cover max-w-[320px]"
                src="https://appco.themetags.com/img/team-1.jpg"
                alt=""
              />
              <div className="absolute inset-0 team-gradient flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-xl tracking-wide hidden group-hover:block relative z-11 transition duration-400">
                  Edna Mason
                </h1>
                <p className="text-white hidden group-hover:block relative z-11 transition duration-400 mb-5">
                  Senior Designer
                </p>
                <div className="text-white/60 hidden group-hover:flex relative z-11  items-center gap-5">
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <CiTwitter />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaGithub />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaDribbble />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full max-w-[320px]"
                src="https://appco.themetags.com/img/team-2.jpg"
                alt=""
              />
              <div className="absolute inset-0 team-gradient flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-xl tracking-wide hidden group-hover:block relative z-11 transition duration-400">
                  Edna Mason
                </h1>
                <p className="text-white hidden group-hover:block relative z-11 transition duration-400 mb-5">
                  Senior Designer
                </p>
                <div className="text-white/60 hidden group-hover:flex relative z-11  items-center gap-5">
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <CiTwitter />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaGithub />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaDribbble />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full max-w-[320px]"
                src="https://appco.themetags.com/img/team-3.jpg"
                alt=""
              />
              <div className="absolute inset-0 team-gradient flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-xl tracking-wide hidden group-hover:block relative z-11 transition duration-400">
                  Edna Mason
                </h1>
                <p className="text-white hidden group-hover:block relative z-11 transition duration-400 mb-5">
                  Senior Designer
                </p>
                <div className="text-white/60 hidden group-hover:flex relative z-11  items-center gap-5">
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <CiTwitter />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaGithub />
                  </button>
                  <button className="cursor-pointer transition duration-300 text-lg hover:text-white">
                    <FaDribbble />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
