import React from 'react';
import { Terminal, Cpu, Cloud } from 'lucide-react';

interface DeveloperAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DeveloperAvatar: React.FC<DeveloperAvatarProps> = ({
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64 md:w-80 md:h-80'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-500/30 blur-2xl animate-pulse" />
      
      {/* Rotating dashed orbital ring */}
      <div className="absolute inset-[-12px] rounded-full border border-purple-500/30 border-dashed animate-[spin_28s_linear_infinite]" />
      
      {/* Reverse rotating orbital ring with accent dot */}
      <div className="absolute inset-[-24px] rounded-full border border-cyan-500/20 animate-[spin_36s_linear_infinite_reverse]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
      </div>

      {/* Main Avatar Canvas / SVG Frame */}
      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden glass-panel border-2 border-purple-500/40 shadow-[0_0_40px_rgba(139,92,246,0.25)] flex items-center justify-center bg-gradient-to-b from-[#0e1628] to-[#080d19]">
        {/* Subtle Cyber Grid in Background */}
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
        
        {/* Modern Vector Developer Character Illustration */}
        <svg
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8d5b8" />
              <stop offset="100%" stopColor="#e5a982" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1e38" />
              <stop offset="50%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0b0f19" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>
          </defs>

          {/* Background Tech Hexagons */}
          <path d="M120 15 L145 30 L145 60 L120 75 L95 60 L95 30 Z" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.25" fill="none" />
          <path d="M40 70 L60 82 L60 106 L40 118 L20 106 L20 82 Z" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.2" fill="none" />
          <path d="M200 70 L220 82 L220 106 L200 118 L180 106 L180 82 Z" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.2" fill="none" />

          {/* Shoulders / Body - Modern Tech Hoodie & Cyber Jacket */}
          <path
            d="M45 240 C45 190 70 170 120 170 C170 170 195 190 195 240 Z"
            fill="url(#jacketGrad)"
            stroke="#312e81"
            strokeWidth="1.5"
          />
          {/* Inner Hoodie Collar */}
          <path
            d="M85 240 L100 185 C105 178 135 178 140 185 L155 240 Z"
            fill="url(#hoodieGrad)"
            opacity="0.9"
          />
          {/* Tech zipper line with glowing cyan diode */}
          <line x1="120" y1="185" x2="120" y2="240" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="120" cy="188" r="3" fill="#06b6d4" />

          {/* Neck */}
          <rect x="105" y="145" width="30" height="30" rx="6" fill="url(#skinGrad)" />
          {/* Shadow under chin */}
          <path d="M105 148 Q120 162 135 148 Z" fill="#d97706" opacity="0.2" />

          {/* Head & Face */}
          <path
            d="M78 108 C78 75 92 65 120 65 C148 65 162 75 162 108 C162 142 148 156 120 156 C92 156 78 142 78 108 Z"
            fill="url(#skinGrad)"
          />

          {/* Modern Hair - Clean sculpted developer cut */}
          <path
            d="M74 100 C72 68 88 45 120 45 C152 45 168 68 166 100 C162 85 155 72 145 68 C135 64 125 66 120 66 C105 66 90 75 74 100 Z"
            fill="url(#hairGrad)"
          />
          <path d="M78 95 C76 80 84 66 98 60 C88 68 84 80 85 96 Z" fill="#312e81" />

          {/* Ears */}
          <circle cx="78" cy="112" r="8" fill="url(#skinGrad)" />
          <circle cx="162" cy="112" r="8" fill="url(#skinGrad)" />

          {/* Modern Cybernetic Headset / Audio Monitor */}
          <path d="M70 100 C70 60 90 48 120 48 C150 48 170 60 170 100" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
          <rect x="68" y="104" width="10" height="18" rx="4" fill="#6366f1" stroke="#a5b4fc" strokeWidth="1.5" />
          <rect x="162" y="104" width="10" height="18" rx="4" fill="#6366f1" stroke="#a5b4fc" strokeWidth="1.5" />
          {/* Headset mic */}
          <path d="M72 118 Q75 138 98 138" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="98" cy="138" r="2.5" fill="#06b6d4" />

          {/* Modern Eyebrows */}
          <path d="M92 98 Q102 95 110 98" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" />
          <path d="M130 98 Q138 95 148 98" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" />

          {/* Intelligent Eyes & Subtle Eyewear */}
          <rect x="86" y="102" width="28" height="16" rx="4" fill="#0f172a" fillOpacity="0.1" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="126" y="102" width="28" height="16" rx="4" fill="#0f172a" fillOpacity="0.1" stroke="#6366f1" strokeWidth="1.5" />
          <line x1="114" y1="108" x2="126" y2="108" stroke="#6366f1" strokeWidth="1.5" />
          
          {/* Eyes inside glasses */}
          <circle cx="100" cy="110" r="3.5" fill="#0f172a" />
          <circle cx="140" cy="110" r="3.5" fill="#0f172a" />
          <circle cx="101.5" cy="108.5" r="1.2" fill="#ffffff" />
          <circle cx="141.5" cy="108.5" r="1.2" fill="#ffffff" />

          {/* Glasses subtle blue AR reflection sheen */}
          <line x1="88" y1="114" x2="102" y2="104" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="128" y1="114" x2="142" y2="104" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.6" />

          {/* Nose */}
          <path d="M117 114 L120 125 L124 125" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />

          {/* Confident Smile */}
          <path d="M108 135 Q120 144 132 135" stroke="#b45309" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Subtle Terminal HUD Code Overlay */}
          <text x="30" y="210" fill="#06b6d4" fontSize="7" fontFamily="monospace" opacity="0.6">$ systemctl status ok</text>
          <text x="30" y="222" fill="#a855f7" fontSize="7" fontFamily="monospace" opacity="0.6">&gt; aws-eks: healthy</text>
        </svg>

        {/* Floating tech badges anchored around avatar */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md shadow-lg">
          <Terminal className="w-3 h-3 text-cyan-400" />
          <span>Linux 6.x</span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-lg">
          <Cloud className="w-3 h-3 text-orange-400" />
          <span>AWS Cloud</span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 backdrop-blur-md shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Active / SRE</span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 backdrop-blur-md shadow-lg">
          <Cpu className="w-3 h-3 text-indigo-400" />
          <span>Agentic AI</span>
        </div>
      </div>
    </div>
  );
};
