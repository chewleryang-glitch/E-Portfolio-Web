import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import { EducationItem, ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  experienceHeader: { index: string; title: string; subtitle: string };
  educationHeader: { index: string; title: string; subtitle: string };
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experienceHeader,
  educationHeader,
  experiences,
  education,
}) => {
  // Keep all timeline items expanded by default so critical resume content is immediately visible,
  // while allowing users to collapse/expand individual roles or toggle all.
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(experiences.map((exp) => [exp.id, true]))
  );

  const toggleRole = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allExpanded = experiences.every((exp) => expandedIds[exp.id]);

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    setExpandedIds(
      Object.fromEntries(experiences.map((exp) => [exp.id, nextState]))
    );
  };

  return (
    <div className="py-16 sm:py-24">
      {/* Work Experience Timeline */}
      <section id="experience" className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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

          <button
            type="button"
            onClick={handleToggleAll}
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <span>{allExpanded ? 'Compact Timeline View' : 'Expand All Roles'}</span>
          </button>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative mt-12">
          {/* Hairline Vertical Guide Line */}
          <div
            aria-hidden="true"
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-white/15 to-transparent sm:left-6"
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isExpanded = !!expandedIds[exp.id];

              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-10 sm:pl-16"
                >
                  {/* Timeline Node Marker (numbered index, not a pulsing status dot) */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-[#0A0E17] font-mono-tabular text-[11px] font-semibold text-blue-400 sm:left-3"
                  >
                    {idx + 1}
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 backdrop-blur-md hover:border-white/[0.16] transition-colors">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        {/* Quiet unboxed metadata line */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span className="font-mono-tabular text-blue-400">
                            {exp.period}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{exp.type}</span>
                        </div>

                        <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-amber-200/90">
                          {exp.company}{' '}
                          <span className="text-slate-400 font-normal">
                            — {exp.companyDescriptor}
                          </span>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleRole(exp.id)}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${exp.role} at ${exp.company}`}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors whitespace-nowrap shrink-0 self-start"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Key Metrics Summary Line (Always visible) */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/[0.06] pt-3 text-xs text-slate-300">
                      <span className="font-semibold text-white">Key Impact:</span>
                      {exp.keyMetrics.map((metric, mIdx) => (
                        <React.Fragment key={metric}>
                          <span className="font-mono-tabular text-blue-300">
                            {metric}
                          </span>
                          {mIdx < exp.keyMetrics.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Expandable Bullet Points & Skills */}
                    {isExpanded && (
                      <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-4">
                        <ul className="space-y-2.5 text-sm leading-relaxed text-slate-300">
                          {exp.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2 text-xs text-slate-400">
                          <span className="text-slate-500">Capabilities Applied: </span>
                          <span className="text-slate-300">
                            {exp.skillsUsed.join(' · ')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
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
