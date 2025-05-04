import React from "react";

const Hero = () => {
   return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white">
         <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900">Magdiel S. Rosario Orta</h1>
         <p className="text-lg sm:text-xl text-gray-600 mb-4">Full-Stack Developer | React • Node.js • Python</p>
         <p className="max-w-xl text-gray-500 mb-6">
            Veteran and Computer Science student passionate about building clean and practical software.
         </p>
         <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary">
               View Projects
            </a>
            <a href="#contact" className="btn-secondary">
               Contact Me
            </a>
            <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
               Resume
            </a>
         </div>
      </section>
   );
};

export default Hero;
