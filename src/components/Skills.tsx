import React, { useState, useMemo } from 'react';
import { 
  Cloud, 
  Layers, 
  BarChart2, 
  Terminal, 
  Code2, 
  Search, 
  Server, 
  ShieldCheck, 
  Database, 
  Network, 
  Activity, 
  Boxes, 
  Box, 
  Zap, 
  Cpu, 
  FileCode2, 
  Workflow, 
  GitBranch, 
  PieChart, 
  TrendingUp, 
  Wrench, 
  Share2, 
  TerminalSquare, 
  FileJson,
  Sparkles,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Cloud',
    'Infrastructure as Code',
    'CI/CD',
    'Containers & Orchestration',
    'Monitoring & Observability',
    'Linux & Networking',
    'Programming & Scripting'
  ];

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      Cloud: <Cloud className="w-5 h-5 text-purple-400" />,
      Server: <Server className="w-5 h-5 text-indigo-400" />,
      ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      Database: <Database className="w-5 h-5 text-amber-400" />,
      Network: <Network className="w-5 h-5 text-cyan-400" />,
      Activity: <Activity className="w-5 h-5 text-rose-400" />,
      Boxes: <Boxes className="w-5 h-5 text-blue-400" />,
      Box: <Box className="w-5 h-5 text-sky-400" />,
      Zap: <Zap className="w-5 h-5 text-yellow-400" />,
      Layers: <Layers className="w-5 h-5 text-cyan-400" />,
      Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
      FileCode2: <FileCode2 className="w-5 h-5 text-purple-400" />,
      Workflow: <Workflow className="w-5 h-5 text-rose-400" />,
      GitBranch: <GitBranch className="w-5 h-5 text-amber-400" />,
      BarChart2: <BarChart2 className="w-5 h-5 text-orange-400" />,
      PieChart: <PieChart className="w-5 h-5 text-amber-400" />,
      TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
      Wrench: <Wrench className="w-5 h-5 text-blue-400" />,
      Share2: <Share2 className="w-5 h-5 text-indigo-400" />,
      Code2: <Code2 className="w-5 h-5 text-red-400" />,
      TerminalSquare: <TerminalSquare className="w-5 h-5 text-yellow-400" />,
      FileJson: <FileJson className="w-5 h-5 text-emerald-400" />,
      CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
    };

    return iconMap[iconName] || <Cpu className="w-5 h-5 text-purple-400" />;
  };

  const filteredSkills = useMemo(() => {
    return skills.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b14]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Technical{' '}
            <span className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              skills & tools
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Verified skills across AWS Cloud, Infrastructure as Code (Terraform), CI/CD, Container Orchestration (Kubernetes/Docker), Observability, Linux Administration, and Backend Scripting.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl glass-panel border border-white/5 bg-[#0d1322]/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600/40 text-purple-200 border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, e.g. Terraform, Jenkins..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/5 bg-[#0d1322]/60 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Icon + Level Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(skill.icon)}
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    skill.level === 'Core Production'
                      ? 'bg-purple-950/60 border border-purple-500/40 text-purple-300'
                      : skill.level === 'Advanced'
                      ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-800/80 border border-slate-700 text-slate-300'
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Skill Name & Category */}
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-slate-100 text-sm group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  {skill.highlight && (
                    <span title="Key Focus Area">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {skill.category}
                </div>
                {skill.description && (
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/5">
            <p className="text-slate-400 text-sm font-mono">No matching skills found for &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-purple-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Technical Proficiency Disclosure */}
        <div className="mt-8 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center gap-3 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-purple-300">Production Tested:</strong> Directly aligned with active AWS operations, Terraform IaC, Jenkins/GitHub Actions CI/CD pipelines, and Linux server administration at Matfly Solutions.
          </span>
        </div>
      </div>
    </section>
  );
};
