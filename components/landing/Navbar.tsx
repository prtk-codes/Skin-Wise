'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SW</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              SkinWise
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-500 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-500 transition">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-rose-500 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('quiz')} className="text-gray-700 hover:text-rose-500 transition">
              Quiz
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-rose-500 transition">
              Team
            </button>
            <Button
              onClick={() => scrollToSection('beta')}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
            >
              Connect with Us
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-gray-700">
              Features
            </button>
            <button onClick={() => scrollToSection('quiz')} className="block w-full text-left py-2 text-gray-700">
              Quiz
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 text-gray-700">
              Team
            </button>
            <Button
              onClick={() => scrollToSection('beta')}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500"
            >
              Connect with Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
