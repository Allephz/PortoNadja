import React from 'react';
import { ExternalLink, Github, Database, BarChart3, ShoppingCart, Users, Figma, Monitor, Globe, Video, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ERP System Project – PT Prismatech",
      description: "Worked with my ERP team and PT Prismatech to simulate ERP workflows using Epicor. We addressed real-world production and supply chain issues in laser cutting, including demand forecasting, purchasing, inventory, and scheduling. The project strengthened our hands-on skills in ERP implementation and business process integration.",
      technologies: ["Epicor ERP", "Production Planning", "Inventory Management", "Finance Integration", "Supply Chain"],
      category: "Enterprise System",
      icon: <Settings className="text-blue-400" size={24} />,
      image: "/images/prismatech.jpg",
      features: [
        "End-to-end production lifecycle management from sales to delivery",
        "Integrated workflows covering purchasing, production planning, and inventory",
        "Real-world case study implementation with laser cutting production orders",
        "Cross-functional collaboration with finance, manufacturing, and supply chain teams"
      ],
      challenges: "Successfully integrated complex enterprise workflows while maintaining data consistency across multiple business functions and departments.",
      github: "https://drive.google.com/drive/folders/1rusUkNxm_kaJ2uKWj8VWRr-KlSyR1zY0?usp=sharing",
    },
    {
      title: "UI/UX Design – Marketing Website",
      description: "Designed a comprehensive responsive marketing website focusing on modern UI/UX standards, user research, and conversion optimization.",
      technologies: ["Figma", "User Research", "Wireframing", "Prototyping"],
      category: "UI/UX Design",
      icon: <Figma className="text-blue-400" size={24} />,
      image: "/images/burger.png",
      features: [
        "Comprehensive user research and persona development",
        "Complete user flow mapping and information architecture",
        "High-fidelity prototypes with interactive elements",
        "Responsive design system with modern UI components"
      ],
      challenges: "Balanced aesthetic appeal with usability principles while ensuring optimal conversion rates and user engagement.",
      github: "https://www.figma.com/design/puh8snFJCz5LlKHzDs3yle/Burger-Store?node-id=0-1&t=H1c5DzWlZM1sSEku-1",
      
    },
    {
      title: "Web Application",
      description: "This was my first project creating a homepage for the “Kopi & Roti” website using HTML and CSS. The page features a background image of bread and coffee, a top navigation bar (Home, Products, Contact, About, Location, Account), a call-to-action button, promotional text, and visual elements like the logo and social media icons.",
      technologies: ["HTML", "CSS", "JavaScript", "Java","Authentication"],
      category: "Web Application",
      icon: <Globe className="text-blue-400" size={24} />,
      image: "/images/kopirot.png",
      features: [
        "Responsive frontend design with modern CSS and HTML",
        "Clean UI design with intuitive navigation menu (Home, Products, Contact,)",
        "Secure user authentication and profile management system",
        "First personal project as a beginner in frontend developmente"
      ],
      challenges: "Integrated real-time messaging capabilities while maintaining security and performance across different user sessions.",
      github: "https://github.com/Allephz/html-project.git",
     
    },
    {
      title: "Java Swing - GUI",
      description: "Object-oriented desktop application built with Java Swing, featuring modular architecture and user-friendly GUI design.",
      technologies: ["Java", "Swing", "OOP Principles", "GUI Design", "Eclipse"],
      category: "Desktop Application",
      icon: <Monitor className="text-blue-400" size={24} />,
      image: "/images/gui.png",
      features: [
        "Clean object-oriented architecture with modular class design",
        "User-friendly GUI with intuitive navigation and controls",
        "Scalable codebase with separate User, Product, and Order classes",
        "Robust error handling and data validation mechanisms"
      ],
      challenges: "Implemented clean OOP principles while maintaining an intuitive user interface and ensuring code scalability.",
      github: "https://github.com/Allephz/oopv-NeatBeans.git",
    },
    {
      title: "WEB-Mars",
      description: "A personal web project about Planet Mars built with HTML, CSS, and JavaScript. The site features an immersive design to present engaging facts about Mars, demonstrating a strong foundation in web development.",
      technologies: [" HTML", "CSS", "JavaScript", " React", "Next.js"],
      category: "Website Page Application",
      icon: <Video className="text-blue-400" size={24} />,
      image: "/images/mars12.png",
      features: [
        "Immersive Visual Design",
        "Intuitive Navigation",
        "Informational Content",
        "Clear Call-to-Action (CTA)"
      ],
      challenges: "The project involved overcoming key technical hurdles, including resolving dependency conflicts and Module not found errors, correctly configuring the Next.js development environment, and implementing a proper asset management strategy for images, all of which were crucial for successfully building the final UI.",
      github: "https://github.com/Allephz/Web-Mars.git",
     
    },
    {
      title: "ERP Simulation – Epicor Training",
      description: "Comprehensive ERP simulation project using Epicor system to understand integrated enterprise operations and business process workflows.",
      technologies: ["Epicor ERP", "Production Management", "Purchase Requisitions", "Sales Operations", "Inventory Control"],
      category: "ERP Simulation",
      icon: <Database className="text-blue-400" size={24} />,
      image: "/images/epicor.png",
      features: [
        "Complete production order lifecycle management",
        "Integrated purchase requisition and procurement processes",
        "Sales order processing and customer relationship management",
        "Real-time inventory tracking and supply chain coordination"
      ],
      challenges: "Mastered complex ERP workflows while understanding the interconnections between finance, manufacturing, and supply chain operations.",
      github: "https://drive.google.com/drive/folders/1PTemF3UDrwktOE7EvVXzGCddjgLRWMAj?usp=sharing",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing comprehensive solutions that demonstrate expertise in system development, 
            data analytics, and business process optimization
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={24} className="text-white" />
                      </a>
                      <a 
                      >
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <span className="text-blue-400 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-blue-400">
                  <h5 className="text-white font-semibold mb-2">Technical Challenge:</h5>
                  <p className="text-gray-300">{project.challenges}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a 

                  >

                    
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;