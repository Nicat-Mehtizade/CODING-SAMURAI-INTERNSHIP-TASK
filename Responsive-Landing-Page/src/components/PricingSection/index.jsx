import { motion } from "motion/react";

const PricingSection = () => {
  return (
    <div id="pricing" className="py-15">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center px-5">
          <motion.h1
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center mb-5 md:w-[50%]"
          >
            Affordable Pricing and Packages Choose your Best One
          </motion.h1>
          <motion.p
            animate={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm md:text-lg text-center mb-10 md:w-[58%]"
          >
            Distinctively brand cutting-edge imperatives through synergistic
            infrastructures customize low-risk high-yield processes rather than
            user friendly.
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <motion.div
              animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay:0 }}
              viewport={{ once: true }}
              className="relative flex flex-col group justify-center p-5 min-h-[500px] md:min-w-[400px] items-center border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#9629E6] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h1 className="font-semibold text-lg mb-5">Basic</h1>
              <img
                className="w-20 mb-5"
                src="https://appco.themetags.com/img/basic.svg"
                alt=""
              />
              <p className="text-gray-400 mb-1">5 Users access same time</p>
              <p className="text-gray-400 mb-1">Integrated eCommerce</p>
              <p className="text-gray-400 mb-1">Customization interface</p>
              <p className="text-gray-400 mb-1">Weekly updated</p>
              <p className="text-gray-400 mb-1">24/7 Phone Support</p>
              <p className="text-gray-400 mb-5">Event Analytics</p>
              <h1 className="text-4xl text-[#9629E6] font-semibold mb-5">
                $29
              </h1>
              <button className="text-[#6730E3] ring-1 py-3 px-7 cursor-pointer rounded-full ring-[#6730E3] transition duration-300 hover:bg-[#6730E3] hover:text-white">
                Purchase now
              </button>
            </motion.div>

            <motion.div
            animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay:0.2 }}
              viewport={{ once: true }}
            className="relative flex flex-col justify-center p-5 min-h-[500px] md:min-w-[400px] items-center border border-gray-200 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#9629E6] rounded-t-xl"></div>
              <h1 className="font-semibold text-lg mb-5">Standard</h1>
              <img
                className="w-20 mb-5"
                src="https://appco.themetags.com/img/standard.svg"
                alt=""
              />
              <p className="text-gray-400 mb-1">10 Users access same time</p>
              <p className="text-gray-400 mb-1">Integrated eCommerce</p>
              <p className="text-gray-400 mb-1">Customization interface</p>
              <p className="text-gray-400 mb-1">Daily updated</p>
              <p className="text-gray-400 mb-1">24/7 Phone Support</p>
              <p className="text-gray-400 mb-5">Event Analytics</p>
              <h1 className="text-4xl text-[#9629E6] font-semibold mb-5">
                $145
              </h1>
              <button className="bg-[#6730E3] text-white ring-1 cursor-pointer ring-[#6730E3] py-3 px-7 rounded-full  transition duration-300 hover:ring-[#6730E3] hover:bg-white hover:text-[#6730E3]">
                Purchase now
              </button>
            </motion.div>

            <motion.div
            animate={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay:0.4 }}
              viewport={{ once: true }}
            className="relative flex flex-col group justify-center p-5 min-h-[500px] md:min-w-[400px] items-center border border-gray-200 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#9629E6] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h1 className="font-semibold text-lg mb-5">Unlimited</h1>
              <img
                className="w-20 mb-5"
                src="https://appco.themetags.com/img/unlimited.svg"
                alt=""
              />
              <p className="text-gray-400 mb-1">20 Users access same time</p>
              <p className="text-gray-400 mb-1">Integrated eCommerce</p>
              <p className="text-gray-400 mb-1">
                Fully Customization interface
              </p>
              <p className="text-gray-400 mb-1">Free updated</p>
              <p className="text-gray-400 mb-1">24/7 Phone Support</p>
              <p className="text-gray-400 mb-5">Event Analytics</p>
              <h1 className="text-4xl text-[#9629E6] font-semibold mb-5">
                $249
              </h1>
              <button className="text-[#6730E3] ring-1 py-3 cursor-pointer px-7 rounded-full ring-[#6730E3] transition duration-300 hover:bg-[#6730E3] hover:text-white">
                Purchase now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
