import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Check 
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-[#06090f] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            05 / Academic Background
          </div>
          <h2 className="text-3xl font-extrabold text-white font-display tracking-tight">
            Education & Fundamentals
          </h2>
        </div>

        {/* Card */}
        <div className="pro-card p-6 sm:p-8 rounded-xl border border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {education.institution}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-sky-400">
                    {education.degree} in {education.major}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-md border border-white/[0.06]">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {education.location}
                </span>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Relevant Coursework:</div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.04] text-xs text-slate-300 font-sans">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Score box */}
            <div className="lg:col-span-4 bg-[#0a0e17] p-6 rounded-xl border border-white/[0.06] text-center space-y-1.5">
              <div className="text-xs font-mono text-slate-400">Cumulative GPA</div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                {education.cgpa}
              </div>
              <div className="text-xs font-mono text-emerald-400 pt-1">
                First Class Degree Standing
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
