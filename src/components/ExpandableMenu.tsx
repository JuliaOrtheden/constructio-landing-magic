import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface ExpandableMenuProps {
  onClose: () => void;
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({ onClose }) => {
  const services = [
    {
      name: 'Residential Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      link: '/services/residential',
    },
    {
      name: 'Commercial Projects',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/services/commercial',
    },
    {
      name: 'Renovation',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/services/renovation',
    },
    {
      name: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/services/infrastructure',
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link key={service.name} to={service.link} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <img src={service.image} alt={service.name} className="object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{service.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;