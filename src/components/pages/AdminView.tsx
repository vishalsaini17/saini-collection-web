import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Building2, 
  Plus, 
  Trash2, 
  Edit3, 
  RotateCcw, 
  Search, 
  Sparkles, 
  Check, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  BarChart3, 
  AlertCircle,
  Eye,
  Star,
  MessageSquare
} from 'lucide-react';
import { 
  getStoredProjects, 
  saveProjects, 
  getStoredCompanies, 
  saveCompanies, 
  resetPortfolioToDefault,
  Project, 
  PartnerCompany 
} from '../../data/portfolioData';
import { 
  subscribeProjects, 
  subscribeCompanies, 
  saveProjectToFirestore, 
  deleteProjectFromFirestore, 
  saveCompanyToFirestore, 
  deleteCompanyFromFirestore, 
  subscribeInquiries, 
  Inquiry 
} from '../../lib/firebaseServices';

interface AdminViewProps {
  onNavigate?: (page: string) => void;
}

export default function AdminView({ onNavigate }: AdminViewProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [companies, setCompanies] = useState<PartnerCompany[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'projects' | 'companies' | 'inquiries'>('projects');
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Notification message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals for Create / Edit
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState<PartnerCompany | null>(null);

  // Delete confirmation
  const [deletingProjectId, setDeletingProjectId] = useState<string | null>(null);
  const [deletingCompanyId, setDeletingCompanyId] = useState<string | null>(null);

  // Load state and subscribe to Firestore on mount
  useEffect(() => {
    setProjects(getStoredProjects());
    setCompanies(getStoredCompanies());

    const unsubProjects = subscribeProjects((data) => {
      setProjects(data);
      saveProjects(data);
    });

    const unsubCompanies = subscribeCompanies((data) => {
      setCompanies(data);
      saveCompanies(data);
    });

    const unsubInquiries = subscribeInquiries((data) => {
      setInquiries(data);
    });

    return () => {
      unsubProjects();
      unsubCompanies();
      unsubInquiries();
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Helper to persist projects
  const updateProjects = async (updated: Project[]) => {
    setProjects(updated);
    saveProjects(updated);
  };

  // Helper to persist companies
  const updateCompanies = async (updated: PartnerCompany[]) => {
    setCompanies(updated);
    saveCompanies(updated);
  };

  // Handle Reset to Defaults
  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all projects and client companies to original default data? Any custom added items will be restored.')) {
      const { projects: defProjects, companies: defCompanies } = resetPortfolioToDefault();
      setProjects(defProjects);
      setCompanies(defCompanies);
      for (const p of defProjects) {
        await saveProjectToFirestore(p);
      }
      for (const c of defCompanies) {
        await saveCompanyToFirestore(c);
      }
      showToast('Successfully restored default portfolio data in Firestore!');
    }
  };

  // DELETE Project
  const handleDeleteProject = async (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    updateProjects(updated);
    try {
      await deleteProjectFromFirestore(id);
    } catch (e) {
      console.error('Firestore delete project failed:', e);
    }
    setDeletingProjectId(null);
    showToast('Project removed successfully from Firestore.');
  };

  // DELETE Company
  const handleDeleteCompany = async (id: string) => {
    const updated = companies.filter(c => c.id !== id);
    updateCompanies(updated);
    try {
      await deleteCompanyFromFirestore(id);
    } catch (e) {
      console.error('Firestore delete company failed:', e);
    }
    setDeletingCompanyId(null);
    showToast('Client company removed successfully from Firestore.');
  };

  // TOGGLE Featured Project
  const handleToggleFeatured = async (id: string) => {
    const proj = projects.find(p => p.id === id);
    if (!proj) return;
    const updatedObj = { ...proj, isFeatured: !proj.isFeatured };
    const updated = projects.map(p => p.id === id ? updatedObj : p);
    updateProjects(updated);
    try {
      await saveProjectToFirestore(updatedObj);
    } catch (e) {
      console.error('Firestore update featured failed:', e);
    }
    showToast('Project status updated.');
  };

  // PROJECT FORM STATE
  const [projForm, setProjForm] = useState<{
    id?: string;
    title: string;
    client: string;
    clientLogoText: string;
    category: Project['category'];
    industry: string;
    year: string;
    tagline: string;
    description: string;
    image: string;
    techStackInput: string;
    metricsInputs: { label: string; value: string }[];
    challenge: string;
    solution: string;
    keyFeaturesInput: string;
    testimonialQuote: string;
    testimonialAuthor: string;
    testimonialRole: string;
    testimonialCompany: string;
    isFeatured: boolean;
  }>({
    title: '',
    client: '',
    clientLogoText: 'CLIENT',
    category: 'E-Commerce & Retail',
    industry: '',
    year: '2026',
    tagline: '',
    description: '',
    image: '/src/assets/images/workspace_laptop_1783628858963.jpg',
    techStackInput: 'React, TypeScript, Tailwind CSS, Node.js',
    metricsInputs: [
      { label: 'Efficiency Boost', value: '40%' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    challenge: '',
    solution: '',
    keyFeaturesInput: 'Real-time dashboard analytics\nAutomated workflow engine\nSecure role-based access',
    testimonialQuote: '',
    testimonialAuthor: '',
    testimonialRole: '',
    testimonialCompany: '',
    isFeatured: false
  });

  const openNewProjectModal = () => {
    setEditingProject(null);
    setProjForm({
      title: '',
      client: '',
      clientLogoText: 'NEW',
      category: 'E-Commerce & Retail',
      industry: 'Software & Technology',
      year: '2026',
      tagline: 'High-performance custom software solutions engineered for growth.',
      description: 'Comprehensive enterprise web solution built with modern stack.',
      image: '/src/assets/images/workspace_laptop_1783628858963.jpg',
      techStackInput: 'React, TypeScript, Tailwind CSS, Node.js',
      metricsInputs: [
        { label: 'Performance Boost', value: '50%' },
        { label: 'Uptime', value: '99.9%' }
      ],
      challenge: 'Legacy system bottlenecks and manual process overhead.',
      solution: 'Custom modern cloud application architecture with automated workflows.',
      keyFeaturesInput: 'Real-time data reporting\nSecure user authentication\nResponsive design',
      testimonialQuote: '',
      testimonialAuthor: '',
      testimonialRole: '',
      testimonialCompany: '',
      isFeatured: false
    });
    setIsProjectModalOpen(true);
  };

  const openEditProjectModal = (proj: Project) => {
    setEditingProject(proj);
    setProjForm({
      id: proj.id,
      title: proj.title,
      client: proj.client,
      clientLogoText: proj.clientLogoText || 'CLT',
      category: proj.category,
      industry: proj.industry,
      year: proj.year,
      tagline: proj.tagline,
      description: proj.description,
      image: proj.image,
      techStackInput: proj.techStack.join(', '),
      metricsInputs: proj.metrics && proj.metrics.length > 0 ? proj.metrics : [{ label: 'Impact', value: 'High' }],
      challenge: proj.challenge,
      solution: proj.solution,
      keyFeaturesInput: proj.keyFeatures ? proj.keyFeatures.join('\n') : '',
      testimonialQuote: proj.testimonial?.quote || '',
      testimonialAuthor: proj.testimonial?.author || '',
      testimonialRole: proj.testimonial?.role || '',
      testimonialCompany: proj.testimonial?.company || '',
      isFeatured: !!proj.isFeatured
    });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e: FormEvent) => {
    e.preventDefault();
    if (!projForm.title || !projForm.client) {
      alert('Please fill in required fields (Title and Client Name).');
      return;
    }

    const newProjObj: Project = {
      id: projForm.id || `proj-${Date.now()}`,
      title: projForm.title,
      client: projForm.client,
      clientLogoText: projForm.clientLogoText || projForm.client.slice(0, 3).toUpperCase(),
      category: projForm.category,
      industry: projForm.industry || 'Technology',
      year: projForm.year || '2026',
      tagline: projForm.tagline,
      description: projForm.description,
      image: projForm.image || '/src/assets/images/workspace_laptop_1783628858963.jpg',
      techStack: projForm.techStackInput.split(',').map(s => s.trim()).filter(Boolean),
      metrics: projForm.metricsInputs.filter(m => m.label && m.value),
      challenge: projForm.challenge,
      solution: projForm.solution,
      keyFeatures: projForm.keyFeaturesInput.split('\n').map(s => s.trim()).filter(Boolean),
      testimonial: projForm.testimonialQuote ? {
        quote: projForm.testimonialQuote,
        author: projForm.testimonialAuthor || 'Client Spokesperson',
        role: projForm.testimonialRole || 'Executive',
        company: projForm.testimonialCompany || projForm.client
      } : undefined,
      isFeatured: projForm.isFeatured
    };

    try {
      await saveProjectToFirestore(newProjObj);
      if (editingProject) {
        const updated = projects.map(p => p.id === editingProject.id ? newProjObj : p);
        updateProjects(updated);
        showToast('Project updated successfully in Firestore!');
      } else {
        updateProjects([newProjObj, ...projects]);
        showToast('New project created and published to Firestore!');
      }
    } catch (err) {
      console.error('Failed to save project to Firestore:', err);
      showToast('Error saving project to database.');
    }

    setIsProjectModalOpen(false);
  };

  // COMPANY FORM STATE
  const [compForm, setCompForm] = useState<{
    id?: string;
    name: string;
    logoBadge: string;
    industry: string;
    location: string;
    collaborationType: string;
    duration: string;
    description: string;
    keyProjectsDeliveredInput: string;
    impactMetric: string;
    websiteDomain: string;
  }>({
    name: '',
    logoBadge: 'CLT',
    industry: '',
    location: '',
    collaborationType: 'Full-Stack Software Partner',
    duration: 'Ongoing',
    description: '',
    keyProjectsDeliveredInput: 'Custom Enterprise Web Portal\nMobile Order Dispatch App\nAutomated Analytics Engine',
    impactMetric: 'Increased operational speed and reduced workflow friction.',
    websiteDomain: ''
  });

  const openNewCompanyModal = () => {
    setEditingCompany(null);
    setCompForm({
      name: '',
      logoBadge: 'NEW',
      industry: 'Enterprise Software & IT',
      location: 'Global',
      collaborationType: 'Technology Strategic Partner',
      duration: 'Ongoing Collaboration',
      description: 'Partnering to engineer high-throughput web applications and cloud tools.',
      keyProjectsDeliveredInput: 'Custom Internal Management Suite\nAutomated Workflow Engine\nReal-Time Telemetry Dashboard',
      impactMetric: 'Boosted operational efficiency by 3x.',
      websiteDomain: ''
    });
    setIsCompanyModalOpen(true);
  };

  const openEditCompanyModal = (comp: PartnerCompany) => {
    setEditingCompany(comp);
    setCompForm({
      id: comp.id,
      name: comp.name,
      logoBadge: comp.logoBadge || 'CLT',
      industry: comp.industry,
      location: comp.location,
      collaborationType: comp.collaborationType,
      duration: comp.duration,
      description: comp.description,
      keyProjectsDeliveredInput: comp.keyProjectsDelivered ? comp.keyProjectsDelivered.join('\n') : '',
      impactMetric: comp.impactMetric,
      websiteDomain: comp.websiteDomain || ''
    });
    setIsCompanyModalOpen(true);
  };

  const handleSaveCompany = async (e: FormEvent) => {
    e.preventDefault();
    if (!compForm.name) {
      alert('Please fill in the Company Name.');
      return;
    }

    const newCompObj: PartnerCompany = {
      id: compForm.id || `company-${Date.now()}`,
      name: compForm.name,
      logoBadge: compForm.logoBadge || compForm.name.slice(0, 3).toUpperCase(),
      industry: compForm.industry || 'Technology & Retail',
      location: compForm.location || 'Global',
      collaborationType: compForm.collaborationType || 'Full-Stack Software Partner',
      duration: compForm.duration || 'Ongoing',
      description: compForm.description,
      keyProjectsDelivered: compForm.keyProjectsDeliveredInput.split('\n').map(s => s.trim()).filter(Boolean),
      impactMetric: compForm.impactMetric,
      websiteDomain: compForm.websiteDomain || undefined
    };

    try {
      await saveCompanyToFirestore(newCompObj);
      if (editingCompany) {
        const updated = companies.map(c => c.id === editingCompany.id ? newCompObj : c);
        updateCompanies(updated);
        showToast('Client company updated successfully in Firestore!');
      } else {
        updateCompanies([newCompObj, ...companies]);
        showToast('New client company added successfully to Firestore!');
      }
    } catch (err) {
      console.error('Failed to save company to Firestore:', err);
      showToast('Error saving company to database.');
    }

    setIsCompanyModalOpen(false);
  };

  // Filtered Lists for Admin Table
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompanies = companies.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-slate-900 text-white border border-slate-700 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs font-sans font-bold"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ADMIN HERO HEADER */}
      <section className="bg-slate-950 text-white pt-10 pb-12 border-b border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-blue-950 border border-blue-800 text-blue-400 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Saini Collection Content Console</span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">
                Portfolio &amp; Client Admin Management
              </h1>
              <p className="font-sans text-xs sm:text-sm text-slate-400">
                Directly add, modify, feature, or remove projects and client partnerships displayed on the public portfolio.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate && onNavigate('portfolio')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-sans font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center space-x-2 transition-colors cursor-pointer border border-slate-700"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>View Live Portfolio</span>
              </button>

              <button
                onClick={handleReset}
                title="Restore default portfolio state"
                className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-sans font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center space-x-1.5 transition-colors cursor-pointer border border-amber-500/30"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN ADMIN CONTENT BODY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow text-left">
        
        {/* TOP BAR: TABS & ADD BUTTONS & SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          
          {/* Tabs */}
          <div className="inline-flex bg-slate-200/80 p-1 rounded-2xl border border-slate-300/70 self-start">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('companies')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'companies'
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Client Companies ({companies.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>RFPs &amp; Inquiries ({inquiries.length})</span>
            </button>
          </div>

          {/* Search + Add New Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={activeTab === 'projects' ? 'Filter projects...' : 'Filter companies...'}
                className="w-full bg-white border border-slate-200 focus:border-blue-500 text-slate-900 text-xs rounded-xl pl-9 pr-3 py-2.5 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {activeTab === 'projects' ? (
              <button
                onClick={openNewProjectModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center space-x-2 cursor-pointer shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            ) : (
              <button
                onClick={openNewCompanyModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center space-x-2 cursor-pointer shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Client Company</span>
              </button>
            )}
          </div>

        </div>

        {/* TAB 1: PROJECTS ADMIN LIST */}
        {activeTab === 'projects' && (
          <div className="pt-8 space-y-6">
            
            {filteredProjects.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-display font-bold text-base text-slate-800">No projects found</h3>
                <p className="font-sans text-xs text-slate-500">
                  Add a new project using the button above or clear search filters.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                        <th className="py-3.5 px-4">Project Title</th>
                        <th className="py-3.5 px-4">Client</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Year</th>
                        <th className="py-3.5 px-4 text-center">Featured</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-xs font-sans">
                      {filteredProjects.map((proj) => (
                        <tr key={proj.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={proj.image} 
                                alt={proj.title} 
                                loading="lazy"
                                decoding="async"
                                className="w-10 h-10 rounded-lg object-cover bg-slate-200 flex-shrink-0"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <span className="font-display font-bold text-slate-900 block">{proj.title}</span>
                                <span className="font-sans text-[11px] text-slate-500 line-clamp-1">{proj.tagline}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-700">
                            <span className="bg-slate-100 text-slate-800 font-mono text-[11px] font-bold px-2 py-1 rounded-md">
                              {proj.client}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-600 font-medium">
                            {proj.category}
                          </td>
                          <td className="py-4 px-4 text-slate-500 font-mono">
                            {proj.year}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() => handleToggleFeatured(proj.id)}
                              title="Toggle featured status"
                              className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${
                                proj.isFeatured 
                                  ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100' 
                                  : 'bg-slate-100 text-slate-400 border-slate-200 hover:text-slate-600'
                              }`}
                            >
                              <Star className={`w-4 h-4 ${proj.isFeatured ? 'fill-amber-500 text-amber-500' : ''}`} />
                            </button>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => openEditProjectModal(proj)}
                                className="p-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                                title="Edit Project"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeletingProjectId(proj.id)}
                                className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                                title="Delete Project"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: CLIENT COMPANIES ADMIN LIST */}
        {activeTab === 'companies' && (
          <div className="pt-8 space-y-6">
            
            {filteredCompanies.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-display font-bold text-base text-slate-800">No partner companies found</h3>
                <p className="font-sans text-xs text-slate-500">
                  Add a new client company using the button above.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                        <th className="py-3.5 px-4">Company Name</th>
                        <th className="py-3.5 px-4">Industry</th>
                        <th className="py-3.5 px-4">Location</th>
                        <th className="py-3.5 px-4">Collaboration Type</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-xs font-sans">
                      {filteredCompanies.map((comp) => (
                        <tr key={comp.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900">
                            <div className="flex items-center space-x-3">
                              <div className="bg-blue-600 text-white font-display font-black text-xs w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                                {comp.logoBadge}
                              </div>
                              <div>
                                <span className="font-display font-bold text-slate-900 block">{comp.name}</span>
                                <span className="font-sans text-[11px] text-slate-500">{comp.duration}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-700">
                            {comp.industry}
                          </td>
                          <td className="py-4 px-4 text-slate-600 font-mono">
                            {comp.location}
                          </td>
                          <td className="py-4 px-4 text-slate-600">
                            <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-md text-[11px]">
                              {comp.collaborationType}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => openEditCompanyModal(comp)}
                                className="p-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                                title="Edit Company"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeletingCompanyId(comp.id)}
                                className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                                title="Delete Company"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. INQUIRIES & RFPS VIEW */}
            {activeTab === 'inquiries' && (
              <div className="space-y-4">
                {inquiries.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
                    <MessageSquare className="w-10 h-10 text-slate-300 mx-auto" />
                    <p className="font-display font-bold text-slate-700 text-sm">No Client RFPs or Inquiries Received Yet</p>
                    <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto">
                      Submissions from the public Contact &amp; Architecture Estimator form will automatically stream here in real-time.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inquiries.map((inq, idx) => (
                      <div key={inq.id || idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                          <div>
                            <h4 className="font-display font-bold text-slate-900 text-sm">{inq.fullName}</h4>
                            <a href={`mailto:${inq.email}`} className="font-sans text-xs text-blue-600 hover:underline">{inq.email}</a>
                          </div>
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                            {inq.status || 'New'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-sans text-slate-600">
                          <div><span className="font-bold text-slate-800">Services:</span> {inq.company || 'Custom'}</div>
                          <div><span className="font-bold text-slate-800">Complexity:</span> {inq.projectType || 'Standard'}</div>
                          <div><span className="font-bold text-slate-800">Timeline:</span> {inq.timeline || 'Standard'}</div>
                          <div><span className="font-bold text-slate-800">Submitted:</span> {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Recent'}</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs font-sans text-slate-700 whitespace-pre-wrap max-h-40 overflow-y-auto">
                          {inq.details}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </section>

      {/* CREATE / EDIT PROJECT MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8 text-left p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {editingProject ? 'Edit Project Details' : 'Add New Portfolio Project'}
                </h3>
                <p className="font-sans text-xs text-slate-500">
                  Fill in project specifications, client metadata, and outcomes.
                </p>
              </div>
              <button
                onClick={() => setIsProjectModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-5 text-xs font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={projForm.title}
                    onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                    placeholder="e.g. Automotive Inventory Portal"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={projForm.client}
                    onChange={(e) => setProjForm({ ...projForm, client: e.target.value })}
                    placeholder="e.g. Jai Durge Traders"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Category</label>
                  <select
                    value={projForm.category}
                    onChange={(e) => setProjForm({ ...projForm, category: e.target.value as Project['category'] })}
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium bg-white"
                  >
                    <option value="E-Commerce & Retail">E-Commerce &amp; Retail</option>
                    <option value="Enterprise SaaS">Enterprise SaaS</option>
                    <option value="Healthcare & AI">Healthcare &amp; AI</option>
                    <option value="Logistics & Cloud">Logistics &amp; Cloud</option>
                    <option value="Fintech">Fintech</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Industry</label>
                  <input
                    type="text"
                    value={projForm.industry}
                    onChange={(e) => setProjForm({ ...projForm, industry: e.target.value })}
                    placeholder="e.g. Auto Accessories"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Year / Period</label>
                  <input
                    type="text"
                    value={projForm.year}
                    onChange={(e) => setProjForm({ ...projForm, year: e.target.value })}
                    placeholder="e.g. 2025 - 2026"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Tagline / Brief Summary</label>
                <input
                  type="text"
                  value={projForm.tagline}
                  onChange={(e) => setProjForm({ ...projForm, tagline: e.target.value })}
                  placeholder="One sentence summary of the project outcome"
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Full Description</label>
                <textarea
                  rows={3}
                  value={projForm.description}
                  onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                  placeholder="Detailed description of the platform built..."
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Image Path or URL</label>
                  <input
                    type="text"
                    value={projForm.image}
                    onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                    placeholder="/src/assets/images/... or https://..."
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    value={projForm.techStackInput}
                    onChange={(e) => setProjForm({ ...projForm, techStackInput: e.target.value })}
                    placeholder="React, TypeScript, Node.js, PostgreSQL"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">The Challenge</label>
                  <textarea
                    rows={2}
                    value={projForm.challenge}
                    onChange={(e) => setProjForm({ ...projForm, challenge: e.target.value })}
                    placeholder="Problem statement faced by client..."
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">The Solution</label>
                  <textarea
                    rows={2}
                    value={projForm.solution}
                    onChange={(e) => setProjForm({ ...projForm, solution: e.target.value })}
                    placeholder="How Saini Collection solved it..."
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Key Features (One per line)</label>
                <textarea
                  rows={3}
                  value={projForm.keyFeaturesInput}
                  onChange={(e) => setProjForm({ ...projForm, keyFeaturesInput: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              {/* Testimonial Optional */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span className="font-bold text-slate-900 block text-xs">Client Testimonial (Optional)</span>
                
                <input
                  type="text"
                  value={projForm.testimonialQuote}
                  onChange={(e) => setProjForm({ ...projForm, testimonialQuote: e.target.value })}
                  placeholder="Client quote text..."
                  className="w-full border border-slate-200 bg-white rounded-xl p-2 outline-none"
                />

                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={projForm.testimonialAuthor}
                    onChange={(e) => setProjForm({ ...projForm, testimonialAuthor: e.target.value })}
                    placeholder="Author Name"
                    className="border border-slate-200 bg-white rounded-xl p-2 outline-none"
                  />
                  <input
                    type="text"
                    value={projForm.testimonialRole}
                    onChange={(e) => setProjForm({ ...projForm, testimonialRole: e.target.value })}
                    placeholder="Role (e.g. Founder)"
                    className="border border-slate-200 bg-white rounded-xl p-2 outline-none"
                  />
                  <input
                    type="text"
                    value={projForm.testimonialCompany}
                    onChange={(e) => setProjForm({ ...projForm, testimonialCompany: e.target.value })}
                    placeholder="Company Name"
                    className="border border-slate-200 bg-white rounded-xl p-2 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={projForm.isFeatured}
                  onChange={(e) => setProjForm({ ...projForm, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded-md border-slate-300"
                />
                <label htmlFor="featuredCheck" className="font-bold text-slate-800 cursor-pointer">
                  Highlight as Featured Project in Portfolio
                </label>
              </div>

              <div className="pt-4 flex justify-end space-x-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-sm cursor-pointer"
                >
                  {editingProject ? 'Save Changes' : 'Publish Project'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* CREATE / EDIT COMPANY MODAL */}
      {isCompanyModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto my-8 text-left p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {editingCompany ? 'Edit Client Company' : 'Add Client Partner Company'}
                </h3>
                <p className="font-sans text-xs text-slate-500">
                  Add details of a business or brand Saini Collection collaborates with.
                </p>
              </div>
              <button
                onClick={() => setIsCompanyModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCompany} className="space-y-5 text-xs font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={compForm.name}
                    onChange={(e) => setCompForm({ ...compForm, name: e.target.value })}
                    placeholder="e.g. Jai Durge Traders"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Logo Badge Text (2-3 chars)</label>
                  <input
                    type="text"
                    maxLength={4}
                    value={compForm.logoBadge}
                    onChange={(e) => setCompForm({ ...compForm, logoBadge: e.target.value.toUpperCase() })}
                    placeholder="e.g. JDT"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium font-mono uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Industry</label>
                  <input
                    type="text"
                    value={compForm.industry}
                    onChange={(e) => setCompForm({ ...compForm, industry: e.target.value })}
                    placeholder="e.g. Automotive Accessories"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Location</label>
                  <input
                    type="text"
                    value={compForm.location}
                    onChange={(e) => setCompForm({ ...compForm, location: e.target.value })}
                    placeholder="e.g. Gurgaon, India"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Collaboration Type</label>
                  <input
                    type="text"
                    value={compForm.collaborationType}
                    onChange={(e) => setCompForm({ ...compForm, collaborationType: e.target.value })}
                    placeholder="e.g. Custom Software Partner"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Duration / Status</label>
                  <input
                    type="text"
                    value={compForm.duration}
                    onChange={(e) => setCompForm({ ...compForm, duration: e.target.value })}
                    placeholder="e.g. Ongoing Collaboration"
                    className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Collaboration Summary</label>
                <textarea
                  rows={3}
                  value={compForm.description}
                  onChange={(e) => setCompForm({ ...compForm, description: e.target.value })}
                  placeholder="Summary of partnership and custom work..."
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Key Deliverables (One per line)</label>
                <textarea
                  rows={3}
                  value={compForm.keyProjectsDeliveredInput}
                  onChange={(e) => setCompForm({ ...compForm, keyProjectsDeliveredInput: e.target.value })}
                  placeholder="Custom Portal&#10;Inventory Engine&#10;Billing Software"
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Impact Metric Callout</label>
                <input
                  type="text"
                  value={compForm.impactMetric}
                  onChange={(e) => setCompForm({ ...compForm, impactMetric: e.target.value })}
                  placeholder="e.g. Streamlined 12,000+ daily SKU lookups"
                  className="w-full border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>

              <div className="pt-4 flex justify-end space-x-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsCompanyModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-sm cursor-pointer"
                >
                  {editingCompany ? 'Save Changes' : 'Add Client'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODALS */}
      {deletingProjectId && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
            <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">Delete Project?</h3>
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              This action will remove this project from your portfolio display.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <button
                onClick={() => setDeletingProjectId(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProject(deletingProjectId)}
                className="px-4 py-2 rounded-xl bg-rose-600 text-xs font-bold text-white hover:bg-rose-700 cursor-pointer shadow-sm"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {deletingCompanyId && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
            <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">Delete Client Company?</h3>
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              This action will remove this partner company from your client list.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <button
                onClick={() => setDeletingCompanyId(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCompany(deletingCompanyId)}
                className="px-4 py-2 rounded-xl bg-rose-600 text-xs font-bold text-white hover:bg-rose-700 cursor-pointer shadow-sm"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
