import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          MyBrand
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {['Home', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {['Home', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}