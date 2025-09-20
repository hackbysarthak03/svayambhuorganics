import React, { useState } from 'react';
import { Leaf, ShoppingCart, ArrowRight, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
  {
    id: 1,
    name: "Moringa",
    description: "Nutrient-rich superfood leaves and powders that boost immunity and vitality.",
    image: "https://images.unsplash.com/photo-1615485737562-b8132a7ab0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: "12+ Products",
    rating: 4.8,
    badge: "Superfood",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: 2,
    name: "Curcumin",
    description: "Powerful turmeric extracts known for their anti-inflammatory and healing benefits.",
    image: "https://images.unsplash.com/photo-1590080875893-eca66f6df3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: "8+ Products",
    rating: 4.9,
    badge: "Healing",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    name: "Soya Products",
    description: "High-protein organic soya-based foods for healthy and sustainable diets.",
    image: "https://images.unsplash.com/photo-1609271999369-c5cf9f66e3a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: "20+ Products",
    rating: 4.7,
    badge: "Protein Rich",
    gradient: "from-amber-400 to-orange-400"
  },
  {
    id: 4,
    name: "Dehydrated Products",
    description: "Preserved natural foods packed with flavor, nutrients, and long shelf life.",
    image: "https://images.unsplash.com/photo-1627384113719-8a90a3ef1e50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: "15+ Products",
    rating: 4.6,
    badge: "Preserved",
    gradient: "from-red-400 to-pink-500"
  },
  {
    id: 5,
    name: "Health Accessories",
    description: "Essential tools and accessories for maintaining daily wellness and hygiene.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    productCount: "10+ Products",
    rating: 4.8,
    badge: "Wellness",
    gradient: "from-blue-400 to-indigo-500"
  }
];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen bg-[#EEFDF8] pt-10">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
          {/* Background Organic Elements */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute top-20 left-10 w-40 h-40 text-green-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
            <svg className="absolute top-10 right-20 w-32 h-32 text-emerald-400 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
            <svg className="absolute bottom-20 left-1/3 w-24 h-24 text-green-300 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M6.5,12.5L7.5,16.5L11.5,17.5L7.5,18.5L6.5,22.5L5.5,18.5L1.5,17.5L5.5,16.5L6.5,12.5Z" />
            </svg>
            <svg className="absolute bottom-32 right-1/4 w-36 h-36 text-teal-200 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>

          {/* Floating Leaves Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute animate-float-slow" style={{ top: '20%', left: '85%' }}>
              <svg className="w-10 h-10 text-green-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            <div className="absolute animate-float-medium" style={{ top: '60%', left: '5%' }}>
              <svg className="w-8 h-8 text-emerald-500 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            <div className="absolute animate-float-fast" style={{ top: '30%', left: '95%' }}>
              <svg className="w-6 h-6 text-teal-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className='flex items-center justify-center bg-green-600 rounded-full p-4'>
                <Leaf className="w-8 h-8 text-white mr-3" />
                <span className="text-white font-semibold text-lg">100% Organic Categories</span>
                </span>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Explore Our <span style={{ color: '#008236' }}>Natural</span> Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover a wide range of premium organic products carefully sourced from nature's finest offerings. 
                Each category represents our commitment to purity, sustainability, and your family's well-being.
              </p>
            </div>
          </div>

          {/* Animation Styles */}
          <style jsx>{`
            @keyframes float-slow {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes float-medium {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(-3deg); }
            }
            @keyframes float-fast {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(3deg); }
            }
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
            .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
          `}</style>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-[#EEFDF8] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="group cursor-pointer relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                >
                  {/* Image Section with Organic Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Floating Leaf Elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                      <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                      </svg>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Award className="w-3 h-3 text-green-600 mr-1" />
                        <span className="text-xs font-semibold text-green-600">{category.badge}</span>
                      </div>
                    </div>

                    {/* Product Count */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.productCount}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 relative">
                    {/* Decorative Corner Leaf */}
                    <div className="absolute -top-2 -right-2 text-green-100 opacity-60 group-hover:text-green-200 transition-colors duration-500">
                      <svg className="w-12 h-12 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {category.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {renderStars(category.rating)}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{category.rating}</span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                     
                                  <div className="flex items-center justify-between">
                                  <Link to={`/products/${category.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group-hover:translate-x-2">
                                    Explore Category
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                  </Link>
                                  
                                  <button className="p-2 rounded-full border border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hover:scale-110">
                                    <ShoppingCart className="w-4 h-4" />
                                  </button>
                                  </div>
                                </div>

                                {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-5`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden" style={{ backgroundColor: '#008236' }}>
          {/* Background Organic Elements */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute top-10 left-10 w-32 h-32 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
            <svg className="absolute bottom-10 right-10 w-40 h-40 text-white transform rotate-12 opacity-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M6.5,12.5L7.5,16.5L11.5,17.5L7.5,18.5L6.5,22.5L5.5,18.5L1.5,17.5L5.5,16.5L6.5,12.5Z" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-white mr-3" />
              <span className="text-white/90 font-semibold text-lg">Start Your Organic Journey</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Pure, Natural Living?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of families who have embraced organic living with Svayambhu Organics. 
              Your journey to better health starts with a single choice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Shop All Categories
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProductPage;