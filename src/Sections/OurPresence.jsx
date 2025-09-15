import React from 'react'

const OurPresence = () => {
  return (
    <div>
      <section className="relative py-16 px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Available on Your <span className="text-green-700">Favorite Platforms</span>
            </h2>
            <p className="text-lg text-gray-600 italic">
              Shop our products on leading e-commerce platforms!
            </p>
          </div>
        </div>

        {/* Infinite Slider */}
        <div className="relative">
          <div className="flex">
            {/* First set of images */}
            <div className="flex space-x-2 px-2">
              {[
                {
                  name: "Blinkit",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757916426/Blinkit-yellow-app-icon.svg_uhu9ii.png",
                  
                },
                {
                  name: "Zepto",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757916426/Logo_of_Zepto_v9ldqp.png",
                  
                },{
                  name: "Instamart",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757916425/instamart-logo-vector_logoshape_gqypam.png",
                  
                },
                {
                  name: "Amazon",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757916425/amazon-logo-on-transparent-background-free-vector_mvrpcq.jpg",
              
                },
                {
                  name: "Flipkart",
                  image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757916425/unnamed_hgu8kv.jpg",
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 h-40 rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center h-20 mb-6 bg-gray-50 rounded-lg transition-colors duration-200">
                    <div 
                      className="w-36 h-26 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    />
                  </div>
                  <h3 className="text-xl italic text-gray-900 text-center mb-1">
                    {cert.name}
                  </h3>
                  
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurPresence;
