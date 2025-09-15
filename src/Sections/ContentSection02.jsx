import React from 'react'

const ContentSection02 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 space-y-2">
                            {/* Header with light greenish rounded background */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 ">
                                    <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                                    <span className="text-green-600 p-3 rounded-2xl bg-green-100 font-medium text-sm uppercase tracking-wider"># Trending Product</span>
                                </div>

                                <div className="rounded-2xl py-6">
                                    <h2 className="text-4xl lg:text-6xl font-bold text-[gray-800] leading-tight"><span className='text-green-600'>Curcumin</span>
                                        <div className="inline-block ml-4">
                                            <svg viewBox="0 0 100 50" className="w-16 h-8 text-green-300">
                                                <path d="M10 25 Q30 10 50 25 T90 25" stroke="currentColor" strokeWidth="2" fill="none" />
                                                <circle cx="15" cy="22" r="1.5" fill="currentColor" />
                                                <circle cx="25" cy="18" r="1" fill="currentColor" />
                                                <circle cx="35" cy="20" r="1.2" fill="currentColor" />
                                                <circle cx="55" cy="18" r="1" fill="currentColor" />
                                                <circle cx="65" cy="22" r="1.5" fill="currentColor" />
                                                <circle cx="75" cy="19" r="1.2" fill="currentColor" />
                                                <circle cx="85" cy="22" r="1" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </h2>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Curcumin, the key compound in turmeric, is a potent antioxidant and anti-inflammatory that supports immunity, joint health, heart, brain, and digestion, making it vital for natural healing and overall wellness.
                                </p>
                            </div>

                            {/* Benefits Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Source</h3>
                                    <p className="text-gray-600 text-sm">Active compound in turmeric</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Properties</h3>
                                    <p className="text-gray-600 text-sm">Anti-inflammatory, antioxidant</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Benefits</h3>
                                    <p className="text-gray-600 text-sm">Supports immunity, joint health, heart & brain health, digestion</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Uses</h3>
                                    <p className="text-gray-600 text-sm">Herbal medicine, supplements, natural healing</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3">
                                    <span>Discover Curcumin Products</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="order-2 lg:order-2 relative">
                            <div className="relative">
                                {/* Decorative blob background */}
                                <div className="absolute inset-0 transform rotate-6">
                                    <svg viewBox="0 0 400 400" className="w-full h-full text-green-100">
                                        <path d="M200,50 Q300,100 350,200 Q300,300 200,350 Q100,300 50,200 Q100,100 200,50 Z" fill="currentColor" />
                                    </svg>
                                </div>

                                {/* Main image container */}
                                <div className="relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="bg-white p-4 rounded-3xl shadow-2xl">
                                        <img
                                            src="https://ik.imagekit.io/wnwwpicnc/GettyImages-1145055978.jpg?updatedAt=1757940325638"
                                            alt="Fresh Moringa leaves and seeds"
                                            className="w-full h-80 object-cover rounded-2xl" />
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ContentSection02
