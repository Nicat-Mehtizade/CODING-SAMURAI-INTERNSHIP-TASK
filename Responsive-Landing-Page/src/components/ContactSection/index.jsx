
const ContactSection = () => {
  return (
    <div id="contact" className="bg-[#F4F7FA] py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5">
          <div className="md:w-[40%]">
            <h1 className="text-4xl font-semibold mb-4">Contact With Us</h1>
            <p className="text-gray-400 mb-4">
              It's very easy to get in touch with us. Just use the contact form
              or pay us a visit for a coffee at the office. Dynamically innovate
              competitive technology after an expanded array of leadership.
            </p>
            <p className="text-gray-500 mb-1">Head Office</p>
            <p className="text-gray-400 mb-4">
              121 King St, Melbourne VIC 3000, Australia
            </p>
            <p className="text-gray-400">Phone: +61 2 8376 6284</p>
            <p className="text-gray-400">
              Email:{" "}
              <span className="text-blue-500 cursor-pointer transition duration-300 hover:text-blue-700">
                hello@yourdomain.com
              </span>
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="text-xl font-semibold mb-4">Reach us quickly</h1>
            <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
              <input
                className="bg-white py-4 px-2 ring-1 ring-gray-200 rounded-sm w-full transition duration-300 focus:outline-0 focus:ring-[#6a47bd]"
                type="text"
                placeholder="Enter name"
              />
              <input
                className="bg-white py-4 px-2 ring-1 ring-gray-200 rounded-sm w-full transition duration-300 focus:outline-0 focus:ring-[#6a47bd]"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
              <input
                className="bg-white py-4 px-2 ring-1 ring-gray-200 rounded-sm w-full transition duration-300 focus:outline-0 focus:ring-[#6a47bd]"
                type="text"
                placeholder="Your Phone"
              />
              <input
                className="bg-white py-4 px-2 ring-1 ring-gray-200 rounded-sm w-full transition duration-300 focus:outline-0 focus:ring-[#6a47bd]"
                type="text"
                placeholder="Your Company"
              />
            </div>
            <textarea
              className="bg-white py-4 px-2 ring-1 ring-gray-200 rounded-sm w-full min-h-[200px] mb-5 transition duration-300 focus:outline-0 focus:ring-[#6a47bd]"
              placeholder="Message"
            ></textarea>
            <button className="text-gray-400 py-2 px-6 rounded-full border-2 border-gray-400 cursor-pointer transition duration-300 shadow-[0_0_8px_#B096EF] hover:shadow-[0_0_16px_#B096EF] hover:translate-y-[-6px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
