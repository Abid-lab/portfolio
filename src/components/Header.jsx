// components/Header/Header.jsx
import React from 'react';

const Header = ({ isScrolled, activeSection, scrollToSection }) => {
  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white/85 backdrop-blur'
    }`}>
      <nav className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </button>
        
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === item ? 'text-blue-600 font-semibold' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;