import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  GraduationCap,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import {
  EducationItem,
  ExperienceItem,
  ProjectCategory,
} from '../types/portfolio';
import {
  filterExperiences,
  PROJECT_CATEGORIES,
} from '../utils/portfolioLogic';

interface ExperienceSectionProps {
  experienceHeader: { index: string; title: string; subtitle: string };
  educationHeader: { index: string; title: string; subtitle: string };
  experiences: ExperienceItem[];
  education: EducationItem[];
  onSelectRole: (roleId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experienceHeader,
  educationHeader,
  experiences,
  education,
  onSelectRole,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiences = useMemo(
    () => filterExperiences(experiences, activeCategory, searchQuery),
    [experiences, activeCategory, searchQuery]
  );

  return (
    <div className="py-16 sm:py-24">
      {/* Unified Experience & Selected Campaign Works Section */}
      <section
        id="experience"
        className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-blue-400">
              {experienceHeader.index}
            </p>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              {experienceHeader.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {experienceHeader.subtitle}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search role, company, metric..."
              aria-label="Search experience and campaign works"
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-9 text-xs text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Bar + Quick Role Jump Strip */}
        <div className="mt-8 flex flex-col gap-4 border-b border-white/[0.08] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Filter experience by marketing domain"
            className="flex flex-wrap items-center gap-2"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] rounded-xl px-4 py-2 text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'border border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-400">
            Showing{' '}
            <span className="font-mono-tabular font-semibold text-white">
              {filteredExperiences.length}
            </span>{' '}
            of {experiences.length} roles · Select any role to open its dedicated page
          </p>
        </div>

        {/* Unified Vertical Timeline + Campaign Showcase Cards */}
        {filteredExperiences.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
            <p className="text-base font-semibold text-white">
              No roles match your current filter
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Try clearing your search query or switching back to All categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex min-h-[38px] items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Reset Experience Filters
            </button>
          </div>
        ) : (
          <div className="relative mt-12">
            {/* Hairline Vertical Guide Line */}
            <div
              aria-hidden="true"
              className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-white/15 to-transparent sm:left-6"
            />

            <div className="space-y-8">
              {filteredExperiences.map((exp, idx) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-10 sm:pl-16"
                >
                  {/* Timeline Node Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-[#0A0E17] font-mono-tabular text-[11px] font-semibold text-blue-400 sm:left-3"
                  >
                    {exp.index}
                  </div>

                  {/* Unified Role & Campaign Card */}
                  <div
                    className={`rounded-2xl border border-white/[0.09] bg-gradient-to-br ${exp.accentGradient} p-6 sm:p-8 backdrop-blur-md hover:border-white/[0.2] transition-all`}
                  >
                    {/* Header Row: Role Title, Company & Dedicated Page Action */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        {/* Quiet unboxed metadata line */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                          <span className="font-mono-tabular font-semibold text-blue-400">
                            {exp.index}.
                          </span>
                          <span className="font-mono-tabular text-amber-200/90">
                            {exp.period}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.type}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-blue-300">{exp.category}</span>
                        </div>

                        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-amber-200/95">
                          {exp.company}{' '}
                          <span className="font-normal text-slate-300">
                            — {exp.companyDescriptor}
                          </span>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectRole(exp.id)}
                        className="inline-flex min-h-[42px] items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>View Dedicated Role Page</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Featured Campaign Works Summary Box */}
                    <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#07090E]/55 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Campaign Case Study Focus</span>
                      </div>
                      <h4 className="mt-1.5 text-base font-bold text-white sm:text-lg">
                        {exp.campaignTitle}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Spacious 4-Metric Grid (Neatly Spaced & Readable) */}
                    <div className="mt-5 grid grid-cols-1 gap-4 border-y border-white/[0.08] py-4 sm:grid-cols-2 lg:grid-cols-4">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="min-w-0 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                        >
                          <p className="font-mono-tabular text-lg font-bold tracking-tight text-white sm:text-xl break-words">
                            {m.value}
                          </p>
                          <p className="mt-1 text-xs font-medium text-slate-300">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Key Role Highlights Preview & Footer Link */}
                    <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <div className="space-y-2 max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Core Role Highlights
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                          {exp.highlights.slice(0, 2).map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="pt-1 text-xs text-slate-400">
                          <span className="text-slate-500">
                            Capabilities Applied:{' '}
                          </span>
                          <span className="text-slate-300">
                            {exp.skillsUsed.join(' · ')}
                          </span>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectRole(exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline whitespace-nowrap shrink-0 self-start lg:self-end"
                      >
                        <span>
                          Read Full Role & Campaign Breakdown ({exp.highlights.length}{' '}
                          achievements)
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="mx-auto mt-20 max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/[0.07]"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-blue-400">
            {educationHeader.index}
          </p>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            {educationHeader.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {educationHeader.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 backdrop-blur-md hover:border-white/[0.16] transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-mono-tabular text-blue-400">
                      {edu.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{edu.location}</span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <GraduationCap className="h-5 w-5 text-amber-300" />
                  </div>
                </div>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  {edu.institution}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {edu.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4 text-xs">
                <span className="text-slate-400">{edu.status}</span>
                <span className="font-mono-tabular font-semibold text-amber-300">
                  Cumulative GPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
