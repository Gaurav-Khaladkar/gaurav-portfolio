import React from 'react';
import { X, FileDown, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-purple-500/40 bg-[#0d1322] shadow-[0_0_60px_rgba(139,92,246,0.35)] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <FileDown className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified PDF Document · 54.5 KB</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white">
                Gaurav Khaladkar — Cloud & DevOps Engineer Resume
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download="Gaurav_Khaladkar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF Viewport + Live Snapshot */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Snapshot Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-400">Current Role:</span>
              <div className="text-purple-300 font-semibold mt-0.5">Cloud Engineer @ Matfly Solutions</div>
            </div>
            <div>
              <span className="text-slate-400">Education:</span>
              <div className="text-cyan-300 font-semibold mt-0.5">M.C.S. (Savitribai Phule Pune Univ)</div>
            </div>
            <div>
              <span className="text-slate-400">Certification:</span>
              <div className="text-amber-300 font-semibold mt-0.5">Oracle Agentic AI Associate</div>
            </div>
          </div>

          {/* Embedded PDF Viewer Frame */}
          <div className="w-full h-[480px] sm:h-[540px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-inner">
            <iframe
              src={`${personal.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Gaurav Khaladkar Resume PDF"
              className="w-full h-full border-0"
            />
          </div>

          {/* Footer Highlights */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official verified document available for immediate download and offline recruitment review.</span>
            </div>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
            >
              <span>Open raw in tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
