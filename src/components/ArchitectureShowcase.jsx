import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  ArrowRight, 
  Zap, 
  Server, 
  Workflow, 
  Code2, 
  Check, 
  Box
} from 'lucide-react';

export default function ArchitectureShowcase() {
  const [selectedNode, setSelectedNode] = useState('cpp-library');

  const nodes = {
    'ingress': {
      title: 'gRPC Ingress & Protobuf Gateway',
      subtitle: 'High-Throughput RPC Interface',
      role: 'Handles ~1000 concurrent requests/sec, multiplexes gRPC streaming channels, and handles token-based Role-Based Access Control (RBAC).',
      points: [
        'Protobuf serialization ensuring minimal network payload overhead',
        'Service-level Role-Based Access Control (RBAC)',
        'Low-overhead streaming connection pooling'
      ],
      stack: ['gRPC', 'Protobuf', 'RBAC', 'Load Balancer']
    },
    'cpp-library': {
      title: 'Modular C++ Shared Libraries (.so Plugins)',
      subtitle: 'Dynamic Runtime Plugin Architecture',
      role: 'Engineered dynamic C++ shared libraries allowing region-specific business transformations and ML model logic to be loaded at runtime without recompiling or restarting host backend instances.',
      points: [
        'Dynamic symbol resolution via runtime plugin loader (.so / shared objects)',
        'Multi-region logic isolation across 10+ deployment regions',
        'Clean C/C++ ABI boundaries for zero-copy interop',
        'POSIX thread-safe execution with zero memory leaks'
      ],
      stack: ['C++', 'Dynamic Linking (.so)', 'Plugin Architecture', 'Shared Memory']
    },
    'arrow-memory': {
      title: 'Apache Arrow Columnar In-Memory Pipeline',
      subtitle: 'Zero-Copy Data Transfer',
      role: 'Standardizes in-memory columnar data structures to eliminate CPU-intensive serialization and deserialization between native C++ components and higher-level orchestrators.',
      points: [
        'Zero-copy buffer sharing across language boundaries',
        'SIMD-friendly contiguous memory layouts',
        'Arrow IPC buffers for fast inter-process communication'
      ],
      stack: ['Apache Arrow', 'Columnar Format', 'Zero-Copy', 'IPC']
    },
    'ray-cluster': {
      title: 'Ray Serve & Vertex AI Distributed Cluster',
      subtitle: 'Distributed Model Inference & Data Processing',
      role: 'Coordinates distributed model scoring on Ray Serve while managing large-scale batch processing on Vertex AI Ray and Dataproc clusters.',
      points: [
        '~16ms p99 latency under ~1000 req/s concurrent inference',
        '45% throughput boost for large-scale data processing',
        'Automated Jupyter notebook migration to Vertex AI managed instances'
      ],
      stack: ['Ray Serve', 'Vertex AI', 'Dataproc', 'GCP']
    }
  };

  return (
    <section id="architecture" className="py-20 bg-[#06090f] relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            02 / Architecture & Custom Libraries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Execution Engine & Data Pipeline Blueprint
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Technical dataflow illustrating how custom C++ dynamic shared libraries, Apache Arrow columnar layouts, and Ray Serve distributed inference interconnect.
          </p>
        </div>

        {/* Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step-by-Step Flow (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-white/[0.08] rounded-xl p-6 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span className="text-sky-400 font-semibold">SYSTEM PIPELINE DIAGRAM</span>
              <span className="text-slate-500">Click node to inspect details</span>
            </div>

            {/* Node 1: Ingress */}
            <div
              onClick={() => setSelectedNode('ingress')}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'ingress'
                  ? 'bg-slate-900 border-sky-500/60 shadow-sm'
                  : 'bg-[#0e1322]/70 border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-sky-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>01. gRPC Ingress Gateway</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">~1000 req/s</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Protobuf Protocol • RBAC Policy Enforcement</div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedNode === 'ingress' ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
            </div>

            <div className="flex justify-center my-1">
              <div className="w-px h-5 bg-white/10" />
            </div>

            {/* Node 2: C++ Shared Libraries */}
            <div
              onClick={() => setSelectedNode('cpp-library')}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'cpp-library'
                  ? 'bg-slate-900 border-sky-500/60 shadow-sm ring-1 ring-sky-500/20'
                  : 'bg-[#0e1322]/70 border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>02. Modular C++ Shared Libraries (.so)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-500/30 font-mono">10+ Regions</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Dynamic Plugin Architecture • Hot-Loaded Regional Logic</div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedNode === 'cpp-library' ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
            </div>

            <div className="flex justify-center my-1">
              <div className="w-px h-5 bg-white/10" />
            </div>

            {/* Node 3: Apache Arrow */}
            <div
              onClick={() => setSelectedNode('arrow-memory')}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'arrow-memory'
                  ? 'bg-slate-900 border-sky-500/60 shadow-sm'
                  : 'bg-[#0e1322]/70 border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>03. Apache Arrow Columnar In-Memory Pipeline</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-mono">Zero-Copy</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Cross-Language Memory Sharing • Contiguous Layouts</div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedNode === 'arrow-memory' ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
            </div>

            <div className="flex justify-center my-1">
              <div className="w-px h-5 bg-white/10" />
            </div>

            {/* Node 4: Ray Serve */}
            <div
              onClick={() => setSelectedNode('ray-cluster')}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'ray-cluster'
                  ? 'bg-slate-900 border-sky-500/60 shadow-sm'
                  : 'bg-[#0e1322]/70 border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>04. Ray Serve Distributed Inference</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono">~16ms Latency</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Vertex AI Ray Clusters • Dataproc Acceleration (+45%)</div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedNode === 'ray-cluster' ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
            </div>

          </div>

          {/* Right: Technical Inspector (5 cols) */}
          <div className="lg:col-span-5">
            {nodes[selectedNode] && (
              <div className="p-6 rounded-xl bg-[#0b0f19] border border-white/[0.08] shadow-xl space-y-6">
                
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    Architecture Inspector
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mt-1">
                    {nodes[selectedNode].title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {nodes[selectedNode].subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950/80 border border-white/[0.04] text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {nodes[selectedNode].role}
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Key Technical Highlights:
                  </div>
                  <div className="space-y-2">
                    {nodes[selectedNode].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Components:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {nodes[selectedNode].stack.map((item, iIdx) => (
                      <span key={iIdx} className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.06] text-xs font-mono text-sky-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
