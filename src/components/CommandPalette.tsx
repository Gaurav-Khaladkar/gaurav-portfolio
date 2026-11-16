import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  Award, 
  FileDown, 
  Terminal, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenResumeModal
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      title: 'SentinelOps AI & Featured Projects',
      category: 'Projects',
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'terminal',
      title: 'Launch Interactive DevOps CLI',
      category: 'Tools',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'resume',
      title: 'Download & Preview Resume (PDF)',
      category: 'Documents',
      icon: <FileDown className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenResumeModal();
      }
    },
    {
      id: 'skills',
      title: 'View Skills & Technology Stack',
      category: 'Skills',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: 'Matfly Solutions & Career Timeline',
      category: 'Experience',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'videos',
      title: 'Project Video Demonstrations',
      category: 'Media',
      icon: <ExternalLink className="w-4 h-4 text-rose-400" />,
      action: () => {
        onClose();
        document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'certs',
      title: 'Oracle Agentic AI & AWS Certifications',
      category: 'Certifications',
      icon: <Award className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onClose();
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      title: 'Contact Gaurav Khaladkar',
      category: 'Contact',
      icon: <Mail className="w-4 h-4 text-teal-400" />,
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl glass-panel rounded-2xl border border-purple-500/40 bg-[#0d1322] shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section to navigate..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/40 text-left transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {item.category}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                Jump &rarr;
              </span>
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-xs font-mono text-slate-400">
              No matching actions found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Keyboard hint footer */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with arrows / click to jump</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
