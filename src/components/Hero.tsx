import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:py-36 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent"
    >
      {/* Background soft blobs for tech design aesthetic */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-35 -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full font-sans font-semibold text-xs uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span>Innovate • Transform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight"
            >
              We Build <span className="text-blue-600 relative inline-block">Websites</span>{' '}
              <br className="hidden sm:inline" />
              <span className="text-blue-600 relative inline-block">&amp; Digital Tools</span>{' '}
              <br className="hidden sm:inline" />
              That Grow Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Elevate your online presence with high-end tech solutions. From custom websites to
              robust backend systems, we deliver excellence at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                id="hero-services-btn"
                onClick={() => handleScrollTo('#services')}
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-sans font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-800 font-sans font-semibold text-base px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Our Team
              </button>
            </motion.div>
          </div>

          {/* Right Side Laptop Image with floating card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Image Frame Wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 bg-slate-100">
                <img
                  src="/src/assets/images/workspace_laptop_1783628858963.jpg"
                  alt="Saini Collection Workspace"
                  width="600"
                  height="450"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Visual glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center space-x-4 max-w-[280px]"
              >
                <div className="bg-emerald-50 text-emerald-600 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg text-gray-950">
                    99% Client Success
                  </div>
                  <div className="font-sans text-xs text-gray-500 leading-tight">
                    Industry-leading digital solutions and support
                  </div>
                </div>
              </motion.div>

              {/* Subtle background decorative shapes */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500 rounded-lg -z-20 transform rotate-12 opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full -z-20 opacity-15 filter blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
