import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Cloud, 
  Globe, 
  Smartphone, 
  Check, 
  Star,
  Activity,
  Layers,
  Infinity,
  Shield
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full bg-white text-slate-900 flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 text-blue-600 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Next-Gen Enterprise Engineering Partner</span>
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1] md:leading-[1.08]">
              Enterprise Scale. <br />
              <span className="text-blue-600">Agile Delivery.</span> <br />
              Cognitive Excellence.
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl pt-2">
              We design and engineer hyper-scalable enterprise platforms, custom cognitive AI systems, and robust cloud-native infrastructures. Saini Collection is your digital transformation partner, delivering world-class engineering with unmatched execution velocity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl flex items-center space-x-2 shadow-lg shadow-blue-600/15 cursor-pointer active:scale-98 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Offerings</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-sans font-bold text-sm py-3.5 px-6 rounded-xl shadow-xs cursor-pointer active:scale-98 hover:-translate-y-0.5 transition-all"
              >
                Request Architecture Call
              </button>
            </div>
          </div>

          {/* Hero Right Image Canvas */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-10" />
            <div className="relative bg-white p-3 rounded-3xl border border-slate-100 shadow-2xl aspect-[4/3] overflow-hidden">
              <img 
                src="/src/assets/images/workspace_laptop_1783628858963.jpg" 
                alt="Saini Collection Enterprise Architecture Workspace" 
                width="600"
                height="450"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlaid Delivery Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center space-x-3 max-w-[260px] z-10">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-xs text-slate-950">Top-Tier Delivery</h4>
                <p className="font-sans text-[10px] text-slate-500 mt-0.5 leading-snug">
                  Applying industry-leading engineering paradigms
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DELIVERY FRAMEWORKS SECTION */}
      <section className="bg-slate-50/40 py-16 sm:py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
              Our Professional Delivery Frameworks
            </span>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Aligning our digital engineering methodologies with world-class global consulting standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                label: 'FLUID ENGINEERING', 
                subtitle: 'Thinking Breakthroughs',
                icon: <Activity className="w-5 h-5 text-blue-600" />
              },
              { 
                label: 'ENTERPRISE SCALE', 
                subtitle: 'Global Delivery Excellence',
                icon: <Layers className="w-5 h-5 text-blue-600" />
              },
              { 
                label: 'SEAMLESS INTEGRATION', 
                subtitle: 'Infinite Digital Possibilities',
                icon: <Infinity className="w-5 h-5 text-blue-600" />
              },
              { 
                label: 'UNWAVERING TRUST', 
                subtitle: 'Institutional Quality & Integrity',
                icon: <Shield className="w-5 h-5 text-blue-600" />
              }
            ].map((framework, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className="bg-blue-50/50 w-10 h-10 rounded-xl flex items-center justify-center">
                  {framework.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-slate-400 tracking-wider block">
                    {framework.label}
                  </span>
                  <span className="font-display font-bold text-xs sm:text-sm text-blue-600 block">
                    {framework.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SAINI ADVANTAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <span>☇</span>
              <span>The Saini Collection Advantage</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-[1.15]">
              Where Business Strategy Meets Engineering Excellence
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Technology delivers its greatest value when it's aligned with <strong className="font-semibold text-slate-900">business strategy</strong>. We combine <strong className="font-semibold text-slate-900">deep engineering expertise</strong> with a <strong className="font-semibold text-slate-900">business-first approach</strong> to deliver <strong className="font-semibold text-blue-600">next-generation digital solutions</strong>, modern architecture, and <strong className="font-semibold text-slate-900">enterprise architecture management</strong>. Every solution is designed to be <strong className="font-semibold text-slate-900">secure, scalable, and future-ready</strong>—helping organizations improve operational efficiency, accelerate innovation, and build a <strong className="font-semibold text-blue-600">lasting competitive advantage</strong>.
            </p>

            {/* Bullet list */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {[
                {
                  title: 'Direct Principal Access',
                  desc: 'Work directly with principal engineers and digital solution leads who own the architecture from start to finish.'
                },
                {
                  title: 'Accelerated Feasibility & Prototyping',
                  desc: 'Deploy robust, production-grade Proof-of-Concepts in fraction of the time, built with auto-scaling container configurations.'
                },
                {
                  title: 'Next-Generation AI-First Systems',
                  desc: 'Harness agentic LLM architectures, secure multi-model pipelines, and advanced vector indexes natively integrated into your products.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-left">
                  <div className="bg-emerald-50 text-emerald-600 p-1 rounded-md mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-900">{item.title}</h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Grid of 4 Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 self-center">
            {[
              {
                title: 'AI & Cognitive Systems',
                desc: 'Generative AI, custom LLM fine-tuning, intelligent automation, and agentic workflows that redefine operational velocity.',
                icon: <Sparkles className="w-5 h-5 text-blue-600" />
              },
              {
                title: 'Cloud & Infrastructure',
                desc: 'Architecting high-availability, auto-scaling, cloud-native deployments across GCP, AWS, and Azure.',
                icon: <Cloud className="w-5 h-5 text-blue-600" />
              },
              {
                title: 'Full-Scale Web Engineering',
                desc: 'Frictionless, responsive, high-performance web applications built using cutting-edge enterprise frameworks.',
                icon: <Globe className="w-5 h-5 text-blue-600" />
              },
              {
                title: 'Next-Gen Mobile Solutions',
                desc: 'Native and cross-platform mobile apps featuring slick, modern transitions and offline-first storage mechanisms.',
                icon: <Smartphone className="w-5 h-5 text-blue-600" />
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 text-left space-y-4 flex flex-col justify-between min-h-[190px]"
              >
                <div className="bg-blue-50/50 w-10 h-10 rounded-xl flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-950 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BLUE CTA BOX SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-left text-white shadow-xl shadow-blue-600/15 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-1.5 bg-white/15 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-wider">
              <span>⚙ Next-Gen Enterprise Engine</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
              Ready to construct stable, enterprise-grade cloud systems?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-blue-50 leading-relaxed">
              From high-traffic APIs to complex multi-tenant SaaS dashboards and intelligent workflows, we engineer tailored software structures utilizing D3, Recharts, and Google Cloud integrations.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10 self-start md:self-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-slate-50 text-blue-600 font-sans font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl flex items-center space-x-2 cursor-pointer shadow-md active:scale-98 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SLOGAN DIVIDER */}
      <section className="border-t border-slate-100 py-16 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Engineered with Absolute Integrity &amp; Client Satisfaction
        </h2>
      </section>

      {/* 6. VOICES OF OUR CLIENTS SECTION */}
      <section className="bg-slate-50/30 py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight inline-block relative">
              Voices of <span className="text-blue-600 relative">Our Clients<span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-blue-600 rounded-full"></span></span>
            </h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Hear from people who trust us with their vision and digital transformation.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-slate-150 shadow-md max-w-3xl mx-auto space-y-6 text-left relative">
            {/* Elegant double quote icon in the top right */}
            <div className="absolute top-6 right-8 text-slate-100 font-serif text-8xl leading-none select-none pointer-events-none">
              “
            </div>

            <div className="flex space-x-1 text-amber-500">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4.5 h-4.5 fill-amber-500 stroke-amber-500" />
              ))}
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed italic relative z-10">
              "Saini Collection built our inventory management portal that perfectly streamlines our car accessories and parts operations. The system is intuitive, reliable, and has significantly improved our internal workflow. Highly impressed with their technical expertise!"
            </p>

            <div className="pt-6 border-t border-slate-100 flex items-center space-x-4">
              <div className="bg-blue-600 text-white font-display font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md shadow-blue-500/10">
                A
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-sm text-slate-900 block">
                  Aman Sharma
                </span>
                <span className="font-sans text-xs text-slate-500 block mt-0.5">
                  Founder, <span className="text-blue-600 font-semibold">Jai Durge Traders</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
