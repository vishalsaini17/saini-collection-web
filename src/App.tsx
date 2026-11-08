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
    const titleMap: Record<string, string> = {
      home: 'Saini Collection | Modern Digital Engineering & AI Solutions',
      services: 'Services & Capabilities | Saini Collection Engineering',
      portfolio: 'Featured Work & Case Studies | Saini Collection Portfolio',
      'ai-innovation': 'AI Engineering & Dynamic Form Engines | Saini Collection',
      industries: 'Industries & Enterprise Solutions | Saini Collection',
      about: 'About Us & Leadership | Saini Collection Digital Agency',
      contact: 'Contact Us & RFP Submission | Saini Collection',
      'get-proposal': 'Request Architecture Proposal | Saini Collection',
      admin: 'Admin Portal & Content Management | Saini Collection'
    };

    if (titleMap[path]) {
      document.title = titleMap[path];
    } else {
      document.title = 'Saini Collection | Modern Digital Engineering';
    }
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
