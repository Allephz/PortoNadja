import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "nadja.negara@student.president.ac.id",
      link: "mailto:nadja.negara@student.president.ac.id"
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      title: "Phone",
      value: "082176228616",
      link: "tel:+6282176228616"
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: "Location",
      value: "West Java, North Cikarang ",
      link: "#"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/nadja-satria-20907728b",
      link: "https://linkedin.com/in/nadja-satria-20907728b"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on innovative projects? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, innovative projects, 
                or potential collaborations. Whether you're looking for a system analyst, 
                need consultation on business process optimization, or want to discuss emerging 
                technologies in information systems, I'd love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
              <h4 className="text-white font-semibold mb-4">Professional Interests</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  System Analysis & Design Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  Business Intelligence & Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  Digital Transformation Initiatives
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  Process Optimization Consulting
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 p-8 rounded-lg border border-gray-800">
            <form action="https://formsubmit.co/nadja.negara@student.president.ac.id" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <button
                type="submit"
                
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-600/20 text-gray-400 rounded-full hover:bg-gray-600/30 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            Looking forward to connecting with you and exploring new possibilities together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
