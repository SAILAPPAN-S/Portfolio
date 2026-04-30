'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      title: "2nd Place – GlitchCon 2.0 Hackathon",
      organization: "HackerRank × VIT Chennai",
      description: "Built AI-based predictive maintenance system for MRI machines using Isolation Forest. Enabled early defect detection and reduced downtime.",
      icon: "🥈",
      category: "Hackathon"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="achievements" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-800/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🏆 Achievements</h3>
            <div className="flex justify-center">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="group relative w-full max-w-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-800/70">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-purple-400 font-medium mb-4">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {achievement.description}
                      </p>
                      <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-sm">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
