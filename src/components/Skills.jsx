import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Cpu, 
  Database, 
  Layers, 
  Check, 
  Zap 
} from 'lucide-react';
import { skillMatrix } from '../data/portfolioData';

const groupIcons = {
  "Core Languages": Code2,
  "Backend & Microservices": Server,
  "Systems & In-Memory Data": Cpu,
  "Cloud, DevOps & Databases": Database,
  "Engineering Architecture": Layers
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 bg-[#06090f] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            04 / Technical Capabilities & Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Skills & System Proficiencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Core technologies and frameworks applied across production backend services, custom shared libraries, and distributed computation pipelines.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillMatrix.map((group, idx) => {
            const Icon = groupIcons[group.group] || Code2;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-sky-950/80 border border-sky-500/40 text-sky-300 font-semibold shadow-sm'
                    : 'bg-slate-900/60 border border-white/[0.04] text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${activeTab === idx ? 'text-sky-400' : 'text-slate-500'}`} />
                <span>{group.group}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillMatrix[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="pro-card p-5 rounded-xl border border-white/[0.06] space-y-2 text-left"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white font-mono">
                  {item.name}
                </h4>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* Keyword Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#0a0e17] border border-white/[0.06] text-left">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
            Core Production Keywords & Stack Components
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              "Java", "C++", "Python", "JavaScript", "Kotlin", 
              "Spring Boot", "Spring Security", "Apache Kafka", "Redis", "gRPC", "Protobuf", "FastAPI", "Node.js", "React.js",
              "C++ Shared Libraries (.so)", "Dynamic Plugin Architecture", "Apache Arrow", "Zero-Copy IPC", "Ray Serve", "ONNX Runtime",
              "Google Cloud Platform", "Vertex AI", "Dataproc", "Cloud Build", "Docker", "CI/CD", "GitHub Actions",
              "PostgreSQL", "MySQL", "MongoDB", "Firebase (Firestore, Auth)",
              "Microservices Architecture", "RBAC Access Governance", "REST APIs"
            ].map((kw, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.04] text-slate-300"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
