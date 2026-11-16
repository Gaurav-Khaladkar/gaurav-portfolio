import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#070b14]/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Academic{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              foundations
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Formal postgraduate and undergraduate training in Computer Science, Operating Systems, Computer Networks, and Distributed Computing.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/5 bg-[#0d1322]/70 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-purple-300">
                        {item.university}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                    Pune, IN
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.degree}
                </h3>
                <div className="text-sm font-medium text-slate-300 mt-1 mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.institution}</span>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.details}
                </p>

                {/* Core Focus Areas */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                    Key Academic Disciplines:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>{item.location}</span>
                </span>
                <span className="text-emerald-400">Verified Degree Track</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
