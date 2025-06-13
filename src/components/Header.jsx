import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // navLinks
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Jackpot", href: "/jackpot" },
    { name: "Result", href: "/result" },
    { name: "Time Table", href: "/timetable" },
    { name: "Guide", href: "/guide" },
    { name: "Help", href: "/help" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand Section */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-sm opacity-75"></div>
              <img
                src={logo}
                alt="JMB Matka Logo"
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-yellow-400/50 shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                JMB Matka
              </h1>
              <p className="text-xs md:text-sm text-yellow-300/80 font-medium">
                Your Game, Your Luck
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white uppercase  font-bold text-4xl xl:text-lg hover:text-yellow-400 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1  left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 text-white font-medium hover:text-yellow-400 hover:bg-white/5 rounded-lg transition-all duration-200 transform ${
                      isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Tablet Navigation (Medium screens) */}
        <div className="hidden md:block lg:hidden">
          <nav className="pb-4">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white font-medium text-sm hover:text-yellow-400 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;