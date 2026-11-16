import React from 'react';
import { Eye, ShieldCheck, CheckCircle2, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-[#070b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-purple-500/30 bg-gradient-to-r from-[#0d1322] via-[#11192e] to-[#0d1322] shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden">
          {/* Decorative Cyber Grid */}
          <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Copy */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Curriculum Vitae</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                Download Gaurav&apos;s{' '}
                <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
                  professional resume
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Comprehensive overview of Linux systems administration, AWS cloud engineering, Kubernetes orchestration, academic credentials from Pune University, and verified certifications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Format: PDF (54.5 KB)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Location: public/resume/Gaurav_Khaladkar_Resume.pdf
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  Target: Cloud & DevOps Roles
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={personal.resumeUrl}
                download="Gaurav_Khaladkar_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl glass-panel glass-panel-hover text-slate-200 hover:text-white font-semibold text-sm border border-purple-500/30 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview in Browser</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
