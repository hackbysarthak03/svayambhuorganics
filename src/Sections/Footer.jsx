import React from "react";

const Footer = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310"><path fill="#314b21" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <footer className="bg-[#314b21] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Svayambhu Organics</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Promoting holistic wellness through the ancient wisdom of Ayurveda. 
            Natural healing for mind, body, and spirit.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="transition-colors">Home</a></li>
            <li><a href="#" className="transition-colors">About Us</a></li>
            <li><a href="#" className="transition-colors">Services</a></li>
            <li><a href="#" className="transition-colors">FAQ</a></li>
            <li><a href="#" className="transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#5b9338] transition-colors">Ayurvedic Consultation</a></li>
            <li><a href="#" className="hover:text-[#5b9338] transition-colors">Herbal Remedies</a></li>
            <li><a href="#" className="hover:text-[#5b9338] transition-colors">Detox Programs</a></li>
            <li><a href="#" className="hover:text-[#5b9338] transition-colors">Lifestyle Guidance</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#5b9338] mb-4">Stay Connected</h3>
          <p className="text-sm mb-4 text-gray-200">
            Subscribe to our newsletter for health tips and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-[#5b9338] hover:bg-green-600 px-4 py-2 rounded-r-md font-semibold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AyurvedaCare. All rights reserved. | Designed with{" "}
        <span className="text-[#5b9338]">♥</span> by Team
      </div>
    </footer>
    </>
  );
};

export default Footer;
