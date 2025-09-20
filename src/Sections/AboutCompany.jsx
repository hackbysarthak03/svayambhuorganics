import React from "react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section id="aboutSection" className="py-6 px-6 mb-20 md:px-16 bg-transparent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
            Who&nbsp;<span className="text-[#00A63E]">We Are?</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            At <span className="font-semibold">Svayambhu Organics</span>, we
            believe in nurturing wellness by combining the wisdom of tradition
            with the purity of nature. Our products are crafted with the finest
            natural ingredients, ensuring authenticity and effectiveness. With a
            vision to make holistic living accessible, we focus on sustainability,
            purity, and the well-being of every individual who chooses us.
            <br />
            <br />
            <span className="italic">
              Svayambhu Organics is an Ayurvedic brand dedicated to bringing the
              timeless wisdom of <span className="font-bold">Ancient India</span>{" "}
              into modern wellness.
            </span>
          </p>
          
          <Link to="/about" className="bg-[#00A63E] hover:bg-[#02b343] text-white px-6 py-2 rounded-xl transition-all duration-300 cursor-pointer">
            Know more
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758283179/Gemini_Generated_Image_w8s71qw8s71qw8s7_pl6ubf.png"
            alt="About Svayambhu Organics"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
