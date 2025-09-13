import React from 'react'

const WhyChoose = () => {
  return (
    <div>
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
    </div>
  )
}

export default WhyChoose
