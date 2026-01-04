import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Globe, 
  Phone, 
  Mail, 
  Activity, 
  Server, 
  BarChart3, 
  Layers, 
  Zap, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Cpu, 
  Users,
  Database,
  Lock
} from 'lucide-react';

const SparkFlowPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Brand Palette - Strictly Preserved
  const colors = {
    brandBlue: '#0ea5e9',
    brandBlueAlt: '#00b8f0',
    brandOrange: '#f17a1e',
    brandOrangeGlow: 'rgba(241, 122, 30, 0.5)',
    darkBg: '#050a14',
    cardBg: '#0f1728',
    cardHoverBg: '#16223a',
    border: '#1f2b3d',
    textLight: '#e2e8f0',
    textGray: '#94a3b8',
    white: '#ffffff'
  };

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'AI & Automation Strategy', desc: 'Strategic roadmaps for automations that respect controls, risk, and compliance.', icon: Bot },
    { title: 'Integration Architecture', desc: 'Blueprints to unify apps, data, and identity with structured rollout plans.', icon: Server },
    { title: 'Communication Governance', desc: 'Advisory on governed and measurable omni-channel customer journeys.', icon: Activity },
    { title: 'Data Strategy', desc: 'Architecture for decision-ready reporting and resilient data ownership models.', icon: BarChart3 },
    { title: 'Architecture & Advisory', desc: 'Vendor-neutral guidance, risk mapping, and delivery governance.', icon: ShieldCheck },
    { title: 'Solution Design', desc: 'Technical solution planning for unique operational challenges and legacy bridging.', icon: Cpu },
  ];

  const process = [
    { title: 'Assess', text: 'Evaluate current capabilities, constraints, and strategic priorities.' },
    { title: 'Design', text: 'Translate business goals into a governed, sequenced technical roadmap.' },
    { title: 'Architect', text: 'Define connection standards, data flows, and ownership models.' },
    { title: 'Enable', text: 'Prepare teams with training frameworks, playbooks, and support readiness.' },
    { title: 'Optimise', text: 'Establish KPIs and continuous improvement frameworks.' },
  ];

  const sectors = ['Enterprises & SMEs', 'Education', 'Healthcare', 'Semi-government', 'Service organizations'];

  const why = [
    { title: 'Strategy-first', text: 'Architecture that prioritizes resilience, auditability, and scale.' },
    { title: 'Vendor-agnostic', text: 'Recommendations anchored to fit, compliance, and longevity.' },
    { title: 'Market aware', text: 'Local regulations, support models, and operating rhythms built in.' },
    { title: 'Delivery governance', text: 'Clear acceptance criteria, reporting, and handover discipline.' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl border-b shadow-lg' : 'bg-transparent'}`}
        style={{ 
          backgroundColor: isScrolled ? 'rgba(5, 10, 20, 0.9)' : 'transparent',
          borderColor: isScrolled ? colors.border : 'transparent' 
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="Spark Flow Consultancy logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8 text-sm font-medium">
                {['Home', 'Services', 'Approach', 'Why Us'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="relative group py-2 transition-colors hover:text-white text-gray-300"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="px-7 py-3 rounded-lg text-white font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-orange-700/30 active:scale-95 border border-transparent hover:border-white/10"
                  style={{ backgroundColor: colors.brandOrange }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full backdrop-blur-xl border-b shadow-2xl" style={{ backgroundColor: colors.darkBg, borderColor: colors.border }}>
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'Services', 'Approach', 'Why Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Professional Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
               alt="Global connectivity background" 
               className="w-full h-full object-cover"
             />
             {/* Dual Gradient Overlay for depth and readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#050a14] via-[#050a14]/95 to-[#050a14]/60"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                AI & Automation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
                  Consultancy
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-xl leading-relaxed font-light mb-10" style={{ color: colors.textLight }}>
                We architect the systems that power modern enterprises. Strategy, integration planning, and governance for organizations ready to scale with resilience and compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#contact" className="group flex items-center justify-center px-8 py-4 rounded-lg text-white font-bold transition-all hover:-translate-y-1 shadow-lg shadow-orange-900/20 border border-transparent" style={{ backgroundColor: colors.brandOrange }}>
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-6" style={{ backgroundColor: '#050a14' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h3 className="text-4xl font-extrabold text-white leading-tight">Comprehensive automation &<br/>integration advisory</h3>
              </div>
              <a href="#contact" className="text-sm font-semibold hover:text-white transition-colors flex items-center gap-2" style={{ color: colors.brandBlue }}>
                View Full Capabilities <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div 
                  key={service.title} 
                  className="group relative p-8 rounded-2xl border bg-[#0f1728]/90 backdrop-blur-sm transition-all duration-300 hover:bg-[#131c2e] hover:border-gray-600 hover:-translate-y-1"
                  style={{ borderColor: colors.border }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors bg-[#050a14] border border-gray-800 group-hover:border-gray-600">
                    <service.icon className="w-7 h-7" style={{ color: idx % 2 === 0 ? colors.brandBlue : colors.brandOrange }} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach / Process Section */}
        <section id="approach" className="py-24 bg-[#050a14] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.brandOrange }}>Methodology</h2>
               <h3 className="text-4xl font-extrabold text-white">Structured Transformation</h3>
            </div>
            
            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {process.map((step, idx) => (
                  <div key={step.title} className="relative group pt-8 lg:pt-0">
                    {/* Visual Node */}
                    <div className="hidden lg:flex flex-col items-center absolute -top-4 left-0 right-0 z-10">
                       <div className="w-4 h-4 rounded-full bg-[#050a14] border-2 border-gray-600 group-hover:border-cyan-500 transition-colors"></div>
                       <div className="h-8 w-[1px] border-l border-dashed border-gray-600 group-hover:border-cyan-500 transition-colors"></div>
                    </div>

                    <div className="bg-[#0f1728] border border-[#1f2b3d] p-6 rounded-2xl h-full hover:border-cyan-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-6xl text-white select-none">{idx + 1}</div>
                       <h4 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h4>
                       <p className="text-sm text-gray-400 relative z-10 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us & Sectors - Enhanced Visual Layout */}
        <section id="why-us" className="py-24 bg-[#050a14]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                {/* Text Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.brandOrange }}>Why Spark Flow</h2>
                    <h3 className="text-4xl font-extrabold text-white mb-6">Partnership that delivers</h3>
                    <p className="text-gray-400 text-lg">
                      We differentiate ourselves through a commitment to vendor neutrality and delivery discipline. We don't just advise; we architect for the long term.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {why.map((item, idx) => (
                        <div key={item.title} className="p-5 rounded-xl bg-[#0f1728] border border-[#1f2b3d] hover:border-cyan-900/50 transition-all">
                           <div className="mb-3">
                              <Layers className="w-6 h-6" style={{ color: idx % 2 === 0 ? colors.brandBlue : colors.brandOrange }} />
                           </div>
                           <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                           <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                     ))}
                  </div>
                </div>

                {/* New Feature Image */}
                <div className="relative rounded-2xl overflow-hidden border border-[#1f2b3d] shadow-2xl min-h-[400px]">
                   <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern corporate architecture" 
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 max-w-sm">
                      <div className="bg-[#050a14]/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                         <p className="text-white text-sm font-semibold">"Governance ensures delivery."</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Sectors Banner with Image Background */}
             <div className="relative rounded-3xl overflow-hidden border border-[#1f2b3d]">
                {/* Updated Image: City Skyline (Abstract/Scale, No People) */}
                <img 
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
                  alt="City skyline representing critical sectors"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#050a14]/90 backdrop-blur-[2px]"></div>
                
                <div className="relative z-10 py-16 px-8 text-center">
                   <h3 className="text-2xl font-bold text-white mb-8">Trusted across critical sectors</h3>
                   <div className="flex flex-wrap justify-center gap-4">
                      {sectors.map(sector => (
                        <div key={sector} className="flex items-center gap-2 px-6 py-3 rounded-full border bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                           <Building2 className="w-4 h-4 text-cyan-400" />
                           <span className="text-sm font-medium text-gray-200">{sector}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Contact Section - Professional Layout */}
        <section id="contact" className="py-24 bg-[#080d19] relative overflow-hidden">
           {/* Abstract Glow */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.brandOrange }}>Contact</h2>
                  <h3 className="text-4xl font-extrabold text-white mb-6">Let's discuss your roadmap</h3>
                  <p className="text-lg text-gray-400">
                    Reach out for a preliminary assessment. We are ready to help you navigate your automation journey.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email Us', value: 'sparkflow2030@gmail.com', href: 'mailto:sparkflow2030@gmail.com' },
                    { icon: Phone, label: 'Call Us', value: '+973 3364 1412', href: 'tel:+97333641412' },
                    { icon: Globe, label: 'Location', value: 'Kingdom of Bahrain', href: '#' }
                  ].map((contact, i) => (
                    <a key={i} href={contact.href} className="flex items-center gap-5 p-5 rounded-xl border bg-[#0f1728] border-[#1f2b3d] hover:border-cyan-500/30 transition-all group">
                      <div className="p-3 rounded-lg bg-[#050a14] group-hover:bg-[#131c2e] transition-colors">
                        <contact.icon className="w-6 h-6" style={{ color: colors.brandOrange }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{contact.label}</p>
                        <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl p-8 md:p-10 border bg-[#0f1728] shadow-2xl" style={{ borderColor: colors.border }}>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400 ml-1">Full Name</label>
                        <input type="text" className="w-full rounded-lg bg-[#050a14] border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email Address</label>
                        <input type="email" className="w-full rounded-lg bg-[#050a14] border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-gray-400 ml-1">I'm interested in</label>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {['Automation', 'Integration', 'Advisory'].map(opt => (
                             <label key={opt} className="cursor-pointer">
                                <input type="radio" name="interest" className="peer sr-only" />
                                <div className="text-center py-3 rounded-lg border border-gray-700 bg-[#050a14] text-gray-400 peer-checked:bg-cyan-900/20 peer-checked:border-cyan-500 peer-checked:text-cyan-400 transition-all text-sm font-medium hover:bg-[#131c2e]">
                                   {opt}
                                </div>
                             </label>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Message</label>
                      <textarea rows="4" className="w-full rounded-lg bg-[#050a14] border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Tell us about your project requirements..." />
                    </div>
                    
                    <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-orange-900/40 transition-all hover:-translate-y-1 mt-2" style={{ backgroundColor: colors.brandOrange }}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-black" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
               <img src="/logo.png" alt="Spark Flow Consultancy logo" className="h-8 w-auto" />
            </div>

            <p className="text-sm text-gray-600">
              © 2026 Spark Flow Consultancy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkFlowPortfolio;
