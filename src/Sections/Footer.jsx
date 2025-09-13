import React from "react";
import { Mail, MapPin, Phone, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-green-600 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            {/* Brand */}
            <div className="flex items-center mb-4">
              <div className="bg-green-600 p-2 rounded-full mr-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-600">Svayambhu Organics</h2>
                <p className="text-sm text-green-500 font-medium">Nature's Path to Wellness</p>
              </div>
            </div>
            
            <p className="text-sm italic leading-relaxed text-gray-600 mb-6">
              Promoting holistic wellness through the ancient wisdom of Ayurveda. 
              Natural healing for mind, body, and spirit with authentic organic products.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-6 h-6 mr-2 text-green-600" />
                <span>F-49, 5th Floor, NPX by Urbtech, Sector 153, Noida, Gautam Buddha Nagar, Uttar Pradesh - India - 201306</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-green-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-green-600" />
                <span>sales@svayambhuorganics.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Stay Connected</h3>
              <p className="text-sm mb-4 text-gray-600">
                Subscribe for health tips, product updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing! You will receive wellness tips and updates.');
                  }}
                  className="bg-green-700 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Herbal Medicines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Ayurvedic Oils</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Organic Supplements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Natural Skincare</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Wellness Teas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Detox Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Immunity Boosters</a></li>
            </ul>
          </div>

          {/* Our Policies */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Our Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Company Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Refund & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Quality Assurance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Join as Seller</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Partner With Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Blog & Articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()} Svayambhu Organics. All rights reserved.
            </div>
            <div className="flex items-center">
              <span>Designed with</span>
              <span className="text-green-600 mx-1 text-lg">♥</span>
              <span>for your wellness journey</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;