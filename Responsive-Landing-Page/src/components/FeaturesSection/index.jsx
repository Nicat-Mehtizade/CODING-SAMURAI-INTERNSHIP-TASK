import { motion } from "motion/react";

const FeaturesSection = () => {
  return (
    <div id="features" className="py-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around gap-15 px-5 md:px-0">
          <motion.div
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              className="w-100"
              src="https://appco.themetags.com/img/image-14.png"
              alt=""
            />
          </motion.div>
          <div className="md:w-[60%]">
            <motion.h1
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-semibold mb-5"
            >
              Share your Photos with Friends Easily
            </motion.h1>
            <motion.p
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 mb-5 text-xs md:text-[16px]"
            >
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </motion.p>
            <motion.p
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-500 mb-10 md:mb-15 text-xs md:text-[16px]"
            >
              Uniquely simplify sustainable applications whereas adaptive
              schemas. Competently brand performance based content and.
            </motion.p>
            <div className="flex items-center justify-center md:justify-start gap-5 md:gap-10">
              <motion.div
                animate={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay:0 }}
                viewport={{ once: true }}
                className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center"
              >
                <img
                  src="https://appco.themetags.com/img/image-icon-2.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                animate={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay:0.2 }}
                viewport={{ once: true }}
              className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                <img
                  src="https://appco.themetags.com/img/image-icon-3.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                animate={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay:0.4 }}
                viewport={{ once: true }}
              className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                <img
                  src="https://appco.themetags.com/img/image-icon-4.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                animate={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay:0.6 }}
                viewport={{ once: true }}
              className="rounded-sm border-1 border-gray-200 bg-white w-15 h-15 shadow-lg flex items-center justify-center">
                <img
                  src="https://appco.themetags.com/img/image-icon-1.png"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
