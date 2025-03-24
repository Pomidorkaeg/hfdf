
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Команда', path: '/team' },
    { name: 'Новости', path: '/news' },
    { name: 'Матчи', path: '/matches' },
    { name: 'Соревнования', path: '/tournaments' },
    { name: 'Медиа', path: '/media' },
    { name: 'Контакты', path: '/contacts' },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-fc-green font-bold text-xl">ФК СИБИРЬ</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link",
                  isActive(link.path) ? "active-nav-link text-fc-green" : "text-gray-700 hover:text-fc-green"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-fc-green focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-[4rem] bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",
        isMenuOpen ? "opacity-100 scale-y-100 shadow-lg" : "opacity-0 scale-y-0 pointer-events-none"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",
                isActive(link.path) 
                  ? "text-fc-green bg-fc-green/10" 
                  : "text-gray-700 hover:text-fc-green hover:bg-fc-green/5"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
