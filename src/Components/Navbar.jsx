import { Bell, User, ShoppingBag, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullNavbar, setShowFullNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Categories data (unchanged)
  const categories = {
    "Organic Foods": [
      { name: "Fresh Vegetables", link: "/products/fresh-vegetables" },
      { name: "Organic Fruits", link: "/products/organic-fruits" },
      { name: "Grains & Pulses", link: "/products/grains-pulses" },
      { name: "Dairy Products", link: "/products/dairy" },
      { name: "Nuts & Seeds", link: "/products/nuts-seeds" },
      { name: "Organic Spices", link: "/products/spices" }
    ],
    "Ayurvedic & Wellness": [
      { name: "Herbal Supplements", link: "/products/herbal-supplements" },
      { name: "Natural Skincare", link: "/products/natural-skincare" },
      { name: "Essential Oils", link: "/products/essential-oils" },
      { name: "Ayurvedic Products", link: "/products/ayurvedic" },
      { name: "Organic Teas", link: "/products/organic-teas" },
      { name: "Health Drinks", link: "/products/health-drinks" }
    ],
    "Superfoods & Nutraceuticals": [
      { name: "Organic Fertilizers", link: "/products/fertilizers" },
      { name: "Natural Cleaners", link: "/products/cleaners" },
      { name: "Plant Seeds", link: "/products/seeds" },
      { name: "Garden Tools", link: "/products/garden-tools" },
      { name: "Eco-friendly Products", link: "/products/eco-friendly" },
      { name: "Composting Supplies", link: "/products/composting" }
    ],
    "Accessories and Lifestyle": [
      { name: "Organic Baby Food", link: "/products/baby-food" },
      { name: "Natural Baby Care", link: "/products/baby-care" },
      { name: "Organic Cotton Clothes", link: "/products/baby-clothes" },
      { name: "Non-toxic Toys", link: "/products/baby-toys" },
      { name: "Baby Skincare", link: "/products/baby-skincare" },
      { name: "Feeding Accessories", link: "/products/feeding-accessories" }
    ]
  };

  // Scroll listener: hide top section on scroll down, show on scroll up
  useEffect(() => {
    const threshold = 8; // pixels of scroll to consider significant
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + threshold) {
        // scrolling down
        setShowFullNavbar(false);
      } else if (currentY < lastScrollY.current - threshold) {
        // scrolling up
        setShowFullNavbar(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="fixed left-0 w-full z-50 bg-white shadow-sm transition-all duration-300">
        {/* Top Section - Search and Account Icons */}
        <div
          className={`border-b border-gray-100 transition-all duration-300 overflow-hidden ${
            showFullNavbar ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        console.log('Searching for:', searchQuery);
                        // handle search
                      }
                    }}
                    placeholder="Search all products..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-3 ml-6">
                <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>
                <Link to='/cart' className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                </Link>
                <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Navigation Menu (always visible) */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-28">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div className="w-18 h-18 rounded-full flex items-center justify-center mr-3">
                  <img
                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1757679275/Untitled_design_28_fgkwqm.png"
                    alt="Svayambhu Organics Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-gray-800 hidden sm:block">Svayambhu Organics</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Who we are?
                </Link>

                {/* Categories Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center">
                    Categories
                    <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 border border-gray-100">
                    <div className="py-2">
                      {Object.keys(categories).map((category) => (
                        <div
                          key={category}
                          className="relative"
                          onMouseEnter={() => setHoveredCategory(category)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <a
                            href="#"
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all duration-200 font-medium"
                          >
                            {category}
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </a>

                          {/* Products Submenu */}
                          {hoveredCategory === category && (
                            <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                              <div className="py-2">
                                {categories[category].map((product) => (
                                  <a
                                    key={product.name}
                                    href={product.link}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                                  >
                                    {product.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/publications" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Publications
                </Link>
                <Link to="/contact-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Contact Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (unchanged) */}
      <div className={`fixed inset-0 z-60 lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />

        {/* Slide-in Menu */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="p-6 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    console.log('Searching for:', searchQuery);
                  }
                }}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-6">
            <div className="space-y-6">
              <a href="/about" className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Who we are?
              </a>

              {/* Mobile Categories */}
              <div>
                <h3 className="text-gray-700 text-lg font-medium py-2 mb-3">Categories</h3>
                <div className="space-y-4 pl-4">
                  {Object.keys(categories).map((category) => (
                    <div key={category}>
                      <h4 className="text-green-600 font-medium text-base mb-2">{category}</h4>
                      <div className="space-y-1 pl-3">
                        {categories[category].map((product) => (
                          <a key={product.name} href={product.link} className="block text-gray-600 text-sm py-1 hover:text-green-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            {product.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#trending" className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Trending Products</a>
              <a href="/contact" className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </div>

            {/* Mobile Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors relative">
                  <Bell className="h-5 w-5 mb-1" />
                  <span className="text-xs">Alerts</span>
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>
                <Link to='/cart' className="flex flex-col items-center p-3 text-gray-600 hover:text-green-600 rounded-lg transition-colors relative cursor-pointer">
                  <ShoppingBag className="h-5 w-5 mb-1" />
                  <span className="text-xs">Cart</span>
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                </Link>
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <User className="h-5 w-5 mb-1" />
                  <span className="text-xs">Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      {/* Keep as you had previously — this matches the bottom-section height */}
      <div className="h-28"></div>
    </div>
  );
};

export default Navbar;
