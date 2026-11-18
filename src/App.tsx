/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { portfolioContent } from './content/index';
import { findExperienceById } from './utils/portfolioLogic';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StackSection } from './components/StackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { RoleDetailPage } from './components/RoleDetailPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const {
    profile,
    navigation,
    marqueeItems,
    heroMetrics,
    sectionHeaders,
    skills,
    experiences,
    education,
    contact,
  } = portfolioContent;

  const [activeRoleId, setActiveRoleId] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#role/')) {
      const id = window.location.hash.replace('#role/', '');
      return findExperienceById(experiences, id)?.id ?? null;
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#role/')) {
        const id = window.location.hash.replace('#role/', '');
        const found = findExperienceById(experiences, id);
        if (found) {
          setActiveRoleId(found.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setActiveRoleId(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [experiences]);

  const handleSelectRole = (roleId: string | null, targetHash?: string) => {
    if (roleId) {
      const found = findExperienceById(experiences, roleId);
      if (found) {
        setActiveRoleId(found.id);
        window.history.pushState(null, '', `#role/${found.id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    setActiveRoleId(null);
    const hash = targetHash || '#experience';
    window.history.pushState(null, '', hash);

    requestAnimationFrame(() => {
      const sectionId = hash.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const activeExperience = findExperienceById(experiences, activeRoleId);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col">
      {/* 3-Zone Top Bar Navigation with Experience Role Dropdown */}
      <Navbar
        profile={profile}
        navigation={navigation}
        experiences={experiences}
        activeRoleId={activeRoleId}
        onSelectRole={handleSelectRole}
      />

      {/* Main Content: Either Dedicated Job Role Page or Unified Portfolio Overview */}
      <main className="flex-1">
        {activeExperience ? (
          <RoleDetailPage
            experience={activeExperience}
            allExperiences={experiences}
            onBackToOverview={() => handleSelectRole(null, '#experience')}
            onSelectRole={(id) => handleSelectRole(id)}
            onContactClick={() => handleSelectRole(null, '#contact')}
          />
        ) : (
          <>
            {/* 1. Hero Section + Full-Width Quantitative KPI Strip + Marquee */}
            <Hero
              profile={profile}
              metrics={heroMetrics}
              marqueeItems={marqueeItems}
            />

            {/* 2. Stack / Capabilities Section */}
            <StackSection header={sectionHeaders.stack} skills={skills} />

            {/* 3. Unified Experience (Combined Campaign Works + Career Progression) & Education */}
            <ExperienceSection
              experienceHeader={sectionHeaders.experience}
              educationHeader={sectionHeaders.education}
              experiences={experiences}
              education={education}
              onSelectRole={(id) => handleSelectRole(id)}
            />

            {/* 4. Contact Section with Web3Forms Integration */}
            <ContactSection
              header={sectionHeaders.contact}
              profile={profile}
              config={contact}
            />
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        profile={profile}
        navigation={navigation}
        onNavigateSection={(href) => handleSelectRole(null, href)}
      />
    </div>
  );
}
