import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AyurvedicApp from "./AyurvedicApp";
import Chatbot from "./Components/Chatbot";
import MaintenancePage from "./Pages/MaintenancePage";
import AboutUs from "./Pages/AboutUs";
import BasicLayout from "./Pages/Layouts/BasicLayout";
import ScrollToTop from "./utils/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import GetInTouch from "./Sections/GetInTouch";
import ContactUsPage from "./Pages/ContactUs";
import ProductPage from "./Pages/ProductPage";
import DashboardLayout from "./Admin/DashboardLayout";


function LoadingScreen({ isFading }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-white text-[#314b21] transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"
        }`}
    >
      <img
        src="https://res.cloudinary.com/doy34nvkz/image/upload/v1758106817/Untitled_design_28_keyj3o.png"
        alt="Loading..."
        className="w-24 h-24 mb-2 animate-fadeInOut"
      />
      <h1 className="text-xl font-semibold mb-2">Svayambhu Organics</h1>
      <p className="text-sm italic mb-4">"Rooted in Tradition, Grown by Nature"</p>

      {/* Circular Loader */}
      <div className="w-8 h-8 border-4 border-[#314b21] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}




function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
     

        <Route path="/" element={<BasicLayout />}>
          <Route index element={<AyurvedicApp />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:category" element={<CategoryPage />} />
          <Route path="products/:category/:productName" element={<ProductDetailPage />} />
        </Route>
        <Route path="/admin-dashboard" element={<DashboardLayout />} />


        {/* 404 Page */}
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => setLoading(false), 3500);

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
      <ScrollToTop />
      <AnimatedRoutes />
      <Chatbot />
    </Router>
  );
}

export default App;
