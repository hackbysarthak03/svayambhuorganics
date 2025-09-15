import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const GetInTouch = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // <-- you need this

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("🚀 Sending request with:", { firstname, lastname, email, phone, message });

    try {
      const response = await fetch("http://mailer-backend-np6h.onrender.com/send", {
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
    <section className="w-full py-16 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">
            Let's <span className="text-[#008236]">Collaborate!</span>
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

        {/* Right Column - Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required className="w-full p-3 rounded-lg border border-gray-300" />
              <input type="text" placeholder="Second Name" value={lastname} onChange={(e)=>setLastname(e.target.value)} required className="w-full p-3 rounded-lg border border-gray-300" />
            </div>
            <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full p-3 rounded-lg border border-gray-300" />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} required className="w-full p-3 rounded-lg border border-gray-300" />
            <textarea placeholder="Your Message" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} required className="w-full p-3 rounded-lg border border-gray-300"></textarea>
            <button type="submit" disabled={status==="Sending..."} className="w-full py-4 bg-[#008236] text-white font-semibold rounded-xl shadow-md hover:bg-[#5b9338] transition disabled:opacity-50 disabled:cursor-not-allowed">
              {status==="Sending..." ? "Sending..." : "Get a Quote"}
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
