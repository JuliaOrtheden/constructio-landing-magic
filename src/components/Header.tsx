import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExpandableMenu from './ExpandableMenu';
import ProjectsMenu from './ProjectsMenu';

const Header = () => {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
    setIsProjectsMenuOpen(false);
  };

  const toggleProjectsMenu = () => {
    setIsProjectsMenuOpen(!isProjectsMenuOpen);
    setIsServicesMenuOpen(false);
  };

  const handleContactClick = () => {
    const subject = encodeURIComponent("Interested in a project");
    const body = encodeURIComponent("Hello Julia,\n\nI am very interested of X and would like a price list.\n\nBest regards,\nJulia");
    window.location.href = `mailto:j.ortheden@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              ConstructCo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <button onClick={toggleServicesMenu} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </button>
            <button onClick={toggleProjectsMenu} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </button>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="default" className="ml-8 whitespace-nowrap" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {isServicesMenuOpen && <ExpandableMenu onClose={toggleServicesMenu} />}
      {isProjectsMenuOpen && <ProjectsMenu onClose={toggleProjectsMenu} />}
    </header>
  );
};

export default Header;