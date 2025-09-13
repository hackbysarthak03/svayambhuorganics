import React from "react";
import { Leaf, Heart, Globe, Award } from "lucide-react";

const AboutCompany = () => {
  return (
    <section className="py-6 px-6 mb-20 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Who&nbsp;<span className="text-[#00A63E]">We Are?</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            At <span className="font-semibold">Svayambhu Organics</span>, we
            believe in nurturing wellness by combining the wisdom of tradition
            with the purity of nature. Our products are crafted with the finest
            natural ingredients, ensuring authenticity and effectiveness. With a
            vision to make holistic living accessible, we focus on sustainability,
            purity, and the well-being of every individual who chooses us.<br /><br /><span className="italic">Svayambhu Organics is an Ayurvedic brand dedicated to bringing the timeless wisdom of<span className="font-bold"> Ancient India </span> into modern wellness.</span>
          </p>
          <button className="bg-[#00A63E] hover:bg-[#02b343] text-white px-6 py-2 rounded-xl transition-all duration-300 cursor-pointer">
            Know more
          </button>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-[#f9fafb] border-2 border-[#00A63E] rounded-2xl transition">
            <Leaf className="w-10 h-10 text-[#5b9338] mb-3" />
            <p className="text-sm font-medium">100% Natural</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-[#f9fafb] border-2 border-[#00A63E] rounded-2xl  transition">
            <Heart className="w-10 h-10 text-[#5b9338] mb-3" />
            <p className="text-sm font-medium">Health & Wellness</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-[#f9fafb] border-2 border-[#00A63E] rounded-2xl transition">
            <Globe className="w-10 h-10 text-[#5b9338] mb-3" />
            <p className="text-sm font-medium">Sustainable Sourcing</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-[#f9fafb] border-2 border-[#00A63E] rounded-2xl transition">
            <Award className="w-10 h-10 text-[#5b9338] mb-3" />
            <p className="text-sm font-medium">Trusted Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
