# Gaurav Khaladkar — Cloud & DevOps Engineer Portfolio

[![Production Build](https://img.shields.io/badge/Build-Passing-emerald?style=flat-square&logo=vite)](https://github.com/Gaurav-Khaladkar/gaurav-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](https://opensource.org/licenses/MIT)
[![Cloud](https://img.shields.io/badge/Cloud-AWS-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com)
[![IaC](https://img.shields.io/badge/IaC-Terraform-blueviolet?style=flat-square&logo=terraform)](https://www.terraform.io)
[![Containers](https://img.shields.io/badge/Orchestration-Kubernetes%20%26%20Docker-blue?style=flat-square&logo=kubernetes)](https://kubernetes.io)
[![Observability](https://img.shields.io/badge/Observability-Prometheus%20%26%20Grafana-red?style=flat-square&logo=prometheus)](https://prometheus.io)

A modern, responsive, high-performance personal portfolio website for **Gaurav Khaladkar**, Cloud Engineer at **Matfly Solutions Private Limited** based in Pune, Maharashtra, India.

---

## 🌟 Key Features

- **Constellation 3D Canvas Background**: Interactive node topology that reacts dynamically to cursor movements.
- **Dynamic Typing Headline**: Showcases core engineering specializations (*AWS*, *Terraform*, *Kubernetes*, *Linux*, *CI/CD*).
- **Interactive DevOps CLI (`~ devops-cli`)**: Built-in interactive terminal drawer supporting commands (`help`, `whoami`, `cat about`, `skills`, `projects`, `uname -a`, `uptime`, `systemctl status sentinelops`, `contact`, `resume`).
- **Interactive Animated Video Demonstrations Engine**:
  - **Java DevOps Enterprise CI/CD Platform**: Step-by-step pipeline walkthrough with Maven, SonarQube gates, Trivy scans, multi-stage Docker builds, and Helm deployment to Amazon EKS.
  - **AWS Cost Optimization Automation (FinOps)**: Automated EBS snapshot cleanup via EventBridge, Python/Boto3 Lambda, and CloudWatch audits.
  - **TerraVoyage Platform**: Multi-service architecture with Spring Boot 3 API, React 19, Python FastAPI, PostgreSQL, and Docker Compose.
- **Interactive System Topology Diagram Viewer**: Clickable architectural nodes and telemetry flows for flagship engineering platforms.
- **Verified Resume Modal & Download**: Direct download and in-browser PDF preview of `Gaurav_Khaladkar_Resume.pdf`.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Instant fuzzy search across all sections, skills, and projects.
- **Live Pune Clock & Status**: Real-time IST clock and active system health indicators.
- **Functional Contact Form**: Client-side validation with celebration confetti on message delivery.

---

## 🛠️ Technical Stack

- **Frontend Core**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism
- **Icons**: Lucide React
- **Animations**: Framer Motion + HTML5 Canvas
- **Deployments Configured**: Google Firebase Hosting (`firebase.json`), Vercel (`vercel.json`)

---

## 📂 Repository Structure

```
gaurav-portfolio/
├── public/
│   ├── resume/
│   │   └── Gaurav_Khaladkar_Resume.pdf  # Exact verified 2-page resume
│   └── projects/                        # SVG architecture diagrams & mockups
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Glassmorphic header with live Pune clock
│   │   ├── Hero.tsx                     # 3D canvas constellation & typing headline
│   │   ├── About.tsx                    # Professional statement & Neofetch spec widget
│   │   ├── Experience.tsx               # Matfly Solutions & GTL Software timeline
│   │   ├── Skills.tsx                   # 7 categorized skill sets with search filter
│   │   ├── Projects.tsx                 # Flagship platforms & architecture modal
│   │   ├── ArchitectureModal.tsx        # System topology node diagram viewer
│   │   ├── VideoGallery.tsx             # Video demonstrations gallery
│   │   ├── ProjectAnimatedVideoPlayer.tsx # Interactive video simulation engine
│   │   ├── VideoModal.tsx               # Dual-mode modal (Animated & YouTube)
│   │   ├── Certifications.tsx           # Oracle Agentic AI verified badge
│   │   ├── Education.tsx                # M.C.S. & B.C.S. from Pune University
│   │   ├── GitHubActivity.tsx           # Live commit heatmap & pinned repos
│   │   ├── ResumeSection.tsx            # PDF download section
│   │   ├── ResumeModal.tsx              # In-browser PDF preview modal
│   │   ├── TerminalDrawer.tsx           # Interactive DevOps CLI shell
│   │   ├── CommandPalette.tsx           # Cmd+K quick navigation search
│   │   ├── Contact.tsx                  # Contact form with confetti trigger
│   │   └── Footer.tsx                   # Status indicator & quick links
│   ├── data/
│   │   ├── portfolioData.ts             # Central typed source of truth
│   │   └── videoStoryboards.ts          # Step-by-step video simulation data
│   ├── App.tsx                          # App orchestrator
│   └── index.css                        # Cyber styles, glass panels & theme variables
├── firebase.json                        # Google Firebase Hosting configuration
├── vercel.json                          # Vercel deployment configuration
└── vite.config.ts                       # Vite build configuration
```

---

## 🚀 Running Locally

```bash
# 1. Clone repository
git clone https://github.com/Gaurav-Khaladkar/gaurav-portfolio.git
cd gaurav-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📄 License

MIT © [Gaurav Khaladkar](https://github.com/Gaurav-Khaladkar)
