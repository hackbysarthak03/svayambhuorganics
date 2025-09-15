import React from 'react'

const Certifications = () => {
  return (
    <div>
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-700">Certifications</span> & Licenses
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by regulatory bodies and certified by leading Ayurvedic institutions
            </p>
          </div>
        </div>

        {/* Infinite Slider */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of images */}
            <div className="flex space-x-2 px-2">
              {[
                {
                  name: "Ayush Ministry",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757753809/457159273_1527142541507046_9134542569652666480_n-removebg-preview_cabgvy.png",
                  type: "Nurturing traditional wellness"
                },
                {
                  name: "USDA Certified Organic",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/logo_images_efzlek.webp",
                  type: "Quality Assurance"
                },
                {
                  name: "GMP Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/GMP_Certified_auhdu1.png",
                  type: "Certified for safety"
                },
                {
                  name: "ISO 9001:2015",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/ISO_logo_bvlxhp.png",
                  type: "Commitment to quality"
                },
                {
                  name: "HACCP Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/HACCP_Certification_logo_jrzb9x.png",
                  type: "Trusted food quality"
                },
                {
                  name: "Fair Trade Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/Fair_Trade_Certification_logo_xatnfx.png",
                  type: "Equity through trade"
                },
                {
                  name: "EU Organic Certification",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757753809/Untitled_design_65_t8o6y5.png",
                  type: "Certifed Organic Standards"
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 h-40 rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-20 mb-4 bg-gray-50 rounded-lg transition-colors duration-200">
                    <div 
                      className="w-16 h-16 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-600 text-center">
                    {cert.type}
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8 px-4">
              {[
                {
                  name: "Ayush Ministry",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757753809/457159273_1527142541507046_9134542569652666480_n-removebg-preview_cabgvy.png",
                  type: "Nurturing traditional wellness"
                },
                {
                  name: "USDA Certified Organic",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/logo_images_efzlek.webp",
                  type: "Quality Assurance"
                },
                {
                  name: "GMP Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/GMP_Certified_auhdu1.png",
                  type: "Certified for safety"
                },
                {
                  name: "ISO 9001:2015",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/ISO_logo_bvlxhp.png",
                  type: "Commitment to quality"
                },
                {
                  name: "HACCP Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/HACCP_Certification_logo_jrzb9x.png",
                  type: "Trusted food quality"
                },
                {
                  name: "Fair Trade Certified",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757752984/Fair_Trade_Certification_logo_xatnfx.png",
                  type: "Equity through trade"
                },
                {
                  name: "EU Organic Certification",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757753809/Untitled_design_65_t8o6y5.png",
                  type: "Certifed Organic Standards"
                }
              ].map((cert, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-64 h-40  p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-20 mb-4 rounded-lg transition-colors duration-200">
                    <div 
                      className="w-16 h-16 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-600 text-center">
                    {cert.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Certifications
