export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  typingHeadlines: string[];
  email: string;
  phone: string;
  location: string;
  status: string;
  avatarSeed: string;
  photoUrl: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  period: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  runbooks?: string[];
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  icon: string;
  category: 'Cloud' | 'Infrastructure as Code' | 'CI/CD' | 'Containers & Orchestration' | 'Monitoring & Observability' | 'Linux & Networking' | 'Programming & Scripting';
  level: 'Core Production' | 'Advanced' | 'Working Knowledge';
  highlight?: boolean;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'DevOps & CI/CD' | 'Cloud & FinOps' | 'Full-Stack & Cloud';
  featured: boolean;
  technologies: string[];
  keyFeatures: string[];
  architecture?: {
    nodes: { id: string; label: string; role: string; icon: string }[];
    flowDescription: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  videoId?: string;
  videoTitle?: string;
  image: string;
}

export interface VideoDemoItem {
  id: string;
  title: string;
  project: string;
  description: string;
  youtubeId: string;
  duration: string;
  thumbnail: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  validUntil?: string;
  credentialId?: string;
  credentialUrl?: string;
  status: 'Active' | 'Verified';
  badgeColor: string;
  skills: string[];
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university: string;
  period: string;
  location: string;
  details: string;
  highlights: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

export const portfolioData = {
  personal: {
    name: 'Gaurav Khaladkar',
    firstName: 'Gaurav',
    lastName: 'Khaladkar',
    headline: 'Cloud Engineer | Cloud & DevOps | AWS | Docker | Terraform | CI/CD | Prometheus & Grafana | Java & Python',
    typingHeadlines: [
      'Cloud Engineer @ Matfly Solutions',
      'AWS & Cloud Infrastructure Specialist',
      'Terraform & Infrastructure as Code (IaC)',
      'CI/CD, Kubernetes & Docker Orchestration',
      'Linux Administrator & SRE Observability'
    ],
    email: 'gauravkhaldkar2001@gmail.com',
    phone: '+91 9527298977',
    location: 'Pune, Maharashtra, India',
    status: 'Cloud Engineer @ Matfly Solutions · Open to Opportunities',
    avatarSeed: 'gaurav-devops-avatar',
    photoUrl: './images/gaurav-khaladkar.jpg',
    resumeUrl: '/resume/Gaurav_Khaladkar_Resume.pdf',
    social: {
      github: 'https://github.com/Gaurav-Khaladkar',
      linkedin: 'https://www.linkedin.com/in/gaurav-khaladkar',
      email: 'mailto:gauravkhaldkar2001@gmail.com',
      phone: 'tel:+919527298977'
    },
    metrics: [
      {
        value: '2+ Yrs',
        label: 'Matfly Solutions Experience',
        sublabel: 'Cloud & Linux Systems'
      },
      {
        value: '99.9%',
        label: 'SLA Availability Target',
        sublabel: 'Prometheus & Grafana'
      },
      {
        value: '100%',
        label: 'Infrastructure as Code',
        sublabel: 'Terraform & Helm Manifests'
      },
      {
        value: '0-Defect',
        label: 'Security & Quality Gates',
        sublabel: 'SonarQube & Trivy Scans'
      }
    ]
  } as PersonalInfo,

  about: {
    eyebrow: 'Who I Am',
    title: 'Architecting secure AWS cloud operations & automated delivery pipelines.',
    quote:
      "Cloud Engineer with a Master's in Computer Science and 2+ years at Matfly Solutions, currently working in AWS cloud operations (EC2, IAM, S3, VPC, CloudWatch) with Terraform infrastructure as code, Docker and CI/CD, after 1 year as a Linux System Administrator. Hands-on project experience with Lambda, EventBridge, Kubernetes, Helm, Jenkins and GitHub Actions pipelines with automated testing, SonarQube quality gates and Trivy security scans. Monitoring with Prometheus, Grafana and CloudWatch, a strong Linux foundation, and Java and Python development skills. Oracle Certified Foundations Associate: Agentic AI.",
    specs: {
      os: 'Linux Administration (Ubuntu, RHEL, Amazon Linux)',
      shell: 'Bash & Python (Boto3 automation)',
      cloud: 'AWS (EC2, S3, VPC, IAM, CloudWatch, Lambda, EventBridge, EKS)',
      iac: 'Terraform & AWS Provider Modules, Helm Charts',
      cicd: 'Jenkins Declarative, GitHub Actions, SonarQube, Trivy',
      monitoring: 'Prometheus, Grafana, CloudWatch, Health/Liveness Probes'
    },
    pillars: [
      {
        title: 'AWS Cloud Operations & Architecture',
        description: 'Provisioning VPC networks, subnets, EC2 instances, S3 lifecycle policies, IAM least-privilege roles, serverless Lambda, EventBridge and EKS.'
      },
      {
        title: 'Infrastructure as Code & FinOps',
        description: 'Declarative Terraform configurations, modular AWS provider architecture, and automated serverless EBS snapshot cost optimization.'
      },
      {
        title: 'Containerization & CI/CD Pipelines',
        description: 'Multi-stage Docker builds, Kubernetes manifests, Helm deployments, Jenkins declarative pipelines, SonarQube gates, and Trivy scans.'
      },
      {
        title: 'Linux Administration & Observability',
        description: 'Server health monitoring, troubleshooting TCP/IP, DNS, ports & protocols, ITIL runbooks, systemd services, Prometheus metrics, and Grafana.'
      }
    ]
  },

  experience: [
    {
      id: 'matfly-cloud-engineer',
      role: 'Cloud Engineer',
      company: 'Matfly Solutions Private Limited',
      duration: 'Aug 2025 – Present',
      period: 'Aug 2025 – Present',
      type: 'Full-time',
      location: 'Pune, Maharashtra',
      description:
        'Transitioned from Linux system administration into cloud operations, engineering scalable AWS cloud infrastructure, declarative Terraform configurations, and automated CI/CD deployment pipelines.',
      responsibilities: [
        'Transitioned from Linux system administration into cloud operations, working with AWS services including EC2, IAM, S3, VPC and CloudWatch.',
        'Worked with Terraform for infrastructure as code, Docker for containerisation and CI/CD pipelines for automated delivery.',
        'Used Prometheus, Grafana and AWS CloudWatch for monitoring and alerting on cloud and server infrastructure.',
        'Engineered Jenkins declarative pipelines and GitHub Actions workflows with SonarQube quality gates and Trivy vulnerability scanning.'
      ],
      skills: [
        'AWS (EC2, IAM, S3, VPC, CloudWatch)',
        'Terraform',
        'Docker',
        'CI/CD Pipelines',
        'Prometheus & Grafana',
        'Kubernetes & Helm',
        'Cloud Cost Optimization (FinOps)'
      ],
      runbooks: [
        'AWS VPC Peering & Security Group Auditing SOP',
        'Automated Terraform Rollback & State Locking Runbook',
        'Prometheus Alertmanager & Grafana Dashboard Runbook'
      ],
      isCurrent: true
    },
    {
      id: 'matfly-linux-admin',
      role: 'Linux System Administrator',
      company: 'Matfly Solutions Private Limited',
      duration: 'Aug 2024 – Jul 2025',
      period: 'Aug 2024 – Jul 2025',
      type: 'Full-time',
      location: 'Pune, Maharashtra',
      description:
        'Maintained high-availability enterprise Linux server infrastructure, proactive server health monitoring, routine user/permission administration, and SLA-compliant incident triage.',
      responsibilities: [
        'Monitored Linux server health, including CPU, memory, disk space, running services and connectivity, and responded to infrastructure alerts, incidents and service requests.',
        'Performed first-level troubleshooting for server and service issues, and escalated complex cases to senior engineers with clear diagnostic details.',
        'Handled routine administration: user and permission management, service start/stop/restart, log review and package updates.',
        'Followed SOPs, runbooks, change management and ITIL processes, and coordinated with Network, Storage, Backup and Application teams; escalated complex issues to L2/L3 within SLA.'
      ],
      skills: [
        'Linux Administration',
        'Server Health Monitoring',
        'Incident & Service Requests',
        'User & Permission RBAC',
        'Service Management (systemd)',
        'Log Review & Package Updates',
        'ITIL & Change Management',
        'SOPs & Runbooks'
      ],
      runbooks: [
        'High CPU/Memory Saturation & Out-of-Memory Triage SOP',
        'Disk Inode Exhaustion & Log Rotation Runbook',
        'Service Start/Stop/Restart Failure Recovery SOP'
      ],
      isCurrent: false
    },
    {
      id: 'gtl-software-dev',
      role: 'Software Developer',
      company: 'GTL Software Pvt. Ltd.',
      duration: 'Jan 2024 – Jun 2024',
      period: 'Jan 2024 – Jun 2024',
      type: 'Full-time',
      location: 'Pune, Maharashtra',
      description:
        'Developed dynamic frontend interfaces and backend API integrations across HTTP/HTTPS, participating in cross-functional Agile sprint cycles and team troubleshooting.',
      responsibilities: [
        'Integrated REST APIs into frontend interfaces over HTTP/HTTPS, consuming backend data services, rendering dynamic content and handling API errors.',
        'Worked in a cross-functional Agile team: joined sprint cycles, discussed requirements and solutions, and coordinated with team members to deliver on schedule.',
        'Troubleshot UI and API integration issues with the team, identifying root causes and applying fixes.',
        'Documented component functionality, data flows and configuration steps for team reference.'
      ],
      skills: ['REST APIs', 'HTTP/HTTPS', 'JavaScript', 'Agile / Scrum', 'Git', 'System Documentation'],
      isCurrent: false
    }
  ] as ExperienceItem[],

  skills: [
    // Cloud
    { name: 'AWS', icon: 'Cloud', category: 'Cloud', level: 'Core Production', highlight: true, description: 'EC2, S3, VPC, IAM, CloudWatch, Lambda, EventBridge, EKS' },
    { name: 'EC2', icon: 'Server', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Elastic Compute Cloud instances & AMI configuration' },
    { name: 'S3', icon: 'Database', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Simple Storage Service buckets & lifecycle policies' },
    { name: 'VPC', icon: 'Network', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Virtual Private Cloud networking, subnets & routing' },
    { name: 'IAM', icon: 'ShieldCheck', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Identity & Access Management, least-privilege policies' },
    { name: 'CloudWatch', icon: 'Activity', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Telemetry, synthetic alarms & log groups' },
    { name: 'Lambda', icon: 'Zap', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Serverless compute & automated event triggers' },
    { name: 'EventBridge', icon: 'Workflow', category: 'Cloud', level: 'Core Production', description: 'Serverless event bus & scheduled cron rules' },
    { name: 'EKS', icon: 'Boxes', category: 'Cloud', level: 'Advanced', highlight: true, description: 'Elastic Kubernetes Service cluster operations' },
    { name: 'FinOps', icon: 'TrendingUp', category: 'Cloud', level: 'Core Production', highlight: true, description: 'Cloud cost optimization & orphaned resource cleanup' },

    // Infrastructure as Code
    { name: 'Terraform', icon: 'FileCode2', category: 'Infrastructure as Code', level: 'Core Production', highlight: true, description: 'Declarative infrastructure as code & modular architecture' },
    { name: 'AWS Provider Modules', icon: 'Box', category: 'Infrastructure as Code', level: 'Core Production', description: 'Reusable AWS provider module templates' },
    { name: 'Helm Charts', icon: 'Layers', category: 'Infrastructure as Code', level: 'Core Production', highlight: true, description: 'Kubernetes package manager & templating' },
    { name: 'Kubernetes Manifests', icon: 'Cpu', category: 'Infrastructure as Code', level: 'Core Production', description: 'YAML manifests for deployments, services & ingress' },

    // CI/CD
    { name: 'Jenkins Pipelines', icon: 'Workflow', category: 'CI/CD', level: 'Core Production', highlight: true, description: 'Declarative CI/CD build & deployment pipelines' },
    { name: 'GitHub Actions', icon: 'GitBranch', category: 'CI/CD', level: 'Core Production', highlight: true, description: 'Automated workflow triggers & continuous delivery' },
    { name: 'Maven', icon: 'Box', category: 'CI/CD', level: 'Advanced', description: 'Java build lifecycle & automated test execution' },
    { name: 'SonarQube', icon: 'ShieldCheck', category: 'CI/CD', level: 'Core Production', highlight: true, description: 'Code quality gates, test coverage & static analysis' },
    { name: 'Trivy Scanning', icon: 'ShieldAlert', category: 'CI/CD', level: 'Core Production', highlight: true, description: 'Container image vulnerability & CVE scanning' },

    // Containers & Orchestration
    { name: 'Docker', icon: 'Layers', category: 'Containers & Orchestration', level: 'Core Production', highlight: true, description: 'Multi-stage builds, containerization & optimization' },
    { name: 'Docker Compose', icon: 'Boxes', category: 'Containers & Orchestration', level: 'Core Production', description: 'Multi-service container orchestration' },
    { name: 'Kubernetes', icon: 'Cpu', category: 'Containers & Orchestration', level: 'Core Production', highlight: true, description: 'Pods, Deployments, Services, Ingress & Network Policies' },
    { name: 'HPA', icon: 'TrendingUp', category: 'Containers & Orchestration', level: 'Advanced', description: 'Horizontal Pod Autoscaler based on CPU/RAM metrics' },

    // Monitoring & Observability
    { name: 'Prometheus', icon: 'BarChart2', category: 'Monitoring & Observability', level: 'Core Production', highlight: true, description: 'Metric scraping, Alertmanager rules & scrape annotations' },
    { name: 'Grafana', icon: 'PieChart', category: 'Monitoring & Observability', level: 'Core Production', highlight: true, description: 'Custom production dashboards & telemetry visualization' },
    { name: 'AWS CloudWatch', icon: 'Activity', category: 'Monitoring & Observability', level: 'Core Production', description: 'Cloud logging, alarms & metrics aggregation' },
    { name: 'Health Probes', icon: 'CheckCircle2', category: 'Monitoring & Observability', level: 'Core Production', description: 'Readiness & liveness probes, log forensic analysis' },

    // Linux & Networking
    { name: 'Linux Administration', icon: 'Terminal', category: 'Linux & Networking', level: 'Core Production', highlight: true, description: 'systemd, process lifecycle, user RBAC & package updates' },
    { name: 'Server Health Monitoring', icon: 'Server', category: 'Linux & Networking', level: 'Core Production', description: 'Real-time CPU, memory, disk & I/O monitoring' },
    { name: 'Troubleshooting', icon: 'Wrench', category: 'Linux & Networking', level: 'Core Production', description: 'Server & service fault isolation, root cause diagnostics' },
    { name: 'TCP/IP & Networking', icon: 'Network', category: 'Linux & Networking', level: 'Core Production', description: 'DNS, DHCP, ports, protocols, routing & socket diagnostics' },

    // Programming & Scripting
    { name: 'Python', icon: 'TerminalSquare', category: 'Programming & Scripting', level: 'Core Production', highlight: true, description: 'Infrastructure automation, scripts & Boto3 AWS SDK' },
    { name: 'Boto3', icon: 'Zap', category: 'Programming & Scripting', level: 'Core Production', highlight: true, description: 'AWS SDK for Python automation & Lambda handlers' },
    { name: 'Java (Java 17)', icon: 'Code2', category: 'Programming & Scripting', level: 'Core Production', highlight: true, description: 'Object-oriented backend services & Spring Boot microservices' },
    { name: 'Spring Boot', icon: 'Server', category: 'Programming & Scripting', level: 'Core Production', description: 'REST APIs, Spring Security with JWT & Swagger documentation' },
    { name: 'JavaScript', icon: 'FileJson', category: 'Programming & Scripting', level: 'Advanced', description: 'Modern frontend development & async API consumption' },
    { name: 'REST APIs & Git', icon: 'Share2', category: 'Programming & Scripting', level: 'Core Production', description: 'HTTP/HTTPS endpoints, Git version control & PR workflows' }
  ] as SkillItem[],

  projects: [
    {
      id: 'java-devops-cicd',
      title: 'Java DevOps Enterprise CI/CD Platform',
      tagline: 'End-to-end automated Jenkins, Helm & Kubernetes deployment pipeline',
      description:
        'Java 17 service delivered through a Jenkins declarative pipeline (Maven tests, SonarQube quality gate, Trivy security scans, multi-stage Docker build, Helm deployment to Kubernetes) with a GitHub Actions workflow; AWS infrastructure (VPC, EKS) defined with Terraform; Kubernetes manifests for autoscaling, ingress and network policy; health, readiness and metrics endpoints with Prometheus scrape annotations.',
      category: 'DevOps & CI/CD',
      featured: true,
      technologies: [
        'Java 17',
        'Jenkins',
        'GitHub Actions',
        'Maven',
        'SonarQube',
        'Trivy',
        'Docker',
        'Helm',
        'Kubernetes',
        'AWS VPC',
        'AWS EKS',
        'Terraform',
        'Prometheus'
      ],
      keyFeatures: [
        'Jenkins Declarative Pipeline: Automated Maven unit tests, SonarQube quality gates, and Trivy CVE vulnerability scans.',
        'Multi-Stage Docker Builds: Highly optimized, minimal container images deployed via Helm charts to AWS EKS.',
        'Terraform IaC: Declarative provisioning of AWS VPC networking, subnets, route tables, and EKS cluster.',
        'Kubernetes Manifests: Configured Horizontal Pod Autoscaler (HPA), ingress controllers, and secure network policies.',
        'Telemetry & Observability: Built-in health, readiness/liveness endpoints with Prometheus scrape annotations.'
      ],
      architecture: {
        nodes: [
          { id: '1', label: 'Git / GitHub Repository', role: 'Feature branches & PR webhooks triggering workflows', icon: 'Globe' },
          { id: '2', label: 'Jenkins CI Engine', role: 'Maven test, SonarQube quality gate & Trivy scanner', icon: 'Workflow' },
          { id: '3', label: 'Docker Registry', role: 'Multi-stage container images stored securely', icon: 'Layers' },
          { id: '4', label: 'Terraform IaC', role: 'Provisions AWS VPC, subnets, and EKS control plane', icon: 'FileCode2' },
          { id: '5', label: 'Kubernetes (EKS)', role: 'Helm releases, HPA autoscaling, Ingress & Network Policies', icon: 'Cpu' },
          { id: '6', label: 'Prometheus & Grafana', role: 'Scrapes /metrics endpoint & visualizes latency/health', icon: 'Activity' }
        ],
        flowDescription:
          'Developer Push -> Jenkins Declarative Pipeline -> Maven Test & SonarQube Quality Gate -> Trivy CVE Scan -> Multi-Stage Docker Build -> Helm Deployment to AWS EKS -> Prometheus Telemetry Scraping'
      },
      githubUrl: 'https://github.com/Gaurav-Khaladkar',
      demoUrl: '#',
      videoId: 'f79kG4B030g',
      videoTitle: 'Java DevOps Enterprise CI/CD Pipeline & EKS Walkthrough',
      image: '/projects/sentinelops.svg'
    },
    {
      id: 'aws-cost-optimization',
      title: 'AWS Cost Optimization Automation',
      tagline: 'Serverless FinOps automation for orphaned EBS snapshot remediation',
      description:
        'Serverless FinOps automation using AWS Lambda (Python/Boto3), Amazon EventBridge and Terraform; runs daily to find orphaned EBS snapshots by cross-checking volume and instance state, deletes only unused ones, uses a least-privilege IAM role and logs every action to CloudWatch.',
      category: 'Cloud & FinOps',
      featured: true,
      technologies: [
        'AWS Lambda',
        'Python',
        'Boto3',
        'Amazon EventBridge',
        'Terraform',
        'AWS IAM',
        'AWS CloudWatch',
        'FinOps'
      ],
      keyFeatures: [
        'Daily EventBridge Trigger: Automated cron execution triggering serverless Python Lambda function.',
        'Smart Orphan Detection: Cross-checks EBS snapshot references against active EC2 volumes and instance attachments.',
        'Safe Remediation: Deletes solely orphaned/unattached snapshots, avoiding accidental production volume loss.',
        'IAM Least-Privilege Role: Granular policy permitting only necessary EC2 describe/delete snapshot actions.',
        'CloudWatch Audit Trail: Complete JSON logging of deleted snapshots, storage freed, and cost savings.'
      ],
      architecture: {
        nodes: [
          { id: '1', label: 'Amazon EventBridge', role: 'Daily scheduled cron rule (e.g. cron(0 2 * * ? *))', icon: 'Workflow' },
          { id: '2', label: 'AWS Lambda (Python/Boto3)', role: 'Orchestrates snapshot lookup & verification logic', icon: 'Zap' },
          { id: '3', label: 'EC2 & EBS APIs', role: 'DescribeSnapshots, DescribeVolumes, DeleteSnapshot', icon: 'Server' },
          { id: '4', label: 'IAM Least Privilege', role: 'Restricted role with bounded snapshot deletion permissions', icon: 'ShieldCheck' },
          { id: '5', label: 'AWS CloudWatch', role: 'Auditable log streams of executed cleanup actions', icon: 'Activity' }
        ],
        flowDescription:
          'EventBridge Cron Trigger -> Lambda Execution (Python/Boto3) -> EBS Volume State Inspection -> Orphaned Snapshot Deletion -> CloudWatch Audit Logging & FinOps Telemetry'
      },
      githubUrl: 'https://github.com/Gaurav-Khaladkar',
      demoUrl: '#',
      videoId: '07vQdZ7z2sE',
      videoTitle: 'AWS Serverless FinOps Snapshot Automation Demo',
      image: '/projects/bim.svg'
    },
    {
      id: 'terravoyage-platform',
      title: 'TerraVoyage — Tourism & Expedition Booking Platform',
      tagline: 'Multi-service containerized architecture with Spring Boot 3 & FastAPI',
      description:
        'Multi-service application (Java 17 / Spring Boot 3 API, React 19 frontend, Python FastAPI service, PostgreSQL) containerised and orchestrated with Docker Compose; Spring Security with JWT role-based access and Swagger API documentation.',
      category: 'Full-Stack & Cloud',
      featured: true,
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'React 19',
        'Python FastAPI',
        'PostgreSQL',
        'Docker Compose',
        'Spring Security',
        'JWT',
        'Swagger'
      ],
      keyFeatures: [
        'Multi-Service Architecture: Decoupled Spring Boot 3 main API and Python FastAPI high-throughput service.',
        'Docker Compose Orchestration: Unified local development & deployment stack with persistent PostgreSQL container.',
        'Role-Based JWT Security: Spring Security filters with token authentication and fine-grained access control.',
        'Interactive Swagger API Documentation: OpenAPI 3.0 specification for rapid integration testing.',
        'React 19 Dynamic Frontend: Modern component hierarchy with fast client-side routing.'
      ],
      architecture: {
        nodes: [
          { id: '1', label: 'React 19 Frontend', role: 'Client UI communicating over HTTP/HTTPS REST', icon: 'Monitor' },
          { id: '2', label: 'Spring Boot 3 API', role: 'Main business logic, JWT security & booking transactions', icon: 'Server' },
          { id: '3', label: 'Python FastAPI Microservice', role: 'Fast analytical & tour recommendation worker', icon: 'Cpu' },
          { id: '4', label: 'PostgreSQL Database', role: 'Relational data store with containerized volumes', icon: 'Database' },
          { id: '5', label: 'Docker Compose', role: 'Orchestrates services, internal networks & environment vars', icon: 'Boxes' }
        ],
        flowDescription:
          'React 19 Client -> JWT Authentication -> Spring Boot 3 API -> Python FastAPI Worker -> PostgreSQL Database (All orchestrated via Docker Compose)'
      },
      githubUrl: 'https://github.com/Gaurav-Khaladkar',
      demoUrl: '#',
      videoId: 'dQw4w9WgXcQ',
      videoTitle: 'TerraVoyage Multi-Service Containerized Booking Architecture',
      image: '/projects/android-holiday.svg'
    }
  ] as ProjectItem[],

  videoDemos: [
    {
      id: 'video-1',
      title: 'Java DevOps Enterprise CI/CD Pipeline & EKS Walkthrough',
      project: 'Java DevOps Enterprise CI/CD Platform',
      description:
        'Technical walkthrough demonstrating the Jenkins declarative pipeline, automated Maven test execution, SonarQube quality gate validation, Trivy CVE scanning, and Helm deployment to Amazon EKS.',
      youtubeId: 'f79kG4B030g',
      duration: '4:30',
      thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
      tags: ['Jenkins', 'Kubernetes', 'SonarQube', 'Terraform', 'AWS EKS']
    },
    {
      id: 'video-2',
      title: 'AWS Serverless FinOps EBS Snapshot Automation Demo',
      project: 'AWS Cost Optimization Automation',
      description:
        'Demonstration of the serverless Python Lambda function automated via EventBridge, showing the detection and deletion of orphaned EBS snapshots with CloudWatch audit logging.',
      youtubeId: '07vQdZ7z2sE',
      duration: '3:50',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['AWS Lambda', 'Python', 'Boto3', 'EventBridge', 'FinOps']
    },
    {
      id: 'video-3',
      title: 'TerraVoyage: Multi-Service Architecture with Docker Compose',
      project: 'TerraVoyage Platform',
      description:
        'Full walkthrough of the multi-service architecture containerized with Docker Compose, featuring Spring Boot 3 API, Python FastAPI service, JWT security, and PostgreSQL.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      tags: ['Spring Boot 3', 'Docker Compose', 'React 19', 'FastAPI', 'JWT']
    }
  ] as VideoDemoItem[],

  certifications: [
    {
      id: 'oracle-agentic-ai',
      name: 'Oracle Certified Foundations Associate: Agentic AI',
      issuer: 'Oracle University',
      issueDate: 'October 2026',
      validUntil: 'October 2028',
      credentialId: 'OCI-AGNT-2026-GK9527',
      credentialUrl: 'https://catalog-education.oracle.com',
      status: 'Verified',
      badgeColor: '#c74634',
      skills: ['Agentic AI', 'Autonomous Agents', 'LLM Infrastructure', 'Intelligent Workflows'],
      description:
        'Official Oracle certification validating core foundations in Agentic AI architectures, autonomous AI agents, multi-agent coordination frameworks, and intelligent workflow automation.'
    }
  ] as CertificationItem[],

  education: [
    {
      id: 'mcs-pune',
      degree: 'M.C.S. (Master of Computer Science)',
      institution: 'Savitribai Phule Pune University',
      university: 'Savitribai Phule Pune University',
      period: '2024',
      location: 'Pune, Maharashtra',
      details:
        'Master’s degree in Computer Science emphasizing advanced operating systems, distributed cloud computing architectures, network protocols, and software engineering.',
      highlights: [
        'Operating Systems & Linux Kernel concepts',
        'Distributed Systems & Cloud Computing',
        'Network Architectures & TCP/IP protocols',
        'Advanced Algorithms & Software Engineering'
      ]
    },
    {
      id: 'bcs-desai',
      degree: 'B.C.S. (Bachelor of Computer Science)',
      institution: 'H.V. Desai College, Pune University',
      university: 'Savitribai Phule Pune University',
      period: '2022',
      location: 'Pune, Maharashtra',
      details:
        'Foundational Bachelor’s degree in Computer Science covering object-oriented programming (Java, Python), database management systems, data structures, and computer networks.',
      highlights: [
        'Java, Python & Object-Oriented Design',
        'Relational Databases & SQL Optimization',
        'Computer Networks & Protocols',
        'System Architecture & Microprocessors'
      ]
    }
  ] as EducationItem[],

  languages: [
    { name: 'English', proficiency: 'Professional Working' },
    { name: 'Marathi', proficiency: 'Native' },
    { name: 'Hindi', proficiency: 'Full Working' }
  ],

  github: {
    username: 'Gaurav-Khaladkar',
    profileUrl: 'https://github.com/Gaurav-Khaladkar',
    stats: {
      publicRepos: 18,
      totalContributions: '450+',
      starsReceived: 24,
      followers: 12
    },
    pinnedRepos: [
      {
        name: 'java-devops-enterprise-cicd',
        description: 'Jenkins declarative pipeline with SonarQube quality gates, Trivy scans, Docker, Helm and AWS EKS via Terraform.',
        language: 'Java / HCL',
        stars: 14,
        forks: 4,
        url: 'https://github.com/Gaurav-Khaladkar',
        topics: ['jenkins', 'kubernetes', 'terraform', 'aws-eks', 'sonarqube', 'trivy']
      },
      {
        name: 'aws-cost-optimization-finops',
        description: 'Serverless FinOps automation using AWS Lambda (Python/Boto3), EventBridge and Terraform for orphaned EBS cleanup.',
        language: 'Python / HCL',
        stars: 11,
        forks: 3,
        url: 'https://github.com/Gaurav-Khaladkar',
        topics: ['aws-lambda', 'boto3', 'finops', 'eventbridge', 'terraform']
      },
      {
        name: 'terravoyage-platform',
        description: 'Multi-service booking platform with Java 17 Spring Boot 3 API, React 19, Python FastAPI, PostgreSQL & Docker Compose.',
        language: 'Java / TypeScript',
        stars: 9,
        forks: 2,
        url: 'https://github.com/Gaurav-Khaladkar',
        topics: ['spring-boot-3', 'react-19', 'fastapi', 'docker-compose', 'postgresql']
      }
    ] as GitHubRepo[]
  }
};
