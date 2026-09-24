import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Search, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  Cpu, 
  GraduationCap, 
  Mail 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ openCommandPalette, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Architecture", href: "#architecture", icon: Layers },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30' 
        : 'bg-transparent border-b border-white/[0.04]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
              DA
            </div>
            <div>
              <div className="font-display text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                TransUnion Core Platform
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              title="Open Command Palette (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/[0.08] text-xs text-slate-400 hover:text-slate-200 hover:border-white/[0.15] transition-all"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">Cmd+K</span>
            </button>

            <button
              onClick={openResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-slate-950 font-medium text-xs hover:bg-slate-200 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={openCommandPalette}
              className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-300"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="w-full py-2 bg-white text-slate-950 font-medium text-xs rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
