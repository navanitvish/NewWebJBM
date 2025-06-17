import React, { useState } from "react";

// Placeholder logo - replace with actual import
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
    <div 
      style={{ 
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)", // Safari support
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 32px rgba(0, 0, 0, 0.3)"
      }} 
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand Section */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 opacity-20 blur-sm"></div>
              <img
                src={logo}
                alt="JMB Matka Logo"
                className="relative w-12 h-12 md:w-16 md:h-16 "
              />
            </div>
            <div>
              <h1 
                className="text-lg md:text-2xl font-bold bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: "linear-gradient(90deg, #D59C43 0%, #F44041 100%)"
                }}
              >
                JMB MATKA
              </h1>
              <p className="text-xs md:text-sm text-white/80 font-medium tracking-wider">
                YOUR GAME, YOUR LUCK
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
                    className="text-white uppercase  text-sm xl:text-2xl hover:text-yellow-400 transition-all duration-300 relative group px-2 py-1"
                    style={{ fontFamily: '"Anton", sans-serif', fontWeight: '400' }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 group bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
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
            <div 
              className="bg-black/20 rounded-lg p-2"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)"
              }}
            >
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-white font-medium hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-200 transform ${
                        isMenuOpen 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Tablet Navigation (Medium screens) */}
        <div className="hidden md:block lg:hidden">
          <nav className="pb-4">
            <div 
              className="bg-black/10 rounded-lg p-4"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)"
              }}
            >
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white font-medium text-sm hover:text-yellow-400 transition-all duration-200 relative group px-3 py-2 rounded-md hover:bg-white/5"
                      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '600' }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-[-1]"
          onClick={closeMenu}
          
        ></div>
      )}
    </div>
  );
};

export default Header;