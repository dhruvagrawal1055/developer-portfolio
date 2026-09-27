import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { sendEmail } from '../utils/emailService';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status State: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    setStatusMsg('');

    const result = await sendEmail({ name, email, subject, message });

    if (result.success) {
      setStatus('success');
      setStatusMsg(result.message || 'Message sent successfully! I will get back to you shortly.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 6000);
    } else if (result.isFallback) {
      // Fallback to mailto link if no API key configured
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoUrl, '_blank');
      setStatus('idle');
    } else {
      setStatus('error');
      setStatusMsg(result.error || 'Failed to send message. Please try again or email directly.');
    }
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
            Open to discussing backend engineering roles, C++ execution pipelines, and distributed system architectures. Send a direct email below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Contact Info (5 cols) */}
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
                className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white cursor-pointer"
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
                className="p-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 hover:text-white cursor-pointer"
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

          {/* Real Email Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-[#0c101a]">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <span>Send Direct Message</span>
                <span className="text-sky-400 font-medium">Direct Message</span>
              </div>

              {/* Status Alert */}
              {status === 'success' && (
                <div className="mb-4 p-3.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3.5 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                      Your Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Backend Software Developer Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Dhruv, I reviewed your backend and C++ systems background and would love to connect..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/[0.08] text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
