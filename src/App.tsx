import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { VideoGallery } from './components/VideoGallery';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { GitHubActivity } from './components/GitHubActivity';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalDrawer } from './components/TerminalDrawer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Active section scroll tracking
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'skills',
      'projects',
      'videos',
      'certifications',
      'education',
      'github',
      'resume',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K, or Backtick for CLI)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Fixed Header & Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Animated Hero Section */}
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* About Me Section with Illustrated Tech Avatar */}
        <About />

        {/* Professional Experience Timeline (Mentor Solutions & GTL Software) */}
        <Experience />

        {/* Technical Skills & Categorized Tools */}
        <Skills />

        {/* Featured Projects (SentinelOps AI, 5D BIM, Android apps) */}
        <Projects />

        {/* Dedicated Project Video Demonstrations Gallery */}
        <VideoGallery />

        {/* Verified Industry Certifications (Oracle Agentic AI, AWS CCP) */}
        <Certifications />

        {/* Academic Education (MSc & BSc Computer Science) */}
        <Education />

        {/* Live GitHub Profile & Commit Activity Visualizer */}
        <GitHubActivity />

        {/* Dedicated Resume Download Section */}
        <ResumeSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Functional Contact Transmission Section */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive DevOps CLI Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResumeModal={() => {
          setIsTerminalOpen(false);
          setIsResumeModalOpen(true);
        }}
      />

      {/* Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Floating CLI Pill on Bottom Right for Instant Access */}
      <div className="fixed bottom-6 right-6 z-30 hidden sm:block">
        <button
          onClick={() => setIsTerminalOpen(true)}
          title="Open CloudOps Terminal (`)"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-purple-500/40 bg-[#0d1322]/90 text-cyan-300 font-mono text-xs shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>~ devops-cli</span>
          <span className="text-[10px] text-slate-500 bg-slate-800 px-1 rounded">`</span>
        </button>
      </div>
    </div>
  );
};

export default App;
