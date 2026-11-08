export interface Project {
  id: string;
  title: string;
  client: string;
  clientLogoText: string;
  category: 'E-Commerce & Retail' | 'Enterprise SaaS' | 'Healthcare & AI' | 'Logistics & Cloud' | 'Fintech';
  industry: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  keyFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface PartnerCompany {
  id: string;
  name: string;
  logoBadge: string;
  industry: string;
  location: string;
  collaborationType: string;
  duration: string;
  description: string;
  keyProjectsDelivered: string[];
  impactMetric: string;
  websiteDomain?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jai-durge-inventory-portal',
    title: 'Automotive Parts & Inventory Management Portal',
    client: 'Jai Durge Traders',
    clientLogoText: 'JDT',
    category: 'E-Commerce & Retail',
    industry: 'Automotive Accessories & Retail',
    year: '2025 - 2026',
    tagline: 'End-to-end stock tracking, order fulfillment, and multi-branch inventory synchronization.',
    description: 'A custom, high-speed inventory management and dispatch portal built specifically for Jai Durge Traders to streamline car accessories, parts distribution, order tracking, and stock auditing across multiple warehouse points.',
    image: '/src/assets/images/workspace_laptop_1783628858963.jpg',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Recharts'],
    metrics: [
      { label: 'Efficiency Boost', value: '45%' },
      { label: 'Daily SKU Updates', value: '12,000+' },
      { label: 'Order Processing Speed', value: '3x Faster' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    challenge: 'Jai Durge Traders was managing thousands of car accessory SKUs manually across physical registers and disconnected spreadsheets, leading to inventory discrepancies, order fulfillment delays, and difficulty tracking vendor purchase orders in real time.',
    solution: 'Saini Collection engineered a central, desktop-and-mobile optimized inventory cloud platform featuring automated barcode scanning support, real-time stock low alerts, invoice generation, multi-tier user role permissions, and live revenue analytics dashboards.',
    keyFeatures: [
      'Real-Time Stock Audit & Barcode Ledger Integration',
      'Instant Low-Stock Automated Warning Triggers',
      'Multi-Branch Multi-Warehouse Stock Transfers',
      'Automated GST Invoice & Purchase Order Generation',
      'Analytical Revenue & Best-Seller Parts Dashboard'
    ],
    testimonial: {
      quote: 'Saini Collection built our inventory management portal that perfectly streamlines our car accessories and parts operations. The system is intuitive, reliable, and has significantly improved our internal workflow.',
      author: 'Aman Sharma',
      role: 'Founder',
      company: 'Jai Durge Traders'
    },
    liveUrl: 'Enterprise Internal Portal',
    isFeatured: true
  },
  {
    id: 'apex-cloud-analytics-suite',
    title: 'Enterprise Cloud Telemetry & Multi-Tenant SaaS Dashboard',
    client: 'Apex Global Systems',
    clientLogoText: 'AGS',
    category: 'Enterprise SaaS',
    industry: 'Cloud Computing & Infrastructure',
    year: '2025',
    tagline: 'High-throughput cluster monitoring, real-time latency analytics, and predictive cost optimization.',
    description: 'An enterprise-grade monitoring dashboard handling millions of operational metric events daily, providing IT architects with instant cluster observability, anomaly alerts, and automated cloud infrastructure cost optimization suggestions.',
    image: '/src/assets/images/enterprise_tech_hub_1784067126101.jpg',
    techStack: ['React 18', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Node.js', 'Google Cloud Run', 'Firestore'],
    metrics: [
      { label: 'Cloud Cost Reduction', value: '28%' },
      { label: 'Metrics Ingest Rate', value: '1.2M/sec' },
      { label: 'Alert Detection', value: '<500ms' },
      { label: 'Active Enterprise Users', value: '4,500+' }
    ],
    challenge: 'Apex Global needed a high-performance observability control plane capable of aggregating metrics from heterogeneous multi-cloud environments (GCP, AWS, Azure) without UI lag or memory leak issues.',
    solution: 'Saini Collection architected a modular micro-frontend dashboard powered by D3 webGL rendering pipelines, server-sent event streams, and AI-driven predictive resource autoscaling algorithms.',
    keyFeatures: [
      'Real-Time Time-Series Data Visualizations via D3',
      'Custom Multi-Tenant Tenant Workspace Isolation',
      'AI Anomaly Detection & Incident Escalation Rules',
      'Automated Infrastructure Cost Benchmark Reports'
    ],
    testimonial: {
      quote: 'The telemetry dashboard delivered by Saini Collection enabled our enterprise DevOps teams to resolve latency bottlenecks in milliseconds rather than hours.',
      author: 'David Vance',
      role: 'VP of Cloud Infrastructure',
      company: 'Apex Global Systems'
    },
    liveUrl: 'https://apex-telemetry-demo.sainicollection.com',
    isFeatured: true
  },
  {
    id: 'healthpulse-ai-diagnostics',
    title: 'Cognitive Clinical Workflow & Diagnostic AI Hub',
    client: 'HealthPulse Diagnostics',
    clientLogoText: 'HPD',
    category: 'Healthcare & AI',
    industry: 'Healthcare & Clinical Technologies',
    year: '2025 - 2026',
    tagline: 'AI-assisted medical record synthesis, diagnostic imaging triaging, and HIPAA-compliant patient portals.',
    description: 'A secure healthcare management platform leveraging Gemini multimodal AI to assist clinicians in summarizing patient EHR history, auto-generating lab findings summaries, and streaming telemetry for remote patient monitoring.',
    image: '/src/assets/images/enterprise_ai_hero_1784065828675.jpg',
    techStack: ['React', 'TypeScript', 'Gemini AI API', 'Node.js', 'Tailwind CSS', 'HIPAA Secure Cloud', 'Express'],
    metrics: [
      { label: 'Clinician Time Saved', value: '2.5 hrs/day' },
      { label: 'Report Accuracy', value: '99.4%' },
      { label: 'EHR Processing', value: '<2 secs' },
      { label: 'Patient Adoption', value: '88%' }
    ],
    challenge: 'Healthcare providers faced burnout spending hours manually transcribing clinical notes and searching through fragmented patient lab histories across legacy hospital EMR databases.',
    solution: 'Saini Collection engineered a secure, HIPAA-compliant web workspace that synthesizes patient charts using server-side Gemini AI models, flags critical lab anomalies, and coordinates multi-specialist consultations.',
    keyFeatures: [
      'Multimodal AI Patient Record Summarization',
      'Instant Emergency Lab Value Anomaly Alerts',
      'Encrypted Tele-Consultation & Scheduling Calendar',
      'Audit-Ready Role Based Security & Data Encryption'
    ],
    testimonial: {
      quote: 'Saini Collection built a transformative clinical assistant that drastically reduces administrative burden for our staff while upholding strict medical data compliance.',
      author: 'Dr. Meera Nambiar',
      role: 'Chief Medical Officer',
      company: 'HealthPulse Diagnostics'
    },
    liveUrl: 'Enterprise Healthcare Network',
    isFeatured: true
  },
  {
    id: 'velox-supply-chain-suite',
    title: 'Global Freight & Fleet Telemetry Operations Platform',
    client: 'Velox Logistics',
    clientLogoText: 'VLS',
    category: 'Logistics & Cloud',
    industry: 'Supply Chain & Freight Logistics',
    year: '2025',
    tagline: 'Real-time GPS fleet tracking, automated route optimization, and digital proof-of-delivery processing.',
    description: 'An end-to-end logistics routing engine that tracks cross-country cargo fleets, monitors driver rest cycles, calculates live fuel consumption rates, and processes electronic manifests.',
    image: '/src/assets/images/workspace_laptop_1783628858963.jpg',
    techStack: ['React 18', 'TypeScript', 'Google Maps Platform API', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Fleet Fuel Savings', value: '18%' },
      { label: 'On-Time Delivery', value: '97.6%' },
      { label: 'Live Tracked Trucks', value: '1,200+' },
      { label: 'Paperwork Eliminated', value: '100%' }
    ],
    challenge: 'Velox Logistics suffered from blind spots in cross-border cargo transit, manual driver dispatching via phone calls, and delayed billing cycles due to lost paper bills of lading.',
    solution: 'Saini Collection built a unified logistics control room using Google Maps APIs, WebSocket real-time position pings, and automated digital sign-off workflows for mobile drivers.',
    keyFeatures: [
      'Interactive Live Maps & Geofenced Fleet Tracking',
      'Automated Weather & Traffic Route Rerouting',
      'Mobile Driver Digital Sign-Off & e-Manifests',
      'Automated Fuel & Toll Expense Tracking'
    ],
    testimonial: {
      quote: 'Our dispatchers now manage twice the cargo volume with absolute precision thanks to the custom platform engineered by Saini Collection.',
      author: 'Marcus Vance',
      role: 'Director of Freight Ops',
      company: 'Velox Logistics'
    },
    isFeatured: false
  },
  {
    id: 'aura-luxe-ecommerce-engine',
    title: 'High-Conversion Fashion & Lifestyle Commerce Platform',
    client: 'Aura Luxury Retail',
    clientLogoText: 'ALR',
    category: 'E-Commerce & Retail',
    industry: 'Premium Fashion & Retail',
    year: '2025',
    tagline: 'Ultra-fast headless e-commerce store with personalized visual product configurators.',
    description: 'A headless e-commerce experience featuring sub-second page loads, interactive 360-degree product showcases, intelligent product recommendations, and multi-currency localized checkout.',
    image: '/src/assets/images/enterprise_tech_hub_1784067126101.jpg',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Node.js', 'Vite', 'Cloudflare CDN'],
    metrics: [
      { label: 'Checkout Conversion', value: '+34%' },
      { label: 'Page Load Speed', value: '0.4s' },
      { label: 'Mobile Sales Share', value: '72%' },
      { label: 'Cart Abandonment', value: '-22%' }
    ],
    challenge: 'Aura Luxury was losing high-intent shoppers due to sluggish legacy e-commerce templates that failed to render high-resolution product imagery quickly on mobile devices.',
    solution: 'Saini Collection engineered a bespoke React e-commerce engine utilizing responsive image optimization pipelines, dynamic inventory allocation, and friction-free single-click payment gateways.',
    keyFeatures: [
      'Sub-Second Page Transitions & Progressive Image Loading',
      'Interactive Multi-Angle Visual Product Inspection',
      'Multi-Currency & Global Tax Automated Calculation',
      'Personalized AI Recommendation Carousel'
    ],
    isFeatured: false
  },
  {
    id: 'finvault-banking-portal',
    title: 'Next-Gen Commercial Banking & Treasury Dashboard',
    client: 'FinVault Capital',
    clientLogoText: 'FVC',
    category: 'Fintech',
    industry: 'Corporate Banking & Financial Services',
    year: '2025 - 2026',
    tagline: 'Multi-account liquidity management, automated wire approvals, and audit trail analytics.',
    description: 'A enterprise treasury operations workspace designed for CFOs and corporate controllers to manage cash positions, schedule high-value wire transfers, and generate compliance reports.',
    image: '/src/assets/images/enterprise_ai_hero_1784065828675.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Express', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Daily Volume Processed', value: '$85M+' },
      { label: 'Audit Trail Time', value: 'Instant' },
      { label: 'Security Cert', value: 'SOC 2 Type II' },
      { label: 'Reconciliation Speed', value: '5x Faster' }
    ],
    challenge: 'Corporate clients required a secure, frictionless portal to view multi-bank liquidity accounts and execute dual-approval wire transfers without complex hardware tokens.',
    solution: 'Saini Collection engineered a banking-grade web application featuring hardware security key WebAuthn support, real-time FX rate updates, and interactive cash flow chart visualizers.',
    keyFeatures: [
      'Dual-Control High Value Wire Transfer Workflows',
      'Real-Time Consolidated Cash Position Charts',
      'Exportable Automated Audit & Tax Statements',
      'Bank-Grade Biometric & WebAuthn Multi-Factor Auth'
    ],
    isFeatured: true
  }
];

export const COLLABORATING_COMPANIES: PartnerCompany[] = [
  {
    id: 'jai-durge-traders',
    name: 'Jai Durge Traders',
    logoBadge: 'JDT',
    industry: 'Automotive Accessories & Retail Distribution',
    location: 'Gurgaon, India',
    collaborationType: 'Full-Stack Custom Software & Inventory Partner',
    duration: 'Ongoing Collaboration (Since 2025)',
    description: 'Collaborating as the core technology partner to modernize inventory tracking, order processing, vendor management, and internal operational portals for automotive parts and accessories.',
    keyProjectsDelivered: [
      'Custom Inventory & Stock Audit Portal',
      'Multi-Warehouse Barcode Scanning System',
      'Automated Purchase Order & Billing Engine'
    ],
    impactMetric: 'Streamlined 12,000+ daily SKU lookups and increased order fulfillment speed by 3x.',
    websiteDomain: 'jaidurgetraders.com'
  },
  {
    id: 'apex-global-systems',
    name: 'Apex Global Systems',
    logoBadge: 'AGS',
    industry: 'Enterprise Cloud & IT Infrastructure',
    location: 'Singapore / USA',
    collaborationType: 'Cloud Telemetry & UI Engineering Partner',
    duration: 'Multi-Year Strategic Engineering',
    description: 'Co-engineered high-throughput telemetry dashboards and cloud infrastructure management interfaces for global IT operations teams.',
    keyProjectsDelivered: [
      'Multi-Tenant Telemetry Observability Suite',
      'D3-Powered Cluster Latency Visualizer',
      'Automated FinOps Cloud Cost Advisory Engine'
    ],
    impactMetric: 'Reduced infrastructure monitoring latency to under 500ms for over 4,500 enterprise users.'
  },
  {
    id: 'healthpulse-diagnostics',
    name: 'HealthPulse Diagnostics',
    logoBadge: 'HPD',
    industry: 'Healthcare Technologies & Clinical Labs',
    location: 'London, UK',
    collaborationType: 'AI Systems & HIPAA Cloud Integration',
    duration: '2025 - Present',
    description: 'Partnered with clinical leadership to design AI-driven diagnostic synthesis tools and secure patient engagement portals.',
    keyProjectsDelivered: [
      'Gemini AI Medical Record Summarizer',
      'Real-Time Clinical Anomaly Alert System',
      'Encrypted Doctor-Patient Consultation Hub'
    ],
    impactMetric: 'Saved clinicians an average of 2.5 hours per day on manual record transcription.'
  },
  {
    id: 'velox-logistics',
    name: 'Velox Supply Chain Solutions',
    logoBadge: 'VLS',
    industry: 'Freight, Logistics & Supply Chain',
    location: 'Dubai, UAE',
    collaborationType: 'Logistics Software & Maps Integration',
    duration: '2025',
    description: 'Collaborated to build real-time GPS fleet tracking and automated driver dispatch systems across regional distribution networks.',
    keyProjectsDelivered: [
      'Interactive Fleet Tracking & Route Optimizer',
      'Driver Mobile Electronic Manifest App',
      'Fuel & Toll Expenditure Analytics Engine'
    ],
    impactMetric: 'Cut total fleet fuel expenditures by 18% while boosting on-time delivery rates to 97.6%.'
  },
  {
    id: 'aura-luxury',
    name: 'Aura Luxury Retail',
    logoBadge: 'ALR',
    industry: 'High-Fashion & E-Commerce',
    location: 'Milan / Paris',
    collaborationType: 'Headless E-Commerce & UX Design',
    duration: '2025',
    description: 'Designed and deployed ultra-fast headless shopping experiences for global luxury buyers with dynamic localized currency support.',
    keyProjectsDelivered: [
      'Sub-Second React Storefront Engine',
      '360-Degree Product Visual Inspection Suite',
      'Global Multi-Currency Stripe Payment Gateway'
    ],
    impactMetric: 'Increased mobile checkout conversion by 34% with sub-second page rendering.'
  },
  {
    id: 'finvault-capital',
    name: 'FinVault Capital',
    logoBadge: 'FVC',
    industry: 'Corporate Banking & Financial Services',
    location: 'New York, USA',
    collaborationType: 'Fintech Systems & Security Architecture',
    duration: '2025 - 2026',
    description: 'Engineering partner for enterprise corporate banking portals, treasury analytics, and high-security transactional workflows.',
    keyProjectsDelivered: [
      'Multi-Account Corporate Treasury Workspace',
      'Dual-Control High Value Wire Transfer Engine',
      'SOC 2 Audit Trail Reporting Portal'
    ],
    impactMetric: 'Powers over $85M in daily transactions with instant audit trail logging.'
  }
];

// LocalStorage Persistence Helpers
const PROJECTS_STORAGE_KEY = 'saini_collection_projects_v1';
const COMPANIES_STORAGE_KEY = 'saini_collection_companies_v1';

export function getStoredProjects(): Project[] {
  try {
    const data = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse stored projects:', e);
  }
  return PROJECTS_DATA;
}

export function saveProjects(projects: Project[]): void {
  try {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  } catch (e) {
    console.error('Failed to save projects:', e);
  }
}

export function getStoredCompanies(): PartnerCompany[] {
  try {
    const data = localStorage.getItem(COMPANIES_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse stored companies:', e);
  }
  return COLLABORATING_COMPANIES;
}

export function saveCompanies(companies: PartnerCompany[]): void {
  try {
    localStorage.setItem(COMPANIES_STORAGE_KEY, JSON.stringify(companies));
  } catch (e) {
    console.error('Failed to save companies:', e);
  }
}

export function resetPortfolioToDefault(): { projects: Project[]; companies: PartnerCompany[] } {
  try {
    localStorage.removeItem(PROJECTS_STORAGE_KEY);
    localStorage.removeItem(COMPANIES_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset portfolio:', e);
  }
  return { projects: PROJECTS_DATA, companies: COLLABORATING_COMPANIES };
}

