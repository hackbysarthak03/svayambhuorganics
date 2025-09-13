import React, { useState, useEffect } from 'react';
import { Bell, User, ShoppingBag, Download, Menu, X } from 'lucide-react';
import Navbar from './Components/Navbar';
import Certifications from './Sections/Certifications';
import FAQSection from './Sections/FAQSection';
import Footer from './Sections/Footer';
import AboutCompany from './Sections/AboutCompany';

const AyurvedicApp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    

    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Traditional Ayurvedic Healing"
        },
        {
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Natural Herbal Medicine"
        },
        {
            image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Holistic Wellness Solutions"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-900 relative overflow-hidden">
                {/* Background Hero Image */}
                <div className="absolute inset-0">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${slide.image})`
                                }} />
                            <div className="absolute inset-0 bg-black bg-opacity-20" />
                        </div>
                    ))}
                </div>

    
                <Navbar />

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Bottom Buttons */}
                <div className="absolute bottom-45 left-1/2 transform -translate-x-1/2 flex space-x-4 z-40">
                    <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Shop with Us</span>
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg">
                        <Download className="w-4 h-4" />
                        <span>Get a Quote</span>
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                ? 'bg-white'
                                : 'bg-white bg-opacity-40 hover:bg-opacity-60'}`} />
                    ))}
                </div>

                {/* Curved Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 h-32 z-30">
                    <svg
                        viewBox="0 0 1200 120"
                        className="absolute bottom-0 w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,120 L0,60 Q600,0 1200,60 L1200,120 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <section className="min-h-screen bg-gray-50 py-20 px-6 lg:px-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 opacity-20">
                    <svg viewBox="0 0 200 100" className="w-32 h-16 text-green-300">
                        <path d="M20 50 Q40 20 60 50 T100 50 T140 50 T180 50" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="25" cy="45" r="3" fill="currentColor" />
                        <circle cx="35" cy="35" r="2" fill="currentColor" />
                        <circle cx="45" cy="40" r="2.5" fill="currentColor" />
                        <circle cx="65" cy="35" r="2" fill="currentColor" />
                        <circle cx="75" cy="45" r="3" fill="currentColor" />
                        <circle cx="85" cy="38" r="2.5" fill="currentColor" />
                        <circle cx="105" cy="42" r="2" fill="currentColor" />
                        <circle cx="115" cy="35" r="2.5" fill="currentColor" />
                        <circle cx="125" cy="48" r="2" fill="currentColor" />
                        <circle cx="145" cy="40" r="2.5" fill="currentColor" />
                        <circle cx="155" cy="35" r="2" fill="currentColor" />
                        <circle cx="165" cy="45" r="3" fill="currentColor" />
                    </svg>
                </div>

                <div className="absolute bottom-20 left-10 opacity-15">
                    <svg viewBox="0 0 150 200" className="w-24 h-32 text-green-200">
                        <path d="M75 20 Q60 40 75 60 Q90 40 75 20" fill="currentColor" />
                        <path d="M75 60 Q60 80 75 100 Q90 80 75 60" fill="currentColor" />
                        <path d="M75 100 Q60 120 75 140 Q90 120 75 100" fill="currentColor" />
                        <path d="M75 140 Q60 160 75 180 Q90 160 75 140" fill="currentColor" />
                    </svg>
                </div>

                <AboutCompany />

                {/* Content Section - 1 */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 relative">
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
                                            src="https://res.cloudinary.com/doy34nvkz/image/upload/v1757678665/moringa-6582660_h2g83r.jpg"
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

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-2">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 ">
                                    <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                                    <span className="text-green-600 p-3 rounded-2xl bg-green-100 font-medium text-sm uppercase tracking-wider"># Trending Product</span>
                                </div>

                                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                    About <span className="text-green-600">Moringa</span>
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
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3">
                                    <span>Discover Moringa Products</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section - 2 */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 space-y-2">
                            {/* Header with light greenish rounded background */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 ">
                                    <div className="w-12 h-1 bg-[#E89401] rounded-full"></div>
                                    <span className="text-[#E89401] p-3 rounded-2xl bg-[#fff4e2] font-medium text-sm uppercase tracking-wider"># Trending Product</span>
                                </div>

                                <div className="rounded-2xl px-6 py-6">
                                    <h2 className="text-4xl lg:text-6xl font-bold text-[gray-800] leading-tight">
                                        About <span style={{ color: "#E89401" }}>Curcumin</span>
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
                                            src="https://res.cloudinary.com/doy34nvkz/image/upload/v1757680804/fa246ce0-054b-4892-bf30-5eb43cd938aa-thumb_1_t9h0cz.jpg"
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

                {/* Why Choose Us? */}
                <section className="relative mt-32 mb-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-left mb-24">
                            <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Why you should <span className="text-green-700">choose us?</span>
                            </h2>
                        </div>

                        {/* Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                {
                                    number: "01",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "Proven Results",
                                    description: "Over 10,000+ satisfied patients with successful healing outcomes"
                                },
                                {
                                    number: "02",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    ),
                                    title: "Expert Knowledge",
                                    description: "Certified practitioners with deep understanding of ancient texts"
                                },
                                {
                                    number: "03",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    ),
                                    title: "Pure Ingredients",
                                    description: "100% organic herbs sourced directly from certified farms"
                                },
                                {
                                    number: "04",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    ),
                                    title: "Personalized Care",
                                    description: "Individual treatment plans based on your unique body type"
                                },
                                {
                                    number: "05",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "24/7 Support",
                                    description: "Round-the-clock guidance and support for your wellness journey"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 group"
                                >
                                    {/* Floating Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
                                        {item.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-200">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <Certifications />
                <FAQSection />

            </section >

            <Footer />


        </>
    );
};

export default AyurvedicApp;