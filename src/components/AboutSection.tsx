'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-800/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>
                
                {/* AI-themed placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-cyan-400 font-mono text-sm">Sailappan S</p>
                    <p className="text-gray-400 text-xs mt-1">AI/ML Engineer</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-pink-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
            </motion.div>

            {/* Introduction */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m <span className="text-cyan-400 font-semibold">Sailappan S</span>, an AI & ML Engineer passionate about solving real-world challenges through ML, AI and intelligent automation. I focus on building practical, end-to-end machine learning systems that make AI accessible and impactful.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-300">
                        <span className="text-green-400 font-semibold">Bachelor of Engineering in Computer Science</span>
                      </p>
                      <p className="text-gray-400 text-sm">SNS College of Engineering • 2023 - 2027</p>
                      <p className="text-gray-400 text-sm">CGPA: 8.5/10 • Specializing in AI & Machine Learning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-300">
                        <span className="text-blue-400 font-semibold">Higher Secondary Education (HSC)</span>
                      </p>
                      <p className="text-gray-400 text-sm">Good Shepherd Matriculation Higher Secondary School</p>
                      <p className="text-gray-400 text-sm">Percentage: 85% •Computer Science Stream</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Goal */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-purple-500 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Career Goal
                </h3>
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">AI & ML Engineer</span> - Passionate about building intelligent systems and solving real-world challenges through machine learning and artificial intelligence.
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 border border-green-400/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Location
                </h3>
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">Tenkasi, Tamil Nadu, India</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
