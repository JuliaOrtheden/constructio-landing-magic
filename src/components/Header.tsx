import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              ConstructCo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </a>
            <a href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="default" className="ml-8 whitespace-nowrap">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;