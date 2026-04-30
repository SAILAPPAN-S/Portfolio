'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsData = [
    { subject: 'Python & C++', level: 90, fullMark: 100 },
    { subject: 'Scikit-learn', level: 85, fullMark: 100 },
    { subject: 'RAG', level: 80, fullMark: 100 },
    { subject: 'Flask', level: 80, fullMark: 100 },
    { subject: 'Docker', level: 75, fullMark: 100 },
    { subject: 'SQL', level: 80, fullMark: 100 },
  ];

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚙️' },
    { name: 'SQL', icon: '🗄️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Custom tool tip for Radar Chart
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 border border-cyan-400/50 p-3 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-cyan-400 font-semibold">{payload[0].payload.subject}</p>
          <p className="text-white text-sm">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-slate-950 z-[-2]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
           ref={ref}
           className="text-center mb-16"
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Interactive Radar Chart */}
          <motion.div 
            className="w-full h-[400px] sm:h-[500px] bg-slate-900/40 border border-slate-700/50 rounded-3xl p-4 backdrop-blur-sm shadow-2xl relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Radar
                   name="Skills"
                   dataKey="level"
                   stroke="#00d4ff"
                   strokeWidth={2}
                   fill="#00d4ff"
                   fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Right Side: Tools & Currently Learning */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    className="flex justify-center items-center gap-3 bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700 hover:border-cyan-400/50 p-4 rounded-xl transition-all duration-300 cursor-default group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
               variants={itemVariants}
               className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span>🎯</span> Currently Mastering
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Continuously expanding my skill set through hands-on projects and real-world applications in the AI/ML ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                {['RAG', 'Computer Vision', 'Backend Scaling'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900/50 border border-purple-500/30 text-purple-300 rounded-lg text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
