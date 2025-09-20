import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopCategories() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Organic Products",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1757883692/download_13_kmaujv.jpg",
      description:
        "Pure, chemical-free, and eco-friendly products sourced directly from nature to support a healthy and sustainable lifestyle.",
      bgColor: "",
      items: "650+ items",
    },
    {
      id: 2,
      title: "Ayurvedic & Wellness",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1757883692/aditi-panatu-w0dK8Dr7bz0-unsplash_gqsrp3.jpg",
      description:
        "Traditional Ayurvedic formulations and remedies crafted with ancient wisdom to balance mind, body, and soul.",
      bgColor: "",
      items: "780+ items",
    },
    {
      id: 3,
      title: "Superfoods & Nutraceuticals",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1757883819/woman-2592247_qldgxq.jpg",
      description:
        "Power-packed superfoods and nutritional wellness products ideal for gym enthusiasts, fitness lovers, and health seekers.",
      bgColor: "",
      items: "540+ items",
    },
    {
      id: 4,
      title: "Accessories & Lifestyle",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1757883818/drink-1487304_xk5zow.jpg",
      description:
        "Essential accessories including indoor plants, eco-friendly lifestyle products, and Ayurvedic wellness companions.",
      bgColor: "black-700",
      items: "310+ items",
    },
  ];

  return (
    <div id="shopCategories" className="relative min-h-screen my-20">

      {/* Natural Elements Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute top-10 left-10 w-32 h-32 text-green-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <svg className="absolute top-20 right-20 w-24 h-24 text-green-400 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
        </svg>
        <svg className="absolute bottom-32 left-1/4 w-20 h-20 text-green-300 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <svg className="absolute bottom-20 right-1/3 w-28 h-28 text-green-200 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M6.5,12.5L7.5,16.5L11.5,17.5L7.5,18.5L6.5,22.5L5.5,18.5L1.5,17.5L5.5,16.5L6.5,12.5Z" />
        </svg>
        <svg className="absolute top-1/2 right-10 w-16 h-16 text-green-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
        </svg>
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute animate-float-slow" style={{ top: '15%', left: '80%' }}>
          <svg className="w-8 h-8 text-green-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
        <div className="absolute animate-float-medium" style={{ top: '70%', left: '10%' }}>
          <svg className="w-6 h-6 text-green-500 opacity-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
        <div className="absolute animate-float-fast" style={{ top: '40%', left: '90%' }}>
          <svg className="w-5 h-5 text-green-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="text-center py-12 px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Explore <span className="text-[#008236]">More Categories</span>
        </h1>
        <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
          Discover amazing products across our carefully curated categories
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex h-120 mx-4 mb-8 relative z-10">
        {categories.map((category) => {
          const isHovered = hoveredCard === category.id;
          const isAnyHovered = hoveredCard !== null;

          // Calculate widths
          let cardWidth;
          if (!isAnyHovered) {
            cardWidth = '25%';
          } else if (isHovered) {
            cardWidth = '45%';
          } else {
            cardWidth = '25%';
          }

          return (
            <div
              key={category.id}
              className="relative m-2 overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out group"
              style={{ width: cardWidth }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className={`transition-all duration-300 ${isHovered ? 'mb-6' : 'mb-0'}`}>
                  <h2
                    className={`font-bold transition-all duration-300 ${
                      isAnyHovered && !isHovered
                        ? 'text-lg writing-mode-vertical text-center transform rotate-0'
                        : 'text-2xl'
                    }`}
                  >
                    {isAnyHovered && !isHovered ? (
                      <span className="transform inline-block origin-center whitespace-nowrap">
                        {category.title}
                      </span>
                    ) : (
                      category.title
                    )}
                  </h2>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    {category.items}
                  </div>

                  <p className="text-gray-200 mb-6 leading-relaxed">{category.description}</p>

                  <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Browse Products
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="text-center py-8 px-4 relative z-10">
        <p className="text-gray-600 italic mb-6">Can't find what you're looking for?</p>
        <Link
          to="/products"
          className="px-8 py-3 bg-[#008236] hover:bg-green-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
