import React from 'react';
import { Code, Database, BarChart3, Cog, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Programming & Development',
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'css', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      icon: <Database className="text-blue-400" size={32} />,
      title: 'Database & Systems',
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'php', level: 73 },
        { name: 'GUI', level: 70 },
        { name: 'System Design', level: 85 },
      ],
    },
    {
      icon: <BarChart3 className="text-blue-400" size={32} />,
      title: 'UI/UX & Design',
      skills: [
        { name: 'UI Design', level: 90 },
        { name: 'UX Research', level: 85 },
        { name: 'Figma (Prototyping)', level: 90 },
        { name: 'raphic Design (Canva, Illustrator, Etc)', level: 90 },
      ],
    },
    {
      icon: <Cog className="text-blue-400" size={32} />,
      title: 'Supply Chain & ERP Systems',
      skills: [
        { name: 'ERP', level: 86 },
        { name: 'Production & Manufacturing Control', level: 95 },
        { name: 'Inventory Management ', level: 80 },
        { name: 'procurement Process', level: 80 },
      ],
    },
  ];

  const softSkills = [
    { icon: <Brain size={24} />, skill: 'Analytical Thinking' },
    { icon: <Users size={24} />, skill: 'Team Collaboration' },
    { icon: <Cog size={24} />, skill: 'Problem Solving' },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical and analytical skills developed through academic study and practical application
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {softSkills.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-blue-400">{item.icon}</div>
                <span className="text-gray-300 font-medium">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
