import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white">Niclas Gustavsson Bygg & Snickeri AB</span>
            <p className="text-gray-300 text-base">
              Inget jobb är för litet eller för stort för oss. Varmt välkomna!
            </p>
            <div className="flex space-x-6">
              {/* Add social media icons here if needed */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Tjänster</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Nybyggnation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Tillbyggnation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Renovering
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontakt</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p className="text-base text-gray-300">
                      Telefon: 076-881 61 77
                    </p>
                  </li>
                  <li>
                    <a href="mailto:niclas@ngbygg.se" className="text-base text-gray-300 hover:text-white">
                      E-post: niclas@ngbygg.se
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Niclas Gustavsson Bygg & Snickeri AB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;