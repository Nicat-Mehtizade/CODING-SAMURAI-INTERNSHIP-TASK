import { motion } from "motion/react";

const WhyPeoplesLoveAppCoSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center flex flex-col justify-center items-center">
          <motion.h1
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-semibold mb-5"
          >
            Why Peoples Love AppCo?
          </motion.h1>
          <motion.p
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm md:text-xl text-gray-500 w-[60%] tracking-wide mb-10"
          >
            Following reasons show advantages of adding AppCo to your lead
            pages, demos and checkouts evisculate interoperable imperatives
            rather.
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5  ">
            <motion.div
              animate={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ boxShadow: "0 3px 20px 0px rgba(0, 0, 0, 0.12)" }}
              className="p-10 flex flex-col items-center rounded-xl shadow-2xl transition duration-300 hover:translate-y-[-20px] hover:!shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
            >
              <img className="w-30 mb-5" src="./icon1.png" alt="icon1" />
              <h1 className="text-center mb-4 text-xl font-semibold">
                Clean Design
              </h1>
              <p className=" text-center mb-3 text-gray-400">
                Increase sales by showing true dynamics of your website.
              </p>
            </motion.div>

            <motion.div
              animate={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ boxShadow: "0 3px 20px 0px rgba(0, 0, 0, 0.12)" }}
              className="p-10 flex flex-col items-center rounded-xl shadow-2xl transition duration-300 hover:translate-y-[-20px] hover:!shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
            >
              <img className="w-30 mb-5" src="./icon2.png" alt="icon2" />
              <h1 className="mb-4 text-center text-xl font-semibold">
                Secure Data
              </h1>
              <p className="mb-3 text-center text-gray-400">
                Build your online store’s trust using Social Proof & Urgency.
              </p>
            </motion.div>
            <motion.div
              animate={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              style={{ boxShadow: "0 3px 20px 0px rgba(0, 0, 0, 0.12)" }}
              className="p-10 flex flex-col items-center rounded-xl shadow-2xl transition duration-300 hover:translate-y-[-20px] hover:!shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
            >
              <img className="w-30 mb-4" src="./icon3.png" alt="icon3" />
              <h1 className="mb-3 text-center text-xl font-semibold">
                Retina Ready
              </h1>
              <p className="mb-3 text-center text-gray-400">
                Realize importance of social proof in customer’s purchase
                decision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPeoplesLoveAppCoSection;
