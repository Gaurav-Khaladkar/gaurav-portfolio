import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Terminal, 
  Play, 
  Mail, 
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResumeModal }) => {
  const { personal } = portfolioData;

  // Typing animation state
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentHeadline = personal.typingHeadlines[headlineIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentHeadline.length) {
          setDisplayedText(currentHeadline.slice(0, displayedText.length + 1));
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentHeadline.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % personal.typingHeadlines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, headlineIndex, personal.typingHeadlines]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Interactive Mesh / Particle Canvas Background */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo Avatar Ring */}
          <div className="relative mb-6 group">
            {/* Ambient pulsing multi-color glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            {/* Gradient border ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#090d16] bg-[#0d1322]">
                <img
                  src={personal.photoUrl}
                  alt="Gaurav Khaladkar — Cloud & DevOps Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Online status indicator with ping */}
              <span 
                className="absolute bottom-1 right-1 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#070b14] shadow-md shadow-emerald-500/50" 
                title="Active & Open to Opportunities"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
              </span>
            </div>
          </div>

          {/* Eyebrow Badge (Reference style: "Portfolio · 2026 · Dubai, UAE") */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6 backdrop-blur-md shadow-lg shadow-purple-950/20">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>Portfolio · 2026 · Pune, Maharashtra, India</span>
          </div>

          {/* Main Name with Reference-Style Serif Italic Accent */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-tight">
            <span>{personal.firstName} </span>
            <em className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              {personal.lastName}
            </em>
          </h1>

          {/* Dynamic Typing Headline */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-lg sm:text-2xl md:text-3xl font-mono text-cyan-300 tracking-tight font-medium">
              {displayedText}
              <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </span>
          </div>

          {/* Professional Introduction Summary */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Cloud Engineer with a Master&apos;s in Computer Science and 2+ years at{' '}
            <span className="text-purple-300 font-semibold">Matfly Solutions</span>, specializing in{' '}
            <span className="text-white font-semibold">AWS Cloud Operations</span>,{' '}
            <span className="text-white font-semibold">Terraform IaC</span>,{' '}
            <span className="text-white font-semibold">Docker &amp; CI/CD</span>, and{' '}
            <span className="text-white font-semibold">Prometheus &amp; Grafana Observability</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel glass-panel-hover text-slate-200 hover:text-white font-semibold text-sm border border-purple-500/20 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-cyan-300 font-mono text-sm shadow-md transition-all cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>DevOps CLI</span>
            </button>

            <a
              href="#videos"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              <Play className="w-4 h-4 text-purple-400" />
              <span>Video Demos</span>
            </a>
          </div>

          {/* Social Links & Location Quick Badges */}
          <div className="flex items-center justify-center gap-4 text-slate-400 mb-14">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.email}
              className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-purple-300 transition-colors"
              title="Email Gaurav"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Reference-Style Hero Stats Bar (4 High-Impact Metric Cards) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {personal.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/5 bg-[#0d1322]/70 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/20 transition-colors" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-200 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Cue (Direct reference to Reference Site's "Scroll" line indicator) */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-8 text-slate-400 hover:text-slate-200 transition-colors">
        <a href="#about" className="flex flex-col items-center gap-1 text-xs font-mono tracking-widest uppercase">
          <span>Scroll</span>
          <span className="w-[1.5px] h-6 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
        </a>
      </div>
    </section>
  );
};
