import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar, X } from 'lucide-react';

import { portfolioData } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Industry{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              certifications
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Certified technical foundations in autonomous AI agents, multi-agent cloud workflows, and Amazon Web Services foundational cloud architectures.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-purple-500/20 bg-[#0d1322]/80 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" 
              />

              <div>
                {/* Header Row: Issuer + Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-sm">
                      <Award className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-purple-300 font-semibold">
                        {cert.issuer}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-medium text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Validated */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                    Competencies Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-xs font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Validity & Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="text-slate-400">
                  {cert.validUntil && <span>Valid Until: <strong className="text-slate-200">{cert.validUntil}</strong></span>}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-3 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/40 text-purple-300 text-xs font-mono transition-colors cursor-pointer"
                  >
                    View Credential
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Verify at Official Issuer Portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credential Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl glass-panel rounded-2xl border border-purple-500/40 bg-[#0d1322] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                  Verified Credential Record
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-slate-400">Certification:</span>
                <div className="text-base font-bold text-white font-sans mt-0.5">{selectedCert.name}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div>
                  <span className="text-slate-400">Issuing Authority:</span>
                  <div className="text-slate-200 font-semibold">{selectedCert.issuer}</div>
                </div>
                <div>
                  <span className="text-slate-400">Issue Date:</span>
                  <div className="text-cyan-300 font-semibold">{selectedCert.issueDate}</div>
                </div>
                <div>
                  <span className="text-slate-400">Verification Status:</span>
                  <div className="text-emerald-400 font-semibold">{selectedCert.status}</div>
                </div>
                <div>
                  <span className="text-slate-400">Valid Until:</span>
                  <div className="text-slate-200 font-semibold">{selectedCert.validUntil || 'Active'}</div>
                </div>
              </div>

              {selectedCert.credentialId && (
                <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <span className="text-slate-400">Credential Reference ID:</span>
                  <div className="text-purple-300 font-mono select-all mt-0.5">{selectedCert.credentialId}</div>
                </div>
              )}

              <p className="text-xs font-sans text-slate-300 leading-relaxed pt-2">
                {selectedCert.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium cursor-pointer"
              >
                Close
              </button>
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-950/40"
                >
                  <span>Verify Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

