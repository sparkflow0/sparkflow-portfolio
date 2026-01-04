import React from 'react';
import { ArrowRight, ShieldCheck, Bot, Globe, Phone, Mail, Activity, Server, Zap } from 'lucide-react';

const SparkFlowPortfolio = () => {
  const colors = {
    brandBlue: '#0ea5e9',
    brandBlueAlt: '#00b8f0',
    brandOrange: '#f17a1e',
    darkBg: '#050a14',
    cardBg: '#0f1728',
    border: '#1f2b3d',
    textLight: '#e2e8f0',
    textGray: '#cbd5e1'
  };

  const services = [
    {
      title: 'AI & Business Process Automation',
      description: 'Designing automation that reduces manual effort, streamlines approvals, and keeps operations consistent.'
    },
    {
      title: 'Digital Platform Deployment & Integration',
      description: 'Selecting, configuring, and integrating platforms so data, workflows, and teams stay aligned.'
    },
    {
      title: 'WhatsApp & Communication Automation',
      description: 'Building compliant messaging flows for customer service, notifications, and internal coordination.'
    },
    {
      title: 'Data, Dashboards & Operational Reporting',
      description: 'Turning raw data into decision-ready insights with clear ownership and resilient pipelines.'
    },
    {
      title: 'Technical Advisory & Solution Architecture',
      description: 'Providing vendor-agnostic architecture, due diligence, and delivery oversight for critical initiatives.'
    }
  ];

  const approach = [
    {
      title: 'Understand Operations',
      text: 'Collaborative discovery to map current processes, systems, and constraints.'
    },
    {
      title: 'Identify Opportunities',
      text: 'Prioritize automation and integration wins with clear ownership and outcomes.'
    },
    {
      title: 'Deploy & Integrate',
      text: 'Implement platforms, connect data, and configure workflows with proper governance.'
    },
    {
      title: 'Adopt & Support',
      text: 'Enable teams, monitor performance, and iterate for continuous improvement.'
    }
  ];

  const sectors = [
    'Enterprises & SMEs',
    'Education',
    'Healthcare',
    'Semi-government & regulated entities',
    'Service-based organizations'
  ];

  const reasons = [
    {
      title: 'Systems-first mindset',
      text: 'We architect for reliability, maintainability, and scale from day one.'
    },
    {
      title: 'Vendor-agnostic',
      text: 'Recommendations are driven by fit, compliance, and longevity?not tooling bias.'
    },
    {
      title: 'Local market understanding',
      text: 'Regional operating models, regulations, and support expectations are baked into delivery.'
    },
    {
      title: 'Long-term partnership',
      text: 'We coordinate stakeholders, platforms, and partners to keep outcomes on track.'
    }
  ];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      <nav className="border-b border-gray-800 backdrop-blur-md fixed w-full z-50 bg-opacity-90" style={{ backgroundColor: colors.darkBg, borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Spark Flow logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
                <a href="#home" className="hover:text-white px-3 py-2 rounded-md transition-colors">Home</a>
                <a href="#services" className="hover:text-white px-3 py-2 rounded-md transition-colors">Services</a>
                <a href="#approach" className="hover:text-white px-3 py-2 rounded-md transition-colors">Approach</a>
                <a href="#sectors" className="hover:text-white px-3 py-2 rounded-md transition-colors">Sectors</a>
                <a href="#contact" className="bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full transition-all" style={{ backgroundColor: colors.brandOrange, color: colors.textLight }}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandBlue }}></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandOrange }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
                Spark Flow Consultancy
              </p>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl leading-tight">
                AI & Automation Consultancy for Scalable Digital Operations
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-2xl" style={{ color: colors.textGray }}>
                Strategy. Integration. Delivery. We align teams, platforms, and data so your operations run reliably at scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold transition-transform hover:scale-105" style={{ backgroundColor: colors.brandOrange }}>
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#services" className="flex items-center justify-center px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition-colors">
                  Explore Our Services
                </a>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <ShieldCheck className="w-6 h-6 mb-3" style={{ color: colors.brandBlue }} />
                  <h3 className="text-lg font-semibold text-white">Strategy</h3>
                  <p className="text-sm" style={{ color: colors.textGray }}>
                    Operating models that balance control, speed, and governance.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <Server className="w-6 h-6 mb-3" style={{ color: colors.brandOrange }} />
                  <h3 className="text-lg font-semibold text-white">Integration</h3>
                  <p className="text-sm" style={{ color: colors.textGray }}>
                    Connecting platforms, data, and teams into cohesive workflows.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <Bot className="w-6 h-6 mb-3" style={{ color: colors.brandBlue }} />
                  <h3 className="text-lg font-semibold text-white">Automation</h3>
                  <p className="text-sm" style={{ color: colors.textGray }}>
                    AI-driven automations that are monitored, owned, and supportable.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <Activity className="w-6 h-6 mb-3" style={{ color: colors.brandOrange }} />
                  <h3 className="text-lg font-semibold text-white">Delivery</h3>
                  <p className="text-sm" style={{ color: colors.textGray }}>
                    Coordinated execution with clear acceptance criteria and success metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-900 border-t border-b border-gray-800" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
                Who We Are
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white leading-tight">
                Consultancy. Systems integrator. Delivery partner.
              </p>
              <p className="mt-4 text-lg" style={{ color: colors.textGray }}>
                We guide organizations through automation and platform adoption with a structured, client-facing approach. The focus is on clarity, accountability, and measurable outcomes.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <h3 className="text-xl font-semibold text-white mb-2">Strategic thinking</h3>
                <p className="text-sm" style={{ color: colors.textGray }}>
                  Engagements start with operating realities, not tools. We map priorities to business objectives and controls.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <h3 className="text-xl font-semibold text-white mb-2">Client engagement</h3>
                <p className="text-sm" style={{ color: colors.textGray }}>
                  Collaborative workshops, clear owners, and decision pathways keep delivery moving.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <h3 className="text-xl font-semibold text-white mb-2">Delivery & coordination</h3>
                <p className="text-sm" style={{ color: colors.textGray }}>
                  We coordinate platforms, partners, and internal teams to de-risk timelines and handovers.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
                <p className="text-sm" style={{ color: colors.textGray }}>
                  Governance, documentation, and support models ensure solutions remain maintainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
              What We Do
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white">Core services built around outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors h-full flex flex-col" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white leading-snug">{service.title}</h3>
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-700">
                    <Zap className="w-5 h-5" style={{ color: colors.brandOrange }} />
                  </div>
                </div>
                <p className="text-sm" style={{ color: colors.textGray }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="py-16 bg-gray-900 border-t border-b border-gray-800" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
              How We Work
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white">Methodical, repeatable, transparent</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, idx) => (
              <div key={step.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700 h-full" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: colors.brandBlue, color: '#0B1220' }}>
                    Step {idx + 1}
                  </span>
                  <ShieldCheck className="w-5 h-5" style={{ color: colors.brandOrange }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm" style={{ color: colors.textGray }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
              Who We Work With
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white">Sectors we support</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map(sector => (
              <span key={sector} className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800 text-sm font-medium" style={{ color: colors.textLight }}>
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-16 bg-gray-900 border-t border-b border-gray-800" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
              Why Spark Flow
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white">A partner built for delivery and scale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={reason.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex gap-4" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
                <div className="p-3 rounded-xl bg-gray-900 border border-gray-700">
                  <Globe className="w-6 h-6" style={{ color: idx % 2 === 0 ? colors.brandBlue : colors.brandOrange }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="text-sm mt-1" style={{ color: colors.textGray }}>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-10" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
            <p className="text-base font-semibold uppercase tracking-wide" style={{ color: colors.brandOrange }}>
              Ready to move
            </p>
            <h3 className="mt-2 text-3xl font-extrabold text-white">Schedule an introductory discussion</h3>
            <p className="mt-3 text-lg" style={{ color: colors.textGray }}>
              Let us understand your objectives and outline a pragmatic path to automation and integration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-md text-white font-semibold transition-transform hover:scale-105" style={{ backgroundColor: colors.brandOrange }}>
                Contact Our Team
              </a>
              <a href="#approach" className="px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition-colors">
                View Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-900 border-t border-gray-800" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>
              Contact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Speak with Spark Flow Consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gray-800 border border-gray-700 rounded-2xl p-6 space-y-4" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-700 rounded-full p-3 border border-gray-600">
                  <Mail className="w-6 h-6" style={{ color: colors.brandOrange }} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-sm text-white font-semibold break-all" style={{ overflowWrap: 'anywhere' }}>
                    sparkflow2030@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-700 rounded-full p-3 border border-gray-600">
                  <Phone className="w-6 h-6" style={{ color: colors.brandOrange }} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-sm text-white font-semibold break-words">+973 3364 1412</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-700 rounded-full p-3 border border-gray-600">
                  <Globe className="w-6 h-6" style={{ color: colors.brandOrange }} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-sm text-white font-semibold break-words">Kingdom of Bahrain</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-2xl p-6" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="Tell us about your requirements"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: colors.brandOrange }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-10 bg-black bg-opacity-30" style={{ borderColor: colors.border, backgroundColor: colors.cardBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="SparkFlow logo" className="h-9 w-auto" />
            <p className="text-sm mt-2" style={{ color: colors.textGray }}>? 2025 Spark Flow Consultancy. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm" style={{ color: colors.textGray }}>
            <span>Strategy</span>
            <span>Integration</span>
            <span>Delivery</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkFlowPortfolio;
