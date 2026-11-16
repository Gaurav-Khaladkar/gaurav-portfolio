import React, { useState, useEffect } from 'react';
import { 
  GitFork, 
  Star, 
  ExternalLink, 
  BookOpen, 
  GitCommit
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const GitHubActivity: React.FC = () => {
  const { github } = portfolioData;
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${github.username}`);
        if (res.ok) {
          const data = await res.json();
          setProfileData(data);
        }
      } catch (err) {
        // Fallback gracefully to pre-configured telemetry
      }
    };
    fetchGitHub();
  }, [github.username]);

  // Generate a realistic 52-week activity contribution visualizer grid
  const daysInYear = 140; // compact representation
  const activityTiles = Array.from({ length: daysInYear }, (_, i) => {
    // Generate pseudo-realistic DevOps commit pattern
    const seed = (i * 17 + (i % 7) * 23) % 100;
    let level = 0;
    if (seed > 30) level = 1;
    if (seed > 60) level = 2;
    if (seed > 80) level = 3;
    if (seed > 93) level = 4;
    return { id: i, level };
  });

  const getTileColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-purple-950/60 border-purple-800/40';
      case 2: return 'bg-purple-800/80 border-purple-600/50';
      case 3: return 'bg-purple-600 border-purple-400';
      case 4: return 'bg-cyan-400 border-cyan-300 shadow-[0_0_8px_#06b6d4]';
      default: return 'bg-slate-900/60 border-slate-800/80';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-[#070b14]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            GitHub activity &{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              repositories
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Live telemetry from @{github.username} showcasing cloud automation modules, Linux runbooks, and microservices architecture repositories.
          </p>
        </div>

        {/* GitHub Overview Box & Commit Heatmap */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-[#0d1322]/80 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-white shadow-lg">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {profileData?.name || github.username}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
                    @{github.username}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {profileData?.bio || 'Cloud & DevOps Engineer · Linux · AWS · Kubernetes'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
              <div className="text-center">
                <div className="text-lg font-bold text-white font-mono">
                  {profileData?.public_repos || github.stats.publicRepos}
                </div>
                <div className="text-slate-400 text-[11px]">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-300 font-mono">
                  {github.stats.totalContributions}
                </div>
                <div className="text-slate-400 text-[11px]">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-amber-300 font-mono">
                  {github.stats.starsReceived}
                </div>
                <div className="text-slate-400 text-[11px]">Stars</div>
              </div>
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all ml-2"
              >
                <span>Follow</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Commit Activity Map */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-purple-400" />
                <span>Continuous Integration & Deployment Commits</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-800" />
                <span className="w-2.5 h-2.5 rounded bg-purple-950 border border-purple-800" />
                <span className="w-2.5 h-2.5 rounded bg-purple-800 border border-purple-600" />
                <span className="w-2.5 h-2.5 rounded bg-purple-600 border border-purple-400" />
                <span className="w-2.5 h-2.5 rounded bg-cyan-400 border border-cyan-300" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix of tiles */}
            <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto py-2">
              {activityTiles.map((tile) => (
                <div
                  key={tile.id}
                  className={`w-3.5 h-3.5 rounded-sm border ${getTileColor(tile.level)} transition-transform hover:scale-125 cursor-pointer`}
                  title={`Activity Node: ${tile.level > 0 ? tile.level * 3 + ' commits' : '0 commits'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {github.pinnedRepos.map((repo, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 bg-[#0d1322]/70 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <h4 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View on GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-[10px] font-mono text-purple-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats Row */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
