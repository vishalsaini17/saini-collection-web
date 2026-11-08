import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Landmark, 
  Truck, 
  Settings, 
  ArrowRight, 
  ShieldAlert, 
  BadgePercent, 
  Cpu, 
  Activity, 
  Layers, 
  Compass, 
  Lock, 
  Sparkles, 
  ChevronDown,
  ArrowUpRight,
  Cloud,
  Database,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export default function IndustriesView() {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('healthcare');

  const industriesList = [
    {
      id: 'healthcare',
      icon: <Activity className="w-5 h-5 text-emerald-600" />,
      title: 'Healthcare & Life Sciences',
      short: 'Patient experience, digital charts & HIPAA compliance.',
      challenges: 'Outdated legacy charting portals, slow records accessibility, and strict compliance liabilities.',
      solutions: [
        { name: 'Patient Experience Portal', desc: 'Sleek scheduler calendars, secure direct messaging logs, and prescription histories.' },
        { name: 'AI Documentation', desc: 'Secure Generative AI pipelines that draft clinical summaries, saving critical doctor minutes.' },
        { name: 'EMR & Data Middleware', desc: 'Fast database connectors aligning health records smoothly with HL7/FHIR guidelines.' },
        { name: 'HIPAA Shield Guard', desc: 'Restricted role boundaries, secure access credentials, and immutable audit record tracking.' }
      ],
      benefits: 'Reduces scheduling friction, streamlines doctor workloads, and provides absolute patient data safety.',
      stat: '99.9% Secure'
    },
    {
      id: 'finance',
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
      title: 'Financial Services & Fintech',
      short: 'Transaction tracking, digital banking & fraud analytics.',
      challenges: 'Slow payment verification loops, database latency spikes, and evolving regulatory audits.',
      solutions: [
        { name: 'Fraud Analytics Pipeline', desc: 'Utilizing automated cognitive models to identify suspicious payment profiles in milliseconds.' },
        { name: 'Risk Assessment Dashboards', desc: 'Interactive charts rendering active credit distributions, portfolios, and capital margins.' },
        { name: 'Digital Banking Wrappers', desc: 'High-availability customer bank dashboards built for instant responsive mobile screens.' },
        { name: 'Automated KYC / AML Run', desc: 'Integrating modern identity document scans with high-speed compliance registries.' }
      ],
      benefits: 'Slashes financial checkout latency, minimizes processing risk, and ensures smooth compliance reporting.',
      stat: 'Sub-second Verification'
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-5 h-5 text-violet-600" />,
      title: 'Retail & E-Commerce',
      short: 'Omnichannel sales, recommendations & real-time inventory.',
      challenges: 'Cart abandonment spikes, database synchronization failures, and poor mobile rendering speeds.',
      solutions: [
        { name: 'High-Conversion Checkout', desc: 'Stripe-integrated custom payment systems supporting apple-pay, card vaults, and localized taxes.' },
        { name: 'AI Recommendations', desc: 'Retrieval model pipelines recommending companion products based on historical customer habits.' },
        { name: 'Live Inventory Sync', desc: 'Instant database publishers notifying storage systems across multiple visual storefront locations.' },
        { name: 'Interactive POS Adapters', desc: 'Linking retail registers with web commerce catalogs for unified stock reporting.' }
      ],
      benefits: 'Maximizes sales checkout rates, keeps warehouses synchronized, and offers elegant user shopping loops.',
      stat: '35% Sales Lift'
    },
    {
      id: 'manufacturing',
      icon: <Settings className="w-5 h-5 text-slate-600" />,
      title: 'Manufacturing & Industry 4.0',
      short: 'IoT sensor telemetries, predictive runs & custom ERP.',
      challenges: 'Unplanned equipment down periods, disjointed logistics workflows, and lack of visual data pipelines.',
      solutions: [
        { name: 'IoT Telemetry Monitors', desc: 'Dynamic timeseries charts mapping localized hardware temperatures, vibrations, and metrics.' },
        { name: 'Predictive Maintenance Engine', desc: 'Advanced cognitive models projecting machine failures ahead of actual breakdowns.' },
        { name: 'Enterprise ERP Integrations', desc: 'Consolidating production timetables, supplier catalogs, and client invoices into unified structures.' },
        { name: 'Live Operations Center', desc: 'High-performance interactive maps visualizing shipping coordinates and inventory bins.' }
      ],
      benefits: 'Preempts costly factory delays, optimizes supplier operations, and provides complete plant transparency.',
      stat: '22% Operational Boost'
    }
  ];

  const secondaryIndustries = [
    { name: 'Education', desc: 'Custom learning path portals & secure student databases.' },
    { name: 'Real Estate', desc: 'Floor plans, valuer grids & broker communications.' },
    { name: 'Logistics', desc: 'Dispatch charts, routing systems & fleet metrics.' },
    { name: 'Government', desc: 'Public document vaults & access-restricted citizen portals.' },
    { name: 'Insurance', desc: 'Claim estimators, policy calculators & instant document uploads.' },
    { name: 'Hospitality', desc: 'Room reservation engines, checkout logs & custom room service widgets.' },
    { name: 'Professional Services', desc: 'Billing logs, advisor timelines & project status boards.' },
    { name: 'Automotive Parts', desc: 'Jai Durge Traders styled SKU indexing, catalog queries & partner orders.' }
  ];

  const crossCapabilities = [
    { title: 'Secure Cloud Architecture', desc: 'Containerizing workloads with Docker & Kubernetes, managed via Terraform.', icon: <Cloud className="w-5 h-5 text-blue-600" /> },
    { title: 'Cognitive AI Pipelines', desc: 'Integrating Google Gemini, private context embeddings, and auto-agent nodes.', icon: <Sparkles className="w-5 h-5 text-indigo-600" /> },
    { title: 'Responsive Mobile Apps', desc: 'Designing fast native/cross-platform layouts with offline-first local storage.', icon: <Smartphone className="w-5 h-5 text-violet-600" /> },
    { title: 'High-Performance Databases', desc: 'Optimizing Firestore, PostgreSQL, and Redis cache clusters under load spikes.', icon: <Database className="w-5 h-5 text-emerald-600" /> }
  ];

  return (
    <div className="w-full bg-slate-50/50 space-y-24 py-12">
      
      {/* 1. HERO SECTION */}
      <section className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <Landmark className="w-3.5 h-3.5" />
            <span>Target Sectors &amp; Expertise</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-950 tracking-tight leading-none">
            Industry-Specific <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Transformation</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl pt-2">
            Every sector operates under unique operational constraints, regulatory liabilities, and performance benchmarks. We build highly scalable, custom technologies tailored to next-generation business verticals.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC INDUSTRY SOLUTION DETAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Deep Dive Solutions</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Targeted Domain Blueprints
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            Select an industry sector below to visualize our customized challenge scopes, software solution sets, and measurable benefits.
          </p>
        </div>

        {/* Industry selector tabs */}
        <div className="flex flex-wrap gap-2.5 pb-2 border-b border-slate-200">
          {industriesList.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`font-sans font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center space-x-2 border ${
                activeIndustryId === ind.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/15'
                  : 'bg-white text-gray-700 border-slate-200 hover:bg-slate-50 shadow-xs'
              }`}
            >
              <span>{ind.title}</span>
            </button>
          ))}
        </div>

        {/* Solutions visualizer panel */}
        {industriesList.map((ind) => {
          if (ind.id !== activeIndustryId) return null;
          return (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left detail Column */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center border border-blue-100 shadow-xs">
                      {ind.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">{ind.stat}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-950 pt-2">{ind.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 italic">"{ind.short}"</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1 bg-rose-50/50 p-4 rounded-xl border border-rose-100/40">
                    <h4 className="font-display font-bold text-xs text-rose-700 uppercase tracking-wider flex items-center space-x-1.5">
                      <span>⚠️ Principal Challenges</span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed">{ind.challenges}</p>
                  </div>

                  <div className="space-y-1 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/40">
                    <h4 className="font-display font-bold text-xs text-emerald-700 uppercase tracking-wider flex items-center space-x-1.5">
                      <span className="text-emerald-500">✓</span>
                      <span>Key Business Benefits</span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed">{ind.benefits}</p>
                  </div>
                </div>
              </div>

              {/* Right solutions list Column */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block">Custom Solutions Implemented:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ind.solutions.map((sol, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-100/70 hover:border-blue-200 transition-colors flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900">{sol.name}</h4>
                        <p className="font-sans text-xs text-gray-600 leading-relaxed">{sol.desc}</p>
                      </div>
                      <span className="font-mono text-[9px] text-blue-600/95 font-bold uppercase tracking-widest mt-3 flex items-center space-x-1">
                        <span>•</span>
                        <span>Full Integration</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. ADDITIONAL INDUSTRIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Broader Expertise</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Comprehensive Cross-Industry Capabilities
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            Beyond our primary focus domains, we deliver top-tier engineering support across a wide spectrum of modern sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {secondaryIndustries.map((sec, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900">{sec.name}</h4>
              <p className="font-sans text-[11px] text-gray-500 mt-1 leading-relaxed">{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REAL-WORLD CASE STUDY (JAI DURGE TRADERS) */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-y border-slate-950">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Case Study text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-mono font-bold text-blue-400 uppercase">
                <span>Real-World Impact Case Study</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Saini Collection + Jai Durge Traders Integration
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                We designed and deployed a full-scale, responsive inventory and parts tracking portal for <strong>Jai Durge Traders</strong> in Gurgaon. By index-mapping over 4,500 automotive accessories with sub-second local search caches, we helped them automate orders and scale their logistics, reducing manual SKU-matching efforts by 85%.
              </p>
            </div>

            {/* Case Study stat block */}
            <div className="lg:col-span-4 lg:text-right w-full">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left inline-block w-full max-w-sm shadow-xl">
                <div className="font-display font-black text-4xl sm:text-5xl text-blue-400">85%</div>
                <div className="font-sans font-bold text-xs text-white uppercase tracking-wider mt-1.5">Manual Effort Reduction</div>
                <p className="font-sans text-xs text-slate-400 mt-2 leading-relaxed">
                  Indexed over 4,500 parts, integrated with live distributor pricing matrices, and implemented offline caches.
                </p>
                <div className="border-t border-slate-800/80 pt-3 mt-4 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  Deployed successfully in 2026
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CROSS-INDUSTRY CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Cross-Cutting Engineering</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Universal Architectural Capabilities
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            No matter the sector, we anchor every solution in global modern engineering and security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crossCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-xs hover:border-blue-200 transition-all duration-150 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="bg-slate-50 w-9 h-9 rounded-xl flex items-center justify-center border border-slate-100 shadow-inner">
                  {cap.icon}
                </div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-gray-950 pt-1">{cap.title}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
