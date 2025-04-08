import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">RIN</span>
            <span className="text-black">ARCH</span>
            <span className="text-orange-500">STUDIO</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-orange-500 font-medium">
            Kryefaqja
          </a>
          <a href="#about" className="text-gray-800 hover:text-orange-500 font-medium">
            Rreth Nesh
          </a>
          <a href="#services" className="text-gray-800 hover:text-orange-500 font-medium">
            Shërbimet
          </a>
          <a href="#portfolio" className="text-gray-800 hover:text-orange-500 font-medium">
            Projektet
          </a>
          <a href="#contact" className="text-gray-800 hover:text-orange-500 font-medium">
            Kontakt
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-4 pb-4">
            <a href="#home" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              Kryefaqja
            </a>
            <a href="#about" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              Rreth Nesh
            </a>
            <a href="#services" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              Shërbimet
            </a>
            <a href="#portfolio" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              Projektet
            </a>
            <a href="#contact" className="text-gray-800 hover:text-orange-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
          </nav>
        </div>}
    </header>;
};
export default Header;