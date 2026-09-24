import React, { useState } from 'react';
import { 
  FolderGit2, 
  Layers, 
  Zap, 
  X, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Server
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#080b11] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            03 / Featured Projects & Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Engineered Backend & Systems Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected projects demonstrating multi-tenant microservice architectures, custom C++ shared library dynamic loaders, and offline-first mobile systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pro-card rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-sky-400 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-slate-500">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-1.5 pt-1">
                  {project.verifiedMetrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{m}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-500">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer font-mono"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm text-left">
          <div className="w-full max-w-2xl bg-[#0d121f] border border-white/[0.1] rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] space-y-6">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-white/[0.08] text-sky-400 font-mono text-xs font-semibold">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {selectedProject.period} • {selectedProject.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/80 border border-white/[0.04]">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">Problem & Context:</div>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {selectedProject.problemSolved}
              </p>
            </div>

            {/* Architecture breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                System Design & Architectural Patterns:
              </h4>
              <div className="space-y-2">
                {selectedProject.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Metrics */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase">
                Verified Engineering Metrics:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.verifiedMetrics.map((metric, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Tech Stack Components:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.06] text-xs font-mono text-sky-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-950 font-medium text-xs hover:bg-slate-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repo</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-300 font-mono text-xs hover:bg-slate-800"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
