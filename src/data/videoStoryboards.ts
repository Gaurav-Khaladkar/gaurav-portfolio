export interface VideoScene {
  id: number;
  title: string;
  duration: number; // in seconds
  narration: string;
  badge: string;
  terminalLogs: string[];
  metrics: { label: string; value: string; color: string }[];
  activeNodes: string[];
}

export interface ProjectVideoStoryboard {
  id: string;
  projectTitle: string;
  tagline: string;
  totalDuration: number; // in seconds
  scenes: VideoScene[];
}

export const videoStoryboards: Record<string, ProjectVideoStoryboard> = {
  'video-1': {
    id: 'video-1',
    projectTitle: 'Java DevOps Enterprise CI/CD Platform',
    tagline: 'Automated Jenkins, SonarQube, Trivy, Docker & EKS Helm Deployment',
    totalDuration: 90,
    scenes: [
      {
        id: 1,
        title: 'Phase 1: Architecture Blueprint & Source Control',
        duration: 20,
        narration:
          'Welcome to the Java DevOps Enterprise CI/CD Platform demonstration. Java 17 microservices are managed in Git and built automatically across AWS VPC and EKS infrastructure provisioned using modular Terraform.',
        badge: 'Infrastructure as Code',
        terminalLogs: [
          '[INFO] Initializing Git Webhook for branch main...',
          '[INFO] Terraform apply -auto-approve (vpc, subnets, eks_cluster)',
          '[SUCCESS] AWS EKS cluster "prod-eks-cluster" state active.',
          '[INFO] Triggering Jenkins Declarative Pipeline build #142...'
        ],
        metrics: [
          { label: 'Cloud Provider', value: 'AWS (ap-south-1)', color: 'text-amber-400' },
          { label: 'Cluster', value: 'Amazon EKS 1.29', color: 'text-cyan-400' },
          { label: 'IaC Engine', value: 'Terraform v1.8+', color: 'text-purple-400' }
        ],
        activeNodes: ['Git Repository', 'Terraform IaC', 'AWS EKS']
      },
      {
        id: 2,
        title: 'Phase 2: CI Pipeline, SonarQube & Trivy Security Scans',
        duration: 25,
        narration:
          'The Jenkins pipeline compiles Java 17 with Maven, executes automated unit tests, and enforces SonarQube quality gates. Next, Trivy scans the multi-stage Docker container for vulnerabilities.',
        badge: 'Continuous Integration & Security',
        terminalLogs: [
          '[STAGE: Maven Test] Running 48 JUnit 5 test cases... All Passed (0 failures)',
          '[STAGE: SonarQube] Quality Gate Status: PASSED (Bugs: 0, Vulnerabilities: 0, Coverage: 88.4%)',
          '[STAGE: Docker Build] Multi-stage build starting: eclipse-temurin:17-jdk-alpine',
          '[STAGE: Trivy Scan] Scanning image java-app:1.4.2 for CVEs... 0 CRITICAL, 0 HIGH found.',
          '[SUCCESS] Container image published to secure registry (Size: 148MB)'
        ],
        metrics: [
          { label: 'Tests Passing', value: '48 / 48 (100%)', color: 'text-emerald-400' },
          { label: 'SonarQube Gate', value: 'PASSED (0 Bugs)', color: 'text-cyan-400' },
          { label: 'Trivy CVEs', value: '0 High / 0 Critical', color: 'text-emerald-400' }
        ],
        activeNodes: ['Jenkins CI', 'SonarQube', 'Trivy Scanner', 'Docker Registry']
      },
      {
        id: 3,
        title: 'Phase 3: Helm Chart Packaging & EKS Deployment',
        duration: 25,
        narration:
          'Helm packages Kubernetes manifests including Ingress, NetworkPolicies, and Horizontal Pod Autoscaler. Rolling updates deploy zero-downtime replica sets into the production EKS namespace.',
        badge: 'Kubernetes Orchestration',
        terminalLogs: [
          '[STAGE: Helm Deploy] Executing helm upgrade --install enterprise-app ./helm-chart',
          '[K8S] Creating Deployment "enterprise-app-deploy" with 3 replicas...',
          '[K8S] Configuring Horizontal Pod Autoscaler: minReplicas=3, maxReplicas=10, targetCPU=70%',
          '[K8S] Ingress routes mapped: api.devops-enterprise.com -> Service port 8080',
          '[SUCCESS] Rolling update complete. All 3 pods ready and responding.'
        ],
        metrics: [
          { label: 'Active Pods', value: '3 Replicas (Healthy)', color: 'text-emerald-400' },
          { label: 'Autoscaler (HPA)', value: 'Active (Max 10)', color: 'text-purple-400' },
          { label: 'Ingress SLA', value: 'Zero-Downtime', color: 'text-cyan-400' }
        ],
        activeNodes: ['Helm Charts', 'AWS EKS', 'Ingress & NetworkPolicy']
      },
      {
        id: 4,
        title: 'Phase 4: Prometheus & Grafana Observability',
        duration: 20,
        narration:
          'Prometheus automatically scrapes the Spring Boot actuator metrics endpoint. Production Grafana dashboards display p99 request latency, CPU/memory saturation, and live service health.',
        badge: 'Telemetry & Observability',
        terminalLogs: [
          '[PROMETHEUS] Discovered target: pod/enterprise-app-798dfb9f48-x8k2l:8080/actuator/prometheus',
          '[METRICS] HTTP Request Rate: 420 req/sec | p99 Latency: 28ms | Error Rate: 0.00%',
          '[GRAFANA] Dashboards updated: JVM Heap Usage 42%, CPU 18%, Garbage Collection Healthy',
          '[ALERTMANAGER] Status: Green. Zero active alerts or SLA violations.'
        ],
        metrics: [
          { label: 'p99 Latency', value: '28 ms', color: 'text-cyan-400' },
          { label: 'Service Health', value: '100% Operational', color: 'text-emerald-400' },
          { label: 'Scrape Status', value: 'Prometheus Green', color: 'text-amber-400' }
        ],
        activeNodes: ['AWS EKS', 'Prometheus', 'Grafana Dashboard']
      }
    ]
  },

  'video-2': {
    id: 'video-2',
    projectTitle: 'AWS Cost Optimization Automation',
    tagline: 'Serverless FinOps Automation with AWS Lambda, EventBridge & Terraform',
    totalDuration: 85,
    scenes: [
      {
        id: 1,
        title: 'Phase 1: FinOps Architecture & EventBridge Trigger',
        duration: 20,
        narration:
          'This FinOps architecture automatically eliminates orphaned AWS EBS snapshots. Amazon EventBridge invokes an automated Python Lambda function daily under least-privilege IAM policies.',
        badge: 'Serverless FinOps',
        terminalLogs: [
          '[EVENTBRIDGE] Cron schedule triggered: cron(0 2 * * ? *) (2:00 AM UTC)',
          '[LAMBDA] Invoking handler: ebs_snapshot_cleaner.lambda_handler',
          '[IAM] Verifying assumed execution role: arn:aws:iam::account:role/EBSFinOpsCleanerRole',
          '[BOTO3] Initializing ec2 client connection for region ap-south-1...'
        ],
        metrics: [
          { label: 'Trigger', value: 'Amazon EventBridge', color: 'text-purple-400' },
          { label: 'Runtime', value: 'Python 3.12 (Boto3)', color: 'text-cyan-400' },
          { label: 'Security', value: 'IAM Least Privilege', color: 'text-emerald-400' }
        ],
        activeNodes: ['Amazon EventBridge', 'AWS Lambda', 'IAM Least Privilege']
      },
      {
        id: 2,
        title: 'Phase 2: Orphaned Snapshot Discovery & Volume State Audit',
        duration: 25,
        narration:
          'Boto3 queries all AWS EBS snapshots owned by the account. For each snapshot, the script inspects underlying volume attachments and verifies whether the corresponding EC2 volume or instance still exists.',
        badge: 'Orphan Detection Logic',
        terminalLogs: [
          '[BOTO3] Fetching snapshots: ec2.describe_snapshots(OwnerIds=["self"]) -> 64 snapshots found.',
          '[BOTO3] Querying active EBS volumes: ec2.describe_volumes() -> 18 active volumes.',
          '[AUDIT] Evaluating snapshot snap-0a81f38e: source volume vol-01a2b3 deleted. Flagged as ORPHANED.',
          '[AUDIT] Evaluating snapshot snap-0b92c47d: source volume vol-05c6d7 active. State: KEPT.',
          '[SUMMARY] Identified 8 orphaned unattached snapshots eligible for safe cleanup.'
        ],
        metrics: [
          { label: 'Total Snapshots', value: '64 Checked', color: 'text-slate-200' },
          { label: 'Active Volumes', value: '18 Verified', color: 'text-cyan-400' },
          { label: 'Orphaned Found', value: '8 Candidates', color: 'text-amber-400' }
        ],
        activeNodes: ['AWS Lambda', 'EC2 & EBS APIs', 'CloudWatch Audit']
      },
      {
        id: 3,
        title: 'Phase 3: Deterministic Safe Remediation & Cost Savings',
        duration: 20,
        narration:
          'The function securely deletes only confirmed orphaned snapshots, logs every deletion with volume metadata, and records storage gigabytes recovered to AWS CloudWatch.',
        badge: 'Automated Remediation',
        terminalLogs: [
          '[DELETE] Executing ec2.delete_snapshot(SnapshotId="snap-0a81f38e") ... Deleted successfully.',
          '[DELETE] Executing ec2.delete_snapshot(SnapshotId="snap-0c33d59a") ... Deleted successfully.',
          '[DELETE] Cleaned 8 orphaned snapshots total. Recovered 480 GB of EBS snapshot storage.',
          '[FINOPS] Estimated recurring cost savings: $24.00 / month ($288.00 / year)'
        ],
        metrics: [
          { label: 'Snapshots Deleted', value: '8 Orphaned', color: 'text-emerald-400' },
          { label: 'Storage Reclaimed', value: '480 GB', color: 'text-cyan-400' },
          { label: 'Cost Reduction', value: 'FinOps Optimized', color: 'text-emerald-400' }
        ],
        activeNodes: ['AWS Lambda', 'EC2 & EBS APIs', 'CloudWatch Audit']
      },
      {
        id: 4,
        title: 'Phase 4: CloudWatch Logging & Observability Audit Trail',
        duration: 20,
        narration:
          'All cleanup operations produce auditable structured JSON logs in Amazon CloudWatch Log Groups for compliance, FinOps reporting, and operational peace of mind.',
        badge: 'Audit & Compliance',
        terminalLogs: [
          '[CLOUDWATCH] Emitting JSON audit record to /aws/lambda/ebs-finops-cleaner',
          '[LOG] {"status": "SUCCESS", "cleaned_count": 8, "bytes_freed_gb": 480, "duration_ms": 1420}',
          '[ALARM] CloudWatch Metric "OrphanedEBSCleanup" published successfully.',
          '[DONE] Execution completed with 0 errors. Exit code 0.'
        ],
        metrics: [
          { label: 'Audit Trail', value: 'CloudWatch JSON', color: 'text-purple-400' },
          { label: 'Execution Time', value: '1.42 seconds', color: 'text-cyan-400' },
          { label: 'Error Rate', value: '0% Failures', color: 'text-emerald-400' }
        ],
        activeNodes: ['AWS Lambda', 'CloudWatch Audit']
      }
    ]
  },

  'video-3': {
    id: 'video-3',
    projectTitle: 'TerraVoyage — Tourism & Expedition Booking Platform',
    tagline: 'Multi-Service Containerized Architecture with Spring Boot 3 & FastAPI',
    totalDuration: 90,
    scenes: [
      {
        id: 1,
        title: 'Phase 1: Multi-Service Architecture & Docker Compose',
        duration: 20,
        narration:
          'TerraVoyage combines a Java 17 Spring Boot 3 enterprise API, a Python FastAPI high-throughput recommendation service, a React 19 frontend, and PostgreSQL, all orchestrated using Docker Compose.',
        badge: 'Multi-Service Architecture',
        terminalLogs: [
          '[DOCKER-COMPOSE] Reading docker-compose.yml configuration...',
          '[COMPOSE] Creating internal bridge network "terravoyage-net"',
          '[COMPOSE] Starting service "postgres-db" (port 5432)',
          '[COMPOSE] Starting service "springboot-api" (port 8080)',
          '[COMPOSE] Starting service "fastapi-service" (port 8000)',
          '[COMPOSE] Starting service "react-frontend" (port 3000)'
        ],
        metrics: [
          { label: 'Backend Core', value: 'Spring Boot 3 (Java 17)', color: 'text-emerald-400' },
          { label: 'Analytics Microservice', value: 'Python FastAPI', color: 'text-cyan-400' },
          { label: 'Frontend', value: 'React 19 (TypeScript)', color: 'text-purple-400' }
        ],
        activeNodes: ['React 19 Frontend', 'Spring Boot 3 API', 'Python FastAPI', 'Docker Compose']
      },
      {
        id: 2,
        title: 'Phase 2: Spring Security & Role-Based JWT Authentication',
        duration: 25,
        narration:
          'Spring Security filters enforce stateless JWT token validation. Users authenticate securely with role-based access control protecting booking workflows and administrative endpoints.',
        badge: 'Security & Access Control',
        terminalLogs: [
          '[SECURITY] Initializing JwtAuthenticationFilter in Spring Security filter chain',
          '[POST /api/v1/auth/login] Validating credentials for user "traveler@terravoyage.com"',
          '[JWT] Generated signed token with RS256 algorithm. Roles: ["ROLE_USER", "ROLE_BOOKING"]',
          '[SECURITY] SecurityContextHolder populated: Principal authenticated successfully.',
          '[SWAGGER] OpenAPI 3.0 documentation available at /swagger-ui/index.html'
        ],
        metrics: [
          { label: 'Auth Standard', value: 'JWT (RS256)', color: 'text-amber-400' },
          { label: 'Access Control', value: 'Role-Based (RBAC)', color: 'text-emerald-400' },
          { label: 'API Specs', value: 'Swagger / OpenAPI 3', color: 'text-cyan-400' }
        ],
        activeNodes: ['Spring Boot 3 API', 'PostgreSQL Database']
      },
      {
        id: 3,
        title: 'Phase 3: Inter-Service Communication & Booking Flow',
        duration: 25,
        narration:
          'When a user confirms an expedition reservation, Spring Boot handles ACID transaction persistence in PostgreSQL, while asynchronously querying FastAPI for personalized travel recommendations.',
        badge: 'Distributed Workflows',
        terminalLogs: [
          '[POST /api/v1/bookings] Received expedition request: Expedition #4102',
          '[TRANSACTION] @Transactional active: persisting booking reservation in PostgreSQL...',
          '[HTTP CLIENT] Calling FastAPI service http://fastapi-service:8000/recommendations/itinerary',
          '[FASTAPI] Processed recommendation matrix in 14ms: response 200 OK',
          '[TRANSACTION] Committed transaction. Reservation ID #8849 generated.'
        ],
        metrics: [
          { label: 'DB Consistency', value: 'ACID in PostgreSQL', color: 'text-cyan-400' },
          { label: 'FastAPI Latency', value: '14 ms response', color: 'text-emerald-400' },
          { label: 'Booking Status', value: 'Confirmed & Synced', color: 'text-purple-400' }
        ],
        activeNodes: ['Spring Boot 3 API', 'Python FastAPI', 'PostgreSQL Database']
      },
      {
        id: 4,
        title: 'Phase 4: Client Viewport & Container Lifecycle Health',
        duration: 20,
        narration:
          'The React 19 frontend dynamically updates order states, while Docker healthchecks maintain container availability and auto-restart policies across all microservices.',
        badge: 'Frontend Integration & Health',
        terminalLogs: [
          '[REACT 19] Client received booking confirmation payload over HTTPS',
          '[HEALTHCHECK] postgres-db: healthy (pg_isready -U postgres)',
          '[HEALTHCHECK] springboot-api: healthy (/actuator/health)',
          '[HEALTHCHECK] fastapi-service: healthy (/health)',
          '[SUCCESS] All 4 microservices operational and synchronized.'
        ],
        metrics: [
          { label: 'Docker Health', value: '4/4 Containers Healthy', color: 'text-emerald-400' },
          { label: 'Client Performance', value: '60 FPS React 19', color: 'text-cyan-400' },
          { label: 'Architecture', value: 'Microservices Ready', color: 'text-purple-400' }
        ],
        activeNodes: ['React 19 Frontend', 'Docker Compose', 'PostgreSQL Database']
      }
    ]
  }
};
