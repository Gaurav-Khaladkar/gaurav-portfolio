import React, { useState } from 'react';
import { Play, Video, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { VideoDemoItem } from '../data/portfolioData';
import { VideoModal } from './VideoModal';

export const VideoGallery: React.FC = () => {
  const { videoDemos } = portfolioData;
  const [selectedVideo, setSelectedVideo] = useState<VideoDemoItem | null>(null);

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-[#070b14]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Video className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Project video{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              demonstrations
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Watch technical deep-dives into platform architectures, automated incident root cause analysis, and cloud infrastructure pipelines.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoDemos.map((demo) => (
            <div
              key={demo.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/5 bg-[#0d1322]/70 shadow-xl flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedVideo(demo)}
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={demo.thumbnail}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent opacity-80" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-200 flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{demo.duration}</span>
                </div>

                {/* Center Play Button with Pulsing Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/90 text-white shadow-[0_0_25px_rgba(139,92,246,0.8)] group-hover:scale-110 transition-transform">
                    <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-40" />
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Project Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/30">
                  {demo.project}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {demo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {demo.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-purple-400 group-hover:underline flex items-center gap-1">
                    <span>Watch</span>
                    <Play className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};
