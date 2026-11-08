import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { HeroMetric, ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  metrics: HeroMetric[];
  marqueeItems: string[];
}

export const Hero: React.FC<HeroProps> = ({ profile, metrics, marqueeItems }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Subtle Ambient Deep Gradient Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(37,99,235,0.14),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(245,158,11,0.08),transparent_50%)]"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              {/* Quiet unboxed text kicker with separator */}
              <p className="text-xs font-medium tracking-wide text-blue-400">
                {profile.kicker}
              </p>

              {/* Balanced Hero Headline */}
              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                {profile.headlinePrimary}{' '}
                <span className="font-editorial italic font-normal text-amber-200/95">
                  {profile.headlineSerifAccent}
                </span>
              </h1>

              {/* Lead Copy */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-[17px]">
                {profile.tagline}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                {profile.bio}
              </p>
            </div>

            {/* Primary CTA & Secondary Editorial Links */}
            <div className="mt-8 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Explore Case Studies</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={profile.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Chew_Ler_Yang_Resume.pdf"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.09] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <Download className="h-4 w-4 text-blue-400" />
                  <span>Download Resume PDF</span>
                </a>
              </div>

              {/* Clean unboxed metadata links */}
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400">
                <span>{profile.currentStatus}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 underline underline-offset-4 transition-colors whitespace-nowrap"
                >
                  LinkedIn Profile
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.wixPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 underline underline-offset-4 transition-colors whitespace-nowrap"
                >
                  Wix Digital Archive
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Glass Portrait & Dossier Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-7 backdrop-blur-xl">
              {/* Top Dossier Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div>
                  <p className="text-xs font-medium text-blue-400">
                    Marketing & Copywriting Dossier
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    {profile.name}
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-300">
                    {profile.roleTitle}
                  </p>
                </div>
                <a
                  href={profile.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Resume PDF in new tab"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.1] hover:text-white transition-colors shrink-0"
                >
                  <FileText className="h-4 w-4" />
                </a>
              </div>

              {/* Portrait Frame with Resilient Fallback */}
              <div className="my-5 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-lg">
                  {!imgError ? (
                    <img
                      src={profile.portraitUrl}
                      alt={`${profile.name} — Digital Marketer and Copywriter`}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-900/60 to-slate-900 text-center p-2">
                      <span className="font-editorial text-2xl font-semibold text-white">
                        CLY
                      </span>
                      <span className="mt-1 text-[10px] text-slate-300">
                        {profile.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div>
                    <p className="text-slate-400">Latest Experience</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      Hisense Electronics (Toshiba TV)
                    </p>
                    <p className="text-slate-400">
                      Digital Marketing Intern · Jun – Dec 2025
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Academic Standing</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      SUSS · Bachelor of Marketing
                    </p>
                    <p className="font-mono-tabular text-amber-300/95">
                      Cumulative GPA: 4.00 / 5.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlighted Recent Outcome Box */}
              <div className="mb-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 text-xs">
                <p className="font-medium text-amber-200/90">
                  Recent Paid Media & Marketplace Highlight
                </p>
                <p className="mt-1 leading-relaxed text-slate-300">
                  Managed $7,200 in Oct–Nov Meta Ads budgets for Toshiba Smart TVs, driving 2,392 Shopee visits and $43.88K in Add-To-Cart value.
                </p>
              </div>

              {/* Bottom Specialisation Summary */}
              <div className="border-t border-white/[0.08] pt-4 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400">Primary Channels</span>
                  <span className="font-medium text-white text-right">
                    Meta Ads · Shopee · Lazada · IG / TikTok
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400">Core Craft</span>
                  <span className="font-medium text-white text-right">
                    SEO Copywriting · Full-Funnel Pacing
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400">Direct Contact</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono-tabular text-blue-400 hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative KPI Strip Below the Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md hover:border-white/[0.15] transition-colors"
            >
              <p className="font-mono-tabular text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-200">
                {metric.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                {metric.context}
              </p>
              <p className="mt-3 pt-3 border-t border-white/[0.06] text-[11px] text-blue-400">
                {metric.organization}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div className="mt-16 border-y border-white/[0.07] bg-white/[0.01] py-3.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 text-xs font-medium tracking-wide text-slate-400">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <React.Fragment key={`${item}-${idx}`}>
              <span className="whitespace-nowrap">{item}</span>
              <span aria-hidden="true" className="text-blue-500/70">
                ·
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
