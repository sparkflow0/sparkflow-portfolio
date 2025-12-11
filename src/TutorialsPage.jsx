import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronRight, Bot, ShieldCheck, ArrowRight } from 'lucide-react';
import { tutorialCategories, tutorials } from './tutorialsData';

const slugify = (str) => str
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const colors = {
  brandBlue: '#4DA9E2',
  brandOrange: '#f17a1e',
  darkBg: '#111827',
  cardBg: '#1F2937',
  textLight: '#F3F4F6',
  textGray: '#9CA3AF'
};

const TutorialsPage = ({ navigate }) => {
  const [tutorialFilter, setTutorialFilter] = useState('All');
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const detailRef = useRef(null);

  const tutorialsWithSlugs = useMemo(
    () => tutorials.map((t) => ({ ...t, slug: slugify(t.title) })),
    []
  );

  const filteredTutorials = useMemo(() => {
    const list =
      tutorialFilter === 'All'
        ? tutorialsWithSlugs
        : tutorialsWithSlugs.filter((t) => t.category === tutorialFilter);

    return list;
  }, [tutorialFilter, tutorialsWithSlugs]);

  useEffect(() => {
    if (filteredTutorials.length > 0) {
      setSelectedTutorial(filteredTutorials[0]);
    } else {
      setSelectedTutorial(null);
    }
  }, [filteredTutorials]);

  useEffect(() => {
    const openFromHash = () => {
      const { hash } = window.location;
      if (hash.startsWith('#tutorial/')) {
        const slug = decodeURIComponent(hash.replace('#tutorial/', ''));
        const found = tutorialsWithSlugs.find((t) => t.slug === slug);
        if (found) {
          setTutorialFilter('All');
          setSelectedTutorial(found);
          detailRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [tutorialsWithSlugs]);

  useEffect(() => {
    if (selectedTutorial && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedTutorial]);

  const handleNavigate = (href) => {
    if (navigate) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      <nav className="border-b border-gray-800 backdrop-blur-md fixed w-full z-50 bg-opacity-90" style={{ backgroundColor: colors.darkBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="SparkFlow logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="/"
                  data-spa-link
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={(e) => { e.preventDefault(); handleNavigate('/'); }}
                >
                  Home
                </a>
                <a
                  href="/tutorials"
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-white"
                  aria-current="page"
                >
                  Tutorials
                </a>
                <a
                  href="/#projects"
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={(e) => { e.preventDefault(); handleNavigate('/#projects'); }}
                >
                  Portfolio
                </a>
                <a
                  href="/#contact"
                  className="bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{ backgroundColor: colors.brandOrange, color: colors.textLight }}
                  onClick={(e) => { e.preventDefault(); handleNavigate('/#contact'); }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.brandOrange }}>
                Hands-on builds
              </p>
              <h1 className="text-4xl font-extrabold text-white mb-4">Embedded AI & IoT Tutorials</h1>
              <p className="text-lg leading-relaxed" style={{ color: colors.textGray }}>
                Step-by-step guides with wiring shots, code starters, and delivery-ready assets. Filter by platform and jump straight into the build.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-200">
                <ShieldCheck className="w-4 h-4" style={{ color: colors.brandOrange }} />
                <span>Projects authored by Eng. Mohammed Jassim Al Mehaiza.</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => handleNavigate('/#projects')}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: colors.brandBlue }}
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNavigate('/#contact')}
                  className="px-5 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.brandBlue }}>
                Filters
              </p>
              <div className="flex flex-wrap gap-2">
                {tutorialCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setTutorialFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      tutorialFilter === cat
                        ? 'bg-white text-gray-900 shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={detailRef}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {filteredTutorials.map((tutorial, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedTutorial(tutorial);
                    window.location.hash = `tutorial/${tutorial.slug}`;
                  }}
                  className={`text-left bg-gray-800 border ${
                    selectedTutorial === tutorial ? 'border-blue-400 shadow-xl' : 'border-gray-700 hover:border-gray-500'
                  } rounded-2xl overflow-hidden shadow-lg transition-all flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <div className="flex items-center justify-between px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-600 bg-gray-900 text-gray-200">
                      {tutorial.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      View details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900 border-y border-gray-700">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white leading-tight">{tutorial.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: colors.textGray }}>
                      {tutorial.summary}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit sticky top-24">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.brandBlue }}>
                    {selectedTutorial?.category || 'Tutorial'}
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedTutorial?.title || 'Select a tutorial'}</h3>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-2">
                  <Bot className="w-5 h-5 text-orange-300" />
                </div>
              </div>

              {selectedTutorial ? (
                <>
                  <div className="mt-4 rounded-xl overflow-hidden border border-gray-800">
                    <img
                      src={selectedTutorial.image}
                      alt={selectedTutorial.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed" style={{ color: colors.textGray }}>
                    {selectedTutorial.summary}
                  </p>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-200 mb-2">What you get</p>
                    <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                      {selectedTutorial.deliverables.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-400">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 bg-gray-800 border border-gray-700 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-400 mb-2">Starter code</p>
                    <pre className="text-xs text-gray-200 whitespace-pre-wrap leading-relaxed">
{selectedTutorial.code}
                    </pre>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-400 mt-6">
                  <p>Select a tutorial to view details, deliverables, and starter code.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TutorialsPage;
