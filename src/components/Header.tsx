import React, { useState, useEffect } from 'react';
import { BookOpenCheck, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-10 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-gradient-to-r from-blue-900 to-blue-700 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <BookOpenCheck className={`mr-2 ${scrolled ? 'text-blue-700' : 'text-white'}`} size={28} />
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Student E-Library
            </h1>
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search for books, materials..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;