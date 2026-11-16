import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Video as VideoIcon } from 'lucide-react';
import type { VideoDemoItem } from '../data/portfolioData';
import { ProjectAnimatedVideoPlayer } from './ProjectAnimatedVideoPlayer';

interface VideoModalProps {
  video: VideoDemoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [playerMode, setPlayerMode] = useState<'animated' | 'youtube'>('animated');

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl glass-panel rounded-2xl border border-purple-500/40 bg-[#0d1322] shadow-[0_0_60px_rgba(139,92,246,0.35)] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                Technical Demonstration · {video.project}
              </span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-0.5">
              {video.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode Switcher: Animated Walkthrough vs YouTube */}
            <div className="flex items-center p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setPlayerMode('animated')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  playerMode === 'animated'
                    ? 'bg-purple-600/40 text-purple-200 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Animated Simulation</span>
                <span className="sm:hidden">Animated</span>
              </button>
              <button
                onClick={() => setPlayerMode('youtube')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  playerMode === 'youtube'
                    ? 'bg-red-600/30 text-red-200 border border-red-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <VideoIcon className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">YouTube Stream</span>
                <span className="sm:hidden">YouTube</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="relative w-full bg-black">
          {playerMode === 'animated' ? (
            <ProjectAnimatedVideoPlayer
              videoId={video.id}
              projectTitle={video.project}
            />
          ) : (
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Video Metadata & Description */}
        <div className="p-4 sm:p-5 bg-slate-900/50 flex flex-col gap-2.5">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {video.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-1.5">
              {video.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-[11px] font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span>Duration: {video.duration}</span>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                <span>External Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
