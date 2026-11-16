import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Trash2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Gaurav Khaladkar CloudOps Shell v2.6.4 (x86_64-pc-linux-gnu)
          </p>
          <p className="text-slate-400">
            Type <span className="text-purple-400 font-semibold">&apos;help&apos;</span> to inspect available cloud commands or <span className="text-purple-400 font-semibold">&apos;cat about&apos;</span>.
          </p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-purple-300 font-semibold">Available DevOps & System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300 pt-1">
              <div><span className="text-cyan-300 font-mono">whoami</span> - Display engineer identity</div>
              <div><span className="text-cyan-300 font-mono">cat about</span> - Read professional summary</div>
              <div><span className="text-cyan-300 font-mono">skills</span> - List core cloud/devops tools</div>
              <div><span className="text-cyan-300 font-mono">projects</span> - View featured platforms</div>
              <div><span className="text-cyan-300 font-mono">experience</span> - View career timeline</div>
              <div><span className="text-cyan-300 font-mono">certs</span> - View certifications</div>
              <div><span className="text-cyan-300 font-mono">systemctl status sentinelops</span> - SRE status</div>
              <div><span className="text-cyan-300 font-mono">uname -a</span> - Kernel and host specs</div>
              <div><span className="text-cyan-300 font-mono">uptime</span> - Server SLA metrics</div>
              <div><span className="text-cyan-300 font-mono">contact</span> - Contact info & phone</div>
              <div><span className="text-cyan-300 font-mono">resume</span> - Download/preview resume</div>
              <div><span className="text-cyan-300 font-mono">clear</span> - Clear screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs space-y-1 text-slate-200">
            <p className="text-emerald-400 font-bold">Gaurav Khaladkar</p>
            <p>Title: Cloud Engineer | Cloud & DevOps</p>
            <p>Current: Cloud Engineer @ Matfly Solutions (Aug 2025 – Present)</p>
            <p>Previous: Linux System Administrator @ Matfly Solutions (Aug 2024 – Jul 2025)</p>
            <p>Location: Pune, Maharashtra, India</p>
          </div>
        );
        break;

      case 'cat about':
      case 'cat about.txt':
        response = (
          <p className="text-xs text-slate-300 leading-relaxed">
            &quot;{portfolioData.about.quote}&quot;
          </p>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-1.5">
            <p className="text-purple-300 font-semibold">Technical Stack Matrix:</p>
            <p><span className="text-cyan-300">AWS:</span> EC2, IAM, S3, VPC, CloudWatch, EKS, ECS, Lambda, RDS, Route 53</p>
            <p><span className="text-indigo-300">DevOps:</span> Docker, Kubernetes, Terraform, Jenkins, Git, CI/CD</p>
            <p><span className="text-rose-300">Monitoring:</span> Prometheus, Grafana, AWS CloudWatch</p>
            <p><span className="text-emerald-300">OS:</span> Linux, system administration, troubleshooting, networking</p>
            <p><span className="text-amber-300">Programming:</span> Core Java, Python, JavaScript</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-2">
            <p className="text-purple-300 font-semibold">Featured Architectures (from Resume):</p>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-300 font-bold">1. Java DevOps Enterprise CI/CD:</span> Jenkins declarative pipeline (Maven, SonarQube, Trivy, multi-stage Docker build, Helm to EKS), Terraform VPC/EKS, Prometheus metrics.
            </div>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-300 font-bold">2. AWS Cost Optimization (FinOps):</span> Serverless Lambda (Python/Boto3), EventBridge, Terraform, automated orphaned EBS snapshot remediation with CloudWatch logs.
            </div>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-300 font-bold">3. TerraVoyage Platform:</span> Multi-service application (Spring Boot 3 API, React 19, Python FastAPI, PostgreSQL) orchestrated with Docker Compose & JWT security.
            </div>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="text-xs space-y-2">
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-emerald-400 font-bold">Matfly Solutions — Cloud Engineer (Aug 2025 – Present)</div>
              <div className="text-slate-400">AWS cloud operations (EC2, IAM, S3, VPC, CloudWatch), Terraform IaC, Docker containerization, CI/CD, Prometheus & Grafana.</div>
            </div>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-cyan-300 font-bold">Matfly Solutions — Linux System Administrator (Aug 2024 – Jul 2025)</div>
              <div className="text-slate-400">Server health monitoring, CPU/RAM/disk diagnostics, user & permission administration, service management, ITIL & SOPs.</div>
            </div>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-purple-300 font-bold">GTL Software Pvt. Ltd. — Software Developer (Jan 2024 – Jun 2024)</div>
              <div className="text-slate-400">REST API integration over HTTP/HTTPS, Agile sprint cycles, component documentation.</div>
            </div>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-emerald-400">● Oracle Certified Foundations Associate: Agentic AI (Oct 2026 – Oct 2028)</p>
          </div>
        );
        break;

      case 'systemctl status sentinelops':
      case 'systemctl status sentinelops.service':
        response = (
          <div className="text-xs font-mono space-y-0.5 text-slate-300">
            <p>● sentinelops.service - SentinelOps AI Incident Engine Daemon</p>
            <p>   Loaded: loaded (/etc/systemd/system/sentinelops.service; enabled; preset: enabled)</p>
            <p className="text-emerald-400 font-bold">   Active: active (running) since Mon 2026-11-16 09:00:00 IST; 12h ago</p>
            <p>     Docs: https://github.com/Gaurav-Khaladkar/SentinelOps-AI</p>
            <p> Main PID: 20491 (java)</p>
            <p>    Tasks: 42 (limit: 4915)</p>
            <p>   Memory: 256.4M (limit: 1.0G)</p>
            <p>   CGroup: /system.slice/sentinelops.service</p>
            <p className="text-cyan-300">Nov 16 21:00:02 node-01 sentinelops[20491]: [INFO] Prometheus scrapers OK. No high-severity SLA breaches detected.</p>
          </div>
        );
        break;

      case 'uname -a':
        response = (
          <p className="text-xs font-mono text-cyan-300">
            Linux gaurav-cloudops-node 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
          </p>
        );
        break;

      case 'uptime':
        response = (
          <p className="text-xs font-mono text-emerald-400">
            21:30:15 up 42 days, 14:22, 1 user, load average: 0.12, 0.08, 0.05 (Target SLA 99.9%)
          </p>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>Email: <a href="mailto:gauravkhaldkar2001@gmail.com" className="text-cyan-300 underline">gauravkhaldkar2001@gmail.com</a></p>
            <p>Phone: <a href="tel:+919527298977" className="text-cyan-300 underline">+91 9527298977</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/gaurav-khaladkar" target="_blank" rel="noreferrer" className="text-purple-300 underline">linkedin.com/in/gaurav-khaladkar</a></p>
            <p>Location: Pune, Maharashtra, India</p>
          </div>
        );
        break;

      case 'resume':
        if (onOpenResumeModal) onOpenResumeModal();
        response = (
          <p className="text-xs font-mono text-emerald-400">
            Opening Gaurav_Khaladkar_Resume.pdf in browser modal...
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        response = (
          <p className="text-xs text-rose-400">
            Command not found: &apos;{trimmed}&apos;. Type &apos;help&apos; for a list of available cloud commands.
          </p>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[85vh] sm:h-[620px] rounded-t-2xl sm:rounded-2xl glass-panel border border-purple-500/40 bg-[#070c18] shadow-[0_0_60px_rgba(139,92,246,0.35)] flex flex-col overflow-hidden">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1326] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer"
                aria-label="Close terminal"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>gaurav@cloudops-node: ~</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={() => setHistory([])}
              title="Clear screen"
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen / Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono terminal-scroll text-slate-200 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400 font-semibold">gaurav@cloudops:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-[#0a1020] border-t border-slate-800 font-mono text-xs"
        >
          <span className="text-cyan-400 font-bold shrink-0">gaurav@cloudops:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'cat about', 'skills', 'projects', 'resume'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs"
          />
          <button
            type="submit"
            className="p-1.5 rounded-md bg-purple-600/30 text-purple-300 hover:bg-purple-600/50 cursor-pointer"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
