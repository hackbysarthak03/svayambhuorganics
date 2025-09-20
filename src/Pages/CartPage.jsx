import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ashwagandha Root Powder",
      description: "Premium organic ashwagandha for stress relief and vitality",
      price: 29.99,
      originalPrice: 39.99,
      quantity: 2,
      image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1758283179/ashwagandha-powder_sample.jpg",
      category: "Herbal Supplements",
      inStock: true
    },
    {
      id: 2,
      name: "Turmeric Curcumin Capsules",
      description: "Natural anti-inflammatory support with 95% curcuminoids",
      price: 24.99,
      originalPrice: 29.99,
      quantity: 1,
      image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1758283179/turmeric-capsules_sample.jpg",
      category: "Wellness",
      inStock: true
    },
    {
      id: 3,
      name: "Organic Neem Oil",
      description: "Pure cold-pressed neem oil for skin and hair care",
      price: 19.99,
      originalPrice: 24.99,
      quantity: 1,
      image: "https://res.cloudinary.com/doy34nvkz/image/upload/v1758283179/neem-oil_sample.jpg",
      category: "Personal Care",
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'organic10') {
      setAppliedPromo({ code: 'ORGANIC10', discount: 0.10 });
    } else if (promoCode.toLowerCase() === 'wellness20') {
      setAppliedPromo({ code: 'WELLNESS20', discount: 0.20 });
    } else {
      alert('Invalid promo code');
    }
    setPromoCode('');
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const promoDiscount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal - promoDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="py-6 px-6 mb-20 md:px-16 bg-transparent min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Your Cart is <span className="text-[#00A63E]">Empty</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8">
              Discover our premium organic products crafted with ancient wisdom
            </p>
            <button className="bg-[#00A63E] hover:bg-[#02b343] text-white px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 px-6 md:px-16 bg-[#EDFDF7]">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-24 h-48 md:h-24 object-cover rounded-xl"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-[#00A63E]/10 text-[#00A63E] text-xs rounded-lg">
                          {item.category}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {!item.inStock && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm font-medium">Out of Stock</p>
                        <p className="text-red-500 text-xs">This item will be removed at checkout</p>
                      </div>
                    )}

                    {/* Price and Quantity */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-[#00A63E]">${item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                          disabled={!item.inStock}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                          disabled={!item.inStock}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
                  >
                    Apply
                  </button>
                </div>
                
                {appliedPromo && (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">{appliedPromo.code}</span>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">You saved</span>
                    <span className="font-medium text-green-600">-${savings.toFixed(2)}</span>
                  </div>
                )}
                
                {appliedPromo && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Promo discount</span>
                    <span className="font-medium text-green-600">-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-xs text-gray-500">
                    Free shipping on orders over $50
                  </div>
                )}
                
                <hr className="border-gray-200" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#00A63E]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-[#00A63E] hover:bg-[#02b343] text-white py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer">
                Proceed to Checkout
              </button>
              
              <button className="w-full mt-3 border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-medium transition-all duration-300">
                Continue Shopping
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Trusted by thousands of wellness enthusiasts
                  </p>
                  <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                    <span>✓ Secure Checkout</span>
                    <span>✓ Fast Delivery</span>
                    <span>✓ 30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;