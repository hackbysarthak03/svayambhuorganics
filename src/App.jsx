import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AyurvedicApp from "./AyurvedicApp";

// Example extra pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function LoadingScreen({ isFading }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-white text-[#314b21] transition-opacity duration-1000 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* GIF Loader */}
      <img
        src="/assets/images/loading.gif" // <-- public assets are referenced from the public root
        alt="Loading..."
        className="w-24 h-24 mb-2"
      />
      <h1 className="text-xl font-semibold mb-2">Svayambhu Organics</h1>

      {/* Tagline */}
      <p className="text-sm italic">"Rooted in Tradition, Grown by Nature"</p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500); // Start fade
    const hideTimer = setTimeout(() => setLoading(false), 3500); // Remove after fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen isFading={fadeOut} />;
  }

  return (
    <Router>
      <Routes>
        {/* Default AyurvedicApp */}
        <Route path="/" element={<AyurvedicApp />} />

        {/* Other routes */}
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
