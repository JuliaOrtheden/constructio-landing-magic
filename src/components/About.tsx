import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About ConstructCo
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          ConstructCo is a leading construction company with over 20 years of experience in delivering high-quality projects across residential, commercial, and industrial sectors.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To build sustainable structures that enhance communities and exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Safety First</li>
              <li>Quality Workmanship</li>
              <li>Environmental Responsibility</li>
              <li>Client Satisfaction</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;