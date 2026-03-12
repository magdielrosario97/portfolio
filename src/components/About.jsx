import React from "react";

const About = () => {
   return (
      <section id="about" className="py-20 bg-white text-center px-4">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
         <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            I am a software engineer and U.S. Air Force veteran who enjoys building practical software and solving real
            problems through code. My background in the military shaped the way I approach development. I value
            structure, reliability, and accountability, and I tend to approach problems with a systems-oriented mindset.
         </p>
         <br />
         <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            I focus on building full-stack applications and backend systems that are modular, maintainable, and easy to
            understand. I enjoy working through problems step by step, improving systems over time, and collaborating
            with others to build software that works well in the real world.
         </p>
      </section>
   );
};

export default About;
