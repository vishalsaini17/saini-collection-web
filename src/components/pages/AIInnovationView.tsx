import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Wand2, 
  Calculator, 
  Lightbulb, 
  ArrowRight, 
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Search,
  Database,
  Network,
  Eye,
  FileText,
  Check,
  ChevronRight,
  Building2,
  Workflow,
  Target,
  Lock,
  Binary,
  Boxes,
  Users,
  LineChart,
  Code,
  Shield,
  HelpCircle,
  Briefcase,
  Layers2,
  Play,
  Pause,
  RotateCcw,
  Terminal,
  Settings,
  Zap,
  Server,
  AlertCircle,
  ArrowUpRight,
  Activity,
  Flame,
  Bot,
  Cloud,
  HardDrive,
  Compass,
  Globe
} from 'lucide-react';

interface Agent {
  name: string;
  role: string;
  color: 'blue' | 'violet' | 'amber' | 'rose' | 'emerald';
}

interface Step {
  agentIndex: number;
  status: string;
  detail: string;
  log: string;
}

interface Result {
  type: string;
  title: string;
  metadata: string;
  content: string;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  trigger: string;
  agents: Agent[];
  steps: Step[];
  result: Result;
}

const agentScenarios: Record<string, Scenario> = {
  invoice: {
    id: 'invoice',
    title: 'Vendor Billing Audit & Dispatch',
    description: 'Process incoming vendor invoices, match them with active purchasing agreements, run compliance audits, and record ERP logs.',
    trigger: 'Process incoming PDF billing invoice #INV-2026-904 from Acme Corp for $14,250.00.',
    agents: [
      { name: 'Lead Orchestrator', role: 'Planner & Router', color: 'blue' },
      { name: 'Cognitive Parser (RAG)', role: 'Document Extractor', color: 'violet' },
      { name: 'Compliance Auditor', role: 'Agreement Validator', color: 'amber' },
      { name: 'PII & Security Shield', role: 'Risk & Privacy Guard', color: 'rose' },
      { name: 'ERP Sync Connector', role: 'System Writer', color: 'emerald' }
    ],
    steps: [
      {
        agentIndex: 0,
        status: 'Orchestrating Workflow',
        detail: 'Trigger received. Creating execution plan. Splitting tasks into Document Extraction and Agreement Validation.',
        log: 'INFO: Received raw stream of PDF invoice. Initializing agent cluster context. Target: CRM & ERP.'
      },
      {
        agentIndex: 1,
        status: 'Extracting Invoice Data',
        detail: 'Parsing raw PDF text. Match vector embeddings with agreements database. Extracted: Line item $14,250.00, due date 2026-08-01.',
        log: 'RAG_AGENT: Vector lookup in pgvector successful. Found purchase agreement #PA-900. Accuracy: 99.4%.'
      },
      {
        agentIndex: 2,
        status: 'Auditing Line-Items',
        detail: 'Cross-referencing agreement policy. Item cost $14,250.00 matches contract limits (max limit: $15,000.00). Approved.',
        log: 'AUDIT_AGENT: Comparing extracted figures against contract guidelines... Limit check passed. No anomalies detected.'
      },
      {
        agentIndex: 3,
        status: 'Scrubbing Confidential PII',
        detail: 'Scanning text payload for private details. Redacted credit card digits and internal routing numbers from log metadata.',
        log: 'SECURITY_AGENT: Active regex scanning. Redacted bank routing key: *********482. Transit payload secure.'
      },
      {
        agentIndex: 4,
        status: 'Synchronizing Legacy ERP',
        detail: 'Preparing API payload. Issuing HTTP POST request to ledger. Dispatched automated confirmation email.',
        log: 'ERP_SYSTEM: REST transaction completed. Status 201 Created. Transaction ID: ledger_tx_827914.'
      }
    ],
    result: {
      type: 'Ledger Entry',
      title: 'Invoice Ledger Approved',
      metadata: 'Tx ID: ledger_tx_827914 | Status: AUTO_PAID',
      content: '{\n  "invoice_id": "INV-2026-904",\n  "vendor": "Acme Corp",\n  "amount": 14250.00,\n  "audit_status": "COMPLIANT",\n  "authorized_by": "Saini_Agent_v3.5",\n  "erp_posted": true\n}'
    }
  },
  regulatory: {
    id: 'regulatory',
    title: 'Sovereign Compliance Monitor',
    description: 'Monitor regulatory changes in financial directives, cross-match with internal policy books, and auto-generate compliance recommendations.',
    trigger: 'Analyze the new EU AI Act compliance amendments and determine if our core database meets security guidelines.',
    agents: [
      { name: 'Lead Orchestrator', role: 'Goal Planner', color: 'blue' },
      { name: 'Regulatory Ingest (RAG)', role: 'Multi-Source Scraper', color: 'violet' },
      { name: 'Gap Analyzer', role: 'Risk Metric Evaluator', color: 'amber' },
      { name: 'Safety & Guardrails', role: 'Ethical Audit Engine', color: 'rose' },
      { name: 'Artifact Composer', role: 'Report Publisher', color: 'emerald' }
    ],
    steps: [
      {
        agentIndex: 0,
        status: 'Triggering Assessment',
        detail: 'Task received. Spawning Ingest Agent to pull legal amendments and Database Schema Agent to evaluate tables.',
        log: 'INFO: Initiating Sovereign Compliance cycle. Goal: Match EU AI Act Articles 14/15.'
      },
      {
        agentIndex: 1,
        status: 'Context Retrieval',
        detail: 'Scraping institutional legal sources. Running semantic search on our internal security architecture documentation.',
        log: 'RAG_AGENT: Fetched 3 official PDF publications. Vector matching retrieved /docs/architecture_v4.md (0.87 similarity).'
      },
      {
        agentIndex: 2,
        status: 'Compliance Gap Check',
        detail: 'Matching logging constraints with requirements. Requirement: Multi-tenant database activity logs must remain immutable for 12 months.',
        log: 'GAP_AGENT: Warning - Postgres retention is set to 6 months. Required standard is 12 months. Flagging database change.'
      },
      {
        agentIndex: 3,
        status: 'Safety Filtering',
        detail: 'Checking output for corporate intellectual property leaks and private user metadata.',
        log: 'GUARD_AGENT: Checking synthesis report. Validated compliance. Safe to output.'
      },
      {
        agentIndex: 4,
        status: 'Compiling Compliance Brief',
        detail: 'Generating markdown executive summary. Drafting Confluence page update and queuing Slack alerting task.',
        log: 'COMPOSE_AGENT: Markdown brief created. Saved to /reports/compliance_eu_ai_act.md. Notification sent.'
      }
    ],
    result: {
      type: 'Compliance Brief',
      title: 'Regulatory Change Analysis',
      metadata: 'File: EU_AI_Act_Brief.md | Risk Level: MEDIUM',
      content: '# Executive Assessment: EU AI Act Amendments\n- **Target Directive**: Article 14 (Human Oversight)\n- **Compliance Status**: GAP IDENTIFIED\n- **Details**: Database auditing logs retention requires extending from 180 days to 365 days.\n- **Action Item**: Update retention configs in db/postgres-prod.conf'
    }
  },
  customer: {
    id: 'customer',
    title: 'Autonomous VIP Ticket Solver',
    description: 'Intercept high-priority SLA support emails, fetch user history from Stripe and Salesforce, draft custom resolutions, and update active cases.',
    trigger: 'Intercept email from tier-1 enterprise client reporting an integration outage on their production servers.',
    agents: [
      { name: 'Lead Orchestrator', role: 'Priority Router', color: 'blue' },
      { name: 'Account Profiler (RAG)', role: 'SCRM Data Fetcher', color: 'violet' },
      { name: 'Diagnostic Analyzer', role: 'Log Anomaly Agent', color: 'amber' },
      { name: 'Tone & Safety Guard', role: 'Empathy Engine', color: 'rose' },
      { name: 'Integration Executor', role: 'Support Automation Sync', color: 'emerald' }
    ],
    steps: [
      {
        agentIndex: 0,
        status: 'Interception & Prioritization',
        detail: 'Detecting email tone and customer tier. Classified as: VIP Enterprise (SLA: 15-minute response). Incident severity: HIGH.',
        log: 'INFO: VIP email intercepted from vishal@enterprise.co. Routing to VIP support cluster.'
      },
      {
        agentIndex: 1,
        status: 'Fetching Customer Context',
        detail: 'Interrogating Stripe for active subscription and Salesforce CRM for client history. Plan: Enterprise Titanium Support.',
        log: 'RAG_AGENT: stripe.customers.retrieve() returned Plan: Titanium ($12,500/mo). Active node issues: none.'
      },
      {
        agentIndex: 2,
        status: 'Diagnostic Analysis',
        detail: 'Querying DataDog and server-side logs for client IP 192.168.10.2. Detected 403 Forbidden spikes on API gateway.',
        log: 'DIAGNOSTIC_AGENT: Found API key rotation mismatch on gateway index starting 14:10:00 UTC. Root cause identified.'
      },
      {
        agentIndex: 3,
        status: 'Drafting Solution Response',
        detail: 'Composing resolution instructions. Explaining the key rotation discrepancy in a reassuring, professional tone.',
        log: 'EMPATHY_AGENT: Drafted email. Sent copy to Lead router for confirmation. Tone score: 9.8/10 (highly helpful/warm).'
      },
      {
        agentIndex: 4,
        status: 'Updating Case & Sending SLA Response',
        detail: 'Posting customer response via Zendesk API. Scheduling auto-followup. Resolving incident tracker.',
        log: 'ZENDESK_API: Dispatched resolution email. SLA met in 4.5 minutes. Incident closed.'
      }
    ],
    result: {
      type: 'Customer Response Email',
      title: 'RE: Production Integration Issue',
      metadata: 'To: vishal@enterprise.co | SLA Met: 4m 30s',
      content: 'Subject: Outage Solved - API Key Rotation Discrepancy\n\nDear Vishal,\n\nOur system detected an API authorization key mismatch on our gateway starting at 14:10 UTC. We have resolved the key mismatch on our secondary proxies, and your requests are now succeeding (Status: 200 OK).\n\nBest regards,\nSaini AI Customer Service'
    }
  }
};

