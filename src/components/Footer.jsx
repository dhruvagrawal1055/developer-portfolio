import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Activity 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/[0.06] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-white font-bold">
              DA
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-500">
                Backend Software Developer • TransUnion
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>BLR (IST): {time || '12:00:00'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] hover:border-white/[0.15] text-slate-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Vite & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
