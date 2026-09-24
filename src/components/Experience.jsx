import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Workflow,
  ArrowUpRight
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeItem, setActiveItem] = useState(0);
  const exp = experiences[0];

  return (
    <section id="experience" className="py-20 bg-[#080b11] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            01 / Work Experience & Systems Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Production Engineering at TransUnion
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Developing core backend services, custom C++ shared libraries, and distributed computation pipelines for region-specific business logic and machine learning evaluation.
          </p>
        </div>

        {/* Company Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0c101a] border border-white/[0.08] shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white font-display">
                  {exp.company}
                </h3>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-950/80 text-sky-300 border border-sky-500/30">
                  {exp.team}
                </span>
              </div>
              <div className="text-sm font-mono text-sky-400 font-medium mt-1">
                {exp.role}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-white/[0.06]">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {exp.location}
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-sans max-w-4xl">
            {exp.summary}
          </p>
        </div>

        {/* Deliverables Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Key Engineering Deliverables ({exp.keyDeliverables.length})
            </div>
            
            {exp.keyDeliverables.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveItem(idx)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                  activeItem === idx
                    ? 'bg-slate-900 border-sky-500/50 shadow-sm'
                    : 'bg-[#0c101a]/60 border-white/[0.04] hover:bg-slate-900/60 hover:border-white/[0.08]'
                }`}
              >
                <div>
                  <div className={`text-xs font-mono uppercase mb-0.5 ${
                    activeItem === idx ? 'text-sky-400' : 'text-slate-500'
                  }`}>
                    {item.category}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 font-sans line-clamp-1">
                    {item.title}
                  </div>
                </div>
                <span className={`text-xs font-mono ${activeItem === idx ? 'text-sky-400' : 'text-slate-600'}`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Inspector Card */}
          <div className="lg:col-span-7">
            {exp.keyDeliverables[activeItem] && (
              <div className="p-6 sm:p-8 rounded-xl bg-[#0c101a] border border-white/[0.08] shadow-lg h-full flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                      {exp.keyDeliverables[activeItem].category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                      {exp.keyDeliverables[activeItem].title}
                    </h4>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950/70 border border-white/[0.04]">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Architecture & Implementation:</div>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {exp.keyDeliverables[activeItem].description}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                    <div className="text-xs font-mono text-emerald-400 uppercase mb-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Measurable Engineering Impact:
                    </div>
                    <p className="text-emerald-300/90 text-sm leading-relaxed font-sans">
                      {exp.keyDeliverables[activeItem].impact}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-slate-400 uppercase">Core Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.keyDeliverables[activeItem].tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.06] text-xs font-mono text-sky-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>TransUnion Core Systems Platform</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Active
                  </span>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
