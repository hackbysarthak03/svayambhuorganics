import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Leaf,
  Shield,
  Award,
  Droplets,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

// ✅ JSON Data (multiple categories)
const categoriesData = {
  moringa: {
    hero: {
      title: "Premium Moringa Collection",
      subtitle: "Natural Wellness",
      description:
        'Moringa, often called the "Miracle Tree," is a nutrient-rich plant native to India. Its leaves, seeds, and pods are packed with vitamins, minerals, and antioxidants that support overall health.',
      rating: 4.8,
      reviews: 847,
      badge: "Certified Organic",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1758281676/Gemini_Generated_Image_wrqkyiwrqkyiwrqk_ahmged.png",
    },
    benefits: [
      {
        icon: "Leaf",
        title: "100% Organic",
        description: "Certified organic ingredients sourced directly from nature",
        gradient: "from-green-400 to-emerald-500",
      },
      {
        icon: "Shield",
        title: "Chemical Free",
        description: "No harmful chemicals, pesticides, or synthetic additives",
        gradient: "from-emerald-400 to-teal-500",
      },
      {
        icon: "Award",
        title: "Premium Quality",
        description: "Handpicked and quality tested for maximum potency",
        gradient: "from-teal-400 to-cyan-500",
      },
      {
        icon: "Droplets",
        title: "Pure & Fresh",
        description: "Naturally processed to retain all essential nutrients",
        gradient: "from-cyan-400 to-blue-500",
      },
    ],
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1606755962773-0c249e2dbe9b?auto=format&fit=crop&w=400&q=80",
        title: "Moringa Capsules",
        description:
          "Easy-to-consume Capsules rich in vitamins, minerals, and antioxidants for daily wellness.",
        price: "₹499",
        originalPrice: "₹649",
        rating: 4.9,
        reviews: 210,
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/doy34nvkz/image/upload/v1758199047/Gemini_Generated_Image_ir7if4ir7if4ir7i_zpu68t.png",
        title: "Moringa Powder",
        description:
          "100% organic moringa powder, a versatile superfood to boost immunity and energy.",
        price: "₹299",
        originalPrice: "₹399",
        rating: 4.8,
        reviews: 178,
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/doy34nvkz/image/upload/v1758199047/Gemini_Generated_Image_ir7if4ir7if4ir7i_zpu68t.png",
        title: "Moringa Oil",
        description:
          "100% organic moringa powder, a versatile superfood to boost immunity and energy.",
        price: "₹299",
        originalPrice: "₹399",
        rating: 4.8,
        reviews: 178,
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/doy34nvkz/image/upload/v1758199047/Gemini_Generated_Image_ir7if4ir7if4ir7i_zpu68t.png",
        title: "Fresh Moringa Leaves",
        description:
          "100% organic moringa powder, a versatile superfood to boost immunity and energy.",
        price: "₹299",
        originalPrice: "₹399",
        rating: 4.8,
        reviews: 178,
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Moringa has boosted my immunity and overall energy levels. Svayambhu's quality is unmatched!",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      },
    ],
  },

  curcumin: {
    hero: {
      title: "Curcuma - 95 Range",
      subtitle: "Natural Healing",
      description:
        "Curcumin, the active compound in turmeric, is known for its strong anti-inflammatory and antioxidant properties, supporting joint health and immunity.",
      rating: 4.9,
      reviews: 1250,
      badge: "Lab Tested",
      image:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1758281868/Gemini_Generated_Image_7y6jt27y6jt27y6j_djr2pi.png",
    },
    benefits: [
      {
        icon: "Award",
        title: "High Potency",
        description: "95% pure curcumin extract with black pepper for absorption",
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        icon: "Shield",
        title: "Inflammation Support",
        description: "Helps reduce joint pain and improves flexibility",
        gradient: "from-orange-400 to-red-500",
      },
    ],
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1615484478093-939f7b66b74e?auto=format&fit=crop&w=400&q=80",
        title: "Curcumin Capsules",
        description:
          "Highly concentrated capsules with black pepper for better absorption.",
        price: "₹799",
        originalPrice: "₹999",
        rating: 4.9,
        reviews: 320,
      },{
        id: 1,
        image:
          "https://images.unsplash.com/photo-1615484478093-939f7b66b74e?auto=format&fit=crop&w=400&q=80",
        title: "Curcumin Tablets",
        description:
          "Highly concentrated tablets with black pepper for better absorption.",
        price: "₹799",
        originalPrice: "₹999",
        rating: 4.9,
        reviews: 320,
      },{
        id: 1,
        image:
          "https://images.unsplash.com/photo-1615484478093-939f7b66b74e?auto=format&fit=crop&w=400&q=80",
        title: "Curcumin Powder",
        description:
          "Highly concentrated powder with black pepper for better absorption.",
        price: "₹799",
        originalPrice: "₹999",
        rating: 4.9,
        reviews: 320,
      }
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        location: "Delhi",
        rating: 5,
        text: "Curcumin capsules helped with my joint stiffness. Great natural remedy!",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams(); // ✅ Get category from URL
  const data = categoriesData[category]; // ✅ Select category data

  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-600">
        Category not found
      </div>
    );
  }

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    newWishlist.has(productId)
      ? newWishlist.delete(productId)
      : newWishlist.add(productId);
    setWishlist(newWishlist);
  };

  const toggleCart = (productId) => {
    const newCart = new Set(cart);
    newCart.has(productId) ? newCart.delete(productId) : newCart.add(productId);
    setCart(newCart);
  };

  const renderStars = (rating) =>
    [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className="min-h-screen bg-white pt-10">
        {/* ✅ Hero Section */}
        <section className="relative h-[60vh]">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              <div>
                <div className="flex items-center mb-3">
                  <Leaf className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium text-sm">
                    {data.hero.subtitle}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {data.hero.title}
                </h1>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {data.hero.description}
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="flex">{renderStars(data.hero.rating)}</div>
                    <span className="ml-2 text-gray-600 text-sm">
                      {data.hero.rating} ({data.hero.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Award className="w-4 h-4 mr-1" />
                    <span className="font-medium text-sm">{data.hero.badge}</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                {/* Decorative green background elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Large green circle backdrop */}
                  <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-60"></div>
                  
                  {/* Organic green shapes */}
                  <div className="absolute top-8 left-8 w-24 h-24 bg-green-300 rounded-full opacity-40 blur-sm"></div>
                  <div className="absolute bottom-12 right-12 w-16 h-16 bg-green-400 rounded-full opacity-30 blur-sm"></div>
                  <div className="absolute top-1/2 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-50 blur-sm"></div>
                </div>

                {/* Floating leaf elements */}
                <div className="absolute top-4 left-4 text-green-500 opacity-70 animate-pulse">
                  <svg className="w-8 h-8 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="absolute top-12 right-8 text-green-400 opacity-60 animate-pulse" style={{animationDelay: '1s'}}>
                  <svg className="w-6 h-6 transform -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 15l0.18-0.18C9.58 12.44 13.84 9.5 17 8z"/>
                  </svg>
                </div>

                <div className="absolute bottom-8 left-12 text-green-600 opacity-50 animate-pulse" style={{animationDelay: '2s'}}>
                  <svg className="w-7 h-7 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>

                <div className="absolute top-20 -left-2 text-green-300 opacity-40">
                  <Leaf className="w-5 h-5 transform rotate-45" />
                </div>

                <div className="absolute bottom-16 right-4 text-green-500 opacity-60">
                  <Leaf className="w-4 h-4 transform -rotate-12" />
                </div>

                {/* Main square image container */}
                <div className="relative z-10 w-110 h-110 transform hover:scale-110 hover:rotate-3 duration-500">
                  <img
                    src={data.hero.image}
                    alt={`${category} Collection`}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                  />
                  
                  {/* Subtle green overlay on image border */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-green-200 ring-opacity-50"></div>
                </div>

                {/* Additional organic elements floating around */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-green-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                <div className="absolute -bottom-4 left-1/3">
                  <div className="w-2 h-2 bg-green-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Products */}
        <section className="py-20 mt-10 bg-[#EDFDF7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span style={{ color: "#008236" }}>Product Range</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our diverse collection of premium <b>{category}</b> products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.products.map((product) => (
                <Link
                  to={`${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer duration-300 hover:-translate-y-2 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden transform hover:scale-110 duration-500">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          wishlist.has(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                          <span className="ml-2 text-sm text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center text-green-600">
                          <Leaf className="w-4 h-4 mr-1" />
                          <span className="text-xs font-medium">Organic</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price + Cart */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold" style={{ color: "#008236" }}>
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCart(product.id);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                          cart.has(product.id)
                            ? "bg-green-600 text-white"
                            : "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white"
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm font-medium">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Testimonials */}
        <section className="py-20 bg-[#EDFDF7] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">
                  What Our <span style={{ color: "#008236" }}>Customers Say</span>
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Real experiences from our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-green-600 text-sm">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">{renderStars(t.rating)}</div>
                  <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default CategoryPage;
