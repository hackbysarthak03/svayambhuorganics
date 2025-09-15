import { useState } from 'react';

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
    title: "Ayurvedic Products",
    image:
      "https://res.cloudinary.com/doy34nvkz/image/upload/v1757883692/aditi-panatu-w0dK8Dr7bz0-unsplash_gqsrp3.jpg",
    description:
      "Traditional Ayurvedic formulations and remedies crafted with ancient wisdom to balance mind, body, and soul.",
    bgColor: "",
    items: "780+ items",
  },
  {
    id: 3,
    title: "Superfoods & Wellness",
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
    <div id='shopCategories' className="min-h-screen my-20">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Explore <span className='text-[#008236]'>More Categories</span>
        </h1>
        <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
          Discover amazing products across our carefully curated categories
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex h-120 mx-4 mb-8">
        {categories.map((category, index) => {
          const isHovered = hoveredCard === category.id;
          const isAnyHovered = hoveredCard !== null;
          
          // Calculate widths
          let cardWidth;
          if (!isAnyHovered) {
            cardWidth = '25%'; // Equal width when no hover
          } else if (isHovered) {
            cardWidth = '45%'; // Expanded width for hovered card
          } else {
            cardWidth = '25%'; // Reduced width for non-hovered cards
          }

          return (
            <div
              key={category.id}
              className="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group"
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
              
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                {/* Title - Always Visible */}
                <div className={`transition-all duration-300 ${isHovered ? 'mb-6' : 'mb-0'}`}>
                  <h2 className={`font-bold transition-all duration-300 ${
                    isAnyHovered && !isHovered 
                      ? 'text-lg writing-mode-vertical text-center transform rotate-0' 
                      : 'text-2xl'
                  }`}>
                    {isAnyHovered && !isHovered ? (
                      <span className="transform inline-block origin-center whitespace-nowrap">
                        {category.title}
                      </span>
                    ) : (
                      category.title
                    )}
                  </h2>
                </div>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {/* Item Count */}
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    {category.items}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform cursor-pointer hover:bg transition-all duration-300 shadow-lg">
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
      <div className="text-center py-8 px-4">
        <p className="text-gray-600  italic mb-6">
          Can't find what you're looking for?
        </p>
        <button className="px-8 py-3 bg-[#008236] text-white font-semibold rounded-lg  transform hover:scale-105 transition-all duration-300 cursor-pointer">
          View All Categories
        </button>
      </div>
    </div>
  );
}