'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multimodal Document Intelligence System",
    description: "Built an AI-powered system to analyze documents containing text, tables, and images",
    longDescription: "Built an AI-powered system to analyze documents containing text, tables, and images. Implemented Retrieval-Augmented Generation (RAG) for intelligent querying. Designed multi-agent architecture for text, vision, and validation reasoning. Integrated CLIP-based embeddings for cross-modal retrieval.",
    category: "AI/ML",
    techStack: ["FastAPI", "Python", "RAG", "CLIP", "Docker", "ChromaDB"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Smart Attendance System using Face Recognition",
    description: "Developed real-time face recognition system for automated attendance",
    longDescription: "Developed real-time face recognition system for automated attendance. Implemented liveness detection (blink detection) to prevent spoofing. Built dashboard for monitoring, analytics, and student management. Enabled report generation (CSV, Excel, PDF).",
    category: "AI/ML",
    techStack: ["Python", "OpenCV", "Streamlit", "SQLite"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    hidden: { y: 30, opacity: 0 },
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-800/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are some of my key projects showcasing AI/ML, Computer Vision, and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 h-80 flex flex-col hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 cursor-pointer backdrop-blur-xl overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Project Header */}
              <div className="mb-4 flex-shrink-0 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700 text-gray-400 rounded-full text-xs">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg hover:bg-slate-700/70 hover:border-cyan-400/50 transition-all duration-300 text-center text-sm"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 text-center text-sm"
                >
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 text-lg"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                
                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg hover:bg-slate-700/70 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398 1.003 2.65.618.5.98 1.595.98 2.688 0 1.849-1.337 3.694-4.555 4.951.346.298.656.692.856 1.141.656.35 1.086.91 1.086 1.532 0 1.107-.01 2-.01 2.272 0 .267.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </motion.a>
                  
                  <motion.a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
