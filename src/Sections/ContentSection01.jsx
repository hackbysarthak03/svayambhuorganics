import React from 'react'
import { Link } from 'react-router-dom'

const ContentSection01 = () => {
  return (
    <div id='trendingProducts' className='py-4'>
      <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 overflow-hidden">
                            <div className="p-4 rounded-xl">
                                <img
                                    src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758281676/Gemini_Generated_Image_wrqkyiwrqkyiwrqk_ahmged.png"
                                    alt="Fresh Moringa leaves and seeds"
                                    className="w-full h-150 object-cover" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-2">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 ">
                                    <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                                    <span className="text-green-600 p-3 rounded-2xl bg-green-100 font-medium text-sm uppercase tracking-wider"># Trending Product</span>
                                </div>

                                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight"><span className="text-green-600">Moringa</span>
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

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Moringa, often called the <span className="font-semibold text-gray-800">"Miracle Tree,"</span> is a nutrient-rich
                                    plant native to India. Its leaves, seeds, and pods are packed with vitamins, minerals, and antioxidants that
                                    support overall health.
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
                                    <h3 className="font-semibold text-gray-800 mb-2">Rich in Nutrients</h3>
                                    <p className="text-gray-600 text-sm">Packed with vitamins A, C, E and essential minerals</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Boosts Immunity</h3>
                                    <p className="text-gray-600 text-sm">Natural antioxidants strengthen your immune system</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Energy Boost</h3>
                                    <p className="text-gray-600 text-sm">Naturally increases energy and vitality levels</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Ancient Wisdom</h3>
                                    <p className="text-gray-600 text-sm">Trusted in Ayurvedic medicine for centuries</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <Link to="/products/moringa" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex justify-center items-center space-x-3">
                                    <span>Discover Moringa Products</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ContentSection01