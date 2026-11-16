import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  FileDown, 
  Search, 
  Moon, 
  Sun, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenTerminal?: () => void;
  onOpenCommandPalette?: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenTerminal,
  onOpenCommandPalette,
  onOpenResumeModal
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [puneTime, setPuneTime] = useState('');

  // Live Pune Time Clock (matching reference site's Dubai live clock)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setPuneTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Progress and Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Videos', href: '#videos', id: 'videos' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar (Inspired by Reference Website) */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#070b14]/85 dark:bg-[#070b14]/85 backdrop-blur-xl border-b border-purple-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brandmark / Logo with pulsing status dot */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-slate-100 no-underline transition-transform"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-purple-500/50 group-hover:border-cyan-400 transition-colors shadow-md bg-[#0d1322]">
              <img src={portfolioData.personal.photoUrl} alt={portfolioData.personal.name} className="w-full h-full object-cover object-top" />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#070b14]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-purple-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 tracking-wider">
                Cloud & DevOps
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/5 bg-[#0d1322]/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Live Pune Clock + Tools + Resume CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Clock Badge (Direct inspiration from Reference Website's Dubai clock) */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-400">Pune —</span>
              <span className="text-cyan-300 font-semibold">{puneTime || 'IST'}</span>
            </div>

            {/* Command Palette Trigger (Cmd+K) */}
            <button
              onClick={onOpenCommandPalette}
              title="Quick Search (Ctrl+K / ⌘K)"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-850/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-purple-300 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">⌘K</span>
            </button>

            {/* Interactive DevOps Terminal Toggle */}
            <button
              onClick={onOpenTerminal}
              title="Open DevOps Interactive CLI"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-purple-100 transition-all cursor-pointer shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-amber-300 transition-all cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-400" />
              )}
            </button>

            {/* Dedicated Resume Download / Preview Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070b14]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 border-b border-purple-500/20 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pune, IN — {puneTime}</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Active</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl text-left transition-colors ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-200 border border-purple-500/40'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-purple-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTerminal) onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-sm font-mono"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch DevOps CLI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResumeModal) onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/30"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
