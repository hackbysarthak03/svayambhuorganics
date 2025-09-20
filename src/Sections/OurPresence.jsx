import React from 'react'

const OurPresence = () => {
  return (
    <div>
      <section className="relative py-16 px-20 overflow-hidden">
        {/* Natural Elements Background */}
          <div className="absolute inset-0 opacity-10">
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
                  <div className="flex items-center justify-center h-20 mb-6 bg-transparent rounded-lg transition-colors duration-200">
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
