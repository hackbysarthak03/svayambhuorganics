import React, { useState, useEffect } from 'react';
import { Bell, User, ShoppingBag, Download, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import Certifications from './Sections/Certifications';
import FAQSection from './Sections/FAQSection';
import Footer from './Sections/Footer';
import AboutCompany from './Sections/AboutCompany';
import ContentSection01 from './Sections/ContentSection01';
import ContentSection02 from './Sections/ContentSection02';
import WhyChoose from './Sections/WhyChoose';
import GetInTouch from './Sections/GetInTouch';
import ShopCategories from './Sections/ShopCategories';
import OurPresence from './Sections/OurPresence';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AyurvedicApp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757928462/Gemini_Generated_Image_ysmviaysmviaysmv_nrvp7r.png",
            title: "Embrace Wellness, the Ancient Indian Way"
        },
        {
            image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757928461/Gemini_Generated_Image_aq7ykkaq7ykkaq7y_njeyo9.png",
            title: "Pure, Organic, and Handpicked for You"
        },
        {
            image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1757928460/Gemini_Generated_Image_lu9ce2lu9ce2lu9c_ignwbt.jpg",
            title: "From India's Heritage to Your Home"
        }
    ];

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: true, // Only animate once
            mirror: false, // Don't animate on scroll up
            offset: 100, // Trigger animations 100px before element is in view
        });

        // Refresh AOS when component mounts
        AOS.refresh();

        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
        }, 5000);

        return () => {
            clearInterval(timer);
            AOS.refresh(); // Clean up AOS
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}      // Start hidden
                animate={{ opacity: 1 }}      // Fade in
                exit={{ opacity: 0 }}         // Fade out
                transition={{ duration: 1 }}
            >
                <div className="min-h-140 bg-gray-900 relative overflow-hidden">
                    {/* Background Hero Image */}
                    <div className="absolute inset-0">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-opacity-30" />

                                {/* Slide title */}
                                <div className="absolute inset-0 flex items-center justify-center text-center">
                                    <h1
                                        className="text-white text-4xl md:text-4xl font-bold max-w-4xl leading-tight"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        key={`title-${index}-${currentSlide}`} // Force re-animation on slide change
                                    >
                                        {slide.title}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                        data-aos="fade-right"
                        data-aos-delay="800"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                        data-aos="fade-left"
                        data-aos-delay="800"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Bottom Buttons */}
                    {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-40">
                        <Link to={"/categories"}
                            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 cursor-pointer rounded-full text-sm md:text-lg font-medium transition-all duration-400 flex items-center space-x-2 shadow-lg hover:scale-105"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span>Shop with Us</span>
                        </Link>
                        <a href="#contactSection"
                            className="bg-white hover:bg-gray-50 text-gray-800 px-2 md:px-8 py-1 md:py-3 cursor-pointer rounded-full text-lg font-medium transition-all duration-400 flex items-center space-x-2 shadow-lg hover:scale-105 transform"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            <Download className="w-4 h-4" />
                            <span>Get a Quote</span>
                        </a>
                    </div> */}

                    {/* Slide Indicators */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40"
                        data-aos="fade-up"
                        data-aos-delay="900">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${index === currentSlide
                                    ? 'bg-white'
                                    : 'bg-white bg-opacity-40 hover:bg-opacity-60'}`}
                            />
                        ))}
                    </div>
                </div>

                <section className="min-h-screen bg-[#EDFDF7] px-10 pt-20 pb-5 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div
                        className="absolute top-20 right-20 opacity-20"
                    >
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

                    <div
                        className="absolute bottom-20 left-10 opacity-15"

                    >
                        <svg viewBox="0 0 150 200" className="w-24 h-32 text-green-200">
                            <path d="M75 20 Q60 40 75 60 Q90 40 75 20" fill="currentColor" />
                            <path d="M75 60 Q60 80 75 100 Q90 80 75 60" fill="currentColor" />
                            <path d="M75 100 Q60 120 75 140 Q90 120 75 100" fill="currentColor" />
                            <path d="M75 140 Q60 160 75 180 Q90 160 75 140" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Sections with AOS animations */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <AboutCompany />
                    </div>

                    <div data-aos="fade-right" data-aos-delay="100">
                        <ContentSection01 />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="100">
                        <ContentSection02 />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="100">
                        <ShopCategories />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                        <WhyChoose />
                    </div>

                    <div data-aos="flip-up" data-aos-delay="100">
                        <Certifications />
                    </div>

                    <div data-aos="slide-up" data-aos-delay="100">
                        <OurPresence />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                        <FAQSection />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                        <GetInTouch />
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default AyurvedicApp;