const Contact = ({ mode }) => {
  return (
    <div id="Contact" className="py-5 px-3">
      <h1
        className={`text-2xl lg:text-4xl font-bold text-center mb-5 ${
          mode == "light" ? "text-black" : "text-white"
        }`}
      >
        Get In Touch
      </h1>
      <div className="max-w-[900px] mx-auto py-5">
        <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
          <input
            className={` rounded-full py-3 px-5 w-full  ${
              mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E] placeholder:text-white"
            }`}
            type="text"
            placeholder="Name"
          />
          <input
            className={` rounded-full py-3 px-5 w-full  ${
              mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E] placeholder:text-white"
            }`}
            type="email"
            placeholder="Email"
          />
          <input
            className={` rounded-full py-3 px-5 w-full  ${
              mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E] placeholder:text-white"
            }`}
            type="text"
            placeholder="Subject"
          />
        </div>
        <textarea
          className={`rounded-lg py-3 px-5 w-full min-h-[150px] mb-5 ${
            mode == "light" ? "bg-[#F7F7F7]" : "bg-[#2D343E] placeholder:text-white"
          }`}
          placeholder="Your Message"
        ></textarea>
        <button className="bg-green-600 text-white py-3 px-5 rounded-full font-bold cursor-pointer transition duration-300 hover:bg-black">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
