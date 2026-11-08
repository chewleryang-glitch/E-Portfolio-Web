import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioContent } from '../content/index';
import {
  buildWeb3FormsPayload,
  filterProjects,
  filterSkillsByCategory,
  validateContactForm,
} from './portfolioLogic';

test('portfolioContent contains verified resume details and Web3Forms token', () => {
  assert.equal(portfolioContent.profile.name, 'Chew Ler Yang');
  assert.equal(portfolioContent.profile.email, 'lychew004@suss.edu.sg');
  assert.equal(
    portfolioContent.contact.web3FormsAccessKey,
    '7fcc7b39-b6db-462a-b38e-67b0bd1472ef'
  );
  assert.equal(portfolioContent.experiences.length, 5);
  assert.equal(portfolioContent.education.length, 2);
  assert.ok(portfolioContent.projects.length >= 5);

  const msOfficeSkill = portfolioContent.skills.find(
    (s) => s.id === 'skill-ms-office'
  );
  assert.ok(msOfficeSkill);
  assert.equal(msOfficeSkill.name, 'Microsoft Office & Google Data Studio');
  assert.equal(
    msOfficeSkill.summary,
    'Building sales reports, post-campaign performance reports, and stakeholder presentation decks in Excel, Word, and PowerPoint.'
  );

  const atcMetric = portfolioContent.heroMetrics.find(
    (m) => m.id === 'metric-atc'
  );
  assert.ok(atcMetric);
  assert.equal(
    atcMetric.context,
    '$3.49K direct sales from 7 conversion orders via Facebook Advertising'
  );
});

test('filterSkillsByCategory returns all skills for All and filters specific categories', () => {
  const allSkills = filterSkillsByCategory(portfolioContent.skills, 'All');
  assert.equal(allSkills.length, portfolioContent.skills.length);

  const perfSkills = filterSkillsByCategory(
    portfolioContent.skills,
    'Performance & Analytics'
  );
  assert.ok(perfSkills.length > 0);
  assert.ok(
    perfSkills.every((s) => s.category === 'Performance & Analytics')
  );
});

test('filterProjects filters by category and search query accurately', () => {
  const allProjects = filterProjects(portfolioContent.projects, 'All');
  assert.equal(allProjects.length, portfolioContent.projects.length);

  const ecomProjects = filterProjects(
    portfolioContent.projects,
    'Performance & E-Commerce'
  );
  assert.equal(ecomProjects.length, 1);
  assert.ok(ecomProjects[0].title.includes('Toshiba TV'));

  const searchShopee = filterProjects(
    portfolioContent.projects,
    'All',
    'Shopee'
  );
  assert.equal(searchShopee.length, 1);
  assert.equal(searchShopee[0].id, 'project-toshiba-meta-ecommerce');
});

test('validateContactForm rejects empty or invalid inputs and accepts valid data', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: 'invalid-email',
    organization: '',
    inquiryType: 'Full-Time / Internship Opportunity',
    message: 'Too short',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const validResult = validateContactForm({
    name: 'Sarah Tan',
    email: 'sarah.tan@agency.sg',
    organization: 'brand studio sg',
    inquiryType: 'Full-Time / Internship Opportunity',
    message:
      'Hi Ler Yang, we were impressed by your Toshiba TV Meta Ads results and would love to schedule an interview.',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
});

test('buildWeb3FormsPayload includes the exact Web3Forms token and formatted fields', () => {
  const payload = buildWeb3FormsPayload(
    {
      name: 'Sarah Tan',
      email: 'sarah.tan@agency.sg',
      organization: 'Apex Media',
      inquiryType: 'Copywriting & E-Commerce SEO Project',
      message: 'Looking for Shopee product listing copywriting support.',
    },
    portfolioContent.contact.web3FormsAccessKey,
    portfolioContent.profile.name
  );

  assert.equal(payload.access_key, '7fcc7b39-b6db-462a-b38e-67b0bd1472ef');
  assert.equal(payload.email, 'sarah.tan@agency.sg');
  assert.equal(payload.organization, 'Apex Media');
  assert.ok(
    String(payload.subject).includes('Copywriting & E-Commerce SEO Project')
  );
});
