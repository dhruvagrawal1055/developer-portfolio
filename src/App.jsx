import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TerminalSandbox from './components/TerminalSandbox';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCmd = () => setIsCommandPaletteOpen(true);
    document.addEventListener('open-cmd-palette', handleOpenCmd);
    return () => document.removeEventListener('open-cmd-palette', handleOpenCmd);
  }, []);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 relative selection:bg-sky-500 selection:text-black font-sans antialiased">
      
      {/* Top Fixed Navigation */}
      <Navbar
        openCommandPalette={() => setIsCommandPaletteOpen(true)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero 
          openResumeModal={() => setIsResumeModalOpen(true)}
        />
        
        <Experience />
        
        <ArchitectureShowcase />
        
        <Projects />
        
        <Skills />
        
        <TerminalSandbox />
        
        <Education />
        
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

    </div>
  );
}
