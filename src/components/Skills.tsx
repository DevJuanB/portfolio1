import React from 'react';
import { Code, PaintBucket, PenTool, Settings, Database, Globe, Laptop, Monitor } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90, icon: <Code size={24} />, category: "Frontend" },
    { name: "React", level: 85, icon: <Code size={24} />, category: "Frontend" },
    { name: "TypeScript", level: 80, icon: <Code size={24} />, category: "Frontend" },
    { name: "CSS/SASS", level: 85, icon: <PaintBucket size={24} />, category: "Frontend" },
    { name: "UI/UX Design", level: 80, icon: <PenTool size={24} />, category: "Design" },
    { name: "Figma", level: 85, icon: <PenTool size={24} />, category: "Design" },
    { name: "Node.js", level: 75, icon: <Settings size={24} />, category: "Backend" },
    { name: "MongoDB", level: 70, icon: <Database size={24} />, category: "Backend" },
    { name: "SQL", level: 75, icon: <Database size={24} />, category: "Backend" },
    { name: "RESTful APIs", level: 85, icon: <Globe size={24} />, category: "Backend" },
    { name: "Responsive Design", level: 90, icon: <Laptop size={24} />, category: "Frontend" },
    { name: "Adobe Creative Suite", level: 70, icon: <Monitor size={24} />, category: "Design" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My technical toolkit and creative capabilities that I bring to every project.
          </p>
        </div>

        <div className="mb-12">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-bold mb-6 border-l-4 border-indigo-600 pl-3">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mr-3">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.level}%</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;