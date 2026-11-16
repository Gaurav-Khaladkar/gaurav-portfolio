import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Terminal, 
  Sparkles,
  Workflow
} from 'lucide-react';
import { videoStoryboards } from '../data/videoStoryboards';
import type { VideoScene } from '../data/videoStoryboards';

interface ProjectAnimatedVideoPlayerProps {
  videoId: string;
  projectTitle: string;
}

export const ProjectAnimatedVideoPlayer: React.FC<ProjectAnimatedVideoPlayerProps> = ({
  videoId,
  projectTitle
}) => {
  const storyboard = videoStoryboards[videoId] || videoStoryboards['video-1'];
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [visibleLogCount, setVisibleLogCount] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const totalDuration = storyboard.totalDuration;
  const scenes = storyboard.scenes;
  const currentScene: VideoScene = scenes[currentSceneIndex] || scenes[0];

  // Calculate accumulated scene start times
  const sceneStartTimes = useRef<number[]>([]);
  useEffect(() => {
    let acc = 0;
    const starts: number[] = [];
    scenes.forEach((s) => {
      starts.push(acc);
      acc += s.duration;
    });
    sceneStartTimes.current = starts;
  }, [scenes]);

  // Main playback timer loop
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.5 * playbackSpeed;
          if (next >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return next;
        });
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, totalDuration]);

  // Sync current scene and logs with currentTime
  useEffect(() => {
    const starts = sceneStartTimes.current;
    let foundIndex = 0;
    for (let i = starts.length - 1; i >= 0; i--) {
      if (currentTime >= starts[i]) {
        foundIndex = i;
        break;
      }
    }
    setCurrentSceneIndex(foundIndex);

    // Stream logs progressively based on scene progress
    const sceneStart = starts[foundIndex] || 0;
    const sceneElapsed = currentTime - sceneStart;
    const sceneDuration = scenes[foundIndex]?.duration || 20;
    const logRatio = Math.min(sceneElapsed / (sceneDuration * 0.75), 1);
    const totalLogs = scenes[foundIndex]?.terminalLogs.length || 1;
    const count = Math.max(1, Math.ceil(logRatio * totalLogs));
    setVisibleLogCount(count);
  }, [currentTime, scenes]);

  // Web Speech API Narration when not muted
  useEffect(() => {
    if (!isMuted && isPlaying && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // cancel previous
      const utterance = new SpeechSynthesisUtterance(currentScene.narration);
      utterance.rate = 1.0 * playbackSpeed;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else if (isMuted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentSceneIndex, isMuted, isPlaying, playbackSpeed, currentScene.narration]);

  const togglePlay = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = Math.max(0, Math.min(totalDuration, pos * totalDuration));
    setCurrentTime(newTime);
  };

  const jumpToScene = (index: number) => {
    const startTime = sceneStartTimes.current[index] || 0;
    setCurrentTime(startTime);
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-[#070b14] rounded-xl overflow-hidden flex flex-col justify-between border border-purple-500/30 select-none shadow-2xl"
    >
      {/* Background Cyber Grid & Ambient Gradient */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Overlay */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-[10px] font-mono text-red-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
            <span>LIVE DEMO SIMULATION</span>
          </div>
          <span className="text-xs font-mono text-purple-300 hidden sm:inline">
            {projectTitle || storyboard.projectTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-200">
            {currentScene.badge}
          </span>
        </div>
      </div>

      {/* Main Animated Visual Canvas (Center Stage) */}
      <div className="relative z-10 flex-1 px-4 sm:px-6 py-2 flex flex-col justify-between overflow-hidden">
        {/* Architecture Topology Flow Visualizer */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-cyan-400" />
              <span>Automated Pipeline Flow:</span>
            </span>
            <span className="text-[11px] font-mono text-cyan-300 font-semibold">
              {currentScene.title}
            </span>
          </div>

          {/* Node Flow Pills */}
          <div className="flex flex-wrap items-center gap-2 py-1">
            {['Git Repository', 'Jenkins CI', 'SonarQube', 'Trivy Scanner', 'Terraform IaC', 'AWS EKS', 'Prometheus'].map((node, idx) => {
              const isActive = currentScene.activeNodes.some(n => n.toLowerCase().includes(node.toLowerCase()));
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/40 to-cyan-600/40 border border-cyan-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)] scale-105'
                      : 'bg-slate-900/60 border border-slate-800 text-slate-400 opacity-60'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                  <span>{node}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Terminal Telemetry Output Screen */}
        <div className="my-2 p-3 sm:p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs shadow-inner flex flex-col justify-between h-36 sm:h-44 overflow-hidden">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-900 text-[10px] text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>runner@cloudops-ci: ~/{storyboard.id}</span>
            </div>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Executing Stage
            </span>
          </div>

          <div className="space-y-1.5 overflow-y-auto terminal-scroll text-[11px] py-1 flex-1">
            {currentScene.terminalLogs.slice(0, visibleLogCount).map((log, idx) => {
              const isSuccess = log.includes('[SUCCESS]') || log.includes('PASSED') || log.includes('Healthy');
              const isStage = log.includes('[STAGE') || log.includes('[K8S]') || log.includes('[DELETE]');
              return (
                <div key={idx} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-slate-600 select-none">&gt;</span>
                  <span
                    className={
                      isSuccess
                        ? 'text-emerald-300 font-semibold'
                        : isStage
                        ? 'text-cyan-300'
                        : 'text-slate-300'
                    }
                  >
                    {log}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 3 Live Metric Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-900/80">
            {currentScene.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-900/80 p-1.5 rounded-md border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                <div className={`text-xs font-bold font-mono ${m.color} truncate`}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Subtitle / Narration Caption Bar */}
        <div className="p-2 sm:p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center gap-2.5 backdrop-blur-md">
          <div className="w-6 h-6 rounded-md bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs sm:text-sm text-slate-100 font-sans leading-snug line-clamp-2">
            {currentScene.narration}
          </p>
        </div>
      </div>

      {/* Bottom Interactive Video Controls & Scrubber */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2 bg-slate-800/90 rounded-full cursor-pointer overflow-hidden group mb-3"
          title="Click to seek"
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-150"
            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          {/* Left Controls: Play, Restart, Time */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white cursor-pointer transition-colors shadow-md"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={handleRestart}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              title="Restart Demonstration"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <span className="text-slate-400 text-xs">
              <strong className="text-white">{formatTime(currentTime)}</strong> / {formatTime(totalDuration)}
            </span>
          </div>

          {/* Phase Jump Pills */}
          <div className="hidden md:flex items-center gap-1">
            {scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => jumpToScene(idx)}
                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors ${
                  currentSceneIndex === idx
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                P{idx + 1}
              </button>
            ))}
          </div>

          {/* Right Controls: Speed, Audio, Fullscreen */}
          <div className="flex items-center gap-2">
            {/* Speed Toggle */}
            <button
              onClick={() => {
                const speeds = [1, 1.5, 2];
                const next = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
                setPlaybackSpeed(next);
              }}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[10px] font-mono text-cyan-300 border border-slate-800"
              title="Playback Speed"
            >
              {playbackSpeed}x
            </button>

            {/* Narration Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-purple-950/80 border-purple-500/50 text-purple-300'
              }`}
              title={isMuted ? 'Unmute Audio Narration' : 'Mute Audio Narration'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
