import React from 'react';
import { FileText, User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led the development of multiple web applications using React, TypeScript, and modern frontend technologies. Improved site performance by 40% through optimization techniques."
    },
    {
      title: "UI/UX Designer",
      company: "Creative Solutions",
      period: "2018 - 2021",
      description: "Designed intuitive user interfaces for web and mobile applications. Collaborated with development teams to implement responsive designs and ensure optimal user experience."
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations",
      period: "2016 - 2018",
      description: "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP. Worked in an agile environment to deliver projects on schedule."
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      year: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies."
    },
    {
      degree: "Bachelor's in Graphic Design",
      institution: "Design Academy",
      year: "2010 - 2014",
      description: "Focused on digital design principles and visual communication."
    }
  ];

  return (
    <section id="about" className="py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Get to know my background, experience, and what drives my passion for creating digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                      <User size={48} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mt-4">John Doe</h3>
                <p className="text-center text-indigo-100">Full Stack Developer & Designer</p>
              </div>
              
              <div className="p-6">
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional digital experiences. 
                  My approach combines clean code with thoughtful design to build solutions that are both technically sound and visually appealing.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="#" 
                    className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300"
                  >
                    <FileText size={18} className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300 mr-3">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 pb-8">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 mb-2">{exp.company} | {exp.period}</p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300 mr-3">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 pb-8">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 mb-2">{edu.institution} | {edu.year}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;