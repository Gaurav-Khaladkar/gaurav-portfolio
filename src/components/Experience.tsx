import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Terminal, 
  FileText, 
  CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [expandedRunbooks, setExpandedRunbooks] = useState<string | null>('matfly-cloud-engineer');

  const toggleRunbooks = (id: string) => {
    setExpandedRunbooks(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Professional{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              experience
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Verified production experience spanning enterprise Linux systems administration, server monitoring, incident triage, and full-stack software development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon Indicator */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0d1322] border-2 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
                {exp.isCurrent ? (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                ) : (
                  <Briefcase className="w-4 h-4 text-purple-400" />
                )}
              </div>

              {/* Main Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#0d1322]/70 shadow-xl transition-all">
                {/* Header: Role, Company & Status */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-medium text-emerald-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-medium text-purple-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Date & Location Badges */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1.5">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Detailed Responsibilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Engineering Responsibilities & Scope:</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Expandable Runbooks / SOPs for Matfly Solutions */}
                {exp.runbooks && exp.runbooks.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleRunbooks(exp.id)}
                      className="flex items-center justify-between w-full text-left text-xs font-mono text-cyan-300 hover:text-cyan-200 py-1 cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Interactive SOPs & Standard Runbooks Executed ({exp.runbooks.length})</span>
                      </span>
                      <span className="text-[11px] underline">
                        {expandedRunbooks === exp.id ? 'Collapse' : 'Expand'}
                      </span>
                    </button>
                    {expandedRunbooks === exp.id && (
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                        {exp.runbooks.map((rb, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-200/90 flex items-center gap-2"
                          >
                            <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{rb}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Skills Badges */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Skills:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
