import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const GetInTouch = () => {
  return (
    <section className="w-full py-16 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">
            Let's <span className="text-[#008236]">Collaborate!</span>
          </h2>
          <p className="text-lg italic text-gray-700 leading-relaxed">
            We are here to connect, collaborate, and create meaningful solutions.  
            Whether it’s a query, partnership, or just a friendly hello —  
            we’re only a message away!
          </p>

          {/* Contact Details */}
          <div className="space-y-3 italic">
            <p>
              <strong className="text-green-800">Registered Office:</strong> F-49, 5th Floor, NPX by Urbtech, Sector 153, Noida, Gautam Buddha Nagar, Uttar Pradesh, India - 201306
            </p>
            <p>
              <strong className="text-green-800">Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong className="text-green-800">Email:</strong> sales@svayambhuorganics.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-[#314b21] text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 transition"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[#314b21] text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-[#314b21] text-xl" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-[#314b21] placeholder-gray-500 focus:outline-none focus:border-[#5b9338]"
              />
              <input
                type="text"
                placeholder="Second Name"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-[#314b21] placeholder-gray-500 focus:outline-none focus:border-[#5b9338]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-[#314b21] placeholder-gray-500 focus:outline-none focus:border-[#5b9338]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-[#314b21] placeholder-gray-500 focus:outline-none focus:border-[#5b9338]"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-[#008236] text-white font-semibold rounded-xl shadow-md hover:bg-[#5b9338] transition"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
