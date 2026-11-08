import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Cloud, 
  Cpu, 
  Layout, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  ArrowUpRight,
  Compass,
  Lock,
  CheckCircle2,
  RefreshCw,
  Network,
  BarChart3,
  ShoppingBag,
  Server,
  ChevronDown,
  Palette,
  HelpCircle,
  Briefcase,
  Users,
  Settings,
  Zap,
  Workflow,
  TrendingUp,
  Sparkles,
  Check,
  FileText,
  Terminal,
  Activity,
  LineChart,
  Search,
  CheckSquare,
  Sparkle
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  // Accordion & Toggle states
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'ai-cloud' | 'enterprise'>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'core', label: 'Core Engineering & UX' },
    { id: 'ai-cloud', label: 'AI, Data & DevOps' },
    { id: 'enterprise', label: 'Enterprise & Security Strategy' },
  ];

  const servicesList = [
    {
      id: 'enterprise-strategy',
      category: 'enterprise',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: 'Enterprise Strategy & Digital Transformation',
      leadText: 'Align technology with business objectives.',
      desc: 'Strategic consulting, architecture planning, modernization roadmaps, and digital transformation initiatives tailored for next-generation enterprises.',
      subServices: [
        'Digital Transformation Strategy',
        'Technology Consulting',
        'Enterprise Architecture Planning',
        'Solution Architecture Design',
        'Technical Due Diligence & Audits',
        'Legacy System Modernization Roadmaps',
        'Cloud Transformation Planning',
        'CTO Advisory & Technology Leadership',
        'IT Governance & Risk Management',
        'Architecture Scale Reviews'
      ]
    },
    {
      id: 'product-engineering',
      category: 'core',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      title: 'Product Engineering',
      leadText: 'Secure, scalable digital products from concept to production.',
      desc: 'End-to-end design and rapid development of custom SaaS applications, portals, and dynamic platforms built to support enterprise growth.',
      subServices: [
        'SaaS Product Development',
        'Enterprise Application Platforms',
        'Customer Portals & Client Dashboards',
        'Business Operations Systems',
        'API-First Core Microservices',
        'Multi-tenant Software Architectures',
        'Fast Prototyping & MVPs'
      ]
    },
    {
      id: 'uiux-design',
      category: 'core',
      icon: <Palette className="w-5 h-5 text-blue-600" />,
      title: 'UI/UX Design & Brand Strategy',
      leadText: 'User-centered design that translates brand vision into digital excellence.',
      desc: 'Creating high-fidelity interactive prototypes, responsive layout frameworks, cohesive enterprise design systems, and beautiful aesthetic interfaces engineered to delight users.',
      subServices: [
        'User Experience (UX) Engineering',
        'User Interface (UI) Custom Design',
        'Figma Design Systems & Shared Token Libraries',
        'Interactive High-Fidelity Prototyping',
        'User Research, Persona Maps & Flowcharts',
        'Wireframing & Information Hierarchy Design',
        'Usability Testing & Feedback Auditing'
      ]
    },
    {
      id: 'ai-automation',
      category: 'ai-cloud',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      title: 'AI & Intelligent Automation',
      leadText: 'Build enterprise AI solutions that improve productivity.',
      desc: 'Integrating production-grade LLM orchestration, customized Retrieval Augmented Generation (RAG) pipelines, and semantic intelligence into your enterprise workflows.',
      subServices: [
        'Enterprise AI & LLM Strategy Consulting',
        'Custom Retrieval Augmented Generation (RAG) Systems',
        'Intelligent Autonomous AI Agents & Workflows',
        'Semantic Document Intelligence & Processing',
        'Natural Language Search & Vector Indexing',
        'Private Knowledge Bases & Expert Systems',
        'API Prompt Engineering & Orchestration'
      ]
    },
    {
      id: 'cloud-devops',
      category: 'ai-cloud',
      icon: <Cloud className="w-5 h-5 text-blue-600" />,
      title: 'Cloud Engineering & DevOps',
      leadText: 'Modern cloud infrastructure engineered for reliability.',
      desc: 'Fully managed continuous integration, container orchestration, zero-downtime deployments, and highly robust infrastructure as code implementations.',
      subServices: [
        'Multi-Cloud Migration & Architecture Design',
        'Kubernetes Integration & Container Orchestration',
        'Infrastructure as Code (IaC) via Terraform',
        'High-Performance CI/CD Pipeline Automation',
        'Zero-Downtime Deployment Blueprints',
        'Active Application Observability & Monitoring',
        'Disaster Recovery Planning & High Availability'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'enterprise',
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      title: 'Cybersecurity & Compliance',
      leadText: 'Security engineered into every stage of development.',
      desc: 'Meticulous threat mitigation, secure credentials management, vulnerability testing, and compliance readiness mappings to protect your institutional integrity.',
      subServices: [
        'Security Architecture Blueprinting',
        'Identity & Access Management (IAM / RBAC)',
        'Vulnerability Assessments & Code Quality Audits',
        'SOC 2 Compliance Prep & Auditing Support',
        'GDPR & HIPAA Compliance Alignment',
        'Secure Credentials & Secret Vault Management'
      ]
    }
  ];

  const industries = [
    { name: 'Financial Services', icon: <TrendingUp className="w-4 h-4 text-blue-600" /> },
    { name: 'Healthcare & Life Sciences', icon: <Activity className="w-4 h-4 text-emerald-600" /> },
    { name: 'Retail & Commerce', icon: <ShoppingBag className="w-4 h-4 text-violet-600" /> },
    { name: 'Manufacturing', icon: <Settings className="w-4 h-4 text-slate-600" /> },
    { name: 'Logistics & Supply Chain', icon: <Network className="w-4 h-4 text-amber-600" /> },
    { name: 'Real Estate', icon: <Compass className="w-4 h-4 text-rose-600" /> },
    { name: 'Education', icon: <Layers className="w-4 h-4 text-indigo-600" /> },
    { name: 'Hospitality', icon: <Sparkles className="w-4 h-4 text-teal-600" /> },
    { name: 'Government', icon: <ShieldCheck className="w-4 h-4 text-blue-700" /> },
    { name: 'Insurance', icon: <Lock className="w-4 h-4 text-cyan-600" /> },
    { name: 'Technology', icon: <Cpu className="w-4 h-4 text-purple-600" /> },
    { name: 'Professional Services', icon: <Briefcase className="w-4 h-4 text-amber-700" /> },
    { name: 'Media & Entertainment', icon: <Sparkle className="w-4 h-4 text-rose-500" /> },
    { name: 'Automotive', icon: <Settings className="w-4 h-4 text-gray-600" /> },
    { name: 'Energy & Utilities', icon: <Zap className="w-4 h-4 text-orange-600" /> }
  ];

  const businessOutcomes = [
    { title: 'Accelerate Digital Transformation', desc: 'Deploy production applications in months, not years, with modern scaffolds.' },
    { title: 'Improve Operational Efficiency', desc: 'Automate legacy bottlenecks, routine manual data entries, and notification cycles.' },
    { title: 'Modernize Legacy Systems', desc: 'Migrate outdated technical monoliths to scalable serverless and microservices architectures.' },
    { title: 'Increase Business Agility', desc: 'Adapt quickly to market updates with decoupled modular components and clean APIs.' },
    { title: 'Enhance Customer Experience', desc: 'Deliver highly responsive, intuitive, and consistent UI layouts across desktop and mobile.' },
    { title: 'Reduce Technical Debt', desc: 'Refactor complex spaghetti scripts into clean, typed, and fully documented engineering systems.' },
    { title: 'Optimize Cloud Infrastructure', desc: 'Minimize runtime cloud hosting waste with elastic scaling policies and efficient container runs.' },
    { title: 'Strengthen Security & Compliance', desc: 'Build zero-trust authentication barriers and maintain immutable audit log histories.' },
    { title: 'Improve Data Visibility', desc: 'Consolidate isolated operational metrics into streamlined, executive BI dashboards.' },
    { title: 'Enable Scalable Growth', desc: 'Ensure database structures and core APIs expand smoothly under high concurrent traffic spikes.' }
  ];

  const engagementModels = [
    {
      title: 'Dedicated Product Teams',
      desc: 'Cross-functional teams of design leaders, backend developers, and QA engineers working exclusively as an extension of your company.'
    },
    {
      title: 'Staff Augmentation',
      desc: 'Highly experienced, senior-tier full-stack engineers integrated directly into your existing delivery teams and sprints.'
    },
    {
      title: 'Project-Based Delivery',
      desc: 'Complete ownership of your technology requirements from raw discovery workshops through high-availability production launch.'
    },
    {
      title: 'Technology Consulting',
      desc: 'CTO-level advisory, legacy system re-architecture reviews, modernization planning, and technology roadmap blueprinting.'
    },
    {
      title: 'Managed Engineering Services',
      desc: 'Long-term server support, active latency monitoring, third-party version upgrades, and ongoing functional optimizations.'
    }
  ];

  const partnerships = [
    {
      category: 'Cloud Platforms',
      partners: 'AWS • Microsoft Azure • Google Cloud',
      desc: 'Enterprise-grade cloud infrastructure engineered for resilient scaling, elastic storage, and absolute operational uptime.'
    },
    {
      category: 'AI Platforms',
      partners: 'OpenAI • Gemini • Claude',
      desc: 'Production-ready generative AI APIs, model orchestration, and secure custom context embeddings integrated into workflows.'
    },
    {
      category: 'Development Ecosystem',
      partners: 'React • Next.js • Node.js • .NET • Python',
      desc: 'Modern, high-performance technology frameworks supporting typed, secure, and easily maintainable digital products.'
    }
  ];

  const engineeringStandards = [
    { label: 'Cloud-Native by Default', status: 'Active' },
    { label: 'API-First Development', status: 'Enforced' },
    { label: 'Security-First Architecture', status: 'Audited' },
    { label: 'AI-Ready Solutions', status: 'Standard' },
    { label: 'CI/CD Enabled Delivery', status: 'Automated' },
    { label: 'Automated Quality Assurance', status: 'Continuous' },
    { label: 'Performance Optimized', status: 'Verified' },
    { label: 'Enterprise Monitoring', status: '24/7 Live' },
    { label: 'Scalable Infrastructure', status: 'Elastic' },
    { label: 'Continuous Improvement', status: 'Sustained' }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="w-full bg-slate-50/50 space-y-24 py-12">
      
      {/* 1. HERO SECTION */}
      <section className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Saini Collection Professional Services</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-950 tracking-tight leading-none">
            Architecting High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Products &amp; Intelligent Systems</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl pt-2">
            Every successful technology initiative follows a disciplined delivery framework. We combine agile execution with enterprise architecture practices to ensure predictable delivery, scalable solutions, and long-term business value.
          </p>
        </div>
      </section>

      {/* 2. SERVICE CATEGORIES (ACCORDION FILTER SYSTEM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Expertise Verticals</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Our Core Capabilities
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            Explore our specialized engineering divisions. Each service card can be expanded to reveal custom deliverables, technical inclusions, and engineering methodologies.
          </p>
        </div>

        {/* Categories selector */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
              }}
              className={`font-sans font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/15'
                  : 'bg-white text-gray-700 border border-slate-200 hover:bg-slate-50 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive accordion cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isExpanded = !!expandedCards[service.id];
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => toggleCard(service.id)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 flex flex-col justify-between items-start cursor-pointer group"
              >
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="bg-blue-50 group-hover:bg-blue-100/80 w-11 h-11 rounded-xl flex items-center justify-center transition-colors shadow-xs">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-gray-400 group-hover:text-blue-600 transition-colors flex items-center space-x-1">
                      <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-1.5" />
                    </h3>
                    <div className="font-sans text-[11px] text-blue-600 font-semibold uppercase tracking-wider">
                      {service.leadText}
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>

                  {!isExpanded && (
                    <div className="text-[10px] font-mono font-bold text-blue-600/90 bg-blue-50/50 px-2.5 py-1 rounded-lg inline-flex items-center space-x-1.5 border border-blue-100/30">
                      <span>•</span>
                      <span>{service.subServices.length} Delivery Inclusions</span>
                    </div>
                  )}

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden w-full pt-3 border-t border-slate-100"
                        onClick={(e) => e.stopPropagation()} // Keep click on subservices clean
                      >
                        <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block mb-2">Capabilities Included:</span>
                        <ul className="space-y-2">
                          {service.subServices.map((sub, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs font-sans text-gray-700">
                              <span className="text-blue-500 font-bold mt-0.5">✓</span>
                              <span className="font-medium">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Target Expertise</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Industries We Serve
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            We adapt our core architectures and compliance guardrails to meet the specific requirements of global business verticals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex items-center space-x-3 hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="bg-slate-50 p-2 rounded-lg flex-shrink-0 border border-slate-100">
                {ind.icon}
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-gray-900">{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY ORGANIZATIONS CHOOSE US & STANDARDS */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Why choose us */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono text-blue-300 font-bold uppercase">
                <span>Value Alignment</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Why Organizations Choose Saini Collection
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Technology should create measurable business value—not unnecessary complexity. We partner with organizations to architect secure, scalable, and future-ready solutions that align engineering decisions with business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Business-First Consulting', desc: 'We align technical architectures with bottom-line revenue goals.' },
                { title: 'Enterprise Architecture Expertise', desc: 'Secure, high-performance database design and schema integrity.' },
                { title: 'Modern Engineering Practices', desc: 'Strict typing, modular layouts, and extensive component dry runs.' },
                { title: 'Cloud-Native Development', desc: 'Optimized Docker container runs and server-side operations.' },
                { title: 'AI & Intelligent Automation', desc: 'Deep integrations with LLM providers for custom agent swarms.' },
                { title: 'Security by Design', desc: 'Adherence to strict data compliance and access key separation.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-blue-400 flex items-center space-x-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{item.title}</span>
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Standards / Metrics */}
          <div className="lg:col-span-5 bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-850 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-lg text-white">
                Our Engineering Standards
              </h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                We avoid vanity statistics, choosing instead to benchmark our organizational performance against transparent, audited delivery metrics.
              </p>
              
              <div className="space-y-2.5 pt-2">
                {engineeringStandards.map((std, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-800/60 text-xs">
                    <span className="font-sans font-medium text-slate-300">{std.label}</span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded uppercase font-bold">
                      {std.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BUSINESS OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Measurable Impact</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Business Outcomes
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            Technology is purely an investment tool. Every project is scoped, developed, and deployed to yield clear, measurable operational improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {businessOutcomes.map((out, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="bg-emerald-50 w-8 h-8 rounded-lg flex items-center justify-center border border-emerald-100">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                </div>
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-gray-950 leading-tight">
                  {out.title}
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                  {out.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FLEXIBLE ENGAGEMENT MODELS */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-400 tracking-widest uppercase">Partnership Framework</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Flexible Engagement Models
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300">
              Every organization operates differently. We adapt our engagement model to complement your internal teams, governance structures, and delivery processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {engagementModels.map((model, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="bg-blue-500/10 w-9 h-9 rounded-xl flex items-center justify-center border border-blue-500/20">
                    <Briefcase className="w-4.5 h-4.5 text-blue-400" />
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    {model.title}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TECHNOLOGY PARTNERSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Engineering Ecosystem</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Technology Partnerships &amp; Ecosystem
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            We build solutions using globally trusted platforms and modern engineering ecosystems to ensure absolute reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((p, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/75 shadow-xs text-left space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">{p.category}</span>
                <h4 className="font-display font-black text-lg sm:text-xl text-blue-600">
                  {p.partners}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-slate-100 pt-3">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-blue-600/10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Ready to bring your idea to life?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl mx-auto">
              Talk to our team for a free consultation. We’ll listen to your needs and guide you with simple, practical solutions.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 hover:bg-slate-50 font-sans font-bold text-xs sm:text-sm py-3 px-6 sm:px-8 rounded-xl flex items-center space-x-2 cursor-pointer shadow-lg active:scale-98 transition-all"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
