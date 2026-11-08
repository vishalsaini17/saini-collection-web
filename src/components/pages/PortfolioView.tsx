import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Building2, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  BarChart3, 
  Layers, 
  Cpu, 
  Globe, 
  Clock, 
  MapPin, 
  Quote, 
  Check, 
  SlidersHorizontal,
  FileText,
  Code 
} from 'lucide-react';
import { getStoredProjects, getStoredCompanies, Project, PartnerCompany } from '../../data/portfolioData';
import { subscribeProjects, subscribeCompanies } from '../../lib/firebaseServices';

interface PortfolioViewProps {
  onNavigate?: (page: string) => void;
  selectedProjectIdFromUrl?: string | null;
}

export default function PortfolioView({ onNavigate }: PortfolioViewProps) {
  // Main state loaded from storage/Firestore
  const [projectsList, setProjectsList] = useState<Project[]>(() => getStoredProjects());
  const [companiesList, setCompaniesList] = useState<PartnerCompany[]>(() => getStoredCompanies());

  // Subscribe to real-time Firestore updates
  useEffect(() => {
    const unsubProjects = subscribeProjects((data) => {
      setProjectsList(data);
    });
    const unsubCompanies = subscribeCompanies((data) => {
      setCompaniesList(data);
    });

    return () => {
      unsubProjects();
      unsubCompanies();
    };
  }, []);

  // Main view toggle: 'projects' or 'companies'
  const [activeTab, setActiveTab] = useState<'projects' | 'companies'>('projects');
  
  // Filtering state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected project for detail view
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top when opening a project detail view
  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  const categories = [
    'All',
    'E-Commerce & Retail',
    'Enterprise SaaS',
    'Healthcare & AI',
    'Logistics & Cloud',
    'Fintech'
  ];

  // Filter projects based on category and search query
  const filteredProjects = projectsList.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filter companies based on search
  const filteredCompanies = companiesList.filter((company) => {
    return (
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.collaborationType.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-full bg-white text-slate-900 flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-950 text-white pt-12 pb-16 md:pt-16 md:pb-20 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {selectedProject ? (
            /* Breadcrumb when viewing project details */
            <div className="mb-6 inline-flex items-center space-x-2 text-xs font-mono">
              <button 
                onClick={handleCloseProjectDetails}
                className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
              >
                <span>Portfolio</span>
              </button>
              <span className="text-slate-600">/</span>
              <span className="text-blue-400">{selectedProject.title}</span>
            </div>
          ) : (
            <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-800/50 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Engineering Portfolio &amp; Client Network</span>
            </div>
          )}

          {!selectedProject && (
            <div className="space-y-6 max-w-3xl">
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Proven Software Engineering. <br />
                <span className="text-blue-500">Transformative Client Impact.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Explore mission-critical platforms engineered by Saini Collection, alongside the industry-leading enterprise brands and businesses we proudly collaborate with.
              </p>

              {/* Key Portfolio Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
                {[
                  { label: 'Delivered Projects', val: '30+' },
                  { label: 'Client Satisfaction', val: '100%' },
                  { label: 'Global Industries', val: '6+' },
                  { label: 'System Uptime', val: '99.9%' },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-display font-black text-xl sm:text-2xl text-blue-400 block">{stat.val}</span>
                    <span className="font-sans text-[11px] text-slate-400 block uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* IF A PROJECT IS SELECTED -> SHOW FULL PROJECT DETAILS VIEW MATCHING IMAGE DESIGN */}
        {selectedProject ? (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8 text-left"
            >
              {/* Top Title & Italic Subtitle */}
              <div className="space-y-3 max-w-5xl">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  {selectedProject.title} ({selectedProject.client})
                </h2>
                
                <p className="font-sans text-sm sm:text-base text-slate-600 italic leading-relaxed">
                  {selectedProject.tagline}. Client: {selectedProject.client}. {selectedProject.description}
                </p>
              </div>

              {/* Main 2-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Big Project Screenshot & Overview Card */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Laptop Screenshot Card */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-slate-950 aspect-[16/10] sm:aspect-[16/9]">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Project Overview & Details White Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
                    <div className="flex items-center space-x-2 text-blue-600 font-display font-bold text-xs sm:text-sm uppercase tracking-wider">
                      <FileText className="w-4.5 h-4.5 text-blue-600" />
                      <span>PROJECT OVERVIEW &amp; DETAILS</span>
                    </div>

                    <div className="space-y-4 font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      <p>
                        I worked on at {selectedProject.client} was {selectedProject.title}. It is an AI workflow &amp; digital platform where users can configure processes and view real-time data analytics.
                      </p>

                      <p>
                        {selectedProject.description}
                      </p>

                      <p>
                        {selectedProject.solution}
                      </p>

                      <p>
                        {selectedProject.challenge}
                      </p>
                    </div>

                    {/* Key Technical Features List */}
                    {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <span className="font-display font-bold text-xs uppercase tracking-wider text-slate-800 block">
                          Key Delivered Capabilities
                        </span>
                        <div className="space-y-2">
                          {selectedProject.keyFeatures.map((feat, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                              <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Right Column: Project Links, Tech Details & Markdown Note */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Card 1: PROJECT LINKS */}
                  <div className="bg-blue-50/70 border border-blue-100/90 p-6 rounded-2xl space-y-4 text-left">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-blue-900">
                      PROJECT LINKS
                    </h4>
                    <a
                      href={selectedProject.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-blue-50/50 border border-blue-200 text-blue-700 hover:text-blue-800 rounded-xl px-4 py-3 font-sans font-bold text-xs flex items-center justify-center space-x-2 shadow-2xs w-full transition-all cursor-pointer"
                    >
                      <Code className="w-4 h-4 text-blue-600" />
                      <span>Source Code</span>
                    </a>
                  </div>

                  {/* Card 2: TECH DETAILS */}
                  <div className="bg-slate-50/90 border border-slate-200/80 p-6 rounded-2xl space-y-4 text-left">
                    <div className="flex items-center space-x-2 font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span>TECH DETAILS</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white text-slate-700 text-xs font-sans font-medium px-3.5 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card 3: Markdown Note Box */}
                  <div className="bg-slate-50/70 border border-slate-200/60 p-5 rounded-2xl text-slate-500 italic text-xs leading-relaxed text-left">
                    Detailed notes can be written using markdown syntax to design headers, bold styles, and timelines dynamically.
                  </div>

                </div>

              </div>

              {/* Bottom Back Button Link */}
              <div className="pt-8 flex justify-center">
                <button
                  onClick={handleCloseProjectDetails}
                  className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-sans font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-2xs"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-700" />
                  <span>Back to Projects List</span>
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        ) : (
          
          /* MAIN PORTFOLIO NAVIGATION & TABS */
          <div className="space-y-10">
            
            {/* Main Toggle: Delivered Projects VS Collaborating Companies */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-200 pb-8">
              
              {/* Primary View Switcher Tabs */}
              <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    activeTab === 'projects'
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Projects Built ({projectsList.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('companies')}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    activeTab === 'companies'
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Client &amp; Partner Network ({companiesList.length})</span>
                </button>
              </div>

              {/* Search Bar Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    activeTab === 'projects'
                      ? 'Search projects, tech...'
                      : 'Search companies, industry...'
                  }
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none transition-all placeholder:text-slate-400 font-sans"
                />
              </div>

            </div>

            {/* TAB 1: PROJECTS LIST VIEW */}
            {activeTab === 'projects' && (
              <div className="space-y-8">
                
                {/* Category Pills Filter */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                  <span className="text-slate-400 font-mono text-[10px] font-bold uppercase tracking-wider pr-2 flex items-center space-x-1 flex-shrink-0">
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>Category:</span>
                  </span>
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-3">
                    <FolderGit2 className="w-10 h-10 text-slate-300 mx-auto" />
                    <h3 className="font-display font-bold text-base text-slate-800">No matching projects found</h3>
                    <p className="font-sans text-xs text-slate-500">
                      Try clearing your search query or selecting a different category filter.
                    </p>
                    <button
                      onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                      className="text-xs text-blue-600 font-bold hover:underline pt-2 cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => handleOpenProjectDetails(project)}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group text-left"
                      >
                        <div>
                          {/* Image Thumbnail */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                              {project.category}
                            </div>
                            {project.isFeatured && (
                              <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center space-x-1 shadow-xs">
                                <Sparkles className="w-3 h-3 text-white" />
                                <span>Featured</span>
                              </div>
                            )}
                          </div>

                          {/* Card Content Body */}
                          <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                              <span className="font-bold text-slate-700">{project.client}</span>
                              <span>{project.year}</span>
                            </div>

                            <h3 className="font-display font-bold text-lg text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                              {project.title}
                            </h3>

                            <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {project.tagline}
                            </p>

                            {/* Tech stack tags preview */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.techStack.slice(0, 4).map((tech, i) => (
                                <span
                                  key={i}
                                  className="bg-slate-100 text-slate-700 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 4 && (
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md">
                                  +{project.techStack.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Card Footer Button */}
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                          <span>View Project Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* TAB 2: COMPANIES WE COLLABORATE WITH / WORKED FOR */}
            {activeTab === 'companies' && (
              <div className="space-y-8 text-left">
                
                {/* Intro Callout */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    Trusted Technology Partner to Visionary Brands
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                    We collaborate closely with fast-growing businesses, regional enterprise leaders, and innovative digital startups to build reliable, high-performance software systems.
                  </p>
                </div>

                {/* Companies Showcase Grid */}
                {filteredCompanies.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-2">
                    <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
                    <h3 className="font-display font-bold text-base text-slate-800">No matching companies found</h3>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-blue-600 font-bold hover:underline pt-2 cursor-pointer"
                    >
                      Clear Search Query
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCompanies.map((company) => (
                      <div
                        key={company.id}
                        className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between space-y-6"
                      >
                        <div className="space-y-4">
                          
                          {/* Company Header */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center space-x-3">
                              <div className="bg-blue-600 text-white font-display font-black text-sm w-11 h-11 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/10 flex-shrink-0">
                                {company.logoBadge}
                              </div>
                              <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                                  {company.name}
                                </h3>
                                <span className="font-sans text-xs text-slate-500 block mt-0.5">
                                  {company.industry}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Location & Collaboration Tags */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="bg-slate-100 text-slate-700 text-[11px] font-mono px-2.5 py-1 rounded-lg flex items-center space-x-1">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              <span>{company.location}</span>
                            </span>
                            <span className="bg-blue-50 text-blue-700 text-[11px] font-sans font-semibold px-2.5 py-1 rounded-lg border border-blue-100">
                              {company.duration}
                            </span>
                          </div>

                          {/* Company Description */}
                          <p className="font-sans text-xs text-slate-600 leading-relaxed">
                            {company.description}
                          </p>

                          {/* Key Deliverables Bulleted List */}
                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Key Deliverables:
                            </span>
                            <ul className="space-y-1.5">
                              {company.keyProjectsDelivered.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5 stroke-[3px]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* Impact Metric Callout Box */}
                        <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100/80 space-y-1">
                          <span className="font-mono text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
                            Key Partnership Impact:
                          </span>
                          <p className="font-sans text-xs text-blue-900 font-semibold leading-snug">
                            {company.impactMetric}
                          </p>
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

    </div>
  );
}
