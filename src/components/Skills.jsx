import React from "react";

const Skills = () => {
   const skillCategories = [
      {
         title: "Languages",
         skills: ["JavaScript", "Java", "C++", "Python", "SQL", "HTML", "CSS"],
      },
      {
         title: "Frameworks & Libraries",
         skills: ["React", "Node.js", "Express", "Tailwind CSS", "Bootstrap", "JQuery"],
      },
      {
         title: "Databases",
         skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
      },
      {
         title: "Tools",
         skills: ["Git", "Bash", "GitHub", "VS Code", "Postman", "REST APIs", "Android Studio", "Agile/Scrum"],
      },
      {
         title: "Other",
         skills: ["Android Development", "TDD", "Debugging", "Embedded Systems"],
      },
   ];

   return (
      <section id="skills" className="py-20 bg-white text-center px-4">
         <h2 className="text-3xl font-bold text-gray-800 mb-10">Technical Skills</h2>
         <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-14">
            {skillCategories.map((category) => (
               <div key={category.title}>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{category.title}</h3>
                  <ul className="flex flex-wrap justify-center gap-2 text-gray-600 text-base max-w-[20rem] mx-auto">
                     {category.skills.map((skill) => (
                        <li key={skill} className="bg-gray-100 px-3 py-1 rounded shadow-sm">
                           {skill}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Skills;
