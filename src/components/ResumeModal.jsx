import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-[#0d121f] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f1524] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-mono flex items-center gap-2">
                <span>Dhruv_Agrawal_Resume.pdf</span>
              </h3>
              <p className="text-xs text-slate-400">Software Engineer • TransUnion</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Dhruv_Agrawal_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 text-xs font-medium hover:bg-slate-200 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Viewer */}
        <div className="flex-1 bg-slate-950 p-2 sm:p-4 min-h-[500px]">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            title="Dhruv Agrawal Resume"
            className="w-full h-full min-h-[520px] rounded-lg border border-white/[0.06] bg-white"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0a0e17] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Bengaluru, India • dhruvagrawal1055@gmail.com</span>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline flex items-center gap-1"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
