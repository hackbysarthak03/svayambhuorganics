import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Leaf,
  Shield,
  Award,
  Droplets,
  Plus,
  Minus,
  Check,
  Truck,
  RotateCcw,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { category, productName } = useParams(); // e.g., "moringa-powder"
  console.log(productName, category);
  // Product JSON (later move to MongoDB)
  const productsData = {
    "moringa-powder": {
      id: "moringa-powder",
      category: "moringa",
      title: "Premium Organic Moringa Powder",
      description:
        "100% pure and organic moringa powder, carefully processed to retain maximum nutritional value. Known as the 'Miracle Tree,' moringa is packed with essential vitamins, minerals, and antioxidants.",
      price: "₹299",
      originalPrice: "₹399",
      discount: 25,
      rating: 4.8,
      reviews: 234,
      inStock: true,
      weight: "250g",
      badges: [
        "100% Organic",
        "Chemical Free",
        "Lab Tested",
        "Non-GMO",
        "Gluten Free",
      ],
      images: [
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1758199047/Gemini_Generated_Image_ir7if4ir7if4ir7i_zpu68t.png",
        "https://images.unsplash.com/photo-1606755962773-0c249e2dbe9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1605458022639-bf5a7b773d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1603048297389-d8e8d4f2c318?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      nutritionFacts: [
        { nutrient: "Protein", value: "25g", daily: "50%" },
        { nutrient: "Vitamin C", value: "220mg", daily: "245%" },
        { nutrient: "Vitamin A", value: "18,900 IU", daily: "378%" },
        { nutrient: "Iron", value: "28mg", daily: "156%" },
        { nutrient: "Calcium", value: "2003mg", daily: "200%" },
        { nutrient: "Potassium", value: "1324mg", daily: "38%" },
      ],
      keyBenefits: [
        {
          icon: "shield",
          title: "Boosts Immunity",
          description:
            "Rich in vitamin C and antioxidants to strengthen your immune system",
        },
        {
          icon: "droplets",
          title: "Anti-inflammatory",
          description:
            "Natural compounds help reduce inflammation and support joint health",
        },
        {
          icon: "award",
          title: "Energy Booster",
          description:
            "High protein and iron content provides sustained energy throughout the day",
        },
        {
          icon: "leaf",
          title: "Detoxification",
          description:
            "Helps cleanse the body and support liver function naturally",
        },
      ],
      deliveryInfo: [
        { icon: "truck", text: "Free delivery by Tomorrow" },
        { icon: "rotateCcw", text: "7-day return policy" },
        { icon: "phone", text: "24/7 customer support" },
      ],
      usage: {
        dailyDosage:
          "Start with 1-2 teaspoons (5-10g) daily and gradually increase to 1 tablespoon (15g) as your body adapts.",
        methods: [
          {
            emoji: "🥤",
            title: "Smoothies",
            description:
              "Add 1 tsp to your favorite smoothie for an instant nutrition boost",
          },
          {
            emoji: "🥛",
            title: "Milk/Juice",
            description:
              "Mix with warm milk or fresh juice for a healthy morning drink",
          },
          {
            emoji: "🍯",
            title: "With Honey",
            description: "Combine with honey for a natural energy booster",
          },
        ],
      },
      whyChoose: [
        {
          icon: "leaf",
          title: "Premium Quality",
          description:
            "Sourced from the finest moringa farms and processed using traditional methods.",
        },
        {
          icon: "shield",
          title: "Lab Tested",
          description:
            "Every batch is tested for purity, potency, and safety standards.",
        },
        {
          icon: "award",
          title: "Certified Organic",
          description:
            "100% organic certification ensures no harmful chemicals or pesticides.",
        },
      ],
    },
  };

  // Pick product based on route param
  const product = productsData[productName];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState("nutrition");

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index} 
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  // Small helper to map icon string -> Lucide icon
  const renderIcon = (icon) => {
    const icons = { shield: Shield, droplets: Droplets, award: Award, leaf: Leaf, truck: Truck, rotateCcw: RotateCcw, phone: Phone };
    const Icon = icons[icon];
    return <Icon className="w-6 h-6 text-green-600" />;
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl bg-[#EDFDF7]">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    wishlist
                      ? "bg-red-500 text-white"
                      : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-green-500 ring-offset-2"
                      : "hover:ring-2 hover:ring-green-300 hover:ring-offset-1"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-medium text-sm">
                  {product.badges[0]}
                </span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-gray-600 text-sm">{product.weight}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-lg font-semibold text-gray-900">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl font-bold text-green-600">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-green-700 font-medium">
                Save ₹
                {parseInt(product.originalPrice.slice(1)) -
                  parseInt(product.price.slice(1))}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {product.badges.slice(1).map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-xl">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-medium min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="px-6 bg-green-100 text-green-600 rounded-xl font-medium hover:bg-green-200 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              {product.deliveryInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  {renderIcon(info.icon)}
                  <span className="font-medium">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {["nutrition", "benefits", "usage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {activeTab === "nutrition" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Nutritional Information
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-green-50 px-6 py-4">
                      <h4 className="font-bold text-gray-900">
                        Per 100g serving
                      </h4>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {product.nutritionFacts.map((item, index) => (
                        <div
                          key={index}
                          className="px-6 py-4 flex justify-between items-center"
                        >
                          <span className="font-medium text-gray-900">
                            {item.nutrient}
                          </span>
                          <div className="text-right">
                            <div className="font-bold text-green-600">
                              {item.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.daily} DV
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Our Moringa?
                  </h3>
                  <div className="space-y-4">
                    {product.whyChoose.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-green-50 rounded-xl"
                      >
                        {renderIcon(item.icon)}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Health Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.keyBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
                    >
                      <div className="p-3 bg-green-100 rounded-xl text-green-600">
                        {renderIcon(benefit.icon)}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How to Use
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      Daily Dosage
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {product.usage.dailyDosage}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {product.usage.methods.map((method, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-green-200 rounded-xl p-6 text-center"
                      >
                        <div className="text-2xl mb-3">{method.emoji}</div>
                        <h5 className="font-bold text-gray-900 mb-2">
                          {method.title}
                        </h5>
                        <p className="text-gray-600 text-sm">
                          {method.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
