import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* GIF placeholder - easily replaceable */}
        <div className="mb-8 flex justify-center">
          {/* Replace this div with: <img src="your-gif-url.gif" alt="Maintenance" className="w-32 h-32 object-contain" /> */}
          <div className="relative">
            <div className="w-32 h-32 border-8 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
            <div className="absolute inset-4 w-24 h-24 border-6 border-gray-100 border-b-green-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
          Under Maintenance
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-xl text-gray-600 mb-6 font-light">
          We'll be back soon
        </h2>

        {/* Description text */}
        <p className="text-gray-700 text-sm mb-8 leading-relaxed">
          We're currently working on some updates to improve your experience. 
          Please check back in a few minutes.
        </p>

        {/* Homepage link */}
        <div className="mb-6">
          <a href="/" className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg" style={{backgroundColor: '#00A63E'}}>
            ← Back to Homepage
          </a>
        </div>

        {/* Contact info */}
        <div className="text-gray-600 text-sm">
          <p>Need immediate assistance?</p>
          <p className="mt-1">
            Contact us at{' '}
            <a href="mailto:support@example.com" className="hover:underline transition-all duration-200" style={{color: '#00A63E'}}>
              support@svayambhuorganics.com
            </a>
          </p>
        </div>

        {/* Loading dots */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#00A63E'}}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#00A63E', animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#00A63E', animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}