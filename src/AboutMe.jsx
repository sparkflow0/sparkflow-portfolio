import React from 'react';
import {
  ShieldCheck,
  Award,
  Briefcase,
  BookOpen,
  GraduationCap,
  Star,
  HeartPulse,
  Sparkles,
  Globe2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const colors = {
  brandBlue: '#4DA9E2',
  brandOrange: '#f17a1e',
  darkBg: '#0d1628',
  cardBg: '#111c30',
  textLight: '#F3F4F6',
  textGray: '#9CA3AF'
};

const SectionCard = ({ title, icon: Icon, children }) => (
  <div className="bg-gradient-to-br from-[#0f1d34] to-[#0b1324] border border-gray-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from),transparent_40%)]" />
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-white">
        <Icon className="w-5 h-5" style={{ color: colors.brandOrange }} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

const HighlightBadge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-gray-700 text-sm text-gray-100">
    <Sparkles className="w-4 h-4 text-orange-300" />
    {children}
  </span>
);

const AboutMe = ({ navigate }) => {
  const handleNavigate = (href) => {
    if (navigate) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  const heroBadges = [
    'Full Stack Developer',
    'Project Management',
    'Tech Instructor'
  ];

  const contact = [
    { icon: Mail, label: 'mjassim2030@gmail.com', href: 'mailto:mjassim2030@gmail.com' },
    { icon: Phone, label: '+973 33669851', href: 'tel:+97333669851' },
    { icon: Globe2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohjasim/' },
    { icon: MapPin, label: 'Bahrain' }
  ];

  const skills = {
    technical: [
      'Full-stack web development (React, HTML, CSS, JavaScript)',
      'Back-end: Node.js, Express, Django',
      'Databases: MySQL, MongoDB, PostgreSQL',
      'Git workflow & version control',
      'Python & C++ for CV, IoT, automation'
    ],
    soft: [
      'Communication, teamwork, leadership',
      'Problem solving & critical thinking',
      'Adaptability, time management, creativity',
      'Attention to detail'
    ],
    languages: ['Arabic (Native)', 'English (Fluent)']
  };

  const experience = [
    {
      role: 'Software Engineering, General Assembly',
      period: 'April 2025 – Sep 2025',
      location: 'Kingdom of Bahrain',
      summary:
        'Intensive full-stack program with React, Django, and Node.js; project-based learning and career coaching.',
      items: [
        'Customized Tic-Tac-Toe Game (HTML, CSS, JS)',
        'Connect 4 Game (Space Theme) (HTML, CSS, JS)',
        'Volunteers Hub (Node.js, Express, MongoDB)',
        'Space Eye (Node.js, React, MongoDB, Tailwind)',
        'Mind Arena (Django, Bootstrap, Postgres)'
      ]
    },
    {
      role: 'Chief of IT & Telecom',
      company: 'Ministry of Transportation and Telecommunications',
      period: '2022 – Current',
      summary:
        'Leading ICT and telecom policy implementation, aligning regulations globally and advancing digital infrastructure.',
      items: [
        'ICT Projects Dashboard: interactive dashboard for project challenges and timelines (HTML, CSS, JS)',
        'Event Registration System: QR registration, winner selection (HTML, CSS, JS, Firebase)',
        'Locate the Flag – VR Experience: AR/VR scavenger experience (HTML, CSS, JS, Firebase)'
      ]
    },
    {
      role: 'Sr. Telecom Specialist',
      company: 'Ministry of Transportation and Telecommunications',
      period: '2019 – 2021',
      summary:
        'Led national telecom projects, coordinated reviews and consultations, tracked industry trends for strategic planning.'
    },
    {
      role: 'General Engineer',
      company: 'Electricity and Water Authority (EWA)',
      period: '2016 – 2018',
      summary:
        'Managed procurement and financial processes for engineering projects; built tooling to secure faster approvals.',
      items: [
        'Invoices Tracking System (HTML, CSS, JS)',
        'Warehouse Inventory Tracker (HTML, CSS, JS)'
      ]
    },
    {
      role: 'Wireless Communication Engineer',
      company: 'Bahrain Defence Force',
      period: '2005 – 2015',
      summary:
        'Configured tactical wireless systems, managed inventory, piloted new technologies to improve efficiency and reliability.'
    }
  ];

  const majorProjects = [
    'Sleepy Driver Detection',
    'Access Control Systems (UTB)',
    'LPG Sampling and Leak Detection (Ahlia)',
    'Smart Buoy with LoRa (UOB)',
    'Audio Control System for Dream Audio',
    'Vaccination Gate for TVTC Saudi'
  ];

  const education = [
    { title: 'B.Sc. Electronics & Electrical Engineering', place: 'University of Bahrain', year: '2011' },
    { title: 'Diploma in Computer Engineering', place: 'University of Otago, New Zealand', year: '2003' }
  ];

  const certifications = [
    'IELTS 6.0 (2023)',
    'AI Programming with Python Nanodegree, Udacity (2021)',
    'International Communications Regulations & Policies, ITSO USA (2020)',
    'C++ & Python Certification, Programming Hub (2020)',
    'Android Development Nanodegree, Udacity (2018)',
    'Tactical Comm. Equipment Programming, ITT Indiana USA (2012)'
  ];

  const volunteering = [
    'Branch Secretary, IEEE ComSoc Bahrain Branch (2024 – Now)',
    'Project Manager, Bahrain IoT & AI Competition, University of Bahrain (2023 – 2024)',
    'Members Development Officer, IEEE ComSoc Bahrain Branch (2023)'
  ];

  const awards = [
    'Employee of the Year – Telecommunication Directorate (2025)',
    'Far Exceeded Expectation – Annual Appraisal (2021)',
    'Best Emerging Education Brand – Inventors Hive (2017)'
  ];

  const hobbies = [
    'Coding and app development',
    'Exploring global tech trends',
    'Tech-focused educational videos',
    'Designing digital art & infographics',
    'Creating audio through mixing and sound design'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      <nav className="border-b border-gray-800 backdrop-blur-md fixed w-full z-50 bg-opacity-90" style={{ backgroundColor: colors.darkBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="SparkFlow logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" data-spa-link className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={(e) => { e.preventDefault(); handleNavigate('/'); }}>Home</a>
                <a href="/tutorials" data-spa-link className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={(e) => { e.preventDefault(); handleNavigate('/tutorials'); }}>Tutorials</a>
                <a href="/#projects" data-spa-link className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={(e) => { e.preventDefault(); handleNavigate('/#projects'); }}>Portfolio</a>
                <a href="/about" data-spa-link className="px-3 py-2 rounded-md text-sm font-semibold transition-colors text-white border border-gray-700">About Me</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-800 text-sm text-gray-200">
                <ShieldCheck className="w-4 h-4" style={{ color: colors.brandOrange }} />
                Eng. Mohammed Jassim Al Mehaiza
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">About Me</h1>
              <p className="text-lg" style={{ color: colors.textGray }}>
                Passionate software engineering developer crafting innovative digital solutions. Blends full-stack execution with strategic insight, driven by continuous improvement and collaborative leadership.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroBadges.map((b, i) => (
                  <HighlightBadge key={i}>{b}</HighlightBadge>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {contact.map((c, idx) => (
                  <a
                    key={idx}
                    href={c.href || '#'}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-400 transition-colors"
                    target={c.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <c.icon className="w-5 h-5 text-blue-300" />
                    <span className="text-sm">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-orange-500/10 to-transparent blur-3xl" />
              <div className="relative h-56 w-56 rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-gray-900">
                <img src="/eng-mohammed-al-mehaiza.jpg" alt="Eng. Mohammed Jassim Al Mehaiza" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-3 gap-6">
          <SectionCard title="Profile" icon={BookOpen}>
            <p className="text-sm leading-relaxed" style={{ color: colors.textGray }}>
              A passionate software engineering developer specialized in crafting innovative digital solutions. Driven by continuous improvement, collaborative mindset, and a commitment to excellence.
            </p>
          </SectionCard>

          <SectionCard title="Highlighted Skills" icon={Star}>
            <div className="space-y-3 text-sm" style={{ color: colors.textGray }}>
              <div>
                <p className="text-gray-200 font-semibold mb-1">Technical</p>
                <ul className="list-disc list-inside space-y-1">
                  {skills.technical.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-gray-200 font-semibold mb-1">Soft Skills</p>
                <ul className="list-disc list-inside space-y-1">
                  {skills.soft.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-gray-200 font-semibold mb-1">Languages</p>
                <p>{skills.languages.join(' · ')}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Awards & Recognition" icon={Award}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textGray }}>
              {awards.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-300">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <SectionCard title="Experience" icon={Briefcase}>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="flex flex-wrap justify-between gap-2">
                    <div>
                      <p className="text-white font-semibold text-lg">{exp.role}{exp.company ? `, ${exp.company}` : ''}</p>
                      <p className="text-sm" style={{ color: colors.textGray }}>{exp.period}{exp.location ? ` · ${exp.location}` : ''}</p>
                    </div>
                  </div>
                  <p className="text-sm mt-2" style={{ color: colors.textGray }}>{exp.summary}</p>
                  {exp.items && (
                    <ul className="list-disc list-inside mt-3 space-y-1 text-sm" style={{ color: colors.textLight }}>
                      {exp.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
          <SectionCard title="Major Projects Developed" icon={ShieldCheck}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
              {majorProjects.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-300">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Education" icon={GraduationCap}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
              {education.map((e, i) => (
                <li key={i}>
                  <p className="font-semibold text-white">{e.title}</p>
                  <p style={{ color: colors.textGray }}>{e.place} — {e.year}</p>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Certifications" icon={BookOpen}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-300">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-2 gap-6">
          <SectionCard title="Volunteering" icon={HeartPulse}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
              {volunteering.map((v, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-300">•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Hobbies" icon={Star}>
            <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
              {hobbies.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-300">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
