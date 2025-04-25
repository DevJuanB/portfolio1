import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const skillTexts = ["Developer", "Designer", "Creator"];

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % skillTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-gray-900 dark:text-white"
      style={{ 
        transform: `translateY(${offset * 0.5}px)`,
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-[120px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Hi, I'm </span>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            John Doe
          </span>
        </h1>
        
        <div className="h-20 flex justify-center items-center mb-6">
          <div className="relative h-full overflow-hidden">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              <span>Passionate </span>
              <span 
                className="inline-block min-w-32 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-indigo-500 after:rounded"
                key={textIndex}
              >
                {skillTexts[textIndex]}
              </span>
            </p>
          </div>
        </div>
        
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-gray-600 dark:text-gray-300">
          Creating beautiful, functional digital experiences through clean code and innovative design.
        </p>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll down">
          <ChevronDown size={32} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;