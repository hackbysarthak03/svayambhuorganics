import React, { useState } from 'react';
import { MapPin, Mail, Phone, Star, Play, Users, Target, Eye, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {

  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Leading the company with 15+ years of industry experience."
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Tech visionary driving innovation and digital transformation."
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Ensuring seamless operations and exceptional service delivery."
    },
    {
      name: "Emily Davis",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Crafting compelling brand experiences and visual narratives."
    }
  ];

  const reviews = [
    {
      name: "Alex Thompson",
      company: "TechCorp Inc.",
      rating: 5,
      text: "Outstanding service and exceptional results. The team exceeded our expectations in every aspect of the project."
    },
    {
      name: "Maria Rodriguez",
      company: "StartupXYZ",
      rating: 5,
      text: "Professional, reliable, and innovative. They transformed our vision into reality with remarkable precision."
    },
    {
      name: "David Wilson",
      company: "Global Solutions Ltd.",
      rating: 5,
      text: "The best decision we made was partnering with this team. Their expertise and dedication are unmatched."
    }
  ];



  return (
    <motion.div
      initial={{ opacity: 0 }}      // Start hidden
      animate={{ opacity: 1 }}      // Fade in
      exit={{ opacity: 0 }}         // Fade out
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative from-white to-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Who <span style={{ color: '#008236' }}>We Are?</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Founded in 2021, Svayambhu Organics aims to bring nature’s purity to every Indian home. What began as a small effort to support farmers and promote chemical-free farming has grown into a trusted name for organic, eco-friendly products. More than a brand, we are a movement for organic living, sustainable farming, and a healthier future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveVideo('intro')}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-all hover:scale-105 shadow-lg"
                    style={{ backgroundColor: '#008236' }}
                  >
                    <Play className="w-5 h-5" />
                    Watch Our Story
                  </button>
                  <a href="#contact" className="px-6 py-3 border-2 rounded-lg text-gray-700 border-gray-300 hover:border-gray-400 transition-colors">
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758283179/Gemini_Generated_Image_w8s71qw8s71qw8s7_pl6ubf.png"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
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

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driven by innovation, guided by values, and focused on creating meaningful impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="p-4 rounded-2xl mr-4 shadow-lg" style={{ backgroundColor: '#008236' }}>
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our mission is to provide 100% organic, chemical-free, and nutrient-rich products while empowering local farmers through regenerative farming practices. We are committed to eco-friendly methods from cultivation to packaging and strive to create awareness that inspires individuals to embrace organic living for a healthier lifestyle and a sustainable future.
                </p>
                <div className="flex items-center text-sm font-medium" style={{ color: '#008236' }}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M6.5,12.5L7.5,16.5L11.5,17.5L7.5,18.5L6.5,22.5L5.5,18.5L1.5,17.5L5.5,16.5L6.5,12.5Z" />
                  </svg>
                  Driving Innovation Forward
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="p-4 rounded-2xl mr-4 shadow-lg" style={{ backgroundColor: '#008236' }}>
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 bottom-0">
                  Our vision is to lead in organic excellence by making wellness and sustainable living part of every family’s life. We aim to revive India’s natural farming traditions, empower farmers, and promote eco-friendly practices to build a healthier society and a greener planet.
                </p>
                <div className="flex items-center text-sm font-medium" style={{ color: '#008236' }}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                  </svg>
                  Shaping Tomorrow's World
                </div>
              </div>
            </div>
          </div>

          {/* Additional CSS for animations */}
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


        {/* Company Stats */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{ backgroundColor: '#008236' }}>
                  {/* Decorative leaves */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-10 transform rotate-180">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-white mb-3">5000+</div>
                    <div className="text-white/90 font-medium text-lg">Products Completed</div>
                    <div className="text-white/70 text-sm mt-2">Successfully delivered</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{ backgroundColor: '#008236' }}>
                  {/* Decorative leaves */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <svg className="w-8 h-8 text-white transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-15">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-white mb-3">50+</div>
                    <div className="text-white/90 font-medium text-lg">Team Members</div>
                    <div className="text-white/70 text-sm mt-2">Dedicated professionals</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{ backgroundColor: '#008236' }}>
                  {/* Decorative leaves */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <svg className="w-8 h-8 text-white transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-10">
                    <svg className="w-6 h-6 text-white transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-white mb-3">25+</div>
                    <div className="text-white/90 font-medium text-lg">Countries Served</div>
                    <div className="text-white/70 text-sm mt-2">Global presence</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{ backgroundColor: '#008236' }}>
                  {/* Decorative leaves */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <svg className="w-8 h-8 text-white transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M6.5,12.5L7.5,16.5L11.5,17.5L7.5,18.5L6.5,22.5L5.5,18.5L1.5,17.5L5.5,16.5L6.5,12.5Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-15 transform rotate-45">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-white mb-3">99%</div>
                    <div className="text-white/90 font-medium text-lg">Client Satisfaction</div>
                    <div className="text-white/70 text-sm mt-2">Excellence guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
          {/* Background decorative leaves */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 text-green-200 opacity-30 transform rotate-12">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="absolute top-32 right-16 text-emerald-200 opacity-25 transform -rotate-45">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 2C5.57 2 4 3.57 4 5.5S5.57 9 7.5 9H16c2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.1 0-2.09.45-2.81 1.17C12.45 2.45 11.1 2 9.5 2H7.5z" />
              </svg>
            </div>
            <div className="absolute bottom-20 left-20 text-teal-200 opacity-20 transform rotate-90">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-2">

                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                    Meet Our Team
                  </h2>

                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience and a passion for excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="cursor-pointer group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-green-100 overflow-hidden"
                >
                  {/* Decorative leaf in corner */}
                  <div className="absolute -top-2 -right-2 text-green-200 opacity-60 transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.5 2C5.57 2 4 3.57 4 5.5S5.57 9 7.5 9H16c2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.1 0-2.09.45-2.81 1.17C12.45 2.45 11.1 2 9.5 2H7.5z" />
                    </svg>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Profile image with organic border */}
                    <div className="relative mx-auto mb-6 w-28 h-28">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-1 group-hover:scale-110 transition-transform duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                      </div>
                      {/* Small leaf accent */}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-500">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                        {member.name}
                      </h4>

                      {/* Position with leaf accent */}
                      <div className="flex items-center justify-center mb-4">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-green-500 mr-2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                        </svg>
                        <p className="font-semibold text-green-600 text-sm">
                          {member.position}
                        </p>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional floating leaves */}
          <div className="absolute bottom-10 right-10 text-green-100 opacity-20 transform -rotate-12 animate-pulse">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 2C5.57 2 4 3.57 4 5.5S5.57 9 7.5 9H16c2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.1 0-2.09.45-2.81 1.17C12.45 2.45 11.1 2 9.5 2H7.5z" />
            </svg>
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default AboutUs;