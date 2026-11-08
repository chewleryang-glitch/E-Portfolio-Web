/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { portfolioContent } from './content/index';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StackSection } from './components/StackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
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
    projects,
    experiences,
    education,
    contact,
  } = portfolioContent;

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar profile={profile} navigation={navigation} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section + Full-Width Quantitative KPI Strip + Marquee */}
        <Hero
          profile={profile}
          metrics={heroMetrics}
          marqueeItems={marqueeItems}
        />

        {/* 2. Stack / Capabilities Section */}
        <StackSection header={sectionHeaders.stack} skills={skills} />

        {/* 3. Projects / Case Studies Section with Lightbox Modal */}
        <ProjectsSection header={sectionHeaders.projects} projects={projects} />

        {/* 4. Experience & Education Vertical Timeline */}
        <ExperienceSection
          experienceHeader={sectionHeaders.experience}
          educationHeader={sectionHeaders.education}
          experiences={experiences}
          education={education}
        />

        {/* 5. Contact Section with Web3Forms Integration */}
        <ContactSection
          header={sectionHeaders.contact}
          profile={profile}
          config={contact}
        />
      </main>

      {/* Editorial Footer */}
      <Footer profile={profile} navigation={navigation} />
    </div>
  );
}
