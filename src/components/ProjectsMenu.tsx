import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface ProjectsMenuProps {
  onClose: () => void;
}

const ProjectsMenu: React.FC<ProjectsMenuProps> = ({ onClose }) => {
  const projects = [
    {
      name: 'Modern Office Complex',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/projects/office-complex',
    },
    {
      name: 'Luxury Residential Tower',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      link: '/projects/residential-tower',
    },
    {
      name: 'Community Sports Center',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80',
      link: '/projects/sports-center',
    },
    {
      name: 'Sustainable Green Building',
      image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2424&q=80',
      link: '/projects/green-building',
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Projects</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Link key={project.name} to={project.link} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <img src={project.image} alt={project.name} className="object-cover rounded-lg group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{project.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;