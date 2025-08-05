import React from 'react';
import { User, GraduationCap, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-blue-400" size={24} />,
      title: "Education",
      description:
        "Management Information Systems from President University with focus on business-technology integration.",
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: "Goal-Oriented",
      description:
        "Detail-oriented professional with a track record of delivering strategic solutions that drive business growth.",
    },
    {
      icon: <Lightbulb className="text-blue-400" size={24} />,
      title: "Innovation",
      description:
        "Passionate about exploring emerging technologies and implementing creative solutions to complex challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <User className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">
                Portofolio Profile
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              As a Management Information Systems graduate, I bridge the gap between business requirements
              and technological solutions. My academic foundation at President University has equipped me
              with comprehensive knowledge in system analysis, database management, and business process optimization.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am characterized by my detail-oriented approach, innovative thinking, and collaborative mindset.
              These qualities enable me to work effectively in cross-functional teams and deliver solutions
              that meet both technical specifications and business objectives.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
