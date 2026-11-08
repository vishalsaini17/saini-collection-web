import { motion } from 'motion/react';
import { 
  Zap, 
  Settings, 
  RefreshCw, 
  Activity, 
  Heart, 
  ShieldCheck, 
  Cloud, 
  Lock, 
  LineChart, 
  TrendingUp 
} from 'lucide-react';

export default function BusinessOutcomes() {
  const outcomes = [
    {
      title: 'Accelerate Digital Transformation',
      desc: 'Deploy production applications in months, not years, with modern scaffolds.',
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Improve Operational Efficiency',
      desc: 'Automate legacy bottlenecks, routine manual data entries, and notification cycles.',
      icon: <Settings className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Modernize Legacy Systems',
      desc: 'Migrate outdated technical monoliths to scalable serverless and microservices architectures.',
      icon: <RefreshCw className="w-5 h-5 text-indigo-500" />
    },
    {
      title: 'Increase Business Agility',
      desc: 'Adapt quickly to market updates with decoupled modular components and clean APIs.',
      icon: <Activity className="w-5 h-5 text-violet-500" />
    },
    {
      title: 'Enhance Customer Experience',
      desc: 'Deliver highly responsive, intuitive, and consistent UI layouts across desktop and mobile.',
      icon: <Heart className="w-5 h-5 text-rose-500" />
    },
    {
      title: 'Reduce Technical Debt',
      desc: 'Refactor complex spaghetti scripts into clean, typed, and fully documented engineering systems.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Optimize Cloud Infrastructure',
      desc: 'Minimize runtime cloud hosting waste with elastic scaling policies and efficient container runs.',
      icon: <Cloud className="w-5 h-5 text-sky-500" />
    },
    {
      title: 'Strengthen Security & Compliance',
      desc: 'Build zero-trust authentication barriers and maintain immutable audit log histories.',
      icon: <Lock className="w-5 h-5 text-red-500" />
    },
    {
      title: 'Improve Data Visibility',
      desc: 'Consolidate isolated operational metrics into streamlined, executive BI dashboards.',
      icon: <LineChart className="w-5 h-5 text-purple-500" />
    },
    {
      title: 'Enable Scalable Growth',
      desc: 'Ensure database structures and core APIs expand smoothly under high concurrent traffic spikes.',
      icon: <TrendingUp className="w-5 h-5 text-teal-500" />
    }
  ];

  return (
    <section id="outcomes" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <span>Measurable Impact</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Business Outcomes
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl pt-1">
            Technology is purely an investment tool. Every project is scoped, developed, and deployed to yield clear, measurable operational improvements.
          </p>
        </div>

        {/* 10 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 hover:bg-slate-950/60 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="bg-slate-900 w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {outcome.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                    {outcome.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {outcome.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/50 flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">Protocol 0{idx + 1}</span>
                <span className="text-[10px] text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
