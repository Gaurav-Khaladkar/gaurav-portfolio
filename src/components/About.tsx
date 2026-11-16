import React, { useState } from 'react';
import { 
  Terminal, 
  Cloud, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { DeveloperAvatar } from './DeveloperAvatar';

export const About: React.FC = () => {
  const { about } = portfolioData;
  const [activeTab, setActiveTab] = useState<'bio' | 'system'>('bio');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{about.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Infrastructure built for{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              resilience
            </span>
            , not firefighting outages.
          </h2>
        </div>

        {/* Main Grid: Avatar & Live Spec on Left, Story & Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): Illustrated Tech Avatar & System Spec HUD */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Illustrated Developer Avatar */}
            <div className="mb-6 w-full flex justify-center">
              <DeveloperAvatar size="lg" />
            </div>

            {/* Spec HUD Widget / Interactive Terminal Spec Card */}
            <div className="w-full glass-panel rounded-2xl border border-white/10 p-5 bg-[#0d1322]/80 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">sys_info.neofetch</span>
                </div>
                <div className="flex gap-1 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      activeTab === 'bio'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Quick Spec
                  </button>
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      activeTab === 'system'
                        ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Telemetry
                  </button>
                </div>
              </div>

              {activeTab === 'bio' ? (
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">OS Platform:</span>
                    <span className="text-purple-300 font-semibold">{about.specs.os}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Shell / Scripting:</span>
                    <span className="text-cyan-300">{about.specs.shell}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Cloud Provider:</span>
                    <span className="text-amber-300">{about.specs.cloud}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Infrastructure as Code:</span>
                    <span className="text-emerald-300">{about.specs.iac}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">CI/CD & Security:</span>
                    <span className="text-cyan-300">{about.specs.cicd}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Observability:</span>
                    <span className="text-rose-300">{about.specs.monitoring}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Systemd Daemon:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      active (running)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Load Average:</span>
                    <span className="text-cyan-300">0.14, 0.08, 0.05 (Healthy)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Incident Recovery:</span>
                    <span className="text-purple-300">Automated Runbook Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Security Stance:</span>
                    <span className="text-emerald-300">IAM Least Privilege & SSH Audited</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (7 cols): Professional Bio & Core Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional Introduction Quote (Exact as requested) */}
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-purple-500/20 bg-[#0d1322]/60 mb-8 relative">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>Professional Statement</span>
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans mb-4">
                &ldquo;{about.quote}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  #AWS
                </span>
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  #LinuxAdmin
                </span>
                <span className="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                  #Kubernetes
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  #Terraform
                </span>
                <span className="px-2.5 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  #AgenticAI
                </span>
              </div>
            </div>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-panel glass-panel-hover border border-white/5 bg-[#0d1322]/50 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                      {idx === 0 && <Terminal className="w-4 h-4 text-cyan-400" />}
                      {idx === 1 && <Cloud className="w-4 h-4 text-purple-400" />}
                      {idx === 2 && <Layers className="w-4 h-4 text-indigo-400" />}
                      {idx === 3 && <Cpu className="w-4 h-4 text-rose-400" />}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Commitment Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Based in Pune, India
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Cloud Engineer @ Matfly Solutions
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Oracle Certified Agentic AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
