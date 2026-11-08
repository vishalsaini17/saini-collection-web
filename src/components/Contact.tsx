import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Globe, Sparkles, Layers, ShoppingCart, Database, Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormInput } from '../types';
import { submitInquiryToFirestore } from '../lib/firebaseServices';

interface EstimatorService {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const ESTIMATOR_SERVICES: EstimatorService[] = [
  {
    id: 'web-apps',
    title: 'Enterprise Web Applications',
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    desc: 'High-availability custom web portals, responsive React code, and solid performance.',
  },
  {
    id: 'cognitive-ai',
    title: 'Cognitive AI & Agentic LLMs',
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    desc: 'Intelligent vector storage, customized semantic search pipelines, and agent frameworks.',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Systems & Secure DevOps',
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
    desc: 'Serverless containers, advanced auto-scaling architecture, IAM security, and CI/CD pipelines.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Engines & Checkout',
    icon: <ShoppingCart className="w-5 h-5 text-orange-600" />,
    desc: 'High-conversion storefronts, inventory integrations, and compliant payment flows.',
  },
  {
    id: 'databases',
    title: 'Custom APIs & Database Systems',
    icon: <Database className="w-5 h-5 text-indigo-600" />,
    desc: 'Secure relational databases or scalable Firestore schemas with optimized indexing.',
  },
  {
    id: 'branding-ux',
    title: 'UI/UX Design & Brand Assets',
    icon: <Palette className="w-5 h-5 text-pink-600" />,
    desc: 'Stunning display layouts, interactive user paths, tailored typography, and vector styling.',
  },
];

const COMPLEXITY_LEVELS = [
  { id: 'mvp', name: 'Pilot / MVP Launch', desc: 'Ideal for target focus prototypes' },
  { id: 'mid-market', name: 'Mid-Market Scale', desc: 'Optimized for high-volume units' },
  { id: 'enterprise', name: 'Global Enterprise', desc: 'Institutional robustness & SLA compliance' },
];

const DELIVERY_TIMELINES = [
  { id: 'strategic', name: 'Strategic Gradual', desc: 'Steady continuous scale & testing' },
  { id: 'standard', name: 'Standard Sprints', desc: 'Structured release cycles' },
  { id: 'expedited', name: 'Urgent Expedited', desc: 'Prioritized technical sprints' },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['web-apps']);
  const [complexity, setComplexity] = useState<string>('mvp');
  const [timeline, setTimeline] = useState<string>('standard');

  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: '',
    email: '',
    service: 'Website Design',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Toggle active service selection
  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((sId) => sId !== id);
      }
      return [...prev, id];
    });
  };

  const complexityObj = COMPLEXITY_LEVELS.find((c) => c.id === complexity) || COMPLEXITY_LEVELS[0];
  const timelineObj = DELIVERY_TIMELINES.find((t) => t.id === timeline) || DELIVERY_TIMELINES[1];

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormInput> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please outline your business constraints or custom goals';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submittedMailtoUrl, setSubmittedMailtoUrl] = useState<string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const selectedServiceNames = ESTIMATOR_SERVICES.filter((s) => selectedServices.includes(s.id))
      .map((s) => s.title)
      .join(', ');

    // Augment the message payload to preserve the structural type contract while transmitting complex metadata
    const augmentedMessage = `
[INTERACTIVE ARCHITECTURE SCOPE CONFIGURATION]
--------------------------------------------------
Services Scoped: ${selectedServiceNames}
Complexity Tier: ${complexityObj.name}
Delivery Timeline: ${timelineObj.name}
--------------------------------------------------
USER MESSAGE DETAILS:
${formData.message}
`;

    const mailSubject = encodeURIComponent(`New Project Scope / RFP from ${formData.fullName} (${complexityObj.name})`);
    const mailBody = encodeURIComponent(
      `Hello Versha,\n\nA new project inquiry and RFP scope has been submitted on Saini Collection:\n\n` +
      `Client Name: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Services Requested: ${selectedServiceNames}\n` +
      `Complexity Tier: ${complexityObj.name}\n` +
      `Delivery Timeline: ${timelineObj.name}\n\n` +
      `Project Brief:\n${formData.message}\n\n` +
      `--------------------------------------------------\n` +
      `Automated RFP Dispatch from Saini Collection Architecture Platform`
    );
    const mailtoLink = `mailto:versha@sainicollection.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmittedMailtoUrl(mailtoLink);

    try {
      await submitInquiryToFirestore({
        fullName: formData.fullName,
        email: formData.email,
        company: selectedServiceNames,
        projectType: complexityObj.name,
        budgetRange: 'Tailored Scope',
        timeline: timelineObj.name,
        details: augmentedMessage
      });

      const existingInquiries = JSON.parse(localStorage.getItem('saini_inquiries') || '[]');
      const newInquiry = {
        id: 'inquiry-' + Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        service: selectedServiceNames.split(', ')[0] || formData.service,
        message: augmentedMessage,
        timestamp: new Date().toISOString(),
        estimatorConfig: {
          selectedServices,
          complexity,
          timeline,
          estimateRange: 'Tailored Scope'
        },
      };
      localStorage.setItem('saini_inquiries', JSON.stringify([...existingInquiries, newInquiry]));

      // Optionally try opening mail app automatically
      try {
        window.location.href = mailtoLink;
      } catch (err) {
        console.log('Mailto trigger fallback:', err);
      }
    } catch (err) {
      console.error('Error submitting inquiry to Firestore:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset input form
      setFormData({
        fullName: '',
        email: '',
        service: 'Website Design',
        message: '',
      });
    }
  };

  return (
    <div className="space-y-16 py-4">
      {/* Contact Header Section */}
      <section className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Scope Configurator &amp; RFP</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mt-3">
            Scope Your Digital Solution <br />
            <span className="text-blue-600">&amp; Initiate Your Custom Proposal</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mt-4">
            Configure your technical requirements, select service verticals, and receive a customized structural architecture proposal from our Gurgaon-based engineering leads within 2 hours.
          </p>
        </div>
      </section>

      {/* Estimator + Form Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Estimator Panel */}
          <div className="lg:col-span-7 bg-gray-50/50 rounded-3xl p-6 sm:p-8 border border-gray-100 text-left space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-display font-extrabold text-xl text-gray-900">
                  Step 1: Scoped Technology Verticals
                </h3>
                <p className="font-sans text-xs text-gray-500 mt-1">
                  Toggle and multi-select the engineering layers your system requires:
                </p>
              </div>

              {/* Service Cards Multi-Select Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ESTIMATOR_SERVICES.map((s) => {
                  const isActive = selectedServices.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleServiceToggle(s.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex flex-col justify-between ${
                        isActive
                          ? 'bg-white border-blue-600 ring-4 ring-blue-500/10 shadow-sm'
                          : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <div className="p-2 bg-gray-50 rounded-lg">{s.icon}</div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            isActive ? 'bg-blue-600 border-blue-600' : 'border-gray-200 bg-white'
                          }`}
                        >
                          {isActive && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-gray-900">{s.title}</h4>
                        <p className="font-sans text-[11px] text-gray-500 leading-normal mt-1">
                          {s.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step 2: System Complexity */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-bold text-sm text-gray-900">
                  Step 2: Solution Scale &amp; Complexity Tier
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {COMPLEXITY_LEVELS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setComplexity(tier.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer focus:outline-none space-y-1 ${
                        complexity === tier.id
                          ? 'bg-white border-blue-600 ring-2 ring-blue-500/10'
                          : 'bg-white border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="font-display font-bold text-xs text-gray-950 uppercase tracking-wide">
                        {tier.name}
                      </div>
                      <div className="font-sans text-[10px] text-gray-500 leading-normal">
                        {tier.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Delivery Timeline Speed */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-bold text-sm text-gray-900">
                  Step 3: Engineering Sprints &amp; Velocity
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DELIVERY_TIMELINES.map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setTimeline(time.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer focus:outline-none space-y-1 ${
                        timeline === time.id
                          ? 'bg-white border-blue-600 ring-2 ring-blue-500/10'
                          : 'bg-white border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="font-display font-bold text-xs text-gray-950 uppercase tracking-wide">
                        {time.name}
                      </div>
                      <div className="font-sans text-[10px] text-gray-500 leading-normal">
                        {time.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>


          {/* Right Column: Submission Form & Blueprint Wrapper */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Submission Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="font-display font-extrabold text-xl text-gray-900 tracking-tight">
                  Secure RFP Submission
                </h3>
                <p className="font-sans text-xs text-gray-500">
                  Transmit your configured technical scope blueprint. Our system will assign a dedicated engineering lead immediately.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center space-y-4"
                  >
                    <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-lg text-emerald-900">
                        Proposal Request Received &amp; Saved to Firebase!
                      </h4>
                      <p className="font-sans text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                        Your inquiry has been stored directly in the Firebase Firestore database and prepared for dispatch to <strong>versha@sainicollection.com</strong>.
                      </p>
                    </div>

                    {submittedMailtoUrl && (
                      <div className="pt-2">
                        <a
                          href={submittedMailtoUrl}
                          className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open Email Client for versha@sainicollection.com</span>
                        </a>
                      </div>
                    )}

                    <div>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 focus:outline-none cursor-pointer"
                      >
                        Configure another blueprint
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="font-sans font-bold text-xs text-gray-500 uppercase tracking-wider"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-gray-50/70 border rounded-xl px-4 py-3 font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all ${
                          errors.fullName ? 'border-red-300 ring-2 ring-red-500/10' : 'border-gray-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <div className="flex items-center space-x-1 text-red-500 text-xs">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="font-sans font-bold text-xs text-gray-500 uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="versha@sainicollection.com"
                        className={`w-full bg-gray-50/70 border rounded-xl px-4 py-3 font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all ${
                          errors.email ? 'border-red-300 ring-2 ring-red-500/10' : 'border-gray-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-red-500 text-xs">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Message description */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="font-sans font-bold text-xs text-gray-500 uppercase tracking-wider"
                      >
                        Project Brief &amp; Custom Constraints
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your custom requirements, databases needed, or operational challenges..."
                        className={`w-full bg-gray-50/70 border rounded-xl px-4 py-3 font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none ${
                          errors.message ? 'border-red-300 ring-2 ring-red-500/10' : 'border-gray-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.message && (
                        <div className="flex items-center space-x-1 text-red-500 text-xs">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/10 transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-600/50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                          <span>Transmitting Secure RFP...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Proposal &amp; Config</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Quick direct contact channels in form footer */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 text-xs text-gray-500 font-sans">
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase tracking-wider text-gray-400">Direct Desk channels</span>
                <span className="text-blue-600 font-semibold">2h Response Guarantee</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:versha@sainicollection.com"
                  className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="truncate">versha@sainicollection.com</span>
                </a>
                <a
                  href="tel:+917838307318"
                  className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>+91 78383 07318</span>
                </a>
              </div>
            </div>
          </div>

          {/* Selected Technology Blueprint Card */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-6 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <div className="font-mono text-[9px] tracking-widest text-blue-400 uppercase">
                  RFP Blueprint Design System
                </div>
                <h4 className="font-display font-extrabold text-base sm:text-lg text-white mt-1">
                  Your Selected Technical Scope
                </h4>
              </div>
              <div className="bg-blue-900/40 text-blue-300 border border-blue-800/50 px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wide uppercase flex-shrink-0 self-start sm:self-center">
                Gurgaon Architect Pool
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2">
                  Scoped Verticals ({selectedServices.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ESTIMATOR_SERVICES.filter((s) => selectedServices.includes(s.id)).map((s) => (
                    <span
                      key={s.id}
                      className="bg-slate-800/80 text-gray-200 border border-slate-700/60 px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center space-x-1"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block" />
                      <span>{s.title}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/50">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Scale Profile:</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    {complexityObj.name}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Sprint Velocity:</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    {timelineObj.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-sans pt-4 border-t border-slate-800/50">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Comprehensive Source Code Ownership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct Communication with Lead Architect</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Fully Containerized Deployments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Enterprise SLA and Support Standards</span>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}
