import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Compshere",
      company: "Member",
      location: "President Univerity, Indonesia",
      period: "April - November 2024",
      type: "organization",
      description: "Coordinated food distribution, managed F&B schedules, and helped design event merchandise for visitors and committee",
      achievements: [
        "Ensured timely and efficient food service across all divisions, resulting in zero delays during the event. comprehensive system analysis for 3 major client projects, resulting in 25% improved operational efficiency",
        "DevelopSuccessfully maintained a well-coordinated F&B schedule that met all committee and visitor needs.ed detailed technical documentation and user manuals for new system implementations",
        "Delivered smooth food operations with no service delays in client meetings and requirement gathering sessions, enhancing stakeholder communication skills",
        "Designed merchandise that enhanced event branding and engagement. in UAT coordination and bug tracking, ensuring quality deliverables within project timelines"
      ],
      technologies: ["Time Management", "Vendor & Inventory Management", "Team Collaboration", "Event Coordination", "Communication & Problem Solving"]
    },
    {
      title: "Cultural Festival (Logistic)",
      company: "Member",
      location: "President Univerity, Indonesia",
      period: "April - November 2024",
      type: "organization",
      description: "Assisted event logistics—preparing, storing, and distributing items. Supported smooth operations and executed backup plans as needed.",
      achievements: [
        "Coordinated logistics setup, ensuring 100% on-time delivery of materials to all event areas.",
        "Managed storage and distribution for over [X] items, maintaining order and efficiency throughout the event.",
        "Implemented real-time solutions to resolve unexpected logistical challenges without disrupting the event schedule.",
        "Collaborated with cross-functional teams, supporting seamless operations and smooth communication across departments."
      ],
      technologies: ["Inventory Management ", "Time Management", "Operational Efficiency", "Communication", "Detail-Oriented"]
    },
    {
      title: "Volunteer AISEC",
      company: "Volunteer ",
      location: "President University",
      period: "2024",
      type: "Experience",
      description: "Organized exchanges, assisted events, trained in leadership, and built international networks through volunteer involvement.",
      achievements: [
        "Organized and executed exchange programs with participants from diverse cultural backgrounds.",
        "Improved participant experience, leading to high satisfaction and successful program completion.",
        "Assisted in impactful campaigns and events, increasing engagement and outreach",
        "Completed leadership and soft skills training, applying them in team coordination and problem solving."
      ],
      technologies: ["Leadership", "Teamwork & Collaboration", "Adaptability & Flexibility", "Public Speaking & Presentationl"]
    },
    
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship': return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'Academic': return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'Leadership': return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      case 'Volunteer': return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Organization Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional development through diverse experiences in corporate environments, 
            academic research, leadership roles, and community service
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-black hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-blue-400" size={20} />
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="hidden sm:block">•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-blue-400" size={20} />
                      <h5 className="text-white font-semibold">Key Achievements</h5>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <h6 className="text-white font-medium mb-2">Skills</h6>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-black/50 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-8 border border-blue-600/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Seeking opportunities to apply my analytical skills, technical expertise, and collaborative approach 
              in dynamic organizations focused on innovation and growth.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
