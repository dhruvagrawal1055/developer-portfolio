import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  MapPin, 
  Briefcase, 
  Terminal, 
  Code2, 
  Layers, 
  Zap, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, terminalCommands } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('summary');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topicTabs = [
    { key: 'summary', label: 'Summary' },
    { key: 'experience', label: 'TransUnion' },
    { key: 'libraries', label: 'C++ Libraries' },
    { key: 'backend', label: 'Backend Projects' },
    { key: 'skills', label: 'Skillset' },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-grid-subtle bg-radial-glow overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio & Core Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/[0.08] text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Bengaluru, India</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-400">{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                Backend Software Engineer & Systems Developer
              </p>
            </div>

            {/* Grounded Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Software engineer with hands-on production experience in <strong className="text-slate-200 font-semibold">custom C++ shared libraries</strong>, <strong className="text-slate-200 font-semibold">Apache Arrow columnar pipelines</strong>, and scalable <strong className="text-slate-200 font-semibold">Java / Spring Boot microservices</strong>. Currently engineering core execution platforms and distributed AI serving at TransUnion.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-medium text-xs sm:text-sm transition-all shadow-sm group"
              >
                <span>View Experience & Systems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={openResumeModal}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.08] text-slate-200 font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume (PDF)</span>
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/[0.06] text-slate-300 text-xs sm:text-sm transition-all"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Engineering Impact Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06]">
              {personalInfo.highlights.map((h, i) => (
                <div key={i} className="pro-card p-3 rounded-lg border border-white/[0.06] space-y-1">
                  <div className="text-xs font-mono text-sky-400">{h.metric}</div>
                  <div className="text-base font-bold text-white font-mono">{h.value}</div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">{h.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Technical Inspector & Quick Console (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/[0.08] bg-[#0c101a] shadow-xl overflow-hidden text-left">
              
              {/* Header Bar */}
              <div className="px-4 py-3 bg-[#0f1422] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <span className="text-xs font-mono text-slate-400 ml-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    technical-overview.sh
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Live Context</span>
              </div>

              {/* Quick Filter Tabs */}
              <div className="px-3 py-2 bg-[#0a0e17] border-b border-white/[0.06] flex items-center gap-1 overflow-x-auto">
                {topicTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedTopic(tab.key)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                      selectedTopic === tab.key
                        ? 'bg-sky-950/80 text-sky-300 border border-sky-500/30 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Console Screen Output */}
              <div className="p-4 bg-black/40 min-h-[260px] max-h-[300px] overflow-y-auto font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <span>$ cat</span>
                  <span className="text-sky-400">{selectedTopic}.txt</span>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-200 bg-slate-950/60 p-3 rounded-lg border border-white/[0.04]">
                  {terminalCommands[selectedTopic] || terminalCommands.summary}
                </pre>
              </div>

              {/* Footer status */}
              <div className="px-4 py-2.5 bg-[#0a0e17] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Engineering Context
                </span>
                <a href="#projects" className="text-sky-400 hover:underline">
                  View Code →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
