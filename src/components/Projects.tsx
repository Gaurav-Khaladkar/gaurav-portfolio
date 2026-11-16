import React, { useState } from 'react';
import { 
  FolderGit2, 
  Play, 
  Network, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Smartphone,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem, VideoDemoItem } from '../data/portfolioData';
import { ArchitectureModal } from './ArchitectureModal';
import { VideoModal } from './VideoModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const { projects, videoDemos } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArchProject, setActiveArchProject] = useState<ProjectItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoDemoItem | null>(null);

  const categories = ['All', 'DevOps & CI/CD', 'Cloud & FinOps', 'Full-Stack & Cloud'];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const handleOpenVideoForProject = (project: ProjectItem) => {
    const matchingVideo = videoDemos.find(v => v.project.toLowerCase().includes(project.title.toLowerCase()) || (project.videoId && v.youtubeId === project.videoId));
    if (matchingVideo) {
      setActiveVideo(matchingVideo);
    } else if (project.videoId) {
      setActiveVideo({
        id: `demo-${project.id}`,
        title: project.videoTitle || `${project.title} Demonstration`,
        project: project.title,
        description: project.description,
        youtubeId: project.videoId,
        duration: '3:30',
        thumbnail: project.image,
        tags: project.technologies.slice(0, 4)
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Featured{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Architected cloud reliability platforms, quantity takeoff systems, and mobile software with infrastructure-as-code and modern engineering practices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600/40 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/30'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            if (isFeatured) {
              return (
                <div
                  key={project.id}
                  className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-500/20 bg-[#0d1322]/80 shadow-2xl relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Details (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Eyebrow & Category */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-mono">
                            {project.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            Flagship Project
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-purple-300/90 font-mono mt-1 mb-4">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6 space-y-2">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                            Key Architectural Highlights:
                          </h4>
                          {project.keyFeatures.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-4 border-t border-slate-800/80">
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          {project.architecture && (
                            <button
                              onClick={() => setActiveArchProject(project)}
                              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/40 border border-purple-500/40 text-purple-200 text-xs font-semibold cursor-pointer shadow-sm transition-all"
                            >
                              <Network className="w-4 h-4 text-purple-300" />
                              <span>View Architecture Topology</span>
                            </button>
                          )}

                          {project.videoId && (
                            <button
                              onClick={() => handleOpenVideoForProject(project)}
                              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold cursor-pointer transition-all"
                            >
                              <Play className="w-4 h-4 text-cyan-400" />
                              <span>Watch Demo Video</span>
                            </button>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                            >
                              <GithubIcon className="w-4 h-4" />
                              <span>Repository</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Visual Architecture Card Mockup (5 cols) */}
                    <div className="lg:col-span-5 w-full flex flex-col gap-4">
                      <div className="relative rounded-2xl overflow-hidden glass-panel border border-purple-500/30 bg-[#080d19] p-5 shadow-inner">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                          <span className="text-xs font-mono text-purple-300 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                            <span>System Architecture Overview</span>
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                            Verified Design
                          </span>
                        </div>

                        {project.architecture ? (
                          <div className="space-y-3">
                            {project.architecture.nodes.map((node, nIdx) => (
                              <div
                                key={node.id}
                                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3 hover:border-purple-500/40 transition-colors"
                              >
                                <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs font-mono font-bold">
                                  {nIdx + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-slate-200 truncate">
                                    {node.label}
                                  </div>
                                  <div className="text-[11px] text-slate-400 truncate font-mono">
                                    {node.role}
                                  </div>
                                </div>
                              </div>
                            ))}

                            <button
                              onClick={() => setActiveArchProject(project)}
                              className="w-full mt-2 py-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Inspect Interactive Topology Diagram</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="p-6 text-center text-xs text-slate-400 font-mono">
                            Cloud-native microservices architecture with AWS S3 integration.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Compact Grid Cards for Android & Additional Projects
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 bg-[#0d1322]/60 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300/80 mt-0.5 mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Architecture Modal */}
      <ArchitectureModal
        project={activeArchProject}
        onClose={() => setActiveArchProject(null)}
      />

      {/* Video Demonstration Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
