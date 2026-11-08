import React from 'react';
import { NavItem, ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
  navigation: NavItem[];
}

export const Footer: React.FC<FooterProps> = ({ profile, navigation }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080D] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-xs text-slate-400">
            {profile.roleTitle} · {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Resume PDF
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
