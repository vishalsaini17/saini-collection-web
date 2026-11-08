import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Milestone, 
  Compass, 
  Rocket, 
  Users, 
  Target, 
  Heart,
  Cpu,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  GitPullRequest,
  CheckCircle2
} from 'lucide-react';

export default function AboutView() {
  const coreValues = [
    { title: 'Innovation', desc: 'Continuously evaluating modern, emerging technologies to keep your systems at the absolute frontier of speed.' },
    { title: 'Integrity', desc: 'Direct access to senior principals. Flat rates with no hidden management fees or artificial upcharges.' },
    { title: 'Collaboration', desc: 'We act as an integrated extension of your delivery team, participating in joint technical dry runs.' },
    { title: 'Ownership', desc: 'We hold complete end-to-end accountability from raw discovery diagrams through active maintenance SLA stages.' },
    { title: 'Excellence', desc: 'Strict typing, modular configurations, sub-second responses, and beautiful fluid UI layouts as standard.' },
    { title: 'Continuous Learning', desc: 'Constantly training on cloud models, vector indices, and serverless compute pools to refine our crafts.' },
    { title: 'Customer Success', desc: 'We benchmark project value purely by measurable business outcomes, optimization rates, and user retention.' }
  ];

  const engineeringCulture = [
    { title: 'Modern Engineering', desc: 'Strict typescript, clean modular states, and modern front-end frameworks (React, Next.js).' },
    { title: 'Automation', desc: 'Rigorous automated code checking, continuous integration pipelines, and automated QA runs.' },
    { title: 'Architecture First', desc: 'Documenting database structures, API schemas, and cloud platforms before writing operational scripts.' },
    { title: 'Production Quality', desc: 'Frictionless micro-animations, fast critical rendering paths, and responsive fluid styling.' },
    { title: 'Zero Trust Security', desc: 'Active encryption key isolation, security role configurations, and HIPAA/GDPR readiness reviews.' },
    { title: 'Continuous Sprints', desc: 'Agile milestone sprints allowing fast, predictable feedback loops and constant product evolution.' }
  ];

  const leadershipPhilosophy = [
    { label: 'Business First', val: 'We align engineering decisions with commercial revenue objectives, avoiding unnecessary over-engineering.' },
    { label: 'Engineering Excellence', val: 'Our principal architects write secure, scalable code adhering to global enterprise high-availability standards.' },
    { label: 'Calculated Innovation', val: 'Integrating proven cognitive AI nodes (Gemini, private context vector models) where it yields clear utility.' },
    { label: 'Complete Transparency', val: 'Direct communication channels with senior coders, and flat-rate milestones for predictable costs.' },
    { label: 'Long-Term Partnership', val: 'Providing post-launch server optimization, monitoring, patches, and upgrades for years to come.' }
  ];

  const trustPillars = [
    { title: 'Enterprise Thinking', desc: 'Designing secure, multi-tenant databases and microservices structured for high concurrent workloads.' },
    { title: 'Senior Engineers Only', desc: 'Bypassing junior developers and bloated client-relations managers. Work directly with senior principals.' },
    { title: 'Transparent Communication', desc: 'Direct slack/terminal feedback loops, and daily git push commits for continuous visibility.' },
    { title: 'Agile Delivery', desc: 'Milestone schedules ensuring you see working software in weeks, not years, with zero surprises.' },
    { title: 'Scalable Solutions', desc: 'Our cloud setups scale-to-zero during quiet periods, saving hosting costs, and auto-scale under load spikes.' }
  ];

  return (
    <div className="w-full bg-slate-50/50 space-y-24 py-12">
      
      {/* 1. HERO SECTION */}
      <section className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Saini Collection Studio</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-950 tracking-tight leading-none">
            A High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Product &amp; Consulting Studio</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl pt-2">
            Saini Collection provides the technical sophistication and robust execution standards of leading global IT consultancies, delivered through focused, agile, senior-tier product teams.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Brand narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-950 tracking-tight">
              Our Journey: Senior Software Architecture &amp; Product Craft
            </h2>
            
            <div className="space-y-4 font-sans text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Saini Collection was founded by a senior technologist with comprehensive expertise in backend databases, custom React visual layers, and Google Cloud systems. Having spent years in high-stakes technology environments, we recognized a systemic flaw: modern organizations were tired of the massive administrative overhead, slow cycles, and high markup costs of traditional legacy consultancies.
              </p>
              <p>
                We launched Saini Collection to act as a fast-acting, hyper-competent engineering studio. We build custom React frameworks, high-throughput backend APIs, custom cloud infrastructure pipelines, and responsive inventory setups in record time.
              </p>
              <p>
                By working with a flat organizational model where clients interface directly with the senior architects writing the actual lines of code, we deliver flawless visual designs, robust security baselines, and unbeatable execution speeds.
              </p>
            </div>

            {/* Micro stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <span className="font-display font-black text-2xl text-blue-600 block">Core</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block font-bold">Architecture</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl text-blue-600 block">GCP</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block font-bold">Cloud Partner</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl text-blue-600 block">100%</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block font-bold">Code Quality</span>
              </div>
            </div>
          </div>

          {/* Sidebar Highlight Box */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl shadow-blue-600/10 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 text-white p-2.5 rounded-xl">
                <Rocket className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display font-bold text-xl">Saini Delivery Agility</h3>
            </div>

            <p className="font-sans text-sm text-blue-50 leading-relaxed italic">
              "We provide world-class web design, backend engineering, and intelligent AI models that empower your business. We prioritize crystal-clear communication, flat-rate pricing, and beautiful visual quality in every build."
            </p>

            <div className="space-y-4 pt-4 border-t border-white/15 text-xs font-sans text-blue-100">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-300 flex-shrink-0" />
                <span>Production-verified deployments</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-4.5 h-4.5 text-blue-300 flex-shrink-0" />
                <span>Lead developer direct oversight</span>
              </div>
              <div className="flex items-center space-x-3">
                <Milestone className="w-4.5 h-4.5 text-blue-300 flex-shrink-0" />
                <span>Agile milestone-based sprints</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION BANNERS */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          
          <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/40">
            <div className="bg-blue-50 w-9 h-9 rounded-xl flex items-center justify-center border border-blue-100">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-gray-950">Our Mission</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed">
              To engineer secure, highly-scalable, and beautifully designed custom technologies that align directly with business goals, eliminating consulting bloat and empowering sustainable digital evolution.
            </p>
          </div>

          <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/40">
            <div className="bg-indigo-50 w-9 h-9 rounded-xl flex items-center justify-center border border-indigo-100">
              <Heart className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-gray-950">Our Vision</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-750 leading-relaxed">
              To remain the global benchmark for high-performance agile digital studios—where top-tier software craft is delivered transparently, and technological solutions create immediate, measurable market value.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Cultural Anchors</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Our Core Values
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            These core principles guide our day-to-day engineering practices, decision matrixes, and partner communications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs hover:border-blue-200 transition-colors flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-extrabold text-blue-500 uppercase tracking-widest">VALUE 0{idx + 1}</div>
                <h4 className="font-display font-extrabold text-sm sm:text-base text-gray-950">{val.title}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ENGINEERING CULTURE */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-400 tracking-widest uppercase font-bold">Our Manifesto</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Our Engineering Culture
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300">
              We approach coding as a precise craft. We value readability, test coverage, and complete automation over manual, slow workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCulture.map((culture, idx) => (
              <div key={idx} className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="font-display font-bold text-xs sm:text-sm text-blue-400 flex items-center space-x-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{culture.title}</span>
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">{culture.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LEADERSHIP PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-extrabold text-blue-600 tracking-widest uppercase">Our Governance</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-950 tracking-tight">
            Leadership Philosophy
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-700">
            Our management model centers on absolute focus, transparent cost matrices, and principal developer execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {leadershipPhilosophy.map((phil, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest block">RULE 0{idx + 1}</span>
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">{phil.label}</h4>
                <p className="font-sans text-[11px] sm:text-xs text-gray-700 leading-relaxed">{phil.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY TRUST US */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-y border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-extrabold text-blue-400 tracking-widest uppercase font-bold">Assurance</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Why Organizations Trust Saini Collection
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300">
              We anchor every project scope, code integration, and system migration in clear, structured corporate integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-display font-bold text-xs sm:text-sm text-white">{pillar.title}</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-blue-600/10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Ready to Work with Senior Engineers? <br />
              Schedule Your Core Strategy Discovery.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl mx-auto">
              Skip the sales executives. Speak directly with senior architects to evaluate your challenges and outline a robust, transparent tech roadmap.
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href="#/get-proposal"
                className="bg-white text-blue-600 hover:bg-slate-50 font-sans font-bold text-xs sm:text-sm py-3 px-6 sm:px-8 rounded-xl flex items-center space-x-2 cursor-pointer shadow-lg active:scale-98 transition-all"
              >
                <span>Request Principal Discovery</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
