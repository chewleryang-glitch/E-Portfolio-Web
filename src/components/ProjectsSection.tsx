import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Search, X } from 'lucide-react';
import { PROJECT_CATEGORIES } from '../content/index';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { filterProjects } from '../utils/portfolioLogic';

interface ProjectsSectionProps {
  header: { index: string; title: string; subtitle: string };
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  header,
  projects,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjects(projects, selectedCategory, searchQuery);

  // Close case study modal on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeProject) {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.07] bg-[#090C14]/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-blue-400">
              {header.index}
            </p>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {header.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {header.subtitle}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72 shrink-0">
            <label htmlFor="project-search" className="sr-only">
              Search case studies
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Shopee, Meta Ads, CNB..."
              className="min-h-[42px] w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter case studies by category"
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-1.5"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Empty State if search matches nothing */}
        {visibleProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
            <p className="text-base font-medium text-white">
              No case studies match “{searchQuery}”
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Try clearing your search filter or switching to All Categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Bento / Case Study Cards Grid */
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {visibleProjects.map((project) => {
              const spanClass = project.featured
                ? 'lg:col-span-6'
                : 'lg:col-span-4';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`${spanClass} group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b ${project.accentGradient} bg-[#0D111A] p-6 sm:p-7 hover:border-white/[0.22] transition-all duration-150`}
                >
                  <div>
                    {/* Editorial Index & Unboxed Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono-tabular font-semibold text-blue-400">
                          {project.index}.
                        </span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-tabular">{project.period}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-amber-200/90">
                      {project.clientOrOrg}
                    </p>

                    {/* Summary */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>

                    {/* Quantitative Metrics Row (Tabular Numerals) */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-y border-white/[0.08] py-4">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-mono-tabular text-base font-semibold text-white sm:text-lg">
                            {m.value}
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-400">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Interactive Modal Trigger */}
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-400 truncate max-w-md">
                      {project.deliverables.join(' · ')}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      aria-label={`Inspect Case Study: ${project.title}`}
                      className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 hover:border-blue-500 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      {/* Full Case Study Modal Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0B0F19] p-5 sm:p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-mono-tabular text-blue-400">
                      Case Study {activeProject.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{activeProject.period}</span>
                  </div>
                  <h3
                    id="case-study-modal-title"
                    className="mt-1.5 text-xl font-bold text-white sm:text-2xl"
                  >
                    {activeProject.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-amber-200/90">
                    {activeProject.clientOrOrg}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close case study modal"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.12] hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Key Quantitative Results Strip */}
              <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5">
                {activeProject.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono-tabular text-lg font-bold text-white sm:text-xl">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Challenge, Strategy & Outcomes */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-blue-400">
                    01. Context & Marketing Challenge
                  </h4>
                  <p className="mt-1.5 text-slate-300">{activeProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-blue-400">
                    02. Strategic Execution & Copywriting
                  </h4>
                  <ul className="mt-1.5 space-y-1.5">
                    {activeProject.strategy.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-blue-400">
                    03. Verified Outcomes & Business Impact
                  </h4>
                  <ul className="mt-1.5 space-y-1.5">
                    {activeProject.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <p className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">
                      Core Deliverables:{' '}
                    </span>
                    {activeProject.deliverables.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Discuss a Similar Campaign
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.1] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
