import { ReactNode, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded page components for optimal Lighthouse loading performance
const HomeView = lazy(() => import('./components/pages/HomeView'));
const ServicesView = lazy(() => import('./components/pages/ServicesView'));
const PortfolioView = lazy(() => import('./components/pages/PortfolioView'));
const AdminView = lazy(() => import('./components/pages/AdminView'));
const AIInnovationView = lazy(() => import('./components/pages/AIInnovationView'));
const IndustriesView = lazy(() => import('./components/pages/IndustriesView'));
const AboutView = lazy(() => import('./components/pages/AboutView'));
const Contact = lazy(() => import('./components/Contact'));

const seoByPath: Record<string, { title: string; description: string; canonicalPath: string; robots?: string }> = {
  home: {
    title: 'Custom Software, AI & Cloud Engineering | Saini Collection',
    description: 'Saini Collection builds custom web applications, AI-powered workflows, and cloud platforms for businesses, from product strategy and UX through deployment.',
    canonicalPath: '/',
  },
  services: {
    title: 'Software, AI & Cloud Engineering Services | Saini Collection',
    description: 'Explore Saini Collection services in product engineering, web development, AI automation, cloud platforms, UX design, and security.',
    canonicalPath: '/services',
  },
  portfolio: {
    title: 'Software Projects & Case Studies | Saini Collection',
    description: 'See selected software projects by Saini Collection, including business platforms, inventory systems, and cloud applications.',
    canonicalPath: '/portfolio',
  },
  'ai-innovation': {
    title: 'AI Engineering & Workflow Automation | Saini Collection',
    description: 'Discover AI engineering at Saini Collection, including LLM integrations, intelligent workflows, and dynamic form systems.',
    canonicalPath: '/ai-innovation',
  },
  industries: {
    title: 'Industry Software Solutions | Saini Collection',
    description: 'Explore software and AI solutions from Saini Collection for healthcare, financial services, retail, and other industries.',
    canonicalPath: '/industries',
  },
  about: {
    title: 'About Saini Collection | Software Engineering Team',
    description: 'Learn about Saini Collection, our engineering approach, and how we work with businesses to design and deliver digital products.',
    canonicalPath: '/about',
  },
  contact: {
    title: 'Contact Saini Collection | Discuss Your Project',
    description: 'Contact Saini Collection to discuss a software, AI, or cloud engineering project and its technical requirements.',
    canonicalPath: '/contact',
  },
  'get-proposal': {
    title: 'Contact Saini Collection | Discuss Your Project',
    description: 'Contact Saini Collection to discuss a software, AI, or cloud engineering project and its technical requirements.',
    canonicalPath: '/contact',
  },
  admin: {
    title: 'Admin Portal | Saini Collection',
    description: 'Saini Collection administration portal.',
    canonicalPath: '/admin',
    robots: 'noindex, nofollow',
  },
};

// Loading Fallback Component
function PageSkeleton() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="font-sans text-xs text-slate-400 font-medium tracking-wide">Loading content...</span>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top smoothly on route change & update dynamic SEO document title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const path = location.pathname.replace(/^\//, '') || 'home';
    const seo = seoByPath[path] ?? seoByPath.home;
    const canonicalUrl = `https://sainicollection.com${seo.canonicalPath}`;

    document.title = seo.title;
    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = content;
    };

    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[name="robots"]', seo.robots ?? 'index, follow');
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.description);
    updateMeta('meta[property="og:url"]', canonicalUrl);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;
  }, [location.pathname]);

  // Helper to map route paths to navigation IDs
  const getActivePageId = (pathname: string) => {
    const cleanPath = pathname.replace(/^\//, '');
    if (!cleanPath || cleanPath === 'home') return 'home';
    return cleanPath;
  };

  const activePage = getActivePageId(location.pathname);

  const handlePageChange = (pageId: string) => {
    if (pageId === 'home') {
      navigate('/');
    } else {
      navigate(`/${pageId}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white antialiased selection:bg-blue-600 selection:text-white">
      {/* Persistent Navigation Header */}
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Multi-page Dynamic Router */}
      <main className="flex-grow pt-16 sm:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full flex flex-col"
          >
            <Suspense fallback={<PageSkeleton />}>
              <Routes location={location}>
                <Route
                  path="/"
                  element={<HomeView onNavigate={handlePageChange} />}
                />
                <Route
                  path="/home"
                  element={<HomeView onNavigate={handlePageChange} />}
                />
                <Route
                  path="/services"
                  element={<ServicesView onNavigate={handlePageChange} />}
                />
                <Route
                  path="/portfolio"
                  element={<PortfolioView onNavigate={handlePageChange} />}
                />
                <Route
                  path="/admin"
                  element={<AdminView onNavigate={handlePageChange} />}
                />
                <Route path="/ai-innovation" element={<AIInnovationView />} />
                <Route path="/industries" element={<IndustriesView />} />
                <Route
                  path="/about"
                  element={<AboutView />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/get-proposal"
                  element={<Contact />}
                />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
