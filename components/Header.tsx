import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Artifacts', href: '#artifacts' },
    { name: 'Reflection', href: '#reflection' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-xl font-heading font-bold text-navy-900 tracking-tight z-50">
            FW <span className="text-teal-600">|</span> Healthcare Leader
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/faith-william"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-navy-900 hover:bg-teal-600 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-600/30"
            >
              View LinkedIn <ExternalLink size={14} className="ml-2" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-teal-600 z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-semibold text-navy-900 hover:text-teal-600"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://www.linkedin.com/in/faith-william"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-full shadow-lg"
        >
          View LinkedIn Profile
        </a>
      </div>
    </header>
  );
};

export default Header;