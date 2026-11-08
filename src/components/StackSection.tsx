import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3,
  FileSpreadsheet,
  Globe,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Palette,
  PenTool,
  Puzzle,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../content/index';
import { SkillCategory, SkillItem } from '../types/portfolio';
import { filterSkillsByCategory } from '../utils/portfolioLogic';

interface StackSectionProps {
  header: { index: string; title: string; subtitle: string };
  skills: SkillItem[];
}

const iconMap: Record<SkillItem['iconName'], React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-5 w-5 text-blue-400" />,
  PenTool: <PenTool className="h-5 w-5 text-amber-300" />,
  BarChart3: <BarChart3 className="h-5 w-5 text-blue-400" />,
  Megaphone: <Megaphone className="h-5 w-5 text-amber-300" />,
  Palette: <Palette className="h-5 w-5 text-blue-400" />,
  Globe: <Globe className="h-5 w-5 text-amber-300" />,
  FileSpreadsheet: <FileSpreadsheet className="h-5 w-5 text-blue-400" />,
  Sparkles: <Sparkles className="h-5 w-5 text-amber-300" />,
  Users: <Users className="h-5 w-5 text-blue-400" />,
  Lightbulb: <Lightbulb className="h-5 w-5 text-amber-300" />,
  Puzzle: <Puzzle className="h-5 w-5 text-blue-400" />,
  MessageSquare: <MessageSquare className="h-5 w-5 text-amber-300" />,
};

export const StackSection: React.FC<StackSectionProps> = ({ header, skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const filteredSkills = filterSkillsByCategory(skills, activeCategory);

  return (
    <section id="stack" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

          <p className="font-mono-tabular text-xs text-slate-400 shrink-0">
            Showing {filteredSkills.length} of {skills.length} capabilities
          </p>
        </div>

        {/* Interactive Filter Control Bar */}
        <div
          role="tablist"
          aria-label="Filter skills by domain"
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-1.5"
        >
          {SKILL_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
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

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <motion.article
              key={skill.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md hover:border-white/[0.18] hover:bg-white/[0.04] transition-colors duration-150"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Clean unboxed metadata kicker */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                      <span>{skill.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-blue-400">{skill.level}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]"
                  >
                    {iconMap[skill.iconName]}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {skill.summary}
                </p>
              </div>

              <div className="mt-5 border-t border-white/[0.06] pt-3.5 text-xs text-slate-400">
                <span className="text-slate-500">Proven at: </span>
                <span className="text-slate-300">{skill.appliedAt}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
