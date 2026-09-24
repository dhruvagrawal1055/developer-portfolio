import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  Layers, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  FileText, 
  ArrowRight, 
  X,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, openResumeModal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    { 
      id: 'experience', 
      title: 'TransUnion Production Engineering Experience', 
      category: 'Section', 
      icon: Briefcase,
      action: () => { window.location.href = '#experience'; } 
    },
    { 
      id: 'architecture', 
      title: 'C++ Shared Libraries & Pipeline Blueprint', 
      category: 'Section', 
      icon: Layers,
      action: () => { window.location.href = '#architecture'; } 
    },
    { 
      id: 'projects', 
      title: 'Featured Projects (Workforce SaaS, C++ Engine, Android)', 
      category: 'Section', 
      icon: FolderGit2,
      action: () => { window.location.href = '#projects'; } 
    },
    { 
      id: 'skills', 
      title: 'Skills & Technical Capabilities Matrix', 
      category: 'Section', 
      icon: Cpu,
      action: () => { window.location.href = '#skills'; } 
    },
    { 
      id: 'resume', 
      title: 'View / Download Official Resume (PDF)', 
      category: 'Action', 
      icon: FileText,
      action: () => { openResumeModal(); } 
    },
    { 
      id: 'contact', 
      title: 'Contact Information & Email', 
      category: 'Action', 
      icon: Mail,
      action: () => { window.location.href = '#contact'; } 
    },
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          document.dispatchEvent(new CustomEvent('open-cmd-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (action) => {
    onClose();
    action.action();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-[#0c101a] border border-white/[0.1] rounded-xl shadow-2xl overflow-hidden text-left">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#0f1422] border-b border-white/[0.08]">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section or command (e.g. 'architecture', 'resume', 'skills')..."
            className="flex-1 bg-transparent text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="p-2 max-h-72 overflow-y-auto space-y-1">
          {filtered.length > 0 ? (
            filtered.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleSelect(action)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all cursor-pointer ${
                    selectedIndex === idx 
                      ? 'bg-slate-900 border border-white/[0.08] text-white' 
                      : 'text-slate-300 hover:bg-slate-900/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-slate-950 border border-white/[0.06] text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium font-sans text-slate-100">
                        {action.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">
                        {action.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No results found for "{query}"
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-[#090d16] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Click to select</span>
          <span>[Esc] to close</span>
        </div>

      </div>
    </div>
  );
}
