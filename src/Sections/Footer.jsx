import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {

  const [email, setEmail] = React.useState("");

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 140" preserveAspectRatio="none" style={{ backgroundColor: "#edfdf7" }}>
                        <path fill="#008236" d="M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
                    </svg>
    <footer className="relative bg-[#008236] text-white pt-10 pb-10 border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            {/* Brand */}
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mr-3">
                  <img
                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758106817/Untitled_design_28_keyj3o.png"
                    alt="Svayambhu Organics Logo"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Svayambhu Organics</h2>
                <p className="text-sm text-white italic">
                  Rooted in Tradition, Grown by Nature
                </p>
              </div>
            </div>

            <p className="text-sm italic leading-relaxed text-white mb-6">
              Promoting holistic wellness through the ancient wisdom of Ayurveda.
              Natural healing for mind, body, and spirit with authentic organic products.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-white">
                <MapPin className="w-6 h-6 mr-2 text-white" />
                <span>
                  F-49, 5th Floor, NPX by Urbtech, Sector 153, Noida, Gautam Buddha
                  Nagar, Uttar Pradesh - India - 201306
                </span>
              </div>
              <div className="flex items-center text-sm text-white">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-sm text-white">
                <Mail className="w-4 h-4 mr-2 text-white" />
                <span>sales@svayambhuorganics.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Stay Connected
              </h3>
              <p className="text-sm mb-4 text-white">
                Subscribe for health tips, product updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Thank you for subscribing! You will receive wellness tips and updates."
                    );
                  }}
                  className="bg-white transform hover:scale-105 duration-400 text-green-600 px-6 py-2 rounded-md font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg pb-2 border-b-2 font-bold text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Herbal Medicines</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Ayurvedic Oils</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Organic Supplements</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Natural Skincare</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Wellness Teas</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Detox Products</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Immunity Boosters</a>
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div>
            <h3 className="text-lg pb-2 border-b-2 font-bold text-white mb-4">
              Our Policies
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Company Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Refund & Returns</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Quality Assurance</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg pb-2 border-b-2 font-bold text-white mb-4">
              Other Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Join as Seller</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Partner With Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Blog & Articles</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()} Svayambhu Organics. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Leaves */}
      <div className="hidden md:block absolute  bottom-0 right-20 opacity-90 pointer-events-none">
        <img
          src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758109103/Untitled_design_31_grwisf.png" 
          alt="Decorative Leaves"
          className="w-40 lg:w-56"
        />
      </div>
    </footer>
    </>
  );
};

export default Footer;
