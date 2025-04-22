import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Heart className="h-7 w-7 text-teal-500" />
            <Activity className="h-7 w-7 text-blue-500 -ml-3" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            VitalCorp
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#features">Recursos</NavLink>
          <NavLink href="#benefits">Benefícios</NavLink>
          <NavLink href="#how-it-works">Como Funciona</NavLink>
          <NavLink href="#pricing">Preços</NavLink>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full text-blue-600 hover:text-blue-800 font-medium transition duration-300">
            Entrar
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
            Demonstração
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col p-4 space-y-3">
            <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>Recursos</MobileNavLink>
            <MobileNavLink href="#benefits" onClick={() => setIsOpen(false)}>Benefícios</MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>Como Funciona</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Preços</MobileNavLink>
            <button className="w-full text-left py-2 px-3 text-blue-600 font-medium">
              Entrar
            </button>
            <button className="w-full py-2 px-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded-full">
              Demonstração
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md" 
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;