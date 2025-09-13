import { Bell, User, ShoppingBag, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-50">
                {/* Desktop Navbar */}
                <div className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-6xl mx-auto px-8">
                    <div className="bg-white/80 backdrop-blur-md rounded-full shadow-2xl px-8 py-4">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mr-3">
                                    <img src="https://res.cloudinary.com/doy34nvkz/image/upload/v1757679275/Untitled_design_28_fgkwqm.png" alt="Svayambhu Organics Logo" />
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex items-center space-x-12">
                                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">
                                    Who we are?
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">
                                    Shop with us
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">
                                    Trending Products
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">
                                    Contact Us
                                </a>
                            </div>

                            {/* Right Icons */}
                            <div className="flex items-center space-x-3">
                                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                                    <Bell className="w-5 h-5 text-white" />
                                </button>
                                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                                    <User className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Navbar */}
                <div className="lg:hidden absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto px-6">
                    <div className="bg-white/60 backdrop-blur-md rounded-full shadow-2xl px-6 py-4">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                    <svg viewBox="0 0 100 100" className="w-8 h-8">
                                        <circle cx="50" cy="30" r="8" fill="#5b9338" />
                                        <path d="M50 38 L45 50 L35 60 L50 65 L65 60 L55 50 Z" fill="#314b21" />
                                        <path d="M35 60 Q30 70 35 80 Q50 85 65 80 Q70 70 65 60" fill="#5b9338" />
                                        <path d="M42 75 Q50 78 58 75" stroke="#314b21" strokeWidth="1" fill="none" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <Menu className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-60 lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'}`}>
                {/* Backdrop with blur */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)} />

                {/* Slide-in Menu */}
                <div className={`absolute top-0 right-0 h-full w-3/4 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Menu Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg viewBox="0 0 100 100" className="w-8 h-8">
                                    <circle cx="50" cy="30" r="8" fill="#5b9338" />
                                    <path d="M50 38 L45 50 L35 60 L50 65 L65 60 L55 50 Z" fill="#314b21" />
                                    <path d="M35 60 Q30 70 35 80 Q50 85 65 80 Q70 70 65 60" fill="#5b9338" />
                                    <path d="M42 75 Q50 78 58 75" stroke="#314b21" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-gray-800">Menu</span>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="p-6">
                        <div className="space-y-6">
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-3 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Who we are?
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-3 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Shop with us
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-3 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Trending Products
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-green-600 text-lg font-medium transition-colors py-3 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Action Buttons in Mobile Menu */}
                        <div className="mt-8 space-y-4">
                            <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                                <Bell className="w-4 h-4" />
                                <span>Notifications</span>
                            </button>
                            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                                <User className="w-4 h-4" />
                                <span>Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