export default function AIInnovationView() {
  const [selectedCapability, setSelectedCapability] = useState<string>('strategy');
  const [selectedFunction, setSelectedFunction] = useState<string>('cx');
  const [activeTechTab, setActiveTechTab] = useState<string>('llm');

  // Agent Simulation States
  const [selectedSimScenario, setSelectedSimScenario] = useState<string>('invoice');
  const [simStep, setSimStep] = useState<number>(-1); // -1 = Idle, 0 to 4 = Steps, 5 = Completed
  const [simSpeed, setSimSpeed] = useState<number>(1200); // ms per step
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  // Driving the simulation
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying && simStep >= 0 && simStep < 5) {
      timer = setTimeout(() => {
        const scenario = agentScenarios[selectedSimScenario];
        const nextStep = simStep + 1;
        setSimStep(nextStep);
        
        const currentStepObj = scenario.steps[simStep];
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        setSimLogs(prev => [
          ...prev, 
          `[${timestamp}] [${scenario.agents[currentStepObj.agentIndex].name}] ${currentStepObj.log}`
        ]);

        if (nextStep === 5) {
          setIsPlaying(false);
          const finalTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          setSimLogs(prev => [
            ...prev,
            `[${finalTimestamp}] [SYSTEM] All tasks completed. Response generated successfully. Output written to storage.`
          ]);
        }
      }, simSpeed);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPlaying, simStep, selectedSimScenario, simSpeed]);

  const startSimulation = () => {
    setSimLogs([`[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}] [SYSTEM] Initializing Saini Agentic Engine. Spawning collaborative node network...`]);
    setSimStep(0);
    setIsPlaying(true);
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setSimStep(-1);
    setSimLogs([]);
  };

  // AI Services & Engineering Capabilities
  const capabilities = [
    {
      id: 'strategy',
      title: 'AI Strategy & Consulting',
      desc: 'Develop a clear roadmap for AI adoption aligned with your business objectives and digital transformation initiatives.',
      icon: <Target className="w-5 h-5" />,
      items: [
        'AI Readiness Assessment',
        'AI Transformation Strategy',
        'Opportunity Discovery Workshops',
        'Technology Evaluation',
        'AI Governance & Policies',
        'Proof of Concept Development',
        'Enterprise AI Roadmaps'
      ]
    },
    {
      id: 'generative-ai',
      title: 'Generative AI Solutions',
      desc: 'Build intelligent applications powered by modern Large Language Models to improve employee productivity and customer engagement.',
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        'Enterprise AI Assistants',
        'AI Copilots & Developer Helpers',
        'Customer Support Automation',
        'Intelligent Knowledge Assistants',
        'AI Content Generation',
        'Meeting & Document Summarization',
        'Proposal & Report Generation',
        'Enterprise Search Platforms'
      ]
    },
    {
      id: 'rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      desc: 'Deliver accurate, context-aware AI by securely connecting language models to your enterprise knowledge sources.',
      icon: <Search className="w-5 h-5" />,
      items: [
        'Secure document-grounded answer generation',
        'Zero-leak internal policy & manuals indexing',
        'Legal contract analysis and clause extraction',
        'Context-aware enterprise search with citations',
        'Multi-vector document retrieval pipelines'
      ],
      sources: ['SharePoint', 'Microsoft 365', 'Google Workspace', 'PDF Libraries', 'SQL Databases', 'CRM Platforms', 'ERP Systems', 'Knowledge Bases', 'Internal APIs', 'Cloud Storage']
    },
    {
      id: 'agents',
      title: 'AI Agents & Intelligent Automation',
      desc: 'Develop autonomous AI agents capable of reasoning, planning, and executing business workflows across multiple systems.',
      icon: <Workflow className="w-5 h-5" />,
      items: [
        'Customer Service Agents',
        'HR Assistants & Self-Service',
        'Sales Automation & Lead Nurturing',
        'Procurement Workflows',
        'Email Processing & Routing',
        'Invoice Automation',
        'Compliance Monitoring',
        'Multi-Agent Business Processes'
      ]
    },
    {
      id: 'predictive',
      title: 'Machine Learning & Predictive Analytics',
      desc: 'Leverage historical and real-time business data to forecast trends, detect anomalies, and improve operational performance.',
      icon: <TrendingUp className="w-5 h-5" />,
      items: [
        'Sales Forecasting',
        'Demand Prediction',
        'Customer Segmentation',
        'Recommendation Engines',
        'Fraud Detection',
        'Risk Analysis',
        'Predictive Maintenance',
        'Business Intelligence Models'
      ]
    },
    {
      id: 'idp',
      title: 'Intelligent Document Processing',
      desc: 'Convert unstructured documents into searchable, structured, and actionable business information.',
      icon: <FileText className="w-5 h-5" />,
      items: [
        'Invoice Processing',
        'Contract Analysis',
        'OCR & Data Extraction',
        'Resume Screening',
        'Compliance Verification',
        'Document Classification',
        'Knowledge Digitization'
      ]
    }
  ];

  // AI Solutions by Business Function
  const businessFunctions = [
    {
      id: 'cx',
      title: 'Customer Experience',
      icon: <Users className="w-5 h-5" />,
      solutions: ['AI Chatbots', 'Voice Assistants', 'Intelligent Ticket Routing', 'Customer Knowledge Assistants', 'Personalized Recommendations']
    },
    {
      id: 'sales',
      title: 'Sales & Marketing',
      icon: <LineChart className="w-5 h-5" />,
      solutions: ['Proposal Generation', 'Lead Qualification', 'CRM AI Copilots', 'Campaign Intelligence', 'Marketing Content Automation']
    },
    {
      id: 'hr',
      title: 'Human Resources',
      icon: <Briefcase className="w-5 h-5" />,
      solutions: ['Resume Screening', 'Employee Knowledge Assistant', 'HR Self-Service Chatbots', 'Policy Search', 'Workforce Analytics']
    },
    {
      id: 'finance',
      title: 'Finance & Operations',
      icon: <Calculator className="w-5 h-5" />,
      solutions: ['Invoice Automation', 'Financial Forecasting', 'Fraud Detection', 'Procurement Intelligence', 'Expense Analysis']
    },
    {
      id: 'engineering',
      title: 'IT & Engineering',
      icon: <Code className="w-5 h-5" />,
      solutions: ['Developer AI Assistants', 'Code Review Automation', 'Documentation Generation', 'Incident Intelligence', 'Log Analysis']
    },
    {
      id: 'leadership',
      title: 'Executive Leadership',
      icon: <Layers2 className="w-5 h-5" />,
      solutions: ['AI Business Dashboards', 'Predictive Reporting', 'Executive Knowledge Assistants', 'Decision Intelligence', 'Strategic Analytics']
    }
  ];

  // AI Technology Stack
  const technologies = {
    llm: {
      title: 'Large Language Models',
      items: [
        { name: 'OpenAI GPT', icon: <Sparkles className="w-5 h-5 text-emerald-500 mb-1.5 animate-pulse" /> },
        { name: 'Google Gemini', icon: <Zap className="w-5 h-5 text-blue-500 mb-1.5" /> },
        { name: 'Anthropic Claude', icon: <Compass className="w-5 h-5 text-amber-600 mb-1.5" /> },
        { name: 'Meta Llama', icon: <Cpu className="w-5 h-5 text-indigo-500 mb-1.5" /> },
        { name: 'Mistral AI', icon: <Globe className="w-5 h-5 text-orange-500 mb-1.5" /> }
      ]
    },
    frameworks: {
      title: 'AI Frameworks',
      items: [
        { name: 'LangChain', icon: <Workflow className="w-5 h-5 text-green-500 mb-1.5" /> },
        { name: 'LangGraph', icon: <Network className="w-5 h-5 text-cyan-500 mb-1.5" /> },
        { name: 'LlamaIndex', icon: <Layers className="w-5 h-5 text-purple-500 mb-1.5" /> },
        { name: 'CrewAI', icon: <Users className="w-5 h-5 text-rose-500 mb-1.5" /> },
        { name: 'AutoGen', icon: <Settings className="w-5 h-5 text-slate-500 mb-1.5" /> }
      ]
    },
    vectors: {
      title: 'Vector Databases',
      items: [
        { name: 'Pinecone', icon: <Database className="w-5 h-5 text-green-600 mb-1.5" /> },
        { name: 'Weaviate', icon: <HardDrive className="w-5 h-5 text-indigo-600 mb-1.5" /> },
        { name: 'Qdrant', icon: <Boxes className="w-5 h-5 text-amber-500 mb-1.5" /> },
        { name: 'ChromaDB', icon: <Server className="w-5 h-5 text-teal-500 mb-1.5" /> },
        { name: 'pgvector', icon: <Binary className="w-5 h-5 text-sky-500 mb-1.5" /> }
      ]
    },
    ml: {
      title: 'Machine Learning',
      items: [
        { name: 'TensorFlow', icon: <Activity className="w-5 h-5 text-orange-600 mb-1.5" /> },
        { name: 'PyTorch', icon: <Flame className="w-5 h-5 text-red-500 mb-1.5" /> },
        { name: 'Hugging Face', icon: <Bot className="w-5 h-5 text-yellow-500 mb-1.5" /> },
        { name: 'Scikit-learn', icon: <LineChart className="w-5 h-5 text-blue-600 mb-1.5" /> }
      ]
    },
    cloud: {
      title: 'Cloud AI Platforms',
      items: [
        { name: 'Google Vertex AI', icon: <Cloud className="w-5 h-5 text-blue-500 mb-1.5" /> },
        { name: 'Microsoft Azure AI', icon: <Cloud className="w-5 h-5 text-sky-500 mb-1.5" /> },
        { name: 'Azure OpenAI', icon: <Cloud className="w-5 h-5 text-teal-600 mb-1.5" /> },
        { name: 'AWS Bedrock', icon: <Cloud className="w-5 h-5 text-orange-400 mb-1.5" /> },
        { name: 'Amazon SageMaker', icon: <Cloud className="w-5 h-5 text-amber-600 mb-1.5" /> }
      ]
    }
  };

  const activeTechTabObj = technologies[activeTechTab as keyof typeof technologies] || technologies.llm;

  return (
    <div className="space-y-24 py-12">
      {/* Premium Hero Section */}
      <section className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <BrainCircuit className="w-3.5 h-3.5 animate-pulse" />
              <span>SAINI COGNITIVE INNOVATION LAB</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-950 tracking-tight leading-none">
              Enterprise AI Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Built for the Future of Business</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
              Artificial Intelligence is redefining how organizations innovate, operate, and compete. At <strong>Saini Collection</strong>, we design and implement enterprise-grade AI solutions that combine advanced language models, intelligent automation, and modern architecture to solve complex business challenges.
            </p>
            <p className="font-sans text-sm text-gray-500">
              From strategic AI consulting to production-ready AI platforms, we help organizations accelerate innovation while maintaining security, governance, and long-term scalability.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            {/* Visual background glow decor */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-25" />
            <div className="relative bg-white p-2.5 rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden aspect-[16/10]">
              <img 
                src="/src/assets/images/enterprise_ai_hero_1784065828675.jpg" 
                alt="Saini Enterprise AI Cognitive Neural Network Visualizer" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Enterprise AI */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Why Enterprise AI</div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Transform Data Into Business Intelligence
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                AI is no longer just about automation—it's about enabling smarter decisions, faster operations, and sustainable growth. Organizations generate valuable information every day, yet much of it remains disconnected across applications, documents, and business systems. Enterprise AI bridges these information gaps, empowering teams with real-time insights and intelligent workflows.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/50 shadow-xs">
              <h3 className="font-display font-bold text-lg text-gray-950 mb-4 pb-2 border-b border-slate-100 flex items-center space-x-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
                <span>Primary Strategic Benefits</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Accelerate decision-making with AI-powered insights',
                  'Automate repetitive and time-consuming business processes',
                  'Improve operational efficiency across departments',
                  'Deliver personalized customer experiences',
                  'Unlock enterprise knowledge through intelligent search',
                  'Reduce manual effort and operational overhead',
                  'Increase productivity through AI-assisted workflows',
                  'Strengthen business agility and innovation',
                  'Enable scalable digital transformation initiatives'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-gray-600 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise AI Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Our Service Catalog</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Comprehensive AI Engineering &amp; Consulting
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            We provide end-to-end AI services that help organizations adopt, integrate, and scale artificial intelligence with confidence. Select an engineering module to inspect our specific delivery items.
          </p>
        </div>

        {/* Interactive Capability Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls - Left Col */}
          <div className="lg:col-span-5 space-y-2.5">
            {capabilities.map((cap) => {
              const isSelected = selectedCapability === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedCapability(cap.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/15' 
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      {cap.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base tracking-tight">{cap.title}</h4>
                      <p className={`font-sans text-[11px] truncate max-w-[240px] sm:max-w-xs ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'translate-x-1' : 'text-gray-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Viewer Container - Right Col */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {capabilities.map((cap) => {
                if (cap.id !== selectedCapability) return null;
                return (
                  <motion.div
                    key={cap.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6 text-left"
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Active Scope Overview</div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-950 flex items-center space-x-2">
                        <span>{cap.title}</span>
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Service Capabilities:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                        {cap.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                            <span className="font-medium text-[12px] text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cap.sources && (
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Supported Knowledge Sources:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cap.sources.map((src, i) => (
                            <span key={i} className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md border border-blue-100/40">
                              {src}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* AI Solutions by Business Function */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-100 w-full text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Target Alignment</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
              AI Solutions by Business Function
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-700">
              We translate raw AI potential into targeted functional tools across your organization's core operations. Choose a department below to explore active deployment scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Dept selector tabs */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              {businessFunctions.map((dept) => {
                const isSelected = selectedFunction === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedFunction(dept.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-900 border-slate-950 text-white shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200/60 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                        {dept.icon}
                      </div>
                      <span className="font-display font-bold text-xs sm:text-sm tracking-tight">{dept.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-350'}`} />
                  </button>
                );
              })}
            </div>

            {/* Departmental solutions grid */}
            <div className="lg:col-span-8 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/50">
              <AnimatePresence mode="wait">
                {businessFunctions.map((dept) => {
                  if (dept.id !== selectedFunction) return null;
                  return (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
                        <div className="p-2 bg-blue-600 text-white rounded-xl">
                          {dept.icon}
                        </div>
                        <h4 className="font-display font-extrabold text-lg text-gray-950">{dept.title} AI Blueprint</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dept.solutions.map((sol, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex items-start space-x-3">
                            <span className="w-5 h-5 bg-blue-50 text-blue-600 font-mono font-bold text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <div>
                              <span className="font-display font-bold text-xs sm:text-sm text-gray-900 block">{sol}</span>
                              <span className="font-sans text-[11px] text-gray-600">Production-ready, highly secure operational endpoint.</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">System Portability</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-950 tracking-tight leading-tight">
              Connect AI Across Your Enterprise Ecosystem
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
              Artificial Intelligence delivers maximum value when integrated into existing business systems. We connect AI capabilities with your enterprise applications to create intelligent, automated workflows without disrupting current operations.
            </p>
          </div>
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/50">
            <span className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest block mb-4">Supported Platforms &amp; API Systems:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Microsoft 365', 'Google Workspace', 'Salesforce', 'SAP',
                'Microsoft Dynamics 365', 'HubSpot', 'Shopify', 'WooCommerce',
                'SharePoint', 'ERP Platforms', 'CRM Systems', 'Custom Business Applications'
              ].map((platform, idx) => (
                <div key={idx} className="bg-white px-4 py-3 rounded-xl border border-slate-200 text-center flex items-center justify-center hover:border-blue-300 transition-colors shadow-xs">
                  <span className="font-display font-bold text-xs text-gray-800">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-100 w-full text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Platform Portability</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
              AI Technology Stack
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-700">
              Our engineering team maintains high capability levels across major LLM foundation systems, cloud providers, and vector registries.
            </p>
          </div>

          {/* Interactive Tech Categories Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            {Object.entries(technologies).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTechTab(key)}
                className={`font-sans text-xs font-bold py-2 px-4 rounded-full border tracking-wide transition-all cursor-pointer ${
                  activeTechTab === key
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 border-slate-200 text-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
            <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider mb-4">
              {activeTechTabObj.title} we employ:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {activeTechTabObj.items.map((tech, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 hover:bg-blue-50/20 hover:border-blue-200 transition-all duration-150 text-center flex flex-col justify-center items-center">
                  {tech.icon}
                  <span className="font-display font-bold text-xs sm:text-sm text-gray-800">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Responsible AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase flex items-center space-x-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Responsible AI &amp; Security</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-950 tracking-tight leading-tight">
              Enterprise AI Governance
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
              Successful AI adoption requires more than intelligent models—it demands security, governance, transparency, and operational resilience. Every AI solution we develop follows enterprise engineering practices to ensure responsible, secure, and compliant AI deployment.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Private AI Deployments', desc: 'Secure local cloud virtualization isolating LLM nodes completely inside your corporate VPC parameters.' },
              { title: 'Secure API Architecture', desc: 'Strict transit-level and client-level access control with robust gateway token limit filters.' },
              { title: 'Role-Based Permissions', desc: 'Limit what documents an agent can read based on active directory security clearance.' },
              { title: 'Prompt Security & Guardrails', desc: 'Protect system inputs against injection threats, toxic language, or credit card leaks.' },
              { title: 'Responsible AI Frameworks', desc: 'Transparent audit logs explaining citations, grounding sources, and compliance markers.' },
              { title: 'Continuous Monitoring', desc: 'Real-time telemetry measuring pipeline latencies, token consumption, and errors.' }
            ].map((secItem, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow space-y-2">
                <h4 className="font-display font-bold text-sm sm:text-base text-gray-900 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{secItem.title}</span>
                </h4>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">{secItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saini Collection */}
      <section className="bg-slate-950 text-white py-20 sm:py-24 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-left">
          <div className="max-w-3xl space-y-3 text-center mx-auto">
            <span className="text-xs font-mono font-extrabold text-blue-400 tracking-widest uppercase">Our Delivery Advantage</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Enterprise AI Engineering with Business Impact
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300">
              Technology creates value only when it solves real business challenges. Our approach combines strategic consulting, enterprise architecture, and modern AI engineering to deliver secure, scalable, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
            {[
              { title: 'Business-First AI Strategy', desc: 'Assessing your goals directly to project bottom-line values before coding.' },
              { title: 'Enterprise AI Consulting', desc: 'Developing strict compliance blueprints and governance models.' },
              { title: 'Custom AI Solution Development', desc: 'Custom RAG datasets and agent loops built specifically for your targets.' },
              { title: 'Modern AI Architecture', desc: 'Modular microservice setups utilizing advanced container scaling.' },
              { title: 'Intelligent Automation & AI Agents', desc: 'Autonomous multi-role actor networks taking on complex processes.' },
              { title: 'Secure & Private AI Deployments', desc: 'Keeping data isolated to prevent unauthorized leaks.' },
              { title: 'Cloud-Native Engineering', desc: 'Robust container deployments with fast database capabilities.' },
              { title: 'Enterprise System Integration', desc: 'Clean connections directly into legacy CRM/ERP infrastructures.' },
              { title: 'Responsible AI Governance', desc: 'Guarding outputs against harmful behaviors or compliance failures.' },
              { title: 'Continuous Optimization & Support', desc: 'Regular performance analyses and system adjustments to lower costs.' }
            ].map((w, i) => (
              <div key={i} className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white tracking-tight">{w.title}</h4>
                  <p className="font-sans text-[11px] text-slate-300 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Guard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 text-left space-y-3">
          <h4 className="font-display font-bold text-gray-900 text-base flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-blue-600 animate-pulse" />
            <span>Saini Collection AI Architecture Assurance</span>
          </h4>
          <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
            Our AI engineering pipelines undergo strict automated evaluation, aligning with top-tier global enterprise security frameworks. Every single server endpoint, private key constraint, and vector pipeline is production-verified to protect against injection threats, semantic leaks, and compliance violations.
          </p>
        </div>
      </section>
    </div>
  );
}
