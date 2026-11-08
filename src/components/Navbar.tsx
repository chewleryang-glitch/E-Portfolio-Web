import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, ProfileData } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileData;
  navigation: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ profile, navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-white/[0.08] bg-[#07090E]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          {profile.name}
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-slate-300 hover:text-white underline-offset-8 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (plus mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-white/10 bg-[#0B0F17]/95 backdrop-blur-2xl px-4 py-4"
        >
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
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
