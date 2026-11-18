import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface RoleDetailPageProps {
  experience: ExperienceItem;
  allExperiences: ExperienceItem[];
  onBackToOverview: () => void;
  onSelectRole: (roleId: string) => void;
  onContactClick: () => void;
}

export const RoleDetailPage: React.FC<RoleDetailPageProps> = ({
  experience,
  allExperiences,
  onBackToOverview,
  onSelectRole,
  onContactClick,
}) => {
  const currentIndex = allExperiences.findIndex(
    (item) => item.id === experience.id
  );
  const prevRole =
    currentIndex > 0 ? allExperiences[currentIndex - 1] : null;
  const nextRole =
    currentIndex >= 0 && currentIndex < allExperiences.length - 1
      ? allExperiences[currentIndex + 1]
      : null;

  return (
    <article className="relative overflow-hidden py-10 sm:py-14">
      {/* Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.13),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Quick Role Switcher Bar */}
        <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onBackToOverview}
            className="inline-flex min-h-[40px] items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-blue-400" />
            <span>Back to Experience Overview</span>
          </button>

          {/* Role Switcher Pills */}
          <div
            aria-label="Switch between job roles"
            className="flex flex-wrap items-center gap-1.5"
          >
            {allExperiences.map((item) => {
              const isCurrent = item.id === experience.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectRole(item.id)}
                  className={`inline-flex min-h-[34px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'border border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <span className="font-mono-tabular text-[11px] opacity-80">
                    {item.index}.
                  </span>
                  <span>{item.shortCompany}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Role & Campaign Header Card */}
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-8 rounded-2xl border border-white/[0.1] bg-gradient-to-br ${experience.accentGradient} p-6 sm:p-9 backdrop-blur-xl`}
        >
          {/* Quiet Metadata Line */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-300">
            <span className="font-mono-tabular font-semibold text-blue-400">
              ROLE {experience.index}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular text-amber-200/90">
              {experience.period}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              {experience.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{experience.type}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-300">{experience.category}</span>
          </div>

          {/* Primary Job Role Title & Company */}
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                {experience.role}
              </h1>
              <p className="mt-2 text-base font-semibold text-amber-200/95 sm:text-lg">
                {experience.company}{' '}
                <span className="font-normal text-slate-300">
                  — {experience.companyDescriptor}
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-colors shrink-0"
            >
              <span>Discuss This Experience</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Campaign Focus Banner inside Role Header */}
          <div className="mt-7 rounded-xl border border-white/[0.1] bg-[#07090E]/65 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Featured Campaign & Portfolio Case Study</span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              {experience.campaignTitle}
            </h2>
            <p className="mt-1 text-xs font-medium text-amber-200/85 sm:text-sm">
              {experience.campaignSubtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {experience.summary}
            </p>
          </div>
        </motion.div>

        {/* 4-Column Quantitative Metrics Grid */}
        <motion.div
          key={`${experience.id}-metrics`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {experience.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-md"
            >
              <p className="font-mono-tabular text-2xl font-bold tracking-tight text-white sm:text-3xl break-words">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 2-Column Deep-Dive Content Layout: Resume Responsibilities + Campaign Case Study */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column (5 cols): Career Progression Responsibilities, Deliverables & Skills */}
          <motion.div
            key={`${experience.id}-responsibilities`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-5"
          >
            {/* Role Responsibilities & Key Achievements */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <p className="text-xs font-medium tracking-wide text-blue-400">
                ROLE EXECUTION & PROGRESSION
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-white">
                Responsibilities & Key Achievements
              </h3>

              <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-slate-300">
                {experience.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Key Impact Summary */}
              <div className="mt-6 border-t border-white/[0.07] pt-4">
                <p className="text-xs font-semibold text-white">
                  Key Impact Benchmarks
                </p>
                <p className="mt-1.5 font-mono-tabular text-xs leading-relaxed text-amber-200/90">
                  {experience.keyMetrics.join(' · ')}
                </p>
              </div>
            </div>

            {/* Core Deliverables & Capabilities Applied */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Campaign Deliverables Executed</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {experience.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-amber-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/[0.07] pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Capabilities & Tooling Applied
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {experience.skillsUsed.join(' · ')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): In-Depth Campaign Case Study Breakdown */}
          <motion.div
            key={`${experience.id}-casestudy`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:col-span-7"
          >
            {/* 01. Context & Challenge */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <p className="font-mono-tabular text-xs font-semibold text-blue-400">
                01. CONTEXT & MARKETING CHALLENGE
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-white">
                Commercial Brief & Problem Statement
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {experience.challenge}
              </p>
            </div>

            {/* 02. Strategic Execution */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <p className="font-mono-tabular text-xs font-semibold text-blue-400">
                02. STRATEGIC EXECUTION & COPYWRITING
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-white">
                Channel Architecture, Creative & Media Pacing
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {experience.strategy.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 font-mono-tabular text-xs font-semibold text-blue-400 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 03. Verified Outcomes */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <p className="font-mono-tabular text-xs font-semibold text-amber-300">
                03. VERIFIED OUTCOMES & BUSINESS IMPACT
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-white">
                Measurable Attribution & Performance Results
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {experience.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Previous / Next Job Role Page Navigation */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
          {prevRole ? (
            <button
              type="button"
              onClick={() => onSelectRole(prevRole.id)}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-left hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Previous Job Role ({prevRole.index})</span>
              </span>
              <p className="mt-2 text-base font-bold text-white">
                {prevRole.role}
              </p>
              <p className="mt-0.5 text-xs text-amber-200/85">
                {prevRole.company} · {prevRole.period}
              </p>
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToOverview}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-left hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Main Portfolio</span>
              </span>
              <p className="mt-2 text-base font-bold text-white">
                All Experience Overview
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                View combined career timeline & capabilities
              </p>
            </button>
          )}

          {nextRole ? (
            <button
              type="button"
              onClick={() => onSelectRole(nextRole.id)}
              className="group flex flex-col items-end justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-right hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                <span>Next Job Role ({nextRole.index})</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-base font-bold text-white">
                {nextRole.role}
              </p>
              <p className="mt-0.5 text-xs text-amber-200/85">
                {nextRole.company} · {nextRole.period}
              </p>
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToOverview}
              className="group flex flex-col items-end justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-right hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                <span>Return to Main Portfolio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-base font-bold text-white">
                All Experience Overview
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                View full career timeline & academic foundation
              </p>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
