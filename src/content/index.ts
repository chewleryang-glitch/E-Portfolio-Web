import { PortfolioContent, ProjectCategory, SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'All',
  'Performance & Analytics',
  'Copywriting & Content',
  'Social & Brand Strategy',
  'Design & Web Tools',
  'Core Competencies',
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Performance & E-Commerce',
  'Social & Content Strategy',
  'Brand & Web Production',
];

export const portfolioContent: PortfolioContent = {
  profile: {
    name: 'Chew Ler Yang',
    roleTitle: 'Digital Marketer & Conversion Copywriter',
    kicker: 'Singapore · Performance Marketing & Brand Storytelling',
    headlinePrimary: 'Turning Brand Strategy Into',
    headlineSerifAccent: 'Measurable Audience Action.',
    tagline:
      'Marketing undergraduate at Singapore University of Social Sciences (4.00/5.00 GPA) crafting full-funnel Meta Ads campaigns, persuasive SEO e-commerce copy, and high-retention social narratives.',
    bio: 'I am a university undergraduate seeking a position in the marketing sector. As an aspiring copywriter and marketer, I aim to help brands engage with their audiences meaningfully and enrichingly. Backed by hands-on agency and in-house experience across consumer electronics, F&B distribution, EdTech, non-profit communications, and public-sector outreach, I pair creative storytelling with disciplined budget pacing and conversion analytics.',
    location: 'Singapore',
    address: 'Block 354, Woodlands Avenue 1, #11-769, Singapore',
    phone: '+65 8113 2570',
    email: 'lychew004@suss.edu.sg',
    linkedinUrl: 'https://www.linkedin.com/in/ler-yang-chew-5190002a2/',
    wixPortfolioUrl: 'https://chewleryang.wixsite.com/digitalportfolio-1',
    resumePdfUrl: '/assets/aistudio/Chew_Ler_Yang-resume__2__9d52b72a.pdf',
    portraitUrl: '/assets/chew-ler-yang-portrait.png',
    currentStatus: 'Bachelor of Marketing (4.00/5.00 GPA) · Expected May 2027',
  },

  navigation: [
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
  ],

  marqueeItems: [
    'Full-Funnel Meta Ads Management',
    'Shopee & Lazada SEO Copywriting',
    'Social Media Audits & Growth Strategy',
    'Multi-Format Editorial Storytelling',
    'Data-Driven Budget Pacing',
    'WordPress Elementor Web Production',
    'Audience Research & Campaign Analytics',
  ],

  heroMetrics: [
    {
      id: 'metric-impressions',
      value: '1.3M+',
      label: 'Campaign Impressions',
      context: '296,300+ target youth reach & +2,270 Instagram followers across 9 activations',
      organization: 'Central Narcotics Bureau Capstone',
    },
    {
      id: 'metric-atc',
      value: '$43.88K',
      label: 'Shopee Add-To-Cart Value',
      context: '86 ATC units & $3.49K direct sales from 7 orders in high-involvement Smart TVs',
      organization: 'Hisense Electronics · Toshiba TV',
    },
    {
      id: 'metric-visits',
      value: '2,392',
      label: 'E-Commerce Store Visits',
      context: '2,179 unique Shopee visitors driven via optimised TOFU & MOFU Meta Ads pacing',
      organization: 'Hisense Electronics · Toshiba TV',
    },
    {
      id: 'metric-followers',
      value: '+3,176',
      label: 'Organic Social Followers Grown',
      context: 'Combined net follower lift across CNB (+2,270), Bible Society (+756) & LifeVitae (+150)',
      organization: 'Multi-Sector Social Growth',
    },
  ],

  sectionHeaders: {
    stack: {
      index: '01. Capabilities & Tooling',
      title: 'Marketing Stack & Core Competencies',
      subtitle:
        'A balanced toolkit combining performance media buying, marketplace SEO copywriting, audience diagnostics, and visual content production.',
    },
    projects: {
      index: '02. Selected Campaign Works',
      title: 'Featured Case Studies & Brand Activations',
      subtitle:
        'Every campaign is built around a clear conversion hypothesis—bridging top-of-funnel awareness with measurable bottom-of-funnel intent. Click any case study to inspect the full strategy breakdown.',
    },
    experience: {
      index: '03. Career Progression',
      title: 'Professional Work Experience',
      subtitle:
        'Five hands-on marketing, communications, and content production roles across global consumer electronics, food distribution, AI EdTech, and public outreach.',
    },
    education: {
      index: '04. Academic Foundation',
      title: 'Education & Academic Standing',
      subtitle:
        'Rigorous training in consumer behaviour, marketing strategy, and mass communication at leading Singapore institutions.',
    },
    contact: {
      index: '05. Initiate a Conversation',
      title: 'Let’s Build Meaningful Audience Impact',
      subtitle:
        'Open to marketing, copywriting, and digital strategy opportunities with forward-thinking brands, agencies, and employers in Singapore and beyond.',
    },
  },

  skills: [
    {
      id: 'skill-copywriting',
      name: 'Conversion & SEO Copywriting',
      category: 'Copywriting & Content',
      level: 'Advanced · Marketplace & Paid Social',
      summary:
        'Crafting persuasive, SEO-optimised product listings for Shopee and Lazada alongside high-converting Facebook Ads copy, print articles, scripts, and infographics.',
      appliedAt: 'Hisense (Toshiba TV), CNB, Bible Society, LifeVitae',
      iconName: 'PenTool',
    },
    {
      id: 'skill-meta-ads',
      name: 'Meta Ads Manager & Budget Pacing',
      category: 'Performance & Analytics',
      level: 'Advanced · TOFU / MOFU Full-Funnel',
      summary:
        'Executing Top-of-Funnel awareness and Middle-of-Funnel consideration campaigns, pacing $3,200–$4,000 monthly budgets based on real-time ROAS and CTR signals.',
      appliedAt: 'Hisense Electronics (Toshiba TV Singapore)',
      iconName: 'TrendingUp',
    },
    {
      id: 'skill-market-research',
      name: 'Market Research & Campaign Analysis',
      category: 'Performance & Analytics',
      level: 'Proficient · Data-Driven Diagnostics',
      summary:
        'Evaluating consumer electronics and demographic data to refine targeting, pace daily ad spends, and turn e-commerce traffic into Add-To-Cart intent.',
      appliedAt: 'Hisense Electronics, Central Narcotics Bureau',
      iconName: 'BarChart3',
    },
    {
      id: 'skill-social-audit',
      name: 'Social Media Audits & Channel Strategy',
      category: 'Social & Brand Strategy',
      level: 'Advanced · Platform Optimisation',
      summary:
        'Conducting structured audits across Instagram, Facebook, and TikTok to uncover content gaps, leverage platform features, and accelerate organic reach.',
      appliedAt: 'The Bible Society of Singapore, LifeVitae',
      iconName: 'Megaphone',
    },
    {
      id: 'skill-social-management',
      name: 'Social Media Management & Community',
      category: 'Social & Brand Strategy',
      level: 'Advanced · End-to-End Execution',
      summary:
        'Building social accounts from the ground up, managing weekly editorial calendars, and scaling engaged communities across diverse audience segments.',
      appliedAt: 'LifeVitae, The Bible Society of Singapore, CNB',
      iconName: 'Users',
    },
    {
      id: 'skill-canva',
      name: 'Canva Design & Visual Collateral',
      category: 'Design & Web Tools',
      level: 'Proficient · Print & Digital Creative',
      summary:
        'Designing commercial graphic posters, hawker/eatery promotional Point-of-Sale assets, social carousels, and educational infographics.',
      appliedAt: 'Eastern Harvest Foods, LifeVitae, CNB',
      iconName: 'Palette',
    },
    {
      id: 'skill-wordpress',
      name: 'WordPress Elementor Web Production',
      category: 'Design & Web Tools',
      level: 'Proficient · Corporate Web Build',
      summary:
        'Structuring, writing, and building responsive corporate web pages using WordPress Elementor to showcase B2B and B2C product catalogues.',
      appliedAt: 'Eastern Harvest Foods (Singapore)',
      iconName: 'Globe',
    },
    {
      id: 'skill-ms-office',
      name: 'Microsoft Office & Reporting Suite',
      category: 'Performance & Analytics',
      level: 'Advanced · Campaign Tracking & Decks',
      summary:
        'Building media pacing trackers, post-campaign performance reports, editorial calendars, and stakeholder presentation decks in Excel, Word, and PowerPoint.',
      appliedAt: 'All Marketing & Communications Roles',
      iconName: 'FileSpreadsheet',
    },
    {
      id: 'skill-critical-thinking',
      name: 'Critical Thinking & Problem Solving',
      category: 'Core Competencies',
      level: 'Core Strength · Strategic Agility',
      summary:
        'Diagnosing mid-campaign performance drop-offs and reallocating daily media budgets or creative hooks to sustain momentum in high-involvement categories.',
      appliedAt: 'Hisense Electronics & SUSS Bachelor of Marketing',
      iconName: 'Puzzle',
    },
    {
      id: 'skill-creativity',
      name: 'Creative Ideation & Format Adaptation',
      category: 'Copywriting & Content',
      level: 'Core Strength · Multi-Channel',
      summary:
        'Translating complex organizational missions into relatable articles, donation appeals, video scripts, infographics, and daily social activations.',
      appliedAt: 'Central Narcotics Bureau, Bible Society, LifeVitae',
      iconName: 'Lightbulb',
    },
    {
      id: 'skill-communication',
      name: 'Interpersonal Communication & Teamwork',
      category: 'Core Competencies',
      level: 'Core Strength · Cross-Functional',
      summary:
        'Collaborating smoothly across external vendors, product managers, creative designers, and senior stakeholders to deliver campaigns on schedule.',
      appliedAt: 'Eastern Harvest Foods, Hisense, BSS',
      iconName: 'MessageSquare',
    },
  ],

  projects: [
    {
      id: 'project-toshiba-meta-ecommerce',
      index: '01',
      title: 'Toshiba TV Full-Funnel Meta Ads & Marketplace Growth',
      subtitle: 'Performance Marketing & E-Commerce SEO Copywriting',
      clientOrOrg: 'Hisense Electronics (Singapore) Pte. Ltd. · Global No. 2 TV Brand',
      period: 'Jun 2025 – Dec 2025',
      category: 'Performance & E-Commerce',
      featured: true,
      summary:
        'Managed the Meta Ads Manager account and Shopee/Lazada product copywriting for Toshiba Smart TVs, bridging full-funnel awareness with measurable e-commerce checkout intent.',
      challenge:
        'Smart TVs are a high-involvement, high-ticket consumer electronics category where shoppers compare specifications extensively before purchasing. The challenge was to pace monthly budgets ($4,000 in October and $3,200 in November) efficiently to drive qualified Shopee store traffic and high-value Add-To-Cart actions.',
      strategy: [
        'Architected full-funnel Meta Ads campaigns spanning Top-of-Funnel (TOFU/Awareness) reach and Middle-of-Funnel (MOFU) traffic & engagement objectives.',
        'Paced daily ad spends dynamically across $4,000 (October) and $3,200 (November) monthly budgets using real-time performance telemetry and independent market research.',
        'Rewrote Toshiba Smart TV product listings on Shopee and Lazada with persuasive, SEO-friendly benefit hierarchies and high-clarity Facebook ad copy.',
      ],
      outcomes: [
        'Generated 2,392 total Shopee store visits across 2,179 unique visitors.',
        'Drove 86 Add-To-Cart (ATC) units valued at $43.88K in gross merchandise consideration.',
        'Secured 7 direct conversion orders totaling $3.49K in verified sales for a high-involvement consumer electronics category.',
      ],
      metrics: [
        { label: 'Shopee Store Visits', value: '2,392' },
        { label: 'Unique Visitors', value: '2,179' },
        { label: 'ATC Pipeline Value', value: '$43.88K' },
        { label: 'Add-To-Cart Units', value: '86 Units' },
      ],
      deliverables: [
        'Meta Ads TOFU/MOFU Campaign Architecture',
        'Daily Budget Pacing & ROAS Optimization ($7.2K Managed)',
        'Shopee & Lazada SEO Product Listings',
        'Facebook Conversion Ad Copywriting',
      ],
      accentGradient: 'from-blue-600/25 via-indigo-500/10 to-transparent',
    },
    {
      id: 'project-cnb-youth-campaign',
      index: '02',
      title: 'Central Narcotics Bureau Drug-Free Youth Content Activations',
      subtitle: 'Multi-Platform Content Strategy & Production I/C',
      clientOrOrg: 'Central Narcotics Bureau (CNB) · Final-Year Capstone',
      period: 'Apr 2020 – Aug 2020',
      category: 'Social & Content Strategy',
      featured: true,
      summary:
        'Spearheaded content strategy and multi-format copywriting across 9 digital activations to elevate youth awareness of a drug-free lifestyle across Facebook, Instagram, and TikTok.',
      challenge:
        'Public-sector anti-drug messaging can easily feel didactic to younger audiences. Our objective was to craft authentic, shareable digital activations that resonated organically with Singapore youths across emerging short-form and social channels.',
      strategy: [
        'Conceptualised and copywrote 9 distinct content activations tailored to youth culture and platform-native consumption habits.',
        'Adapted copywriting voice and narrative structure across 4 distinct formats: long-form articles, visual infographics, social media posts, and video scripts.',
        'Synchronized cross-channel rollout across Facebook, Instagram, and TikTok to maximize organic amplification and follower retention.',
      ],
      outcomes: [
        'Contributed to 1.3+ million total campaign impressions across digital platforms.',
        'Reached 296,300+ target audience members across Facebook, Instagram, and TikTok.',
        'Grew the campaign Instagram community by 2,270+ net new followers.',
      ],
      metrics: [
        { label: 'Total Impressions', value: '1.3M+' },
        { label: 'Target Youth Reach', value: '296.3K+' },
        { label: 'Instagram Growth', value: '+2,270' },
        { label: 'Content Activations', value: '9 Campaigns' },
      ],
      deliverables: [
        '9 Multi-Channel Content Activations',
        'Editorial Articles & Educational Infographics',
        'TikTok & Social Video Scripts',
        'Instagram & Facebook Copywriting',
      ],
      accentGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
    {
      id: 'project-bss-social-print',
      index: '03',
      title: 'Omnichannel Social Audit, Daily Content & Print Editorial',
      subtitle: 'Communications & Audience Engagement Overhaul',
      clientOrOrg: 'The Bible Society of Singapore (BSS)',
      period: 'Sep 2020 – Jun 2021',
      category: 'Social & Content Strategy',
      featured: false,
      summary:
        'Executed a comprehensive social media audit, established a 7-day/week editorial cadence, and authored print articles for national newsletters and seasonal appeals.',
      challenge:
        'BSS needed to modernize its digital outreach to engage varied demographic segments consistently while simultaneously supporting physical print readership and seasonal fundraising appeals.',
      strategy: [
        'Conducted 1 end-to-end social media audit to pinpoint engagement bottlenecks and unlock underutilized platform features.',
        'Conceptualised and copywrote 7 weekly social media content ideas (1 per day) calibrated for diverse age and community demographics.',
        'Authored 2 long-form print media pieces: a feature article for Word@Work (quarterly physical newsletter) and a persuasive Chinese New Year donation appeal.',
      ],
      outcomes: [
        'Increased Instagram follower count by +756 organic followers.',
        'Measurably strengthened cross-platform audience engagement across Instagram and Facebook.',
        'Delivered print-ready editorial journalism and fundraising copy for nationwide physical distribution.',
      ],
      metrics: [
        { label: 'IG Follower Lift', value: '+756' },
        { label: 'Weekly Cadence', value: '7 Posts/Wk' },
        { label: 'Print Features', value: '2 Published' },
        { label: 'Channel Audit', value: '1 Full Audit' },
      ],
      deliverables: [
        'Comprehensive Social Media Audit Report',
        'Daily Social Content Calendar (7 Ideas/Week)',
        'Word@Work Quarterly Print Feature Article',
        'CNY-Themed Fundraising Appeal Copy',
      ],
      accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      id: 'project-eastern-harvest-b2b',
      index: '04',
      title: 'Corporate Web Build & Foodservice POS Visual Campaign',
      subtitle: 'WordPress Elementor Website & Commercial Print Collateral',
      clientOrOrg: 'Eastern Harvest Foods (Singapore) Pte Ltd',
      period: 'May 2024 – Aug 2024',
      category: 'Brand & Web Production',
      featured: false,
      summary:
        'Designed and launched a WordPress Elementor website alongside 5 commercial food product posters distributed to eateries and hawker centres across Singapore.',
      challenge:
        'As a premier importer and distributor of frozen seafood and Japanese food products, Eastern Harvest needed both a modern digital storefront and high-impact physical promotional posters to help local hawker centres and eateries showcase their ingredients.',
      strategy: [
        'Designed and built 1 complete corporate website using WordPress Elementor, organizing product categories and food safety credentials clearly.',
        'Created and delivered 5 visual graphic posters spotlighting flagship seafood and Japanese food products for on-site display at eateries and hawker stalls.',
        'Coordinated cross-departmental marketing schedules between sales representatives and foodservice clients.',
      ],
      outcomes: [
        'Launched 1 responsive WordPress Elementor web presence for B2B buyers.',
        'Delivered 5 production-ready promotional posters deployed across partner eateries and hawker centres.',
        'Streamlined internal marketing coordination for product promotions.',
      ],
      metrics: [
        { label: 'Website Built', value: '1 Elementor Site' },
        { label: 'Commercial Posters', value: '5 Delivered' },
        { label: 'Target Channels', value: 'Eateries & Hawkers' },
      ],
      deliverables: [
        'WordPress Elementor Website Design & Build',
        '5 Commercial Foodservice Graphic Posters',
        'B2B Marketing Coordination Workflows',
      ],
      accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'project-lifevitae-edtech-launch',
      index: '05',
      title: 'Zero-to-One EdTech Social Presence & AI Life-Skills Content',
      subtitle: 'Ground-Up Channel Launch & Weekly Editorial Engine',
      clientOrOrg: 'LifeVitae Pte Ltd · AI Career Insights EdTech Startup',
      period: 'Dec 2023 – Feb 2024',
      category: 'Social & Content Strategy',
      featured: false,
      summary:
        'Established ground-up Instagram and Facebook channels for a Singapore AI EdTech startup utilizing the UNESCO-WHO Life Skills Framework, driving early community traction.',
      challenge:
        'LifeVitae needed to translate complex AI-driven career diagnostics and the UNESCO-WHO Life Skills Framework into accessible, engaging social content starting from zero existing social footprint.',
      strategy: [
        'Built and configured official Instagram and Facebook brand accounts from the ground up, establishing visual and editorial guidelines.',
        'Conceptualised and copywrote 4 weekly content pillars translating personal strengths and career insights into interactive social posts.',
        'Managed community interactions and iterative hook testing to build initial organic momentum.',
      ],
      outcomes: [
        'Garnered 150+ organic Instagram followers from a zero-follower cold start within a 3-month sprint.',
        'Established a repeatable 4x/week social content engine that strengthened brand credibility.',
      ],
      metrics: [
        { label: 'Initial IG Community', value: '150+ Followers' },
        { label: 'Editorial Velocity', value: '4 Ideas/Wk' },
        { label: 'Channels Launched', value: 'IG & Facebook' },
      ],
      deliverables: [
        'Ground-Up Instagram & Facebook Account Setup',
        '4 Weekly Educational Content Pillars',
        'UNESCO-WHO Life Skills Social Copywriting',
      ],
      accentGradient: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    },
  ],

  experiences: [
    {
      id: 'exp-hisense',
      role: 'Digital Marketing Intern',
      company: 'Hisense Electronics (Singapore) PTE. LTD.',
      companyDescriptor: 'Global No. 2 TV Brand',
      location: 'Singapore',
      period: 'Jun 2025 – Dec 2025',
      type: 'Internship',
      highlights: [
        'Managed the Meta Ads Manager account for Toshiba TV, successfully executing full-funnel marketing strategies spanning Top-of-Funnel (TOFU/Awareness) and Middle-of-Funnel (MOFU) campaigns.',
        'Strategically allocated and optimised monthly advertising budgets of $4,000 (October) and $3,200 (November), pacing daily ad spends based on real-time performance and data-driven independent research.',
        'Drove e-commerce consideration and intent, generating 2,392 total Shopee store visits (2,179 unique visitors), 86 Add-To-Cart (ATC) units valued at $43.88K, and securing 7 conversion orders totaling $3.49K in sales for a high-involvement consumer electronics category.',
        'Crafted persuasive, SEO-friendly e-commerce product copywriting for Toshiba Smart TV listings on Shopee and Lazada, and ad copy for Facebook Ads.',
      ],
      keyMetrics: [
        '$4,000 (Oct) & $3,200 (Nov) Budgets Managed',
        '2,392 Shopee Visits (2,179 Unique)',
        '86 ATC Units ($43.88K Value)',
        '7 Orders ($3.49K Sales)',
      ],
      skillsUsed: ['Meta Ads Manager', 'Shopee & Lazada SEO', 'Conversion Copywriting', 'Budget Pacing'],
    },
    {
      id: 'exp-eastern-harvest',
      role: 'Marketing Intern',
      company: 'Eastern Harvest Foods (Singapore) Pte Ltd',
      companyDescriptor: 'Top Importer & Distributor of Frozen Seafood & Japanese Food Products',
      location: 'Singapore',
      period: 'May 2024 – Aug 2024',
      type: 'Internship',
      highlights: [
        'Created and delivered 5 graphic posters showcasing food products which Eastern Harvest promotes to eateries and hawker centres.',
        'Created 1 website via WordPress Elementor to present the company’s quality ingredients and tailored food solutions.',
        'Facilitated marketing coordination for the company across internal teams and foodservice partners.',
      ],
      keyMetrics: ['5 Commercial Posters Delivered', '1 WordPress Elementor Website Built'],
      skillsUsed: ['WordPress Elementor', 'Canva Design', 'B2B Marketing Coordination', 'Print Collateral'],
    },
    {
      id: 'exp-lifevitae',
      role: 'Marketing and Outreach Intern',
      company: 'LifeVitae Pte Ltd',
      companyDescriptor: 'AI & UNESCO-WHO Life Skills Framework EdTech Startup',
      location: 'Singapore',
      period: 'Dec 2023 – Feb 2024',
      type: 'Internship',
      highlights: [
        'Established and managed ground-up Instagram and Facebook accounts, which garnered 150+ followers on Instagram.',
        'Conceptualised and copywrote 4 weekly content ideas to drive audience engagement for LifeVitae’s socials.',
        'Strengthened LifeVitae’s social media presence and brand awareness within the career insights space.',
      ],
      keyMetrics: ['150+ Instagram Followers From Scratch', '4 Weekly Content Ideas Copywritten'],
      skillsUsed: ['Social Media Management', 'Content Ideation', 'Copywriting', 'Brand Launch'],
    },
    {
      id: 'exp-bss',
      role: 'Communications Intern',
      company: 'The Bible Society of Singapore (BSS)',
      companyDescriptor: 'Mission-Driven Translation, Publishing & Literacy Organization',
      location: 'Singapore',
      period: 'Sep 2020 – Jun 2021',
      type: 'Internship',
      highlights: [
        'Conducted 1 social media audit to identify areas for improvement and leverage platform features for maximum outreach.',
        'Conceptualised and copywrote 7 weekly social media content ideas (1 per day) to engage BSS’s varied demographics effectively.',
        'Spearheaded BSS’s social media presence on Instagram and Facebook, increasing the number of Instagram followers by 756.',
        'Strengthened BSS’s social media presence and improved the organisation’s audience engagement across its socials.',
        'Wrote 2 articles for print media (1 for Word@Work, a quarterly physical newsletter, and another for a CNY-themed donation appeal).',
      ],
      keyMetrics: ['+756 Instagram Followers', '7 Weekly Content Ideas (1/Day)', '2 Print Media Articles', '1 Social Media Audit'],
      skillsUsed: ['Social Media Audit', 'Editorial Copywriting', 'Print Journalism', 'Audience Engagement'],
    },
    {
      id: 'exp-cnb',
      role: 'Content Strategy & Production I/C',
      company: 'Central Narcotics Bureau (Final-Year Capstone Project)',
      companyDescriptor: 'Singapore’s Primary Drug Enforcement Agency',
      location: 'Singapore',
      period: 'Apr 2020 – Aug 2020',
      type: 'Capstone Project',
      highlights: [
        'Conceptualised and copywrote 9 content activations that contributed to 1.3+ million impressions, 296,300+ reach target audience members across Facebook, Instagram, and TikTok, and 2,270+ followers on Instagram.',
        'Adapted writing styles for 4 content formats, which are articles, infographics, social media posts, and scripts.',
        'Enhanced awareness of a drug-free lifestyle among youths through impactful strategic content and digital marketing.',
      ],
      keyMetrics: ['1.3M+ Impressions', '296,300+ Target Audience Reach', '2,270+ IG Followers Gained', '9 Content Activations'],
      skillsUsed: ['Content Strategy', 'Multi-Format Copywriting', 'TikTok / IG / FB Campaigns', 'Scriptwriting'],
    },
  ],

  education: [
    {
      id: 'edu-suss',
      institution: 'Singapore University of Social Sciences (SUSS)',
      location: 'Singapore',
      degree: 'Bachelor of Marketing',
      period: 'Aug 2023 – May 2027 (Expected)',
      gpa: '4.00 / 5.00',
      status: 'Current Undergraduate · First-Class Standing',
      summary:
        'Specialising in digital marketing strategy, consumer insights, brand management, and integrated marketing communications while maintaining a 4.00/5.00 cumulative GPA.',
    },
    {
      id: 'edu-np',
      institution: 'Ngee Ann Polytechnic',
      location: 'Singapore',
      degree: 'Diploma in Mass Communication',
      period: 'Apr 2018 – May 2021',
      gpa: '3.46 / 4.00',
      status: 'Graduated with Distinction Track Record',
      summary:
        'Trained in media writing, public relations, journalism, visual communication, and multi-platform campaign production, culminating in the 1.3M+ impression Central Narcotics Bureau capstone campaign.',
    },
  ],

  contact: {
    web3FormsAccessKey: '7fcc7b39-b6db-462a-b38e-67b0bd1472ef',
    endpointUrl: 'https://api.web3forms.com/submit',
    heading: 'Ready to Elevate Your Brand’s Next Campaign?',
    subheading:
      'Whether you are recruiting for a marketing or copywriting role, planning a full-funnel social launch, or looking for persuasive e-commerce copy, send a message below.',
    availabilityNote: 'Available for Full-Time Graduate Roles, Internships & Freelance Copywriting Projects in Singapore',
    responseSla: 'Direct response within 24 hours via email or phone',
    inquiryTypes: [
      'Full-Time / Internship Opportunity',
      'Copywriting & E-Commerce SEO Project',
      'Paid Social (Meta Ads) & Campaign Strategy',
      'General Networking & Collaboration',
    ],
  },
};

export default portfolioContent;
