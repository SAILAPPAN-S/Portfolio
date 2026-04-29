'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineEvents = [
    {
      id: 1,
      title: "Hynox (Dec 2025 - Ongoing)",
      description: "Gained hands-on experience in AI/ML technologies and real-world project development. Worked on cutting-edge machine learning models and data analysis projects.",
      icon: "🎯",
      year: "2025-2026",
      category: "Internship"
    },
    {
      id: 2,
      title: "Built Typeme (AI Typing Tutor)",
      description: "Developed an intelligent typing tutor application using keystroke dynamics and machine learning. Created automation workflows with n8n and built several other innovative projects.",
      icon: "🚀",
      year: "2024",
      category: "Projects"
    },
    {
      id: 3,
      title: "Exploring Advanced ML Models & Automation",
      description: "Currently diving deep into advanced machine learning algorithms, computer vision techniques, and automation tools. Continuously learning and experimenting with cutting-edge AI technologies.",
      icon: "🧠",
      year: "Present",
      category: "Learning"
    }
  ];

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="journey" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-800/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 transform -translate-x-1/2 z-0"></div>
          
          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } mb-16`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-800 z-10 shadow-lg shadow-cyan-400/50"></div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <motion.div
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  {/* Event Icon */}
                  <div className="text-3xl mb-3">{event.icon}</div>
                  
                  {/* Event Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  
                  {/* Event Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{event.description}</p>
                  
                  {/* Event Meta */}
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold text-sm">{event.year}</span>
                    <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-full text-xs">
                      {event.category}
                    </span>
                  </div>
                </motion.div>
              </div>
              
              {/* Connecting Line */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r ${
                index % 2 === 0 
                  ? 'right-full from-transparent to-cyan-400' 
                  : 'left-full from-cyan-400 to-transparent'
              }`}></div>
            </motion.div>
          ))}
          
          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-60"></div>
        </div>

        {/* Journey Summary */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in AI & ML has been a continuous evolution of learning, building, and innovating. 
              From internships to personal projects, each step has contributed to my growth as an engineer 
              passionate about creating intelligent solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
