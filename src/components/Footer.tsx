import { Mail, Phone, MapPin, Globe, PhoneCall } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          {/* Column 1: Saini Collection Branding */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
            >
              <div className="bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-display font-extrabold text-lg sm:text-xl shadow-md">
                S
              </div>
              <span className="font-display font-extrabold text-base sm:text-xl tracking-tight text-white">
                SAINI <span className="text-blue-500">COLLECTION</span>
              </span>
            </button>
            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-sm">
              Your global partner in digital excellence. We create high-performance software and
              designs that drive tangible growth.
            </p>

            {/* Micro Socials */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => handleNavClick('home')}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 text-slate-400 hover:text-white p-2 rounded-lg transition-all cursor-pointer"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </button>
              <a
                href="mailto:connect@sainicollection.com"
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 text-slate-400 hover:text-white p-2 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917838307318"
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 text-slate-400 hover:text-white p-2 rounded-lg transition-all"
                aria-label="Phone"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('portfolio')}
                  className="hover:text-blue-400 font-semibold text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Portfolio &amp; Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('ai-innovation')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  AI &amp; Innovation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Enterprise Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  E-commerce Engines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  React &amp; Modern JS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('ai-innovation')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Cloud &amp; Databases
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('industries')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Creative Branding
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('ai-innovation')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Digital Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-4 space-y-4 text-left min-w-0">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start space-x-3 min-w-0">
                <Mail className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:connect@sainicollection.com"
                  className="hover:text-white transition-colors break-all sm:break-normal min-w-0 flex-1"
                >
                  connect@sainicollection.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+917838307318" className="hover:text-white transition-colors">
                  +91 78383 07318
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  GURGAON, INDIA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 text-center">
          <p className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
            &copy; 2026 SAINI COLLECTION. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
