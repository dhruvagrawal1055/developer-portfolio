import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || 'Software Engineering Opportunity')}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#080b11] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            06 / Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Contact & Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Open to discussing backend engineering roles, C++ execution pipelines, and distributed system architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Email */}
            <div className="pro-card p-4 rounded-xl border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="pro-card p-4 rounded-xl border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-sky-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Contact</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 font-medium">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="pro-card p-4 rounded-xl border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-mono text-white font-medium">{personalInfo.location}</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">IST (UTC+5:30)</span>
            </div>

            {/* Social Connectors */}
            <div className="flex gap-3 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-lg bg-slate-900/90 border border-white/[0.06] hover:border-white/[0.15] text-slate-300 hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-lg bg-slate-900/90 border border-white/[0.06] hover:border-white/[0.15] text-slate-300 hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Quick Mail Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-[#0c101a]">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <span>Send Quick Message</span>
                <span className="text-sky-400">Direct Route</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Backend Software Engineer Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Dhruv, I reviewed your backend and C++ systems background and would love to connect..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
