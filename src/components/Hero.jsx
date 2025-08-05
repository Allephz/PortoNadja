import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Management Information Systems Graduate',
    'System Analyst',
    'Business Process Optimizer',
    'Data-Driven Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentText.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        if (currentText === texts[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="text-blue-400">Nadja Satria Negara</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging technology and data to drive business innovation.
            Specialized in system analysis, process optimization, and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/drive/folders/1BJYo43EBge3FM63mJSqcSnJfhU38Orl-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
