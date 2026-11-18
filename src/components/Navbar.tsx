import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Briefcase, ChevronDown, Menu, X } from 'lucide-react';
import { ExperienceItem, NavItem, ProfileData } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileData;
  navigation: NavItem[];
  experiences: ExperienceItem[];
  activeRoleId: string | null;
  onSelectRole: (roleId: string | null, targetHash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  navigation,
  experiences,
  activeRoleId,
  onSelectRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeExperience = experiences.find((exp) => exp.id === activeRoleId) ?? null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExperienceDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExperienceDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (activeRoleId !== null) {
      e.preventDefault();
      onSelectRole(null, href);
    }
    setExperienceDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleRoleChoice = (roleId: string | null, targetHash?: string) => {
    onSelectRole(roleId, targetHash);
    setExperienceDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-white/[0.08] bg-[#07090E]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          {profile.name}
        </a>

        {/* Zone 2: Clean navigation links with Experience dropdown menu */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {navigation.map((item) => {
            if (item.hasExperienceDropdown) {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setExperienceDropdownOpen(true)}
                  onMouseLeave={() => setExperienceDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setExperienceDropdownOpen((prev) => !prev)}
                    aria-expanded={experienceDropdownOpen}
                    aria-haspopup="menu"
                    className={`inline-flex items-center gap-1.5 py-1.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${
                      activeExperience || experienceDropdownOpen
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeExperience && (
                      <span className="font-mono-tabular text-xs text-blue-400">
                        ({activeExperience.shortCompany})
                      </span>
                    )}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        experienceDropdownOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {/* Neat Dropdown Menu for Experience & Individual Job Roles */}
                  {experienceDropdownOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[390px] -translate-x-1/2 pt-2">
                      <div
                        role="menu"
                        aria-label="Experience Job Roles Menu"
                        className="overflow-hidden rounded-2xl border border-white/[0.14] bg-[#0B0F19]/95 p-2.5 shadow-2xl shadow-black/80 backdrop-blur-2xl"
                      >
                        {/* Overview Link */}
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => handleRoleChoice(null, '#experience')}
                          className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                            activeRoleId === null
                              ? 'bg-blue-600/15 text-white border border-blue-500/30'
                              : 'text-slate-200 hover:bg-white/[0.06] hover:text-white'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-semibold text-white">
                              All Experience Overview
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-400">
                              Combined timeline & campaign works on main page
                            </p>
                          </div>
                          <span className="font-mono-tabular text-[11px] text-blue-400">
                            02.
                          </span>
                        </button>

                        <div className="my-2 border-t border-white/[0.08] px-3 pt-2 pb-1">
                          <p className="text-[11px] font-medium text-slate-400">
                            Dedicated Job Role Pages ({experiences.length})
                          </p>
                        </div>

                        {/* Individual Job Role Pages */}
                        <div className="space-y-1">
                          {experiences.map((exp) => {
                            const isSelected = activeRoleId === exp.id;
                            return (
                              <button
                                key={exp.id}
                                type="button"
                                role="menuitem"
                                onClick={() => handleRoleChoice(exp.id)}
                                className={`group flex w-full items-start justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                                  isSelected
                                    ? 'bg-blue-600/20 text-white border border-blue-500/40'
                                    : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                                }`}
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono-tabular text-[11px] font-semibold text-blue-400">
                                      {exp.index}.
                                    </span>
                                    <p className="truncate text-xs font-semibold text-white group-hover:text-blue-200 transition-colors">
                                      {exp.role}
                                    </p>
                                  </div>
                                  <p className="mt-0.5 truncate pl-5 text-[11px] text-amber-200/85">
                                    {exp.company}
                                  </p>
                                  <p className="mt-0.5 pl-5 font-mono-tabular text-[10px] text-slate-400">
                                    {exp.period}
                                  </p>
                                </div>
                                <ArrowUpRight
                                  className={`mt-1 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                    isSelected
                                      ? 'text-blue-400'
                                      : 'text-slate-500 group-hover:text-blue-400'
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-1 text-slate-300 hover:text-white underline-offset-8 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (plus mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-white/10 bg-[#0B0F17]/95 backdrop-blur-2xl px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => {
              if (item.hasExperienceDropdown) {
                return (
                  <div
                    key={item.href}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-2 my-1"
                  >
                    <button
                      type="button"
                      onClick={() => handleRoleChoice(null, '#experience')}
                      className="flex w-full min-h-[40px] items-center justify-between rounded-lg px-2.5 text-left text-sm font-semibold text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-blue-400" />
                        <span>Experience Overview</span>
                      </span>
                      <span className="font-mono-tabular text-xs text-blue-400">
                        All Roles
                      </span>
                    </button>

                    <div className="mt-1.5 space-y-1 border-t border-white/[0.06] pt-2">
                      <p className="px-2.5 text-[11px] font-medium text-slate-400">
                        Dedicated Job Role Pages
                      </p>
                      {experiences.map((exp) => (
                        <button
                          key={exp.id}
                          type="button"
                          onClick={() => handleRoleChoice(exp.id)}
                          className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${
                            activeRoleId === exp.id
                              ? 'bg-blue-600/20 text-white font-semibold'
                              : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <p className="truncate font-medium text-white">
                              {exp.index}. {exp.role}
                            </p>
                            <p className="truncate text-[11px] text-amber-200/80">
                              {exp.shortCompany} · {exp.period}
                            </p>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-blue-400 hover:bg-white/[0.06] transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
