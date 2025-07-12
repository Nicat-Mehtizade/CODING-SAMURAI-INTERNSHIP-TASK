import { DiAndroid } from "react-icons/di";
import { AiOutlineApple } from "react-icons/ai";
import { motion } from "motion/react";

const GooglePlayAndAppStoreSection = () => {
  return (
    <div
      className="relative background-image bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(https://appco.themetags.com/img/app-hero-bg.jpg)`,
      }}
    >
      <div className="max-w-[1300px] mx-auto h-screen min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-start gap-5 h-full px-5 ">
          <div className="flex flex-col h-full justify-center gap-6 md:w-[60%]">
            <motion.h1
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-3xl lg:text-5xl font-semibold"
            >
              Start Managing your Apps Business, more Faster
            </motion.h1>
            <motion.p
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white text-sm md:text-lg"
            >
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </motion.p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="py-3 px-7 rounded-full bg-white cursor-pointer text-[#6730E3] flex items-center gap-2 font-bold ring-1 ring-white transition-colors duration-300 hover:text-white hover:bg-transparent"
              >
                <DiAndroid />
                <p>Google Play</p>
              </motion.button>
              <motion.button
                animate={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 py-3 px-9 font-bold rounded-full text-white ring-1 ring-white bg-transparent cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#6730E3]"
              >
                <AiOutlineApple className="text-xl" />
                <p>App Store</p>
              </motion.button>
            </div>
          </div>
          <motion.div
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 hidden lg:block"
          >
            <img
              src="https://appco.themetags.com/img/app-hand-top.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GooglePlayAndAppStoreSection;
