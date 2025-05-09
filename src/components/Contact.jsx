import React from "react";

const Contact = () => {
   return (
      <section id="contact" className="py-20 bg-white text-center px-4">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
         <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-6">
            I'm always open to new opportunities, collaborations, or just connecting with fellow developers. Feel free
            to reach out!
         </p>
         <a
            href="mailto:msrdev.tech@gmail.com"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-lg"
         >
            msrdev.tech@gmail.com
         </a>
      </section>
   );
};

export default Contact;
