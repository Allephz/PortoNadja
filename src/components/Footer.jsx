import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">MY Portfolio</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Bridging technology and business through innovative information systems solutions
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} />
            <span>using</span>
            <Code className="text-blue-400" size={16} />
            <span>and fueled by</span>
            <Coffee className="text-orange-400" size={16} />
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} MIS Portfolio. All rights reserved. | Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
