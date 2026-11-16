import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#050811] text-slate-400 py-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 rounded-t-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {personal.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Cloud & DevOps Engineer focused on AWS cloud infrastructure, Linux systems administration, Kubernetes containerization, and intelligent reliability engineering.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>System Status: All Services Operational (99.9% SLA)</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-mono uppercase text-slate-300 mb-3 text-[11px] tracking-wider">
                Architecture
              </div>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-purple-300 transition-colors">Who I Am</a></li>
                <li><a href="#experience" className="hover:text-purple-300 transition-colors">Timeline</a></li>
                <li><a href="#skills" className="hover:text-purple-300 transition-colors">Tech Matrix</a></li>
                <li><a href="#projects" className="hover:text-purple-300 transition-colors">Featured Projects</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase text-slate-300 mb-3 text-[11px] tracking-wider">
                Credentials
              </div>
              <ul className="space-y-2">
                <li><a href="#videos" className="hover:text-purple-300 transition-colors">Demonstrations</a></li>
                <li><a href="#certifications" className="hover:text-purple-300 transition-colors">Certifications</a></li>
                <li><a href="#education" className="hover:text-purple-300 transition-colors">Education</a></li>
                <li><a href="#resume" className="hover:text-purple-300 transition-colors">Resume Download</a></li>
              </ul>
            </div>
          </div>

          {/* Connect & CLI (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono uppercase text-slate-300 text-[11px] tracking-wider">
              Telemetry Channels
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.email}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/40 text-purple-300 hover:text-purple-100 transition-colors cursor-pointer"
                  title="DevOps CLI"
                >
                  <Terminal className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Pune, Maharashtra, India
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Gaurav Khaladkar. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React · TypeScript · Tailwind CSS · Framer Motion</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Return to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
