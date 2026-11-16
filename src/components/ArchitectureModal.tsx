import React from 'react';
import { X, Server, Activity, Brain, ShieldAlert, Layout, Globe, Cpu, Database, Monitor } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ArchitectureModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project || !project.architecture) return null;

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-sky-400" />;
      default: return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-purple-500/40 bg-[#0d1322] shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
              System Architecture & Topology
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Architecture Flow Description */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-1.5">
              Data Pipeline & Execution Flow:
            </h4>
            <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
              {project.architecture.flowDescription}
            </p>
          </div>

          {/* Interactive Topology Nodes Diagram */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Distributed Infrastructure Components:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.architecture.nodes.map((node, idx) => (
                <div
                  key={node.id}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#070b14] border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getNodeIcon(node.icon)}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-purple-400">Node {idx + 1}</div>
                      <h5 className="font-semibold text-sm text-slate-100 group-hover:text-purple-300 transition-colors">
                        {node.label}
                      </h5>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {node.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Summary Pills */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Integrated Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-slate-800 bg-slate-900/40 text-xs text-slate-400 font-mono">
          <span>Target Availability: 99.9% Production SLA</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
