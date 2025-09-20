import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, MessageCircle, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ContactUsPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("🚀 Sending request with:", { firstname, lastname, email, phone, message });

    try {
      const response = await fetch("https://mailer-backend-np6h.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, phone, message }),
      });

      const data = await response.json();
      console.log("✅ Response:", data);

      if (data.success) {
        setStatus("Message sent successfully!");
        setFirstname(""); setLastname(""); setEmail(""); setPhone(""); setMessage("");
      } else {
        setStatus("Message failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#EDFDF7] pt-30"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-green-200 opacity-30 transform rotate-12 animate-pulse">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>
          <div className="absolute top-32 right-16 text-emerald-200 opacity-25 transform -rotate-45 animate-bounce">
            <MessageCircle className="w-12 h-12" />
          </div>
          <div className="absolute bottom-20 left-1/4 text-green-300 opacity-20 transform rotate-45">
            <Users className="w-16 h-16" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[#008236]">Touch!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are here to connect, collaborate, and create meaningful solutions. Whether it's a query, partnership, or just a friendly hello — we're only a message away!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#EDFDF7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
          <h2 className="text-5xl font-bold">
            Get in <span className="text-[#008236]">Touch!</span>
          </h2>
          <p className="text-lg italic text-gray-700 leading-relaxed">
            We are here to connect, collaborate, and create meaningful solutions.  
            Whether it's a query, partnership, or just a friendly hello — we're only a message away!
          </p>
          <div className="space-y-3 italic">
            <p><strong className="text-green-800">Registered Office:</strong> F-49, 5th Floor, NPX by Urbtech, Sector 153, Noida, Gautam Buddha Nagar, Uttar Pradesh, India - 201306</p>
            <p><strong className="text-green-800">Phone:</strong> +91 98765 43210</p>
            <p><strong className="text-green-800">Email:</strong> sales@svayambhuorganics.com</p>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-[#314b21] text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-[#314b21] text-xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="text-[#314b21] text-xl" /></a>
          </div>
        </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white backdrop-blur-md rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6">{/* Form container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#008236] focus:ring-2 focus:ring-green-100 transition-all duration-300 outline-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#008236] focus:ring-2 focus:ring-green-100 transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#008236] focus:ring-2 focus:ring-green-100 transition-all duration-300 outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#008236] focus:ring-2 focus:ring-green-100 transition-all duration-300 outline-none"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#008236] focus:ring-2 focus:ring-green-100 transition-all duration-300 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "Sending..."}
                className="w-full py-4 bg-[#008236] text-white font-semibold rounded-xl shadow-md hover:bg-[#5b9338] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {status === "Sending..." ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Get a Quote
                  </>
                )}
              </button>
            </form>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl text-center ${
                  status.includes("successfully") 
                    ? "bg-green-100 text-green-800" 
                    : status.includes("Sending") 
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactUsPage;