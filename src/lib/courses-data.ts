export type CourseModule = {
  name: string;
  topics: string[];
};

export type CourseMonth = {
  month: string;
  title: string;
  hours: string;
  summary: string;
  modules: CourseModule[];
};

export type CourseData = {
  slug: string;
  title: string;
  category: "Core Courses" | "Bridge Courses" | "Dedicated Courses";
  badge: string;
  tagline: string;
  duration: string;
  durationWeeks: string;
  mode: string;
  location: string;
  rating: string;
  reviewCount: string;
  enrolledCount: string;
  overview: {
    badge: string;
    headline: string;
    description: string;
    extendedDescription: string;
    metrics: { label: string; value: string; desc: string }[];
  };
  whoShouldJoin: {
    target: string;
    description: string;
  }[];
  eligibility: {
    title: string;
    items: string[];
  };
  keyOutcomes: {
    title: string;
    description: string;
  }[];
  curriculum: CourseMonth[];
  tools: {
    name: string;
    category: string;
  }[];
  aiTools: {
    name: string;
    role: string;
  }[];
  assignments: {
    title: string;
    objective: string;
    deliverable: string;
  }[];
  liveProjects: {
    title: string;
    clientType: string;
    objective: string;
    impact: string;
  }[];
  caseStudies: {
    title: string;
    metric: string;
    description: string;
  }[];
  portfolioProjects: {
    title: string;
    format: string;
    description: string;
  }[];
  capstoneProject: {
    title: string;
    timeline: string;
    description: string;
    deliverables: string[];
  };
  certification: {
    title: string;
    description: string;
    issuer: string;
    accreditations: string[];
  };
  career: {
    roles: { role: string; exp: string; salaryRange: string }[];
    freelancing: {
      platforms: string[];
      earningPotential: string;
      typicalServices: string[];
    };
    placement: {
      features: string[];
      steps: { title: string; description: string }[];
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const COURSES_DATA: Record<string, CourseData> = {
  "digital-marketing-generative-ai": {
    slug: "digital-marketing-generative-ai",
    title: "Digital Marketing + Generative AI",
    category: "Core Courses",
    badge: "Flagship 6-Month Program",
    tagline: "Master Full-Funnel Marketing, Performance Ads & Generative AI to Scale Brands in 2026",
    duration: "6 Months",
    durationWeeks: "24 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "4.9/5",
    reviewCount: "480+ Reviews",
    enrolledCount: "1,200+ Alumni",
    overview: {
      badge: "Agency-Grade Curriculum",
      headline: "The Modern Marketer's Blueprint: From Core Fundamentals to AI-Powered Scale",
      description:
        "The digital marketing landscape has changed permanently with Generative AI. This flagship 6-month offline classroom course in Ghaziabad covers the entire digital marketing spectrum—SEO basics, high-converting Meta & Google ads, content marketing, lead generation funnels, conversion rate optimization (CRO), web analytics, and cutting-edge GenAI workflows.",
      extendedDescription:
        "Unlike purely theoretical institutes, you will manage live ad budgets, execute SEO on live web assets, build conversion funnels, and use tools like ChatGPT-4o, Claude 3.5, and Midjourney to produce campaigns 10x faster. Taught directly by active agency practitioners from New Digital Era.",
      metrics: [
        { label: "Classroom Hours", value: "240+ Hrs", desc: "Hands-on lab training" },
        { label: "Live Projects", value: "4 Projects", desc: "Real brand ad budgets" },
        { label: "Tools Mastered", value: "35+ Tools", desc: "Industry + GenAI suite" },
        { label: "Placement Support", value: "100%", desc: "Dedicated HR assistance" },
      ],
    },
    whoShouldJoin: [
      {
        target: "Fresh Graduates & College Students",
        description: "Looking to launch an exciting, high-growth career in digital marketing with practical portfolio proof and placement support.",
      },
      {
        target: "Traditional Marketers & Sales Execs",
        description: "Transitioning from traditional sales or offline marketing to high-demand digital channels and AI-driven growth.",
      },
      {
        target: "Business Owners & Entrepreneurs",
        description: "Wanting to stop relying on costly agencies and generate their own inbound leads, sales, and brand visibility.",
      },
      {
        target: "Aspiring Freelancers & Solopreneurs",
        description: "Aiming to pitch international clients on Upwork/Fiverr and offer end-to-end digital marketing retainer services.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Higher Secondary completed or any Diploma / Bachelor's degree (Any stream: Arts, Commerce, Science, Engineering)",
        "Basic computer literacy, web browsing knowledge, and typing skills",
        "No prior coding or digital marketing experience required — taught from scratch",
        "A personal laptop for hands-on classroom lab sessions and live assignments",
      ],
    },
    keyOutcomes: [
      {
        title: "Omnichannel Strategy Mastery",
        description: "Build integrated marketing strategies connecting SEO, PPC, Social Media, Email, and CRO into profitable client funnels.",
      },
      {
        title: "Profitable Paid Ad Campaigns",
        description: "Create, test, and scale Google Ads and Meta Ads campaigns that generate positive ROAS and qualified leads.",
      },
      {
        title: "GenAI Content Multiplier",
        description: "Use ChatGPT, Claude, and Midjourney to research audiences, write high-converting copy, and design ad creatives in minutes.",
      },
      {
        title: "Data-Driven Decision Making",
        description: "Track conversions, analyze customer journeys, and measure ROI with Google Analytics 4 (GA4) and Google Tag Manager (GTM).",
      },
      {
        title: "Lead Generation & Funnel CRO",
        description: "Design high-converting WordPress landing pages and lead magnets that systematically convert visitors into paying clients.",
      },
      {
        title: "Client-Ready Agency Skillset",
        description: "Present data-backed marketing reports, manage client expectations, and run campaigns according to agency standards.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Marketing Foundations, Brand Strategy & CMS (WordPress)",
        hours: "40 Hours",
        summary: "Understand consumer psychology, modern marketing funnels, and construct your own conversion-ready WordPress website.",
        modules: [
          {
            name: "Module 1: Principles of Modern Marketing & Consumer Behavior",
            topics: [
              "Evolution of marketing: Traditional vs. Digital in 2026",
              "Understanding Customer Personas, ICP, and Buying Cycles",
              "The AIDA and TOFU-MOFU-BOFU marketing funnel architectures",
              "Competitor intelligence & market research frameworks",
            ],
          },
          {
            name: "Module 2: Website Architecture & WordPress Building",
            topics: [
              "Domain, hosting, SSL setup, and DNS configuration",
              "WordPress core setup, themes, and Elementor visual page building",
              "Landing page structure, UI/UX hierarchy, and copywriting for conversions",
              "Setting up legal pages, contact forms, and WhatsApp lead buttons",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "Search Engine Optimization (SEO) & Content Marketing",
        hours: "40 Hours",
        summary: "Master search psychology, on-page optimization, content cluster creation, and local business visibility.",
        modules: [
          {
            name: "Module 3: SEO Fundamentals & Keyword Research",
            topics: [
              "Search engine crawling, indexing, and ranking mechanisms",
              "Keyword research with SEMrush, Ahrefs & Google Keyword Planner",
              "Search intent classification: Informational, Commercial, Transactional",
              "Mapping keywords to landing pages and content topic clusters",
            ],
          },
          {
            name: "Module 4: On-Page, Technical Basics & Content Strategy",
            topics: [
              "Optimizing title tags, meta descriptions, H1-H6 tags, and URL slugs",
              "Image optimization, internal linking strategies, and schema markup",
              "XML sitemaps, robots.txt, and Google Search Console diagnostics",
              "Writing SEO-friendly blogs, long-form guides, and content calendars",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Social Media Marketing & Creative Brand Building",
        hours: "40 Hours",
        summary: "Harness organic social media algorithms, short-form video strategies, and community management across platforms.",
        modules: [
          {
            name: "Module 5: Social Media Strategy (Instagram, LinkedIn & YouTube)",
            topics: [
              "Platform-specific algorithms & audience distribution patterns",
              "Building viral short-form video hooks for Instagram Reels & YouTube Shorts",
              "LinkedIn personal branding and B2B organic lead generation",
              "Content batching, scheduling tools, and community engagement workflows",
            ],
          },
          {
            name: "Module 6: Creative Design & Copywriting with AI",
            topics: [
              "Graphic design principles with Canva Pro: Carousels, ad creatives & stories",
              "Direct-response copywriting frameworks: PAS, AIDA, Before-After-Bridge",
              "Leveraging ChatGPT-4o and Claude for rapid headline and caption ideation",
              "Producing brand visual assets using Midjourney and Adobe Firefly",
            ],
          },
        ],
      },
      {
        month: "Month 4",
        title: "Paid Advertising Mastery (Google Ads & Meta Ads)",
        hours: "40 Hours",
        summary: "Launch, manage, and scale mathematical paid acquisition campaigns across search and paid social networks.",
        modules: [
          {
            name: "Module 7: Google Ads (Search, Display & Performance Max)",
            topics: [
              "Google Ads account hierarchy, bidding strategies (tCPA, tROAS, Max Conversions)",
              "Search campaigns: Match types, negative keywords & Quality Score hacking",
              "Performance Max (PMax) campaigns: Asset groups and audience signals",
              "YouTube Video ads, Display remarketing, and ad extensions",
            ],
          },
          {
            name: "Module 8: Meta Ads Manager (Facebook & Instagram Advertising)",
            topics: [
              "Meta Business Suite setup, Business Manager, and Ad Account security",
              "Campaign objectives: Leads, Sales, Traffic, Engagement",
              "Advantage+ shopping campaigns, custom audiences & lookalike audiences",
              "Creative fatigue management, A/B testing ad formats, and ROAS scaling",
            ],
          },
        ],
      },
      {
        month: "Month 5",
        title: "Analytics, CRO, Email Marketing & Marketing Automation",
        hours: "40 Hours",
        summary: "Turn raw web data into profitable marketing decisions using GA4, GTM, automated email nurture sequences, and CRO.",
        modules: [
          {
            name: "Module 9: Web Analytics & Tracking Infrastructure",
            topics: [
              "Google Analytics 4 (GA4) configuration, event tracking & user journeys",
              "Google Tag Manager (GTM) setup: Tags, triggers, and variables",
              "Tracking button clicks, form submissions, and purchases",
              "Building executive reporting dashboards with Looker Studio",
            ],
          },
          {
            name: "Module 10: Email Marketing, Lead Nurturing & CRO",
            topics: [
              "Lead magnets, opt-in popups, and automated welcome sequences",
              "Email automation flows in Mailchimp / Brevo for sales conversions",
              "Conversion Rate Optimization (CRO): Heatmaps (Hotjar) and user recording analysis",
              "A/B testing landing pages: Headline, CTA button, and social proof variations",
            ],
          },
        ],
      },
      {
        month: "Month 6",
        title: "Generative AI Mastery, Capstone Project & Agency Operations",
        hours: "40 Hours",
        summary: "Integrate autonomous AI workflows into modern marketing, execute your capstone client project, and prepare for placement.",
        modules: [
          {
            name: "Module 11: Generative AI for 10x Marketing Execution",
            topics: [
              "Advanced prompt engineering frameworks for market research and strategy",
              "Creating multi-channel ad copy variations and persona simulations",
              "AI video generation for ads with Runway, Kling & ElevenLabs",
              "Automating lead notifications and marketing tasks with Zapier / Make.com",
            ],
          },
          {
            name: "Module 12: Live Capstone Project & Career Placement",
            topics: [
              "Executing a live end-to-end multi-channel client campaign",
              "Compiling professional client reporting decks with ROI metrics",
              "Resume optimization, LinkedIn profile review & portfolio hosting",
              "Mock HR and technical marketing interview rounds with agency directors",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Google Ads", category: "PPC Advertising" },
      { name: "Meta Ads Manager", category: "Social Advertising" },
      { name: "Google Analytics 4", category: "Web Analytics" },
      { name: "Google Tag Manager", category: "Tracking Setup" },
      { name: "Google Search Console", category: "SEO Diagnostics" },
      { name: "SEMrush", category: "Keyword & SEO Intelligence" },
      { name: "WordPress & Elementor", category: "Landing Page CMS" },
      { name: "Canva Pro", category: "Ad Creative Design" },
      { name: "Mailchimp", category: "Email Marketing" },
      { name: "Hotjar", category: "CRO & Heatmaps" },
      { name: "Looker Studio", category: "BI Reporting" },
    ],
    aiTools: [
      { name: "ChatGPT-4o", role: "Persona research, direct-response ad copy & strategy" },
      { name: "Claude 3.5 Sonnet", role: "Long-form editorial SEO content & data synthesis" },
      { name: "Midjourney v6", role: "Photorealistic ad visuals, banners & creative concepts" },
      { name: "Perplexity AI", role: "Real-time industry research & competitor benchmarking" },
      { name: "ElevenLabs", role: "AI voiceovers for reels, TikToks & video ads" },
      { name: "Make.com / Zapier", role: "Automating lead alerts and CRM data pipelines" },
    ],
    assignments: [
      {
        title: "WordPress Landing Page Build",
        objective: "Build a responsive, high-converting service landing page with custom contact form and WhatsApp CTA.",
        deliverable: "Live published URL with sub-2s mobile load time and mobile-friendly layout.",
      },
      {
        title: "Search & Social Paid Campaign Simulation",
        objective: "Structure a ₹25,000/mo ad budget split across Google Search and Meta Lead Gen.",
        deliverable: "Complete campaign setup document with audience targeting, ad copies, negative keywords, and budget sheet.",
      },
      {
        title: "Comprehensive SEO & Content Audit",
        objective: "Audit an existing local business website and build a 90-day SEO remediation roadmap.",
        deliverable: "15-page slide deck covering on-page, keyword gaps, and technical fixes.",
      },
      {
        title: "Generative AI Ad Creative Suite",
        objective: "Use Midjourney and ChatGPT to produce 10 multi-format ad creative concepts for a D2C brand.",
        deliverable: "Figma/Canva presentation board with creative copy variations, hook angles, and prompt log.",
      },
    ],
    liveProjects: [
      {
        title: "Delhi NCR Local Service Lead Generation",
        clientType: "Healthcare / Home Renovation Business",
        objective: "Generate 50+ qualified telephone and WhatsApp enquiries within 30 days using Meta Ads and Local SEO.",
        impact: "Students analyze real incoming lead data and optimize CPL (Cost per Lead) on live spend.",
      },
      {
        title: "D2C E-Commerce Product Launch Campaign",
        clientType: "Direct-to-Consumer Lifestyle Brand",
        objective: "Launch an omnichannel marketing test with Google Performance Max and Instagram reels.",
        impact: "Real-time measurement of CTR, CPC, ROAS, and conversion metrics in GA4.",
      },
    ],
    caseStudies: [
      {
        title: "Scaling a Ghaziabad Education Brand from 0 to 120 Inquiries/Month",
        metric: "340% Lead Growth",
        description: "How we leveraged targeted Google Search ads combined with localized landing pages to cut acquisition costs by 48%.",
      },
      {
        title: "E-Commerce Fashion Label: 4.8x ROAS with AI Creatives",
        metric: "4.8x ROAS",
        description: "Utilized Midjourney-generated lifestyle images and ChatGPT direct-response copy to scale Meta Ads budget profitably.",
      },
    ],
    portfolioProjects: [
      {
        title: "Omnichannel Growth Strategy Blueprint",
        format: "Executive Strategy Deck (PDF/Slides)",
        description: "A complete 6-month growth plan for a selected brand covering SEO, Google Ads, Meta Ads, and Email funnels.",
      },
      {
        title: "Live Deployed Portfolio Landing Page",
        format: "Live Website",
        description: "A customized WordPress website showcasing your certifications, past assignments, and marketing philosophies.",
      },
      {
        title: "Live GA4 & Looker Studio Dashboard",
        format: "Interactive BI Dashboard",
        description: "A production analytics dashboard connecting simulated marketing channels to measure CAC, ROAS, and conversions.",
      },
    ],
    capstoneProject: {
      title: "End-to-End Brand Go-To-Market (GTM) Campaign Launch",
      timeline: "Final 4 Weeks of Program",
      description:
        "In teams or individually, students select an assigned commercial brand, execute market research, build a dedicated landing page, configure GA4/GTM tracking, create AI-powered creative assets, build Google and Meta ad campaigns, and present the final business case to a panel of agency directors.",
      deliverables: [
        "Live conversion-focused WordPress landing page with tracking pixels installed",
        "Comprehensive keyword research and on-page SEO optimization plan",
        "Meta & Google Ads campaign blueprints with 12 distinct creative assets",
        "Automated email nurture sequence and CRM lead capture integration",
        "GA4 Looker Studio performance dashboard with live simulated reporting",
      ],
    },
    certification: {
      title: "Diploma in Advanced Digital Marketing & Generative AI",
      description: "Earn an agency-backed credential upon passing practical lab evaluations, capstone presentation, and external certification exams.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Academy Certified Digital Marketer Diploma",
        "Google Ads Search & Measurement Certifications",
        "Meta Certified Digital Marketing Associate",
        "HubSpot Inbound Marketing & Social Media Certifications",
      ],
    },
    career: {
      roles: [
        { role: "Digital Marketing Specialist", exp: "Entry to Mid", salaryRange: "₹3.8 LPA - ₹6.5 LPA" },
        { role: "Performance Marketer / Paid Media Buyer", exp: "Entry to Mid", salaryRange: "₹4.5 LPA - ₹8.0 LPA" },
        { role: "SEO & Content Strategist", exp: "Entry to Mid", salaryRange: "₹3.5 LPA - ₹6.0 LPA" },
        { role: "Social Media Manager & Creator", exp: "Entry to Mid", salaryRange: "₹3.2 LPA - ₹5.5 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr", "LinkedIn Inbound", "Cold Email Outreach"],
        earningPotential: "₹40,000 - ₹1,50,000+ / month on retainers",
        typicalServices: [
          "Monthly Google & Meta Ads management retainers ($500 - $1,500/mo)",
          "Local business SEO and Google Business Profile ranking ($300 - $800/mo)",
          "Conversion landing page design on WordPress ($400 - $1,000/page)",
          "AI-powered multi-channel content creation packages",
        ],
      },
      placement: {
        features: [
          "100% Placement Assistance with Delhi NCR agency & corporate partners",
          "One-on-one resume formatting and ATS optimization",
          "Mock technical interviews and scenario-based marketing case rounds",
          "LinkedIn personal branding makeover to attract inbound recruiter outreach",
        ],
        steps: [
          { title: "Portfolio Assembly", description: "Review and polish all live assignments into an employer-ready digital portfolio." },
          { title: "Mock Interview Rounds", description: "Practice behavioral and analytical marketing questions with hiring directors." },
          { title: "Partner Network Referrals", description: "Direct interview scheduling with digital agencies, D2C brands, and tech companies." },
        ],
      },
    },
    faqs: [
      {
        question: "Is this course 100% offline classroom training in Ghaziabad?",
        answer:
          "Yes! This course is conducted completely offline at our modern digital campus located at 3rd Floor, A-303, Sector 5, Sahibabad, Ghaziabad (near Delhi NCR). You will sit in interactive labs with direct instructor guidance and personal mentorship.",
      },
      {
        question: "Do I need any coding knowledge or technical background to join?",
        answer:
          "Not at all. The course is structured from ground-up foundations. You will learn visual landing page building with WordPress and no-code tools. No coding experience in programming languages is required.",
      },
      {
        question: "How is Generative AI integrated into this digital marketing course?",
        answer:
          "AI is woven into every single module. Rather than spending 10 hours writing basic blog posts or ad copies, you will learn how to prompt ChatGPT, Claude, and Midjourney to research audiences, generate high-converting copy variations, produce visual ad creatives, and automate marketing data workflows.",
      },
      {
        question: "Will I get to work on real client projects and live budgets?",
        answer:
          "Yes. Unlike courses that rely solely on dummy assignments, our agency New Digital Era provides access to live campaigns, actual client case studies, and hands-on budget allocations so you graduate with real proof of work.",
      },
      {
        question: "What placement and career support do you offer after completion?",
        answer:
          "We offer comprehensive 100% placement support including resume curation, mock interview rounds, portfolio website hosting, and direct referrals to our partner network of marketing agencies, IT firms, and D2C brands in Delhi NCR and across India.",
      },
      {
        question: "What are the class timings and batch sizes?",
        answer:
          "We conduct both weekday morning/afternoon batches and weekend batches for working professionals. To ensure deep personalized attention, we strictly cap our batch sizes to 15 students per batch.",
      },
    ],
  },

  "web-development-ai": {
    slug: "web-development-ai",
    title: "Web Development + AI",
    category: "Core Courses",
    badge: "Full-Stack & AI Coding 6-Month Program",
    tagline: "Build Responsive, High-Performance Websites and Web Apps with Modern Code & AI Developer Workflows",
    duration: "6 Months",
    durationWeeks: "24 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "4.9/5",
    reviewCount: "410+ Reviews",
    enrolledCount: "950+ Alumni",
    overview: {
      badge: "Modern Developer Stack",
      headline: "From Zero Coding to Building Full-Stack Web Experiences with AI-Powered Superpowers",
      description:
        "The software engineering world has shifted into the AI-assisted era. This comprehensive 6-month offline classroom course in Ghaziabad equips you with the complete web development skillset: semantic HTML5, modern CSS3/Tailwind, JavaScript (ES6+), Git/GitHub, WordPress development, Shopify store engineering, React.js fundamentals, REST APIs, and modern deployment.",
      extendedDescription:
        "More crucially, you will master AI-first coding workflows using Cursor IDE, GitHub Copilot, v0.dev, and Claude Code. You will learn to architect clean systems, debug with AI, and build production web projects 5x faster than traditional developers.",
      metrics: [
        { label: "Classroom Coding", value: "250+ Hrs", desc: "Interactive lab sessions" },
        { label: "Code Repositories", value: "8+ Repos", desc: "Live on GitHub profile" },
        { label: "AI Coding Tools", value: "Cursor + v0", desc: "Production developer AI" },
        { label: "Placement Support", value: "100%", desc: "Direct tech interviews" },
      ],
    },
    whoShouldJoin: [
      {
        target: "College Students (B.Tech, BCA, MCA, B.Sc)",
        description: "Looking to gain practical, industry-grade web development and AI skills that college syllabi do not teach.",
      },
      {
        target: "Non-Tech & Career Switchers",
        description: "Professionals from sales, BPO, or non-technical backgrounds wanting to transition into high-paying web developer roles.",
      },
      {
        target: "Designers & Marketers Wanting Technical Chops",
        description: "UI/UX designers and digital marketers who want to code their own ideas, landing pages, and interactive web tools.",
      },
      {
        target: "Freelancers Building High-Ticket Websites",
        description: "Developers wanting to build custom business websites, Shopify stores, and web apps for global clients on Upwork.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Any Graduate or Diploma (BCA, MCA, B.Tech, B.Sc, B.Com, BA, etc.)",
        "No prior coding knowledge required — we start from 'What is a browser?' to building production web apps",
        "Logical reasoning, curiosity, and eagerness to solve problems with software",
        "Personal laptop (Windows, Mac, or Linux) with at least 8GB RAM for classroom labs",
      ],
    },
    keyOutcomes: [
      {
        title: "Semantic & Responsive Frontend UI",
        description: "Build pixel-perfect, mobile-first responsive web interfaces using semantic HTML5, CSS Flexbox, Grid, and Tailwind CSS.",
      },
      {
        title: "Modern JavaScript Programming",
        description: "Master ES6+ JavaScript, DOM manipulation, asynchronous programming (Promises, async/await), and event handling.",
      },
      {
        title: "Git & Collaborative Engineering",
        description: "Use Git version control and GitHub for professional branching, commits, pull requests, and collaborative code reviews.",
      },
      {
        title: "CMS & E-Commerce Engineering",
        description: "Build custom commercial websites on WordPress and configure custom-branded Shopify e-commerce storefronts.",
      },
      {
        title: "React.js & Next.js Fundamentals",
        description: "Understand component-driven architecture, state management, props, hooks, client vs. server components, and routing.",
      },
      {
        title: "AI-Assisted Coding Superpowers",
        description: "Use Cursor IDE, GitHub Copilot, and v0.dev to prototype UI, generate boilerplates, write unit tests, and resolve bugs rapidly.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Web Foundations: Semantic HTML5, Modern CSS3 & Responsive Design",
        hours: "40 Hours",
        summary: "Master the structure and styling of the modern web, responsive layouts, and Tailwind CSS fundamentals.",
        modules: [
          {
            name: "Module 1: Web Architecture & Semantic HTML5",
            topics: [
              "How the internet works: DNS, HTTP/HTTPS, Browsers, and Servers",
              "Semantic HTML5 elements (header, nav, main, article, section, footer)",
              "SEO tags, Open Graph meta tags, accessibility (a11y), and forms",
              "Setting up professional VS Code & Cursor IDE environment and extensions",
            ],
          },
          {
            name: "Module 2: Modern CSS3, Flexbox, Grid & Tailwind CSS",
            topics: [
              "CSS Box model, positioning, specificity, and cascading rules",
              "Building flexible responsive layouts with CSS Flexbox & CSS Grid",
              "Modern CSS variables, media queries, animations, and pseudo-elements",
              "Introduction to Tailwind CSS: Utility-first styling and component layout",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "JavaScript (ES6+) & Dynamic Interactive Web Programming",
        hours: "40 Hours",
        summary: "Learn the core language of the web: data structures, DOM manipulation, events, and asynchronous programming.",
        modules: [
          {
            name: "Module 3: Core JavaScript Fundamentals (ES6+)",
            topics: [
              "Variables (let, const), data types, operators, and control flow",
              "Functions, arrow functions, scope, closures, and higher-order array methods (map, filter, reduce)",
              "Objects, arrays, destructuring, spread/rest operators, and template literals",
              "Error handling with try/catch and debugging in Chrome DevTools",
            ],
          },
          {
            name: "Module 4: DOM Manipulation & Asynchronous JavaScript",
            topics: [
              "Selecting and updating DOM elements, creating dynamic nodes",
              "Event listeners: click, submit, input, scroll, keydown, and bubbling",
              "Promises, fetch API, and async/await syntax",
              "Consuming third-party public REST APIs (Weather API, Currency Converter)",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Version Control (Git/GitHub), Terminal & WordPress CMS",
        hours: "40 Hours",
        summary: "Integrate professional developer version control and master content management systems for client delivery.",
        modules: [
          {
            name: "Module 5: Git Version Control & GitHub Workflows",
            topics: [
              "Terminal command-line fundamentals (CLI navigation, file operations)",
              "Git init, add, commit, push, pull, status, and log",
              "Branching strategies (feature branches, merge conflicts, pull requests)",
              "Configuring a standout GitHub developer profile and README documentation",
            ],
          },
          {
            name: "Module 6: Professional WordPress & WooCommerce Development",
            topics: [
              "WordPress local environment setup with Local by Flywheel",
              "Theme customization, child themes, and Gutenberg block editor",
              "Custom Post Types (CPT) and Advanced Custom Fields (ACF)",
              "WooCommerce architecture: Products, cart, checkout & payment gateways",
            ],
          },
        ],
      },
      {
        month: "Month 4",
        title: "Shopify E-Commerce Development & Liquid Templating",
        hours: "40 Hours",
        summary: "Build commercial online stores, customize Shopify themes, and write custom Liquid sections.",
        modules: [
          {
            name: "Module 7: Shopify Store Architecture & Customization",
            topics: [
              "Shopify Partner account, development stores, and store settings",
              "Catalog architecture: Products, variants, smart collections, and navigation",
              "Shopify Theme Editor: Configuring sections, blocks, and typography",
              "Essential Shopify apps: SEO, reviews, email capture, and currency selectors",
            ],
          },
          {
            name: "Module 8: Shopify Liquid Basics & Custom Sections",
            topics: [
              "Introduction to Liquid templating: Objects, tags, and filters",
              "Building custom reusable sections with custom schema JSON",
              "Creating high-converting product pages and sticky add-to-cart bars",
              "Optimizing Shopify page load speeds and mobile responsiveness",
            ],
          },
        ],
      },
      {
        month: "Month 5",
        title: "Modern Frontend Engineering: React.js & Next.js Fundamentals",
        hours: "40 Hours",
        summary: "Transition into component-based UI engineering with React, state management, hooks, and Next.js basics.",
        modules: [
          {
            name: "Module 9: React.js Component Architecture",
            topics: [
              "Why React? Virtual DOM, JSX syntax, and component modularity",
              "Props, state management with useState, and lifecycle with useEffect",
              "Handling forms, controlled inputs, and conditional rendering",
              "Building modular UI component libraries with Lucide icons",
            ],
          },
          {
            name: "Module 10: Next.js Fundamentals & Modern Routing",
            topics: [
              "Introduction to Next.js App Router (app directory, layout.tsx, page.tsx)",
              "Server Components vs. Client Components ('use client')",
              "Static generation vs. dynamic server rendering basics",
              "Deploying Next.js applications seamlessly to Vercel with custom domains",
            ],
          },
        ],
      },
      {
        month: "Month 6",
        title: "AI-Assisted Coding (Cursor, v0), APIs, Security & Capstone",
        hours: "40 Hours",
        summary: "Supercharge your developer productivity with AI tools, build REST API integrations, and deliver your full capstone app.",
        modules: [
          {
            name: "Module 11: AI-Powered Developer Workflows",
            topics: [
              "Mastering Cursor IDE: Code generation, composer mode & contextual codebase querying",
              "Using v0.dev for rapid React & Tailwind UI generation",
              "AI-assisted code refactoring, automated documentation & unit testing",
              "Integrating AI APIs (OpenAI / Claude API) into a web app frontend",
            ],
          },
          {
            name: "Module 12: Production Deployment, Security & Capstone Launch",
            topics: [
              "Web security best practices: Environment variables (.env), CORS, XSS basics",
              "Lighthouse audits: Optimizing Core Web Vitals (LCP, CLS, INP)",
              "Capstone project code reviews and live deployment",
              "Technical interview preparation, coding challenges, and placement drives",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Visual Studio Code", category: "Code Editor" },
      { name: "Cursor IDE", category: "AI-First Code Editor" },
      { name: "Git & GitHub", category: "Version Control" },
      { name: "Tailwind CSS", category: "UI Styling" },
      { name: "Chrome DevTools", category: "Inspection & Debugging" },
      { name: "WordPress & WooCommerce", category: "CMS Platforms" },
      { name: "Shopify & Liquid", category: "E-Commerce" },
      { name: "React.js & Next.js", category: "Frontend Frameworks" },
      { name: "Postman", category: "API Testing" },
      { name: "Vercel", category: "Cloud Deployment" },
    ],
    aiTools: [
      { name: "Cursor AI", role: "Context-aware code completion, instant debugging & full-file refactoring" },
      { name: "v0.dev by Vercel", role: "Prompt-to-React UI component prototyping with Tailwind CSS" },
      { name: "GitHub Copilot", role: "Inline code suggestions, regex generation & boilerplate generation" },
      { name: "Claude 3.5 Sonnet", role: "Complex algorithmic logic, architectural advice & code review" },
      { name: "ChatGPT-4o", role: "Troubleshooting errors, SQL queries & syntax explanations" },
    ],
    assignments: [
      {
        title: "Pixel-Perfect Responsive SaaS Landing Page",
        objective: "Convert a complex modern Figma mockup into a responsive website using HTML5, CSS Grid, and Tailwind CSS.",
        deliverable: "GitHub repository with live deployed Vercel/GitHub Pages URL.",
      },
      {
        title: "Dynamic JavaScript Web Dashboard",
        objective: "Build a web dashboard consuming public REST APIs (weather/crypto) with search, filtering, and local storage.",
        deliverable: "Interactive web app with clean ES6+ modular code and asynchronous fetch handling.",
      },
      {
        title: "Custom Shopify Liquid Section",
        objective: "Code a custom, responsive product feature comparison section in Liquid with configurable schema settings.",
        deliverable: "Liquid file and screen recording showing configuration within the Shopify Theme Editor.",
      },
      {
        title: "AI-Powered Next.js Tool",
        objective: "Build a mini AI text summarizer or recipe generator using Next.js App Router and an OpenAI API endpoint.",
        deliverable: "Live deployed web application with secure server-side API key handling.",
      },
    ],
    liveProjects: [
      {
        title: "Corporate Agency Website Rebuild",
        clientType: "Delhi NCR B2B Professional Services Firm",
        objective: "Rebuild a legacy slow website into a modern, mobile-responsive web platform with 95+ PageSpeed score.",
        impact: "Students manage live hosting, DNS migration, and form lead capture integrations.",
      },
      {
        title: "Shopify Storefront for D2C Brand",
        clientType: "Apparel & Accessories Retailer",
        objective: "Configure a complete commercial Shopify store with custom sections, payment gateway, and shipping setup.",
        impact: "Hands-on experience with commercial e-commerce launch protocols and inventory systems.",
      },
    ],
    caseStudies: [
      {
        title: "Refactoring a Monolithic Site to Sub-1.5s Load Speeds",
        metric: "98 Mobile PageSpeed",
        description: "How modern CSS optimization, image CDN, and script deferral reduced bounce rates by 62% for an Indian portal.",
      },
      {
        title: "Building an AI-Assisted MVP in 72 Hours with Cursor & v0",
        metric: "5x Faster Delivery",
        description: "Case study comparing traditional development velocity vs. modern AI-assisted engineering workflows.",
      },
    ],
    portfolioProjects: [
      {
        title: "Curated GitHub Developer Profile",
        format: "GitHub Repositories",
        description: "Profile containing 6+ clean repositories with comprehensive READMEs, clean commit histories, and live demo links.",
      },
      {
        title: "Production Next.js Personal Portfolio",
        format: "Live Web Application",
        description: "Sleek dark-mode developer portfolio featuring project case studies, downloadable resume, and interactive contact form.",
      },
      {
        title: "Full-Featured E-Commerce Store",
        format: "Live Shopify / WooCommerce Store",
        description: "Complete commercial store demo with custom section architecture, interactive cart, and responsive layout.",
      },
    ],
    capstoneProject: {
      title: "Full-Stack Web Application or Headless E-Commerce Platform",
      timeline: "Final 4 Weeks of Program",
      description:
        "Students build and deploy a comprehensive, production-ready web application using React/Next.js or a deeply customized WordPress/Shopify build. The project must feature clean component architecture, responsive design, API integration, and AI-assisted functionality.",
      deliverables: [
        "Fully deployed web application on a custom domain with SSL",
        "Public GitHub repository with documentation and clean git commit history",
        "Lighthouse performance report scoring 90+ across Performance, Accessibility, Best Practices & SEO",
        "AI-assisted feature integration (e.g., AI search, automated generator, or chatbot)",
        "Recorded 5-minute technical walkthrough video explaining architectural decisions",
      ],
    },
    certification: {
      title: "Certificate of Excellence in Modern Web Development + AI",
      description: "Awarded following live code review, portfolio project evaluation, and capstone presentation.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified Full-Stack Web Developer Diploma",
        "Alignment with Meta Front-End Developer Professional Certification",
        "GitHub Foundations & Open Source Contributor Badge",
      ],
    },
    career: {
      roles: [
        { role: "Junior Frontend Developer", exp: "Entry Level", salaryRange: "₹4.0 LPA - ₹7.0 LPA" },
        { role: "Web Developer (WordPress & Shopify)", exp: "Entry to Mid", salaryRange: "₹3.8 LPA - ₹6.5 LPA" },
        { role: "React.js / Next.js Developer", exp: "Entry to Mid", salaryRange: "₹4.8 LPA - ₹9.0 LPA" },
        { role: "UI / Web Engineer", exp: "Entry to Mid", salaryRange: "₹4.2 LPA - ₹7.5 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr", "Toptal", "Direct International Outreach"],
        earningPotential: "₹50,000 - ₹2,00,000+ / month",
        typicalServices: [
          "Custom Shopify store design & theme setup ($800 - $2,500/store)",
          "High-performance business website on Next.js/WordPress ($600 - $2,000/site)",
          "Website speed optimization & Core Web Vitals fixes ($300 - $700/audit)",
          "Monthly website maintenance & development retainers ($400 - $1,200/mo)",
        ],
      },
      placement: {
        features: [
          "Technical interview coaching with live code assessment simulations",
          "GitHub profile and resume audit by senior software architects",
          "Mock whiteboard and pair-programming interview rounds",
          "Direct placement interviews with tech agencies, SaaS startups, and IT firms",
        ],
        steps: [
          { title: "Codebase & GitHub Audit", description: "Refactor student repositories to adhere to strict production code conventions." },
          { title: "Technical Mock Interviews", description: "Practice JavaScript, React, and DOM architecture questions asked by tech recruiters." },
          { title: "Direct Referral Placement", description: "Connect directly with our hiring network in Noida, Delhi NCR, and remote companies." },
        ],
      },
    },
    faqs: [
      {
        question: "Can I learn web development if I have no coding or engineering background?",
        answer:
          "Yes, absolutely. Over 60% of our successful students come from non-computer science backgrounds (B.Com, BA, BBA, etc.). We start from the ground up—explaining how web browsers work before writing your very first HTML tag, with continuous 1-on-1 offline mentor support.",
      },
      {
        question: "How does AI make me a better web developer?",
        answer:
          "AI tools like Cursor, GitHub Copilot, and v0 do not replace developers; they 5x your productivity. We teach you how to write clear specifications, use AI to generate boilerplate and debug syntax errors, while teaching you the deep foundational knowledge to understand, verify, and secure the code.",
      },
      {
        question: "Will I learn both WordPress/Shopify and custom coding (React/Next.js)?",
        answer:
          "Yes! This makes this course unique. Most institutes teach either only CMS (WordPress) or only code. We teach you both so you can handle quick freelance client projects (WordPress/Shopify) as well as apply for modern software engineering roles (React/Next.js/Tailwind).",
      },
      {
        question: "Is this training offline in Ghaziabad?",
        answer:
          "Yes, this is an intensive, 100% offline classroom training program held at our campus in Sector 5, Sahibabad, Ghaziabad. You get access to high-speed lab facilities and face-to-face mentorship.",
      },
      {
        question: "What kind of portfolio will I have when I complete the course?",
        answer:
          "You will graduate with an active GitHub profile featuring 6+ repositories, a live deployed personal developer portfolio website, custom Shopify/WordPress client demo stores, and a fully functional capstone web application on a live custom domain.",
      },
      {
        question: "What kind of placement support is provided?",
        answer:
          "Our placement team provides complete resume building, GitHub portfolio reviews, technical coding interview practice, and direct interview scheduling with partner software agencies and IT firms across Delhi NCR.",
      },
    ],
  },

  "social-media-content-marketing": {
    slug: "social-media-content-marketing",
    title: "Social Media & Content Marketing",
    category: "Bridge Courses",
    badge: "Intensive 3-Month Accelerator",
    tagline: "Master Viral Short-Form Content, Storytelling Copywriting, Platform Algorithms & AI Creative Tools",
    duration: "3 Months",
    durationWeeks: "12 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "4.9/5",
    reviewCount: "290+ Reviews",
    enrolledCount: "750+ Alumni",
    overview: {
      badge: "Creative & Organic Growth",
      headline: "Crack the Algorithm: Become a High-Demand Social Media Strategist & Content Creator",
      description:
        "Attention is the new currency. This intensive 3-month offline classroom course in Ghaziabad transforms you into a multi-platform content strategist capable of generating massive organic reach, driving community engagement, and converting followers into paying customers across Instagram, YouTube, LinkedIn, and X.",
      extendedDescription:
        "You will master short-form video scripting (Reels & Shorts), direct-response copywriting, visual storytelling with Canva & CapCut, influencer collaboration frameworks, and cutting-edge GenAI creative pipelines (ChatGPT-4o, Claude 3.5, Midjourney, and ElevenLabs).",
      metrics: [
        { label: "Intensive Training", value: "120+ Hrs", desc: "Interactive creative labs" },
        { label: "Short-Form Videos", value: "20+ Reels", desc: "Scripted & produced" },
        { label: "AI Creative Suite", value: "6+ Tools", desc: "For 10x content output" },
        { label: "Career & Freelance", value: "100%", desc: "Direct client pitching" },
      ],
    },
    whoShouldJoin: [
      {
        target: "Aspiring Content Creators & Influencers",
        description: "Individuals wanting to grow a loyal personal audience, build a personal brand, and monetize through sponsorships and digital products.",
      },
      {
        target: "Freelancers & Copywriters",
        description: "Writers and designers wanting to offer high-paying monthly social media retainers ($500 - $2,000/mo) to international businesses.",
      },
      {
        target: "Marketing Executives & Interns",
        description: "Professionals looking to upskill in modern short-form video production, algorithm dynamics, and AI creative tools.",
      },
      {
        target: "D2C Brand Founders & Small Business Owners",
        description: "Entrepreneurs who want to stop wasting money on empty ads and build strong organic social media distribution for their products.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Any Undergraduate or Graduate student (Arts, Commerce, Science, Mass Comm, etc.)",
        "Active interest in social media platforms (Instagram, YouTube, LinkedIn)",
        "Basic computer and smartphone familiarity",
        "No prior design or video editing background needed — tools are taught from scratch",
      ],
    },
    keyOutcomes: [
      {
        title: "Platform Algorithm Mastery",
        description: "Understand the recommendation engines of Instagram, YouTube Shorts, and LinkedIn to generate predictable organic reach.",
      },
      {
        title: "High-Retention Video Scripting",
        description: "Write 3-second psychological hooks, story pacing, and compelling call-to-actions that prevent scrolling and boost completion rates.",
      },
      {
        title: "End-to-End Mobile Video Editing",
        description: "Edit professional short-form videos using CapCut: captions, sound effects, B-roll overlays, color grading, and dynamic pacing.",
      },
      {
        title: "Direct-Response Copywriting",
        description: "Craft persuasive carousels, caption hooks, and LinkedIn thought-leadership posts using proven storytelling frameworks.",
      },
      {
        title: "Influencer Campaign Management",
        description: "Identify, vet, negotiate, and execute ROI-positive influencer marketing partnerships with clear tracking mechanisms.",
      },
      {
        title: "AI-Powered Content Production",
        description: "Use ChatGPT, Claude, Midjourney, and ElevenLabs to ideate 30 days of multi-format content in under 2 hours.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Platform Algorithms, Audience Psychology & Copywriting Frameworks",
        hours: "40 Hours",
        summary: "Understand how platforms distribute content, research high-intent audiences, and master copywriting that converts.",
        modules: [
          {
            name: "Module 1: The Social Media Landscape & Algorithm Mechanics",
            topics: [
              "How recommendation algorithms work: Watch time, shares, saves, retention curves",
              "Defining your Brand Voice, Content Pillars, and Niche Positioning",
              "Audience Persona research and competitor content deconstruction",
              "Setting up optimized professional profiles on Instagram and LinkedIn",
            ],
          },
          {
            name: "Module 2: Direct-Response Copywriting & Content Frameworks",
            topics: [
              "Psychological hook writing: The first 3 seconds rule for video and text",
              "Storytelling frameworks: Hero's Journey, PAS (Problem-Agitate-Solution), AIDA",
              "Writing viral educational carousels and swipeable multi-slide content",
              "Writing high-converting captions and contextual Call-to-Actions (CTAs)",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "Short-Form Video Production, Visual Design & AI Creative Tools",
        hours: "40 Hours",
        summary: "Produce engaging Reels and Shorts, design eye-catching graphic assets, and integrate Generative AI workflows.",
        modules: [
          {
            name: "Module 3: Short-Form Video Production (Reels & Shorts)",
            topics: [
              "Scriptwriting for 15s, 30s, and 60s video formats",
              "Framing, smartphone camera settings, lighting, and audio recording tips",
              "Editing in CapCut: Auto-captions, jump cuts, zoom effects, sound design",
              "Utilizing trending audio, hashtags, and timing for algorithmic momentum",
            ],
          },
          {
            name: "Module 4: Graphic Design & Generative AI Creative Pipelines",
            topics: [
              "Visual hierarchy, typography, and brand aesthetics with Canva Pro",
              "Generating prompt-crafted stock imagery and concept art with Midjourney",
              "Using ChatGPT-4o & Claude 3.5 to brainstorm 30 viral video ideas in 10 minutes",
              "Generating lifelike voiceovers with ElevenLabs for faceless video channels",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Influencer Marketing, Community Building, Growth & Capstone",
        hours: "40 Hours",
        summary: "Scale through influencer collaborations, manage active communities, track analytics, and launch a complete brand campaign.",
        modules: [
          {
            name: "Module 5: Influencer Marketing & Brand Partnerships",
            topics: [
              "Nano, Micro, and Macro influencers: Identifying genuine engagement vs. bot followers",
              "Influencer outreach scripts, negotiation, deliverables, and contracts",
              "Tracking influencer campaign ROI using custom promo codes and UTM parameters",
              "Building and nurturing an active online brand community across channels",
            ],
          },
          {
            name: "Module 6: Social Media Analytics & Capstone Campaign",
            topics: [
              "Deciphering analytics: Reach vs. Impressions, Engagement rate, Saves, Profile visits",
              "Building weekly client social media reporting decks",
              "Packaging freelance social media management services and retainer pricing",
              "Executing the 30-Day Brand Launch Capstone Campaign and portfolio review",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Meta Business Suite", category: "Social Management" },
      { name: "Canva Pro", category: "Graphic Design" },
      { name: "CapCut Pro", category: "Video Editing" },
      { name: "Notion", category: "Content Calendars" },
      { name: "Metricool", category: "Scheduling & Analytics" },
      { name: "Google Sheets", category: "Content Planning" },
    ],
    aiTools: [
      { name: "ChatGPT-4o", role: "Hook generation, reel scripting & caption ideation" },
      { name: "Claude 3.5 Sonnet", role: "Nuanced brand storytelling & long-form carousels" },
      { name: "Midjourney v6", role: "Visual aesthetic assets, background scenes & brand art" },
      { name: "ElevenLabs", role: "Natural studio-grade AI voiceovers for video content" },
      { name: "Descript", role: "Automated filler word removal and script-based video editing" },
    ],
    assignments: [
      {
        title: "5 Viral Video Scripts & Produced Reels",
        objective: "Script, record, and edit 5 short-form reels for a brand using the 3-second hook framework.",
        deliverable: "5 fully edited MP4 videos with animated captions, B-roll, and sound effects.",
      },
      {
        title: "30-Day Omnichannel Content Calendar",
        objective: "Build a structured monthly content calendar in Notion covering reels, carousels, and stories.",
        deliverable: "Interactive Notion board categorized by content pillars, formats, and scheduled dates.",
      },
      {
        title: "10-Slide Educational Carousel Design",
        objective: "Design a high-retention graphic carousel in Canva Pro with strong typographic contrast.",
        deliverable: "Published multi-slide asset ready for Instagram and LinkedIn document posts.",
      },
      {
        title: "Influencer Marketing Campaign Pitch Deck",
        objective: "Select 5 micro-influencers for a local brand, write the outreach emails, and establish ROI metrics.",
        deliverable: "Executive presentation deck with budget breakdown and projected reach.",
      },
    ],
    liveProjects: [
      {
        title: "Organic Brand Growth for Delhi NCR Business",
        clientType: "Hospitality / Fitness / D2C Brand",
        objective: "Manage and publish social media content for 30 days to increase profile visits and organic inbound queries.",
        impact: "Students experience live audience feedback, comments handling, and real algorithmic reach.",
      },
    ],
    caseStudies: [
      {
        title: "How a Local Ghaziabad Cafe Grew 25K Followers in 60 Days",
        metric: "+25K Followers",
        description: "Case study analyzing how behind-the-scenes storytelling and relatable reel audio triggered local viral momentum.",
      },
      {
        title: "D2C Brand: Generating ₹8 Lakhs from Zero-Ad Organic Instagram",
        metric: "₹8L Organic Sales",
        description: "Step-by-step breakdown of how educational carousels and broadcast channel DM funnels drove direct purchases.",
      },
    ],
    portfolioProjects: [
      {
        title: "Content Creator / Social Media Manager Media Kit",
        format: "Visual PDF & Canva Portfolio",
        description: "A professional media kit showcasing your aesthetic style, content pillars, sample video edits, and service pricing.",
      },
      {
        title: "Produced Short-Form Video Reel Showcase",
        format: "Video Portfolio Reel",
        description: "A compiled 60-second highlight reel demonstrating your hook writing, dynamic pacing, and CapCut editing skills.",
      },
      {
        title: "Complete 90-Day Brand Social Media Strategy",
        format: "Strategic Deck",
        description: "A comprehensive brand playbook outlining tone of voice, visual identity, content calendar, and growth KPIs.",
      },
    ],
    capstoneProject: {
      title: "30-Day Multi-Platform Brand Launch & Content Sprint",
      timeline: "Final 2 Weeks of Program",
      description:
        "Students develop and execute an end-to-end organic social launch for an assigned business. This includes competitor deconstruction, building the brand identity, scripting and editing 10 short-form reels, designing 5 carousels, writing 15 caption copy variations, and presenting an organic growth roadmap to agency directors.",
      deliverables: [
        "10 fully produced, edited short-form videos with captions and sound design",
        "5 multi-slide educational carousels designed in Canva Pro",
        "30-day comprehensive multi-channel content calendar in Notion",
        "Influencer collaboration strategy document with outreach templates",
        "Analytics presentation benchmarking projected engagement and follow-through",
      ],
    },
    certification: {
      title: "Certificate in Social Media & Content Marketing Strategy",
      description: "Awarded following live reel evaluations, content calendar review, and capstone presentation.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified Social Media Strategist",
        "HubSpot Social Media Marketing Certified",
      ],
    },
    career: {
      roles: [
        { role: "Social Media Manager", exp: "Entry to Mid", salaryRange: "₹3.5 LPA - ₹6.0 LPA" },
        { role: "Content Creator & Reel Editor", exp: "Entry to Mid", salaryRange: "₹3.2 LPA - ₹5.5 LPA" },
        { role: "Brand Storyteller / Copywriter", exp: "Entry to Mid", salaryRange: "₹3.6 LPA - ₹6.5 LPA" },
        { role: "Community & Influencer Specialist", exp: "Entry to Mid", salaryRange: "₹3.4 LPA - ₹5.8 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr", "Instagram Inbound", "LinkedIn Outreach"],
        earningPotential: "₹35,000 - ₹1,20,000+ / month",
        typicalServices: [
          "Monthly Instagram/LinkedIn management retainers ($400 - $1,200/mo per client)",
          "Reel/Shorts batch scripting and editing packages ($30 - $75 per reel)",
          "Content calendar strategy and copywriting retainers ($300 - $800/mo)",
          "Influencer marketing campaign setup and execution ($500 - $1,500/campaign)",
        ],
      },
      placement: {
        features: [
          "Social media creator portfolio review and visual media kit preparation",
          "Mock creative test assignments simulated from leading digital agencies",
          "Personal LinkedIn profile optimization to attract inbound recruiter queries",
          "Direct interview referrals to Delhi NCR creative agencies, media houses & brands",
        ],
        steps: [
          { title: "Media Kit & Portfolio Finalization", description: "Package your video edits, carousels, and case studies into a high-converting digital portfolio." },
          { title: "Creative Pitch Simulations", description: "Practice pitching content ideas and responding to creative briefs under timed conditions." },
          { title: "Agency Placement Matching", description: "Interview directly with hiring managers at creative agencies and fast-scaling D2C startups." },
        ],
      },
    },
    faqs: [
      {
        question: "Do I need professional camera equipment to take this course?",
        answer:
          "No! Over 95% of viral reels and TikToks are created on modern smartphones. We teach you how to maximize your phone's camera settings, use natural and affordable lighting, and edit professionally on CapCut without expensive camera gear.",
      },
      {
        question: "Can I do freelancing as a social media manager after this 3-month course?",
        answer:
          "Yes! This course is explicitly designed for fast monetization. By Month 2, you will be producing client-ready video edits and content calendars. In Month 3, we teach you how to package your services and land monthly retainer clients on Upwork, Fiverr, and LinkedIn.",
      },
      {
        question: "Is this training offline in Ghaziabad?",
        answer:
          "Yes, this is an interactive offline classroom course held at our Sahibabad, Ghaziabad campus. You work directly with instructors in creative labs with real-time feedback on your scripts and video edits.",
      },
      {
        question: "How does AI fit into content marketing in this course?",
        answer:
          "We teach you how to use ChatGPT-4o and Claude for high-speed research, hook generation, and script variations, while using Midjourney for graphic backdrops and ElevenLabs for voiceovers. You learn to produce 10x more content without sacrificing creative quality.",
      },
      {
        question: "What if I am shy and don't want to show my face on camera?",
        answer:
          "You do not need to show your face! We dedicate an entire section of the curriculum to 'Faceless Content Channels'—using B-roll, AI imagery, aesthetic animations, and voiceovers to build massive viral accounts without ever appearing on screen.",
      },
      {
        question: "What certificates will I receive?",
        answer:
          "You will receive the New Digital Era Social Media Strategist Certificate upon capstone evaluation, and we guide you to earn the industry-recognized HubSpot Social Media Marketing Certification.",
      },
    ],
  },

  "performance-marketing-analytics": {
    slug: "performance-marketing-analytics",
    title: "Performance Marketing & Marketing Analytics",
    category: "Bridge Courses",
    badge: "Intensive 3-Month Data & Media Accelerator",
    tagline: "Master High-ROAS Paid Acquisition, Signal Tracking, Server-Side Tagging & BI Dashboards",
    duration: "3 Months",
    durationWeeks: "12 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "4.9/5",
    reviewCount: "340+ Reviews",
    enrolledCount: "820+ Alumni",
    overview: {
      badge: "High-ROI Paid Acquisition",
      headline: "The Math of Growth: Master Paid Media Scaling, Tracking Infrastructure & Data Intelligence",
      description:
        "Top brands don't gamble on advertising; they operate with mathematical precision. This intensive 3-month offline classroom course in Ghaziabad is designed for professionals and marketers who want to manage high-budget ad spend, maximize ROAS, and master technical tracking infrastructure.",
      extendedDescription:
        "You will deeply explore Google Ads (Search, Performance Max, YouTube), Meta Ads (Advantage+ and creative testing frameworks), conversion tracking with Google Tag Manager (GTM), Google Analytics 4 (GA4), Meta Conversions API (CAPI), and automated BI reporting dashboards in Looker Studio.",
      metrics: [
        { label: "Intensive Hours", value: "130+ Hrs", desc: "Advanced paid media labs" },
        { label: "Ad Platforms", value: "Google & Meta", desc: "Deep enterprise setup" },
        { label: "Tracking Tech", value: "GTM + CAPI", desc: "Server-side data setup" },
        { label: "Placement Support", value: "100%", desc: "Direct agency hiring" },
      ],
    },
    whoShouldJoin: [
      {
        target: "Digital Marketers Ready to Level Up",
        description: "Marketers with basic knowledge wanting to specialize in the highest-paying digital marketing domain: paid media and analytics.",
      },
      {
        target: "E-Commerce & D2C Brand Operators",
        description: "Founders and operators who need to scale their ad spend profitably without burning capital on unoptimized campaigns.",
      },
      {
        target: "Data-Oriented Professionals & Analysts",
        description: "Individuals with strong analytical and numerical abilities who want to apply data skills to high-velocity performance marketing.",
      },
      {
        target: "Freelance Media Buyers",
        description: "Freelancers looking to manage ad budgets for international e-commerce and SaaS brands on monthly retainers plus profit shares.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "Any Bachelor's degree or working professional (Any stream: Commerce, Science, Engineering, Economics, etc.)",
        "Comfort with numbers, basic percentages, and analytical thinking",
        "Prior basic familiarity with digital marketing concepts is helpful but not mandatory",
        "Personal laptop with spreadsheet software (Excel / Google Sheets) for ad modeling labs",
      ],
    },
    keyOutcomes: [
      {
        title: "Enterprise Google Ads Architecture",
        description: "Build and scale Search, Performance Max, and YouTube campaigns with advanced bidding strategies (tCPA, tROAS).",
      },
      {
        title: "Meta Ads Scaling & Creative Testing",
        description: "Master Advantage+ campaigns, broad targeting, lookalike segmentation, and systematic ad creative testing frameworks.",
      },
      {
        title: "Technical Tracking & Server-Side Tagging",
        description: "Configure Google Tag Manager (GTM), GA4 purchase events, and server-side Meta Conversions API (CAPI) to eliminate signal loss.",
      },
      {
        title: "Marketing Unit Economics Mastery",
        description: "Calculate and optimize customer acquisition costs (CAC), blended ROAS, marketing efficiency ratio (MER), and customer lifetime value (LTV).",
      },
      {
        title: "Automated Looker Studio BI Dashboards",
        description: "Connect ad platforms to Looker Studio to build real-time executive dashboards that impress clients and leadership.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Analyze user drop-offs in GA4 funnels, run A/B landing page tests, and systematically improve conversion rates.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Advanced Google Ads: Search, Performance Max & YouTube Scaling",
        hours: "44 Hours",
        summary: "Master intent-driven advertising on Google: bidding algorithms, Quality Score hacking, and PMax campaign asset architecture.",
        modules: [
          {
            name: "Module 1: Advanced Google Search Campaigns",
            topics: [
              "Search intent mapping, exact vs. phrase matching in modern Google Ads",
              "Negative keyword lists, search term auditing, and Quality Score optimization",
              "Smart Bidding mechanics: Target CPA, Target ROAS, Maximize Conversion Value",
              "Responsive Search Ads (RSAs): Pinning, asset customization & ad strength",
            ],
          },
          {
            name: "Module 2: Google Performance Max (PMax) & YouTube Ads",
            topics: [
              "PMax architecture: Asset groups, audience signals, and search themes",
              "Feed optimization for Google Merchant Center (Google Shopping ads)",
              "YouTube Video Action campaigns: Skimmable ads, bumper ads, and remarketing",
              "Auditing Google Ads accounts: Identifying wasted spend and keyword cannibalization",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "Meta Ads Engine: Funnel Scaling, Creative Testing & Retargeting",
        hours: "44 Hours",
        summary: "Scale paid acquisition on Facebook and Instagram using data-backed creative testing matrices and audience structures.",
        modules: [
          {
            name: "Module 3: Modern Meta Ads Architecture",
            topics: [
              "Meta auction dynamics: Estimated Action Rates, Ad Quality Score & Bid Math",
              "Account structure: Consolidated vs. segmented campaigns, CBO vs. ABO",
              "Advantage+ Shopping Campaigns (ASC) and broad targeting mechanics",
              "Custom audiences, dynamic catalog sales, and high-frequency retargeting funnels",
            ],
          },
          {
            name: "Module 4: Systematic Creative Testing Matrix",
            topics: [
              "Creative as the new targeting: Angles, hooks, visual formats & direct-response copy",
              "Building an iterative creative testing pipeline (Dynamic Creative Testing)",
              "Analyzing creative fatigue, thumbstop ratio, hold rate, and outbound CTR",
              "Scaling winning creatives horizontally and vertically without resetting learning phase",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Tracking Infrastructure, GA4, Server-Side CAPI & BI Dashboards",
        hours: "44 Hours",
        summary: "Build bulletproof measurement infrastructure with GTM, GA4, server-side tracking, and automated Looker Studio reporting.",
        modules: [
          {
            name: "Module 5: Google Tag Manager & Server-Side Tracking",
            topics: [
              "GTM container architecture: Tags, triggers, built-in and user-defined variables",
              "Setting up eCommerce dataLayer events: view_item, add_to_cart, begin_checkout, purchase",
              "Server-side tracking fundamentals: Combating iOS 14+ tracking restrictions and ad blockers",
              "Meta Conversions API (CAPI) and Google Enhanced Conversions implementation",
            ],
          },
          {
            name: "Module 6: GA4 Deep Dive, Unit Economics & Looker Studio Dashboards",
            topics: [
              "Google Analytics 4 Exploration reports: Funnel exploration & path exploration",
              "Attribution modeling: Data-driven attribution vs. last-click attribution",
              "Marketing math: CAC, LTV, MER, ROAS, Contribution Margin & Payback Periods",
              "Building automated, interactive client BI dashboards in Looker Studio",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Google Ads", category: "Search & Display Network" },
      { name: "Meta Ads Manager", category: "Paid Social" },
      { name: "Google Tag Manager", category: "Tag & Event Management" },
      { name: "Google Analytics 4", category: "Web Analytics" },
      { name: "Looker Studio", category: "Business Intelligence" },
      { name: "Google Merchant Center", category: "Shopping Feed" },
      { name: "Microsoft Clarity", category: "Heatmaps & Recordings" },
      { name: "Supermetrics / Sheets", category: "Data Pipelines" },
    ],
    aiTools: [
      { name: "ChatGPT-4o", role: "Ad copy variation testing, audience persona simulation" },
      { name: "Claude 3.5 Sonnet", role: "Analyzing raw CSV ad performance reports & finding waste" },
      { name: "AdCreative.ai", role: "AI-generated conversion-scored banner variations" },
      { name: "Pecan AI / Predictive", role: "Predictive LTV modeling and churn prediction" },
    ],
    assignments: [
      {
        title: "Full-Funnel Google Search & PMax Setup",
        objective: "Structure an enterprise Google Ads campaign for a B2B SaaS or D2C brand with full negative list and asset groups.",
        deliverable: "Google Ads Editor export file and campaign configuration spreadsheet.",
      },
      {
        title: "Meta Ads Creative Testing Matrix",
        objective: "Develop a 20-variation creative testing structure testing 4 hooks across 5 distinct visual styles.",
        deliverable: "Complete media buying sheet with budget allocation and naming conventions.",
      },
      {
        title: "End-to-End GTM eCommerce Event Tracking",
        objective: "Build a GTM container capturing all standard eCommerce dataLayer events through purchase.",
        deliverable: "Exported GTM JSON container verified with Tag Assistant debug mode.",
      },
      {
        title: "Automated Looker Studio Executive Dashboard",
        objective: "Connect GA4 and ad sources to build a one-page real-time executive dashboard calculating blended ROAS.",
        deliverable: "Live interactive Looker Studio dashboard link.",
      },
    ],
    liveProjects: [
      {
        title: "Live Paid Acquisition Campaign for E-Commerce Client",
        clientType: "Indian D2C Retail Brand",
        objective: "Manage live ad spend budget on Meta and Google Ads to achieve a minimum 3.5x blended ROAS.",
        impact: "Students analyze actual daily ad spend, bid adjustments, CPA fluctuations, and conversion reports.",
      },
    ],
    caseStudies: [
      {
        title: "Scaling a D2C Health Brand from ₹5L to ₹40L/Month Spend",
        metric: "4.2x Blended ROAS",
        description: "How transitioning to broad Meta targeting and automated GTM tracking unlocked scalable profitable growth.",
      },
      {
        title: "Cutting B2B Cost Per Lead by 46% via Google Search Quality Score",
        metric: "-46% Cost Per Lead",
        description: "Restructuring ad groups and improving landing page alignment to raise Quality Scores from 4/10 to 9/10.",
      },
    ],
    portfolioProjects: [
      {
        title: "Enterprise Media Plan & Budget Allocation Model",
        format: "Financial Modeling Spreadsheet",
        description: "A dynamic multi-channel spreadsheet forecasting spend, impressions, CPC, CTR, conversion rate, and revenue.",
      },
      {
        title: "Live Production Looker Studio BI Dashboard",
        format: "Interactive Dashboard",
        description: "Client-ready executive dashboard displaying real-time ROAS, CAC, funnel conversion rates, and revenue trends.",
      },
      {
        title: "Technical Tracking Audit & Implementation Spec",
        format: "Technical Architecture Deck",
        description: "A comprehensive GTM, GA4, and Meta CAPI tracking documentation specification for a commercial website.",
      },
    ],
    capstoneProject: {
      title: "Comprehensive Performance Marketing Audit & 90-Day Scaling Blueprint",
      timeline: "Final 2 Weeks of Program",
      description:
        "Students conduct a forensic audit of an active or historical paid media account. They identify wasted spend, rebuild the tracking architecture in GTM, design a creative testing framework, allocate budget across Google and Meta, and project ROAS growth within an interactive Looker Studio presentation.",
      deliverables: [
        "Forensic account audit identifying at least 5 areas of wasted budget",
        "Technical tracking specification with GTM container and GA4 custom events",
        "Complete creative testing roadmap with 15 ad assets and copy angles",
        "3-month media budget allocation sheet with target CAC and ROAS benchmarks",
        "Interactive Looker Studio dashboard presenting the live campaign metrics",
      ],
    },
    certification: {
      title: "Certificate in Performance Marketing & Advanced Analytics",
      description: "Awarded following live account audit defense and capstone presentation to media directors.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified Performance Marketer Diploma",
        "Google Ads Search & Google Ads Measurement Certifications",
        "Meta Certified Media Buying Professional alignment",
      ],
    },
    career: {
      roles: [
        { role: "Performance Marketing Specialist", exp: "Entry to Mid", salaryRange: "₹4.5 LPA - ₹8.0 LPA" },
        { role: "Paid Media Buyer (Meta & Google)", exp: "Entry to Mid", salaryRange: "₹4.2 LPA - ₹7.5 LPA" },
        { role: "Growth Marketing Manager", exp: "Mid Level", salaryRange: "₹6.0 LPA - ₹11.0 LPA" },
        { role: "Marketing Analytics Specialist", exp: "Entry to Mid", salaryRange: "₹4.8 LPA - ₹8.5 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr", "LinkedIn Inbound", "Clutch Direct"],
        earningPotential: "₹50,000 - ₹2,50,000+ / month",
        typicalServices: [
          "Paid media management retainers ($1,000 - $3,000/mo + 10% ad spend)",
          "GTM, GA4, and server-side CAPI tracking setup ($500 - $1,500 one-time)",
          "Looker Studio BI dashboard development ($400 - $1,000/dashboard)",
          "Ad account audits and strategy consulting ($300 - $800/audit)",
        ],
      },
      placement: {
        features: [
          "Case-study-based interview coaching (solving live CPA and ROAS scenarios)",
          "Live ad account audit simulation during mock interview rounds",
          "Technical tracking and analytics test preparation",
          "Direct placement referrals to performance agencies and high-growth D2C brands",
        ],
        steps: [
          { title: "Media Buying Portfolio Polish", description: "Package your media plans, GTM setups, and Looker Studio dashboards into a technical portfolio." },
          { title: "Live Account Audit Simulation", description: "Practice auditing messy ad accounts in front of senior media directors." },
          { title: "Agency & Brand Interviews", description: "Direct interview scheduling with top performance marketing agencies in Delhi NCR." },
        ],
      },
    },
    faqs: [
      {
        question: "How is Performance Marketing different from general Digital Marketing?",
        answer:
          "General digital marketing covers broad topics like basic SEO, organic social media, and blogging. Performance Marketing is laser-focused on paid advertising (Google Ads, Meta Ads), conversion tracking, server-side data infrastructure, and maximizing direct ROI/ROAS on every rupee spent.",
      },
      {
        question: "Do I need to be a math genius or know coding to understand Marketing Analytics?",
        answer:
          "Not at all. You need basic arithmetic (percentages, multiplication) and logical reasoning. We teach you step-by-step how to configure tools like Google Tag Manager and GA4 without needing to be a software programmer.",
      },
      {
        question: "Is this course conducted offline in Ghaziabad?",
        answer:
          "Yes, this is an intensive 100% offline classroom training held at our Sahibabad, Ghaziabad campus. You work directly on live computers and ad account dashboards with expert instructors.",
      },
      {
        question: "Will I get to work on real ad spend and live ad accounts?",
        answer:
          "Yes! We allocate real campaign budgets and work on live client accounts so you experience real auction dynamics, real lead costs, and genuine tracking data rather than simulated theory.",
      },
      {
        question: "Why is tracking infrastructure (GTM & GA4) such a big focus?",
        answer:
          "Due to privacy updates (like Apple's iOS 14+ and third-party cookie deprecation), ad algorithms cannot optimize without accurate data. Media buyers who know how to set up GTM, GA4, and server-side Meta CAPI are the highest-paid marketers in the industry.",
      },
      {
        question: "What salary package can I expect after this course?",
        answer:
          "Entry-level performance marketers typically start between ₹4.2 LPA to ₹6.5 LPA, with experienced media buyers scaling to ₹8 LPA - ₹12+ LPA within 2 to 3 years due to immense industry demand.",
      },
    ],
  },

  "seo-aeo-geo": {
    slug: "seo-aeo-geo",
    title: "SEO + AEO + GEO",
    category: "Dedicated Courses",
    badge: "Specialist 6-Month Search Mastery Program",
    tagline: "Master Traditional Search, Technical & Local SEO, Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)",
    duration: "6 Months",
    durationWeeks: "24 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "5.0/5",
    reviewCount: "520+ Reviews",
    enrolledCount: "1,100+ Alumni",
    overview: {
      badge: "The Future of Organic Search",
      headline: "Dominate Google, Google Maps, Voice Search, ChatGPT Search & Perplexity in 2026",
      description:
        "Search is experiencing its biggest transformation in 25 years. Traditional keyword stuffing is dead. This dedicated 6-month specialist offline classroom course in Ghaziabad covers the full evolution of search: deep Technical SEO, Core Web Vitals, Enterprise Site Architecture, Local SEO & Google Business Profile 3-Pack rankings, E-Commerce SEO, Answer Engine Optimization (AEO for featured snippets and voice assistants), and Generative Engine Optimization (GEO for Perplexity, ChatGPT Search, Gemini, and Google AI Overviews).",
      extendedDescription:
        "Taught by enterprise search directors, this course goes deep under the hood with Screaming Frog, log file analysis, schema markup (JSON-LD), semantic topical authority clustering, and algorithmic penalty recovery. You will graduate as a high-demand search architect ready for enterprise roles.",
      metrics: [
        { label: "Classroom Training", value: "240+ Hrs", desc: "Technical lab exercises" },
        { label: "Search Engines", value: "Google + AI", desc: "AEO, GEO, Perplexity" },
        { label: "Audits Conducted", value: "10+ Sites", desc: "Full enterprise scope" },
        { label: "Placement Support", value: "100%", desc: "Direct agency placement" },
      ],
    },
    whoShouldJoin: [
      {
        target: "SEO Aspirants & Webmasters",
        description: "Looking to build a specialized, future-proof career in search optimization that cannot be made obsolete by AI changes.",
      },
      {
        target: "Content Strategists & Digital Editors",
        description: "Writers wanting to master semantic topical authority, information gain, and optimization for Google's Helpful Content System.",
      },
      {
        target: "Local Business Owners & Service Providers",
        description: "Entrepreneurs wanting to dominate Google Maps 3-Pack and 'near me' local searches across Delhi NCR.",
      },
      {
        target: "Technical Developers & IT Graduates",
        description: "Graduates who want to combine web development skills with high-paying technical SEO, site speed, and structured data engineering.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Any Graduate or Undergraduate degree (Any stream)",
        "No prior coding experience required — HTML/CSS and Schema code are taught in class",
        "Curiosity about how search engines crawl, index, rank, and synthesize information",
        "A personal laptop for classroom crawlers and technical auditing labs",
      ],
    },
    keyOutcomes: [
      {
        title: "Enterprise Crawling & Indexing Architecture",
        description: "Master search bot mechanics, crawl budgets, rendering (Client vs. Server-side), status codes, and robots/sitemap directives.",
      },
      {
        title: "Deep Technical SEO & Core Web Vitals",
        description: "Execute 100+ checkpoint technical audits with Screaming Frog and Sitebulb, resolving INP, LCP, CLS, and canonicalization issues.",
      },
      {
        title: "Local SEO & Google Maps Domination",
        description: "Rank local businesses in the Google Maps 3-Pack through local citation consistency, GBP optimization, and localized schema.",
      },
      {
        title: "Massive E-Commerce SEO Engineering",
        description: "Optimize large-scale Shopify and WooCommerce catalogs, resolving faceted navigation bloat and optimizing category architectures.",
      },
      {
        title: "Answer Engine Optimization (AEO)",
        description: "Optimize content to capture Position Zero featured snippets, People Also Ask (PAA) accordions, and voice search answers.",
      },
      {
        title: "Generative Engine Optimization (GEO)",
        description: "Structure semantic entities, brand citations, and topical authority to get cited and recommended by ChatGPT Search, Perplexity, and Gemini.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Search Architecture, Crawling, Indexing & Semantic Keyword Science",
        hours: "40 Hours",
        summary: "Understand how Google crawls the web, search engine anatomy, and advanced keyword intent science.",
        modules: [
          {
            name: "Module 1: Search Engine Anatomy & Crawl Dynamics",
            topics: [
              "How search engines work: Discovery, Crawling, Rendering, Indexing, and Ranking",
              "Google's core algorithms: Helpful Content System, SpamBrain, E-E-A-T guidelines",
              "HTTP status codes (200, 301, 302, 404, 410, 500) and crawl budget optimization",
              "Configuring Google Search Console & Bing Webmaster Tools from scratch",
            ],
          },
          {
            name: "Module 2: Semantic Keyword Research & Search Intent",
            topics: [
              "Going beyond search volume: Business value, search intent, and click potential",
              "Keyword grouping and mapping: Informational, Navigational, Commercial, Transactional",
              "Keyword research with SEMrush, Ahrefs, AlsoAsked, and Google Search Suggest",
              "Competitor keyword gap analysis and identifying low-hanging traffic opportunities",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "On-Page SEO, Content Optimization & Semantic Topical Authority",
        hours: "40 Hours",
        summary: "Engineer content that Google loves: topical authority clusters, entity SEO, and information gain score.",
        modules: [
          {
            name: "Module 3: Advanced On-Page Optimization",
            topics: [
              "Optimizing title tags, meta descriptions, and header tag hierarchies (H1-H6)",
              "URL architecture, internal linking silos, and breadcrumbs for optimal PageRank flow",
              "Image SEO: WebP formats, contextual alt text, responsive srcsets, and compression",
              "Content freshness, cannibalization identification, and keyword density myths",
            ],
          },
          {
            name: "Module 4: Topical Authority, Entity SEO & E-E-A-T",
            topics: [
              "Building semantic Topic Clusters: Pillar pages, sub-topics, and supporting articles",
              "Understanding Google Knowledge Graph, Named Entities, and Wikidata connections",
              "Establishing E-E-A-T: Author schema, editorial guidelines, citations, and trust signals",
              "Information Gain: Writing content that provides unique data to rank after Google updates",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Deep Technical SEO, Schema Markup (JSON-LD) & Core Web Vitals",
        hours: "40 Hours",
        summary: "Audit complex websites, write custom structured data, and optimize technical website speed performance.",
        modules: [
          {
            name: "Module 5: Technical Auditing with Screaming Frog & Sitebulb",
            topics: [
              "Configuring Screaming Frog SEO Spider: Crawling JavaScript sites, custom regex extraction",
              "Canonical tags, hreflang for international SEO, and pagination handling",
              "Redirect loops, soft 404s, thin content audits, and orphan page resolution",
              "Robots.txt syntax, XML sitemaps, indexation control, and noindex directives",
            ],
          },
          {
            name: "Module 6: Schema.org Structured Data (JSON-LD) & Core Web Vitals",
            topics: [
              "Writing and validating JSON-LD schema: LocalBusiness, Article, FAQPage, Product, Review",
              "Connecting schemas with @id graph structures to reinforce entity relationships",
              "Core Web Vitals deep dive: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS)",
              "Hands-on PageSpeed optimization: Caching, CSS/JS minification, and DOM size reduction",
            ],
          },
        ],
      },
      {
        month: "Month 4",
        title: "Local SEO, Google Business Profile (GBP) & Digital PR Link Building",
        hours: "40 Hours",
        summary: "Dominate local maps rankings, manage multi-location business presence, and earn high-authority backlinks.",
        modules: [
          {
            name: "Module 7: Local SEO & Google Business Profile (GBP) 3-Pack Mastery",
            topics: [
              "Setting up, verifying, and optimizing Google Business Profile for maximum local reach",
              "Ranking factors for Google Maps: Prominence, Relevance, Proximity",
              "NAP consistency (Name, Address, Phone) and local directory citation building",
              "Review acquisition strategies, review schema, and local geo-targeted landing pages",
            ],
          },
          {
            name: "Module 8: Ethical Link Acquisition & Digital PR",
            topics: [
              "Evaluating backlink quality: Domain Authority, Spam Score, Topical Relevance",
              "White-hat link building: The Skyscraper technique, broken link building, resource pages",
              "Digital PR: Pitching journalists with HARO / Connectively and creating linkable data assets",
              "Toxic backlink audits, disavow files, and Google link penalty recovery",
            ],
          },
        ],
      },
      {
        month: "Month 5",
        title: "E-Commerce SEO, Enterprise Architecture & Log File Analysis",
        hours: "40 Hours",
        summary: "Scale search traffic for massive online stores and enterprise domains with thousands of URLs.",
        modules: [
          {
            name: "Module 9: E-Commerce SEO (Shopify & WooCommerce)",
            topics: [
              "E-commerce site hierarchy: Category, sub-category, and product page optimization",
              "Handling faceted navigation, product filters, and parameter URLs without index bloat",
              "Optimizing out-of-stock products, discontinued items, and seasonal catalog changes",
              "Product schema with pricing, availability, and aggregate ratings for rich snippets",
            ],
          },
          {
            name: "Module 10: Enterprise SEO Workflows & Server Log File Analysis",
            topics: [
              "Server log file analysis: Understanding search bot visit frequency and crawl errors",
              "Migrating large websites without losing organic traffic or keyword rankings",
              "Programmatic SEO: Creating thousands of high-quality search landing pages programmatically",
              "Managing international SEO with multi-language and multi-region site structures",
            ],
          },
        ],
      },
      {
        month: "Month 6",
        title: "Next-Gen Search: AEO, Generative Engine Optimization (GEO) & Capstone",
        hours: "40 Hours",
        summary: "Position brands to win in the AI era: featured snippets, voice search, Perplexity AI, ChatGPT Search, and Gemini.",
        modules: [
          {
            name: "Module 11: Answer Engine Optimization (AEO) & AI Overviews",
            topics: [
              "Winning Position Zero: Paragraph, list, and table featured snippet triggers",
              "Optimizing for 'People Also Ask' (PAA) boxes and conversational queries",
              "Voice search optimization: Conversational phrasing and Speakable schema",
              "Google AI Overviews (SGE): How Google synthesizes answers and sources web links",
            ],
          },
          {
            name: "Module 12: Generative Engine Optimization (GEO) & Capstone Launch",
            topics: [
              "How LLM search engines work: Retrieval-Augmented Generation (RAG) in search",
              "GEO ranking principles: Authoritative citations, statistical data, quote inclusion",
              "Optimizing for Perplexity AI, ChatGPT Search, and Microsoft Copilot citation graphs",
              "Enterprise SEO audit presentation and client proposal defense to hiring panel",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Google Search Console", category: "Search Diagnostics" },
      { name: "Screaming Frog SEO Spider", category: "Technical Site Crawler" },
      { name: "Ahrefs", category: "Backlink & Keyword Suite" },
      { name: "SEMrush", category: "Competitive Intelligence" },
      { name: "Sitebulb", category: "Visual Technical Auditing" },
      { name: "Google PageSpeed Insights", category: "Core Web Vitals" },
      { name: "Schema App / Classy Schema", category: "JSON-LD Generator" },
      { name: "AlsoAsked", category: "PAA Question Mining" },
    ],
    aiTools: [
      { name: "Perplexity AI Pro", role: "AI search visibility benchmarking & citation testing" },
      { name: "ChatGPT Search", role: "Testing brand mention retrieval and conversational queries" },
      { name: "Google Gemini Advanced", role: "Analyzing AI Overview summary patterns & link inclusion" },
      { name: "Claude 3.5 Sonnet", role: "Writing JSON-LD schema graphs and technical audit reporting" },
      { name: "Surfer SEO / NeuronWriter", role: "NLP semantic term optimization and topic modeling" },
    ],
    assignments: [
      {
        title: "50-Point Screaming Frog Technical Audit",
        objective: "Perform a full crawl of a 1,000+ page website, export errors, and document exact fix recommendations.",
        deliverable: "Comprehensive spreadsheet and executive summary detailing critical crawl blockers.",
      },
      {
        title: "Semantic Topic Cluster Architecture",
        objective: "Map out a 30-article topical authority cluster with internal link hierarchy for an industry niche.",
        deliverable: "Visual mind map and content blueprint detailing target search intents and anchor texts.",
      },
      {
        title: "Connected JSON-LD Schema Graph",
        objective: "Code a valid, multi-entity schema graph connecting Organization, LocalBusiness, FAQPage, and Person.",
        deliverable: "Clean JSON-LD code file validated with Google Rich Results Test without warnings.",
      },
      {
        title: "GEO & AI Search Benchmark Audit",
        objective: "Audit 20 high-value niche queries across Perplexity and ChatGPT Search, mapping which domains get cited.",
        deliverable: "Analysis report outlining why specific competitors appear in AI answers and your optimization roadmap.",
      },
    ],
    liveProjects: [
      {
        title: "Delhi NCR Local Business Ranking Campaign",
        clientType: "Regional Clinic / Real Estate / Professional Firm",
        objective: "Optimize Google Business Profile, fix technical site errors, and improve Google Maps ranking for primary keywords.",
        impact: "Students manage real Google Search Console data and track live ranking changes.",
      },
      {
        title: "Enterprise E-Commerce SEO Audit",
        clientType: "Commercial Shopify Store",
        objective: "Audit faceted navigation, optimize category descriptions, and implement rich Product schema.",
        impact: "Hands-on experience resolving duplicate content and indexation bloat on a live commercial catalog.",
      },
    ],
    caseStudies: [
      {
        title: "From 12K to 180K Monthly Organic Traffic via Topical Authority",
        metric: "+1,400% Organic Visits",
        description: "How building a semantic content cluster and author E-E-A-T signals bypassed algorithm penalties for a medical portal.",
      },
      {
        title: "Getting Cited in 90% of Perplexity AI Queries for a SaaS Brand",
        metric: "90% AI Citation Rate",
        description: "Case study applying GEO formatting principles, original data statistics, and high-authority digital PR to dominate AI search.",
      },
    ],
    portfolioProjects: [
      {
        title: "Enterprise Technical SEO Audit Deck",
        format: "40-Slide Executive Presentation",
        description: "A client-ready technical audit detailing crawl status, site architecture, Core Web Vitals, and prioritized action plan.",
      },
      {
        title: "Complete JSON-LD Schema Architecture File",
        format: "Code & Documentation Package",
        description: "Custom-built, error-free schema package ready for implementation across homepage, local branches, and service pages.",
      },
      {
        title: "Local SEO Domination Case Study",
        format: "Written Case Study & Data Proof",
        description: "Documented before-and-after ranking proof showing Google Maps 3-Pack rank progression and call volume growth.",
      },
    ],
    capstoneProject: {
      title: "Enterprise Search Dominance & Next-Gen GEO Strategy",
      timeline: "Final 4 Weeks of Program",
      description:
        "Students select a high-competition brand, perform a comprehensive technical and content audit, implement schema markup, design a 6-month topical authority roadmap, formulate an AEO featured snippet strategy, and build a Generative Engine Optimization (GEO) framework to get the brand cited across AI search engines.",
      deliverables: [
        "Full technical crawl audit with prioritized developer action tickets",
        "Semantic topical authority cluster plan with 30 target keyword content blueprints",
        "Validated custom JSON-LD schema graph connecting brand entities",
        "Local SEO citation and Google Business Profile optimization protocol",
        "GEO benchmark report detailing current and targeted visibility in Perplexity and ChatGPT Search",
      ],
    },
    certification: {
      title: "Master Diploma in Enterprise SEO, AEO & Generative Engine Optimization",
      description: "Awarded following live audit defense, schema validation, and presentation to agency search directors.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified Search Architect Diploma",
        "Semrush SEO Toolkit Professional Certification",
        "Google Analytics 4 Certification",
        "HubSpot Inbound & SEO Certification",
      ],
    },
    career: {
      roles: [
        { role: "Senior SEO Strategist", exp: "Entry to Mid", salaryRange: "₹4.2 LPA - ₹8.0 LPA" },
        { role: "Technical SEO Specialist", exp: "Entry to Mid", salaryRange: "₹5.0 LPA - ₹9.5 LPA" },
        { role: "AEO / GEO Optimization Consultant", exp: "Specialist", salaryRange: "₹6.0 LPA - ₹12.0 LPA" },
        { role: "Organic Search Director", exp: "Mid to Senior", salaryRange: "₹8.0 LPA - ₹15.0 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr Pro", "Clutch", "Direct Enterprise Pitching"],
        earningPotential: "₹60,000 - ₹3,00,000+ / month",
        typicalServices: [
          "Enterprise technical SEO audits ($1,000 - $3,500 per audit)",
          "Monthly organic search retainers for SMBs ($800 - $2,500/mo)",
          "Local SEO Google Maps ranking packages ($400 - $1,200/mo)",
          "GEO & AI search engine readiness audits ($800 - $2,000 one-time)",
        ],
      },
      placement: {
        features: [
          "Technical whiteboard interview practice (canonicalization, rendering, robots.txt, schema)",
          "Mock client pitch simulations and audit presentation coaching",
          "Resume formatting highlighting specific metrics and crawl tooling skills",
          "Direct placement interviews with top digital agencies and enterprise tech firms",
        ],
        steps: [
          { title: "Audit Portfolio Verification", description: "Review and polish your 40-slide technical audit into an undeniable proof-of-work asset." },
          { title: "Technical Whiteboard Rounds", description: "Practice answering deep algorithmic and technical crawl questions with senior search engineers." },
          { title: "Agency & Corporate Matching", description: "Direct interviews with hiring partners looking specifically for advanced SEO and GEO talent." },
        ],
      },
    },
    faqs: [
      {
        question: "Is traditional SEO dying with the rise of ChatGPT and AI search engines?",
        answer:
          "Traditional keyword-stuffed SEO is dying, but search is bigger than ever. AI search engines like Perplexity, ChatGPT Search, and Google AI Overviews still crawl the web to find facts and sources! Our course specifically trains you in Generative Engine Optimization (GEO) so you know how to make brands get chosen and cited by AI engines.",
      },
      {
        question: "What is the difference between SEO, AEO, and GEO?",
        answer:
          "SEO (Search Engine Optimization) focuses on ranking in Google's traditional blue links. AEO (Answer Engine Optimization) optimizes content to capture direct featured snippets, People Also Ask boxes, and voice answers. GEO (Generative Engine Optimization) is the new frontier of optimizing structured knowledge so AI models (Perplexity, ChatGPT, Gemini) recommend your brand in generated answers.",
      },
      {
        question: "Is this training conducted offline in Ghaziabad?",
        answer:
          "Yes! This is an intensive 100% offline classroom training held at our state-of-the-art campus in Sector 5, Sahibabad, Ghaziabad. You will sit in hands-on labs running crawlers, analyzing live server logs, and writing code directly under mentor supervision.",
      },
      {
        question: "Will I need to write code in this SEO course?",
        answer:
          "You will learn lightweight structured code: HTML tags (headings, canonicals, meta tags) and JSON-LD schema markup. We teach you this from absolute zero; you do not need any prior programming or computer science degree.",
      },
      {
        question: "What tools are covered in this course?",
        answer:
          "You will master professional industry tools including Screaming Frog SEO Spider, Ahrefs, SEMrush, Sitebulb, Google Search Console, Google PageSpeed Insights, AlsoAsked, Schema App, as well as AI search benchmarking tools like Perplexity Pro.",
      },
      {
        question: "What kind of job can I land after this course?",
        answer:
          "Graduates qualify for high-paying roles such as Technical SEO Specialist, SEO Strategist, Local SEO Manager, E-Commerce SEO Lead, and AEO/GEO Consultant with starting packages ranging from ₹4.2 LPA to ₹8.5+ LPA.",
      },
    ],
  },

  "generative-ai-automation": {
    slug: "generative-ai-automation",
    title: "Generative AI + AI Automation",
    category: "Dedicated Courses",
    badge: "Futuristic 6-Month AI Operations Program",
    tagline: "Master Prompt Engineering, Multimodal AI Production, No-Code Workflows, AI Agents & Enterprise Automations",
    duration: "6 Months",
    durationWeeks: "24 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "5.0/5",
    reviewCount: "460+ Reviews",
    enrolledCount: "890+ Alumni",
    overview: {
      badge: "Applied AI & No-Code Automation",
      headline: "Stop Using AI Like a Toy: Build Autonomous Workflows, AI Agents & Enterprise Systems",
      description:
        "Artificial Intelligence is not just about writing chat prompts; it's about re-engineering business operations. This dedicated 6-month offline classroom course in Ghaziabad is the definitive practical masterclass in Generative AI and no-code/low-code workflow automation.",
      extendedDescription:
        "You will master advanced prompt engineering architectures, multimodal production (generating photorealistic images, studio audio, and cinematic video), deep AI research workflows, no-code automation engines (Make.com, Zapier, n8n), autonomous AI agents (CrewAI, Flowise), LLM API integrations, and building enterprise AI workflows that save hundreds of human hours every month.",
      metrics: [
        { label: "Classroom Labs", value: "240+ Hrs", desc: "Hands-on AI building" },
        { label: "Automated Flows", value: "15+ Flows", desc: "Built in Make & Zapier" },
        { label: "AI Agents", value: "Custom Built", desc: "Autonomous multi-agent" },
        { label: "Placement Support", value: "100%", desc: "AI ops & consulting" },
      ],
    },
    whoShouldJoin: [
      {
        target: "Tech Enthusiasts & Operations Professionals",
        description: "Looking to become the indispensable 'AI Lead' inside fast-scaling organizations and modern agencies.",
      },
      {
        target: "Entrepreneurs & Agency Founders",
        description: "Wanting to automate customer support, lead qualification, client reporting, and content pipelines to run lean, high-margin businesses.",
      },
      {
        target: "Software & Digital Marketers",
        description: "Professionals who want to graduate from basic ChatGPT users into automated workflow architects and AI agent builders.",
      },
      {
        target: "Freelancers Building AI Consulting Practices",
        description: "Consultants wanting to sell high-ticket automation setups ($1,500 - $5,000/build) to businesses on Upwork and direct retainers.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Any Graduate or Diploma holder (Engineering, Arts, Commerce, Management, Science)",
        "No advanced math, Python, or machine learning degree required — focused on applied enterprise AI & no-code/low-code tools",
        "Logical reasoning, systematic thinking, and curiosity about software integrations",
        "Personal laptop with internet connectivity for classroom automation labs",
      ],
    },
    keyOutcomes: [
      {
        title: "Enterprise Prompt Engineering Mastery",
        description: "Master system prompts, Chain-of-Thought, Tree-of-Thoughts, Few-Shot prompting, and context window optimization.",
      },
      {
        title: "Multimodal AI Asset Generation",
        description: "Generate commercial-grade photorealistic visuals (Midjourney, Flux), AI voiceovers (ElevenLabs), and video ads (Runway Gen-3, Kling).",
      },
      {
        title: "No-Code Workflow Automation (Make.com & Zapier)",
        description: "Build complex multi-step automations connecting CRMs, databases, email services, webhooks, and AI models without writing code.",
      },
      {
        title: "Custom AI Agents & Multi-Agent Collaboration",
        description: "Create autonomous task-oriented AI agents using CrewAI and Flowise that research competitors, draft proposals, and qualify leads.",
      },
      {
        title: "LLM API Integrations & Webhooks",
        description: "Connect OpenAI, Anthropic Claude, and Groq APIs into business tools, spreadsheets, and webhooks for real-time data processing.",
      },
      {
        title: "Automated Knowledge Bases & Chatbots (RAG)",
        description: "Build custom intelligent customer support chatbots trained on private business documents, PDFs, and company FAQs.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "AI Landscape, LLM Architecture & Advanced Prompt Engineering",
        hours: "40 Hours",
        summary: "Understand transformer architectures, context windows, tokenization, and master prompt engineering as a precision discipline.",
        modules: [
          {
            name: "Module 1: How Large Language Models Really Work",
            topics: [
              "Evolution of Generative AI: From GPT-2 to frontier models (GPT-4o, Claude 3.5, Gemini 1.5, o1)",
              "Transformers, tokens, temperature, top-p, context windows, and hallucinations",
              "Comparative evaluation of leading frontier models: Strengths, latency, and costs",
              "Data privacy, security guidelines, and avoiding corporate intellectual property leaks",
            ],
          },
          {
            name: "Module 2: Advanced Prompt Engineering Frameworks",
            topics: [
              "Core prompt components: Role, Context, Task, Constraints, Output Format",
              "Chain-of-Thought (CoT), Step-Back prompting, and Few-Shot learning examples",
              "System prompt design: Building persistent AI personas with strict behavioral guardrails",
              "Prompt chaining: Breaking complex cognitive business tasks into discrete steps",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "Multimodal AI Generation: Image, Video, Voice & Creative Workflows",
        hours: "40 Hours",
        summary: "Produce studio-grade creative assets using the world's most powerful visual, video, and audio AI models.",
        modules: [
          {
            name: "Module 3: Visual Generation with Midjourney & Flux",
            topics: [
              "Midjourney v6 parameters: Aspect ratios, stylize, chaos, image weight, seed control",
              "Photorealistic prompting: Lighting styles, camera lenses, materials, and art directions",
              "Flux.1 and open-weight diffusion models: Text-in-image generation and local rendering",
              "Consistent character generation across multiple scenes and storyboard frames",
            ],
          },
          {
            name: "Module 4: AI Video, Voice Cloning & Complete Commercials",
            topics: [
              "Cinematic video generation: Runway Gen-3, Kling AI, Luma Dream Machine",
              "Camera motion controls: Pan, tilt, zoom, and motion brush techniques",
              "Voice cloning and emotional studio narration with ElevenLabs",
              "Assembling a 30-second broadcast-ready commercial using pure AI assets",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "Deep AI Research, Data Synthesis & Custom Knowledge GPTs",
        hours: "40 Hours",
        summary: "Automate intelligence gathering, document synthesis, and build custom GPTs with proprietary business knowledge.",
        modules: [
          {
            name: "Module 5: Accelerated Research & Data Analysis",
            topics: [
              "Perplexity Pro deep search: Sourcing citations, scientific literature, and market reports",
              "Analyzing massive datasets, CSVs, and financial statements using Advanced Data Analysis",
              "Synthesizing 100-page PDF reports into executive summaries and SWOT matrices",
              "Creating synthetic datasets for market simulations and customer feedback testing",
            ],
          },
          {
            name: "Module 6: Custom GPTs & Enterprise Knowledge Bases",
            topics: [
              "Building Custom GPTs inside OpenAI: Instructions, knowledge files, and capability toggles",
              "Configuring custom Actions in GPTs: Calling external APIs and webhook endpoints",
              "Introduction to Retrieval-Augmented Generation (RAG) principles and vector databases",
              "Building internal company SOP bots for HR, customer service, and sales enablement",
            ],
          },
        ],
      },
      {
        month: "Month 4",
        title: "No-Code Workflow Automation Mastery (Make.com & Zapier)",
        hours: "40 Hours",
        summary: "Connect your entire software stack and automate complex business processes with Make.com and Zapier.",
        modules: [
          {
            name: "Module 7: Workflow Automation with Make.com",
            topics: [
              "Make.com core concepts: Scenarios, modules, triggers, actions, and routers",
              "Data manipulation: JSON parsing, array aggregators, iterators, and text parsers",
              "Error handling directives: Resume, ignore, rollback, and error notifications",
              "Building webhooks to capture live data from web forms, payment gateways, and CRMs",
            ],
          },
          {
            name: "Module 8: Building AI-Powered Automation Pipelines",
            topics: [
              "Integrating OpenAI & Anthropic API modules inside Make.com scenarios",
              "Automated lead qualification: Reading form submissions, scoring leads with AI, routing to CRM",
              "Automated social media distribution: Generating, formatting, and scheduling posts across platforms",
              "Automated client reporting: Fetching analytics data, summarizing with AI, sending Slack alerts",
            ],
          },
        ],
      },
      {
        month: "Month 5",
        title: "Autonomous AI Agents, Multi-Agent Collaboration & LLM APIs",
        hours: "40 Hours",
        summary: "Build autonomous agents that collaborate to solve multi-step goals without human intervention.",
        modules: [
          {
            name: "Module 9: AI Agents & Multi-Agent Frameworks (CrewAI / Flowise)",
            topics: [
              "What is an AI Agent? Goal-driven autonomy, tools, memory, and reflection",
              "CrewAI architecture: Defining Agents (Researcher, Writer, Reviewer), Tasks, and Processes",
              "Visual agent building with Flowise: Connecting nodes, vector stores, and memory chains",
              "Equipping agents with web search, scraping, calculator, and database query tools",
            ],
          },
          {
            name: "Module 10: Calling LLM APIs (OpenAI, Anthropic & Groq)",
            topics: [
              "Getting started with developer API keys, pricing, token consumption, and rate limits",
              "Making API calls with Postman, cURL, and lightweight Python/JavaScript scripts",
              "Structured outputs: Forcing LLMs to return strict JSON matching your schema",
              "Using ultra-fast inference engines like GroqCloud for real-time voice and text apps",
            ],
          },
        ],
      },
      {
        month: "Month 6",
        title: "Enterprise Business Workflows, Monetization & Capstone Project",
        hours: "40 Hours",
        summary: "Package, deploy, and monetize production AI automation solutions for businesses, and deliver your capstone system.",
        modules: [
          {
            name: "Module 11: Enterprise Workflow Deployment & Security",
            topics: [
              "Auditing an enterprise to identify high-ROI AI automation opportunities",
              "Calculating automation ROI: Cost per run vs. human labor hours saved",
              "Security best practices: API key rotation, SOC2 considerations, and data retention",
              "Packaging and pricing AI automation consulting services ($2,500 - $10,000/engagement)",
            ],
          },
          {
            name: "Module 12: Production Capstone Launch & Evaluation",
            topics: [
              "Executing the end-to-end Autonomous Business Operations System",
              "Conducting live stress testing on webhooks and multi-step scenarios",
              "Creating client documentation, video handover SOPs, and monitoring dashboards",
              "Capstone defense presentation in front of agency directors and enterprise tech leads",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "Make.com", category: "Visual Automation Platform" },
      { name: "Zapier", category: "Workflow Automation" },
      { name: "n8n", category: "Open-Source Automation" },
      { name: "Airtable", category: "Relational Cloud Database" },
      { name: "OpenAI Platform", category: "LLM API Provider" },
      { name: "Anthropic Console", category: "Claude API Suite" },
      { name: "GroqCloud", category: "Ultra-Fast LPU Inference" },
      { name: "Flowise AI", category: "No-Code Agent Builder" },
      { name: "Notion", category: "Knowledge Base Management" },
    ],
    aiTools: [
      { name: "ChatGPT-4o", role: "Logic reasoning, code generation & multi-step cognitive tasks" },
      { name: "Claude 3.5 Sonnet", role: "Long-context synthesis, JSON structuring & coding" },
      { name: "Midjourney v6", role: "High-resolution commercial photography & ad generation" },
      { name: "ElevenLabs", role: "Hyper-realistic voice cloning & studio audio generation" },
      { name: "Runway Gen-3 / Kling", role: "Cinematic text-to-video and image-to-video production" },
      { name: "Perplexity Pro", role: "Autonomous web research & real-time citation discovery" },
      { name: "Cursor AI", role: "Lightweight API scripting and automation maintenance" },
    ],
    assignments: [
      {
        title: "Master Enterprise System Prompt Architecture",
        objective: "Write a 500-word robust system prompt with strict constraints, markdown output schemas, and fallback protocols.",
        deliverable: "Documented prompt with test suite validating edge cases and safety boundaries.",
      },
      {
        title: "30-Second Commercial AI Video Ad",
        objective: "Script, generate visual scenes in Midjourney, animate in Runway/Kling, voice in ElevenLabs, and assemble an ad.",
        deliverable: "Finished 1080p video file with sound design and voice narration.",
      },
      {
        title: "Automated Inbound Lead Qualification Flow",
        objective: "Build a Make.com scenario capturing form leads, evaluating fit with OpenAI API, writing to Airtable, and sending a Slack alert.",
        deliverable: "Shareable Make.com blueprint file (.json) with video walkthrough.",
      },
      {
        title: "Multi-Agent Research & Writing Crew",
        objective: "Configure a multi-agent system in CrewAI/Flowise where an agent searches the web, another outlines, and a third edits an article.",
        deliverable: "Recorded execution showing autonomous agent handoffs and final generated output.",
      },
    ],
    liveProjects: [
      {
        title: "Automated Customer Inquiry & Booking System",
        clientType: "Delhi NCR Regional Service Firm",
        objective: "Automate 80% of routine client WhatsApp & web inquiries using an AI-augmented Make.com workflow.",
        impact: "Students test live incoming webhooks, error handlers, and CRM contact synchronization.",
      },
    ],
    caseStudies: [
      {
        title: "How an Agency Saved 140 Hours/Month with Make.com + AI",
        metric: "140 Hrs/Mo Saved",
        description: "Automated social media asset repurposing, multi-client weekly reporting, and meeting note summaries.",
      },
      {
        title: "Building an Autonomous Cold Outreach Engine with AI Agents",
        metric: "32% Response Rate",
        description: "Deployed AI agents that research prospective company news, personalize outbound emails, and sync with HubSpot CRM.",
      },
    ],
    portfolioProjects: [
      {
        title: "Enterprise AI Automation Blueprint Library",
        format: "Make.com & Zapier Export Library",
        description: "A portfolio of 5 production-ready automation blueprints covering lead gen, customer service, and analytics reporting.",
      },
      {
        title: "Multimodal AI Commercial Showreel",
        format: "Video Portfolio Showcase",
        description: "A professional compilation demonstrating your mastery of Midjourney, Runway, Kling, and ElevenLabs voice design.",
      },
      {
        title: "Custom AI Knowledge Agent Demonstration",
        format: "Live Interactive Web Agent",
        description: "A functional chatbot or agent trained on a private company knowledge base capable of answering technical queries.",
      },
    ],
    capstoneProject: {
      title: "Autonomous AI Operations System for an Enterprise Business",
      timeline: "Final 4 Weeks of Program",
      description:
        "Students build an end-to-end autonomous business operations system for a real or simulated business. The system captures inquiries, enriches lead data via AI research, generates personalized marketing collateral, logs records to a database, triggers alerts, and generates an automated weekly executive synthesis report.",
      deliverables: [
        "Fully functional Make.com / n8n workflow with 5+ connected services and error handling",
        "Configured AI Agent with web search or document retrieval capabilities",
        "Multimodal asset generation pipeline for marketing collateral",
        "Live demonstration video showcasing end-to-end data flow without human intervention",
        "Executive ROI presentation calculating monthly financial savings and operational efficiency",
      ],
    },
    certification: {
      title: "Master Certificate in Generative AI & Enterprise Automation",
      description: "Awarded following live scenario debugging defense and capstone automation presentation.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified AI Automation Specialist",
        "Make.com Academy Alignment & Badge",
        "Zapier Certified Expert Alignment",
      ],
    },
    career: {
      roles: [
        { role: "AI Automation Consultant", exp: "Entry to Mid", salaryRange: "₹5.0 LPA - ₹10.0 LPA" },
        { role: "AI Operations Specialist", exp: "Entry to Mid", salaryRange: "₹4.8 LPA - ₹9.0 LPA" },
        { role: "Workflow Automation Architect", exp: "Mid Level", salaryRange: "₹6.5 LPA - ₹13.0 LPA" },
        { role: "Prompt Engineer & AI Producer", exp: "Entry to Mid", salaryRange: "₹4.5 LPA - ₹8.5 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr", "LinkedIn Inbound", "Direct Corporate Consulting"],
        earningPotential: "₹75,000 - ₹3,50,000+ / month",
        typicalServices: [
          "Custom Make.com / Zapier automation builds ($1,000 - $4,000/setup)",
          "AI customer support chatbot deployment on custom data ($800 - $2,500/bot)",
          "Multimodal AI video commercial production ($500 - $2,000/video)",
          "Monthly workflow maintenance and AI consulting retainers ($1,000 - $3,000/mo)",
        ],
      },
      placement: {
        features: [
          "Live scenario troubleshooting interview practice (debugging broken webhooks under pressure)",
          "AI portfolio presentation coaching with working live demonstrations",
          "Resume formatting emphasizing quantifiable time and dollar savings achieved",
          "Direct placement referrals to modern tech companies, fast-growing agencies, and startups",
        ],
        steps: [
          { title: "Automation Portfolio Review", description: "Package your Make.com blueprints and agent architectures into an interactive digital showcase." },
          { title: "Scenario Debugging Challenges", description: "Practice solving live enterprise automation problems and API errors with instructors." },
          { title: "Enterprise & Agency Interviews", description: "Interview directly with hiring managers seeking hands-on AI ops talent in Delhi NCR." },
        ],
      },
    },
    faqs: [
      {
        question: "Do I need a background in Python, Math, or Machine Learning to take this course?",
        answer:
          "No! This course focuses on 'Applied Generative AI and No-Code Automation'. You do not need to train neural networks from scratch. You learn to connect world-class frontier models (OpenAI, Claude) with visual automation platforms (Make.com, Zapier, Flowise) to build real business systems.",
      },
      {
        question: "How is this course different from free YouTube AI tutorials?",
        answer:
          "YouTube tutorials show isolated 5-minute tricks. In our 6-month offline classroom training in Ghaziabad, you learn full enterprise system architecture: complex error handling, rate limiting, JSON schema validation, vector database connections, autonomous agent protocols, and real client deployments.",
      },
      {
        question: "Is this course 100% offline classroom training in Ghaziabad?",
        answer:
          "Yes! This course takes place at our modern campus in Sector 5, Sahibabad, Ghaziabad. You build automations alongside peers in dedicated labs with immediate face-to-face debugging help from instructors.",
      },
      {
        question: "Can I earn money as a freelancer with AI automation skills?",
        answer:
          "Absolutely. AI automation is one of the highest-paid freelance niches on Upwork. International businesses are eager to pay $1,500 to $5,000 per setup to automate their lead processing, customer support, and reporting workflows.",
      },
      {
        question: "What AI tools will I have access to and master during the course?",
        answer:
          "You will master ChatGPT-4o, Claude 3.5 Sonnet, Midjourney v6, Flux.1, ElevenLabs, Runway Gen-3, Kling AI, Perplexity Pro, Make.com, Zapier, n8n, Airtable, and CrewAI/Flowise for AI agents.",
      },
      {
        question: "What job opportunities exist in AI automation?",
        answer:
          "Companies across tech, e-commerce, real estate, and finance are actively hiring for AI Automation Consultants, AI Operations Managers, Workflow Architects, and Prompt Engineers with starting packages ranging from ₹5.0 LPA to ₹12.0+ LPA.",
      },
    ],
  },

  "wordpress-shopify-development": {
    slug: "wordpress-shopify-development",
    title: "WordPress + Shopify Development",
    category: "Dedicated Courses",
    badge: "CMS & E-Commerce 6-Month Mastery Program",
    tagline: "Build Custom High-Converting Websites, WooCommerce Stores, and Shopify E-Commerce Brands",
    duration: "6 Months",
    durationWeeks: "24 Weeks",
    mode: "100% Offline Classroom Training",
    location: "Ghaziabad (Sahibabad Campus), Delhi NCR",
    rating: "4.9/5",
    reviewCount: "440+ Reviews",
    enrolledCount: "1,050+ Alumni",
    overview: {
      badge: "High-Demand Commercial Web Development",
      headline: "Master the Two Platforms Powering 45%+ of the Entire Internet: WordPress & Shopify",
      description:
        "Over 43% of the web runs on WordPress, and Shopify is the gold standard for global e-commerce. This dedicated 6-month specialist offline classroom course in Ghaziabad trains you to build, customize, optimize, and monetize high-performance websites and online stores.",
      extendedDescription:
        "You will master custom theme development, Elementor Pro, Gutenberg block architecture, WooCommerce store setup, Shopify Liquid coding, custom section engineering, payment gateway integrations (Razorpay, Stripe), app webhooks, website speed optimization (Core Web Vitals), and conversion rate optimization (CRO).",
      metrics: [
        { label: "Classroom Coding", value: "240+ Hrs", desc: "Hands-on CMS labs" },
        { label: "Live Stores Built", value: "6+ Stores", desc: "WordPress & Shopify" },
        { label: "Speed Optimization", value: "Sub-2s", desc: "Core Web Vitals pass" },
        { label: "Placement Support", value: "100%", desc: "Direct agency hiring" },
      ],
    },
    whoShouldJoin: [
      {
        target: "Aspiring Web Developers & Freelancers",
        description: "Looking to build immediate high-income skills by offering commercial websites and e-commerce stores to local and global clients.",
      },
      {
        target: "E-Commerce Entrepreneurs & Store Owners",
        description: "Founders wanting to build and control their own high-converting Shopify or WooCommerce stores without paying expensive agencies.",
      },
      {
        target: "Graphic & UI/UX Designers",
        description: "Designers who want to bring their Figma layouts to life with custom Gutenberg blocks, Elementor Pro, and Shopify Liquid.",
      },
      {
        target: "Career Switchers into Web & IT",
        description: "Individuals wanting to break into tech with the fastest, most commercially demanded website building platforms.",
      },
    ],
    eligibility: {
      title: "Course Eligibility Criteria",
      items: [
        "10+2 / Any Graduate or Diploma holder (Any stream: Arts, Commerce, Science, etc.)",
        "No prior coding experience required — foundational HTML, CSS, and Liquid are taught in class",
        "Basic computer literacy, file management, and familiarity with web browsing",
        "A personal laptop for hands-on classroom development and local environment labs",
      ],
    },
    keyOutcomes: [
      {
        title: "Custom WordPress Website Development",
        description: "Build fast, responsive corporate websites, blogs, and portals using Gutenberg block editor, child themes, and Elementor Pro.",
      },
      {
        title: "Full-Featured WooCommerce Stores",
        description: "Configure complex product catalogs, variable items, shipping zones, coupon rules, and Indian & international payment gateways.",
      },
      {
        title: "Shopify Store Engineering & Architecture",
        description: "Launch modern Shopify storefronts, configuring collections, inventory management, taxes, and high-converting checkout settings.",
      },
      {
        title: "Shopify Liquid Customization & Sections",
        description: "Code custom sections, dynamic schema blocks, and custom page templates using Shopify's Liquid templating engine.",
      },
      {
        title: "Sub-2s Speed Optimization (Core Web Vitals)",
        description: "Optimize image compression, browser caching, CDN setup, script deferral, and database cleanup to score 90+ on Google PageSpeed.",
      },
      {
        title: "E-Commerce CRO & Checkout Optimization",
        description: "Implement sticky add-to-cart bars, upsell funnels, trust badges, abandoned cart recovery, and mobile-first checkout flows.",
      },
    ],
    curriculum: [
      {
        month: "Month 1",
        title: "Web Foundations (HTML5/CSS3), Hosting Architecture & WordPress Core",
        hours: "40 Hours",
        summary: "Understand web hosting, domain DNS, local environments, semantic HTML/CSS, and WordPress core setup.",
        modules: [
          {
            name: "Module 1: Web Hosting, CPanel, Domains & Local Environments",
            topics: [
              "How web hosting works: Shared, VPS, cloud servers, and DNS record management (A, CNAME, MX)",
              "Setting up local WordPress development environment using Local by Flywheel",
              "Semantic HTML5 tags and modern CSS3 (Flexbox & Grid) for layout styling",
              "WordPress core file structure, wp-config.php, and MySQL database fundamentals",
            ],
          },
          {
            name: "Module 2: WordPress Architecture & Content Management",
            topics: [
              "Posts vs. Pages, taxonomies (categories & tags), and user role management",
              "WordPress theme hierarchy and understanding child themes for safe modifications",
              "Essential plugin architecture: Security, caching, backups, and forms",
              "Setting up SSL certificates, security hardening, and spam protection",
            ],
          },
        ],
      },
      {
        month: "Month 2",
        title: "Advanced WordPress: Gutenberg Blocks, Elementor Pro & Dynamic Data",
        hours: "40 Hours",
        summary: "Build bespoke, modern business websites with block builders, custom fields, and dynamic database queries.",
        modules: [
          {
            name: "Module 3: Visual Page Building with Elementor Pro",
            topics: [
              "Elementor Pro theme builder: Custom headers, footers, single post, and archive templates",
              "Responsive controls: Mobile, tablet, and desktop breakpoints",
              "Motion effects, custom CSS styling, and global design systems (typography & colors)",
              "Creating multi-step lead forms, popups, and WhatsApp integration buttons",
            ],
          },
          {
            name: "Module 4: Native Gutenberg Blocks & Advanced Custom Fields (ACF)",
            topics: [
              "Native WordPress block editor (Gutenberg) architecture and block patterns",
              "Creating Custom Post Types (CPT) for Portfolios, Services, Team, and Testimonials",
              "Using Advanced Custom Fields (ACF) to build dynamic client-editable templates",
              "Query Loop blocks and dynamic content rendering without bloated code",
            ],
          },
        ],
      },
      {
        month: "Month 3",
        title: "WooCommerce Mastery: Complete E-Commerce Store Architecture",
        hours: "40 Hours",
        summary: "Transform WordPress into a high-powered online shopping engine with inventory, shipping, and payment gateways.",
        modules: [
          {
            name: "Module 5: WooCommerce Catalog & Product Management",
            topics: [
              "WooCommerce installation, setup wizard, and shop page configuration",
              "Product types: Simple, Variable (sizes/colors), Grouped, Virtual, and Downloadable",
              "Inventory tracking, stock alerts, SKU management, and backorders",
              "Setting up tax rules (GST compliance in India) and shipping zones/rates",
            ],
          },
          {
            name: "Module 6: Checkout, Payment Gateways & Store Functionality",
            topics: [
              "Integrating Indian payment gateways: Razorpay, Cashfree, and Cash on Delivery (COD)",
              "Integrating international payments with Stripe and PayPal",
              "Customizing WooCommerce checkout pages with custom billing fields",
              "Configuring coupon codes, automated transactional emails, and customer account portals",
            ],
          },
        ],
      },
      {
        month: "Month 4",
        title: "Shopify Platform Foundations: Store Architecture & Theme Customization",
        hours: "40 Hours",
        summary: "Enter the world of Shopify: partner dashboards, development stores, catalog management, and theme building.",
        modules: [
          {
            name: "Module 7: Shopify Partner Ecosystem & Store Setup",
            topics: [
              "Creating a Shopify Partner account and setting up development test stores",
              "Catalog architecture: Products, options, variants, smart automated collections, and tags",
              "Shopify navigation: Multi-level mega menus, footer links, and breadcrumbs",
              "Configuring store policies, shipping profiles, tax settings, and domain connections",
            ],
          },
          {
            name: "Module 8: Shopify Theme Customization (Dawn & Premium Themes)",
            topics: [
              "Deep dive into Shopify Theme Editor: Sections, blocks, and dynamic sources",
              "Customizing the Shopify Dawn reference theme for modern aesthetics",
              "Configuring product detail pages (PDP): Image carousels, size charts, variant selectors",
              "Essential app integrations: Judge.me product reviews, Klaviyo email capture, and currency switchers",
            ],
          },
        ],
      },
      {
        month: "Month 5",
        title: "Shopify Liquid Templating, Custom Sections & High-Converting CRO",
        hours: "40 Hours",
        summary: "Code custom sections with Liquid, edit theme code directly, and implement e-commerce conversion rate optimization.",
        modules: [
          {
            name: "Module 9: Coding with Shopify Liquid",
            topics: [
              "Liquid language syntax: Objects ({{ product.title }}), tags ({% if %}), and filters ({{ price | money }})",
              "Building custom reusable sections with custom schema JSON settings",
              "Creating announcement bars, countdown timers, and sticky add-to-cart drawers",
              "Theme code structure: layout, templates, sections, snippets, and assets",
            ],
          },
          {
            name: "Module 10: E-Commerce CRO & Checkout Optimization",
            topics: [
              "E-commerce conversion psychology: Trust badges, social proof popups, scarcity indicators",
              "Optimizing cart drawers: Free shipping progress bars and post-purchase upsells",
              "Shopify 1-page checkout customization and branding settings",
              "Setting up abandoned cart email sequences and automated recovery flows",
            ],
          },
        ],
      },
      {
        month: "Month 6",
        title: "Speed Optimization (Core Web Vitals), Security, Client Delivery & Capstone",
        hours: "40 Hours",
        summary: "Pass Google Core Web Vitals, harden security, deliver seamless client handovers, and launch your capstone store.",
        modules: [
          {
            name: "Module 11: Site Speed Engineering & Security Hardening",
            topics: [
              "Diagnosing PageSpeed bottlenecks: Reducing TTFB, render-blocking JS, and layout shifts",
              "WordPress speed tuning: WP Rocket / LiteSpeed Cache, asset minification, and WebP conversion",
              "Shopify app bloat audit: Removing unused app scripts and optimizing theme assets",
              "Backup automation, staging environments, and database optimization",
            ],
          },
          {
            name: "Module 12: Client Delivery, Maintenance Retainers & Capstone Launch",
            topics: [
              "Client handover protocols: Recording video SOPs and creating admin dashboards",
              "Structuring monthly maintenance retainers ($300 - $1,000/mo per client)",
              "Live presentation and evaluation of the Capstone E-Commerce Store",
              "Freelance client acquisition on Upwork/Fiverr and direct agency placement interviews",
            ],
          },
        ],
      },
    ],
    tools: [
      { name: "WordPress Core", category: "CMS Engine" },
      { name: "WooCommerce", category: "E-Commerce Plugin" },
      { name: "Shopify Partner Dashboard", category: "E-Commerce Platform" },
      { name: "Elementor Pro", category: "Visual Page Builder" },
      { name: "Local by Flywheel", category: "Local Server Environment" },
      { name: "VS Code / Cursor", category: "Code & Liquid Editor" },
      { name: "Razorpay / Stripe", category: "Payment Gateways" },
      { name: "WP Rocket", category: "Speed Optimization" },
      { name: "Google PageSpeed Insights", category: "Performance Audit" },
    ],
    aiTools: [
      { name: "Cursor AI", role: "Writing custom Shopify Liquid sections and PHP functions" },
      { name: "v0.dev", role: "Prototyping responsive HTML/CSS component layouts" },
      { name: "ChatGPT-4o", role: "Generating compelling e-commerce product descriptions & schema" },
      { name: "Midjourney v6", role: "Creating hero banners, product lifestyle photography & icons" },
    ],
    assignments: [
      {
        title: "Custom 5-Page WordPress Corporate Portal",
        objective: "Build a bespoke responsive agency or corporate website using Gutenberg or Elementor Pro with custom header and footer.",
        deliverable: "Live deployed website URL with working contact form and mobile-optimized layout.",
      },
      {
        title: "Full-Featured WooCommerce Shop with Razorpay",
        objective: "Configure a complete online store with variable products, coupon codes, and Razorpay test payment integration.",
        deliverable: "Live test shop showing completed checkout and automated order email delivery.",
      },
      {
        title: "Custom Coded Shopify Liquid Section",
        objective: "Code a custom, responsive testimonial slider or FAQ section in Liquid with configurable schema settings in Theme Editor.",
        deliverable: "Liquid file and screen recording showing section customization inside Shopify.",
      },
      {
        title: "90+ PageSpeed Optimization Case Study",
        objective: "Take an unoptimized slow test site and optimize it to achieve 90+ on Google PageSpeed Insights.",
        deliverable: "Before-and-after audit report detailing specific asset optimizations and caching configurations.",
      },
    ],
    liveProjects: [
      {
        title: "Live Commercial E-Commerce Store Build",
        clientType: "Indian Lifestyle / Apparel Brand",
        objective: "Configure a live commercial Shopify or WooCommerce store ready to accept real customer orders.",
        impact: "Students configure real payment gateways, shipping rules, and custom product catalogs.",
      },
    ],
    caseStudies: [
      {
        title: "Scaling a Shopify Fashion Brand to ₹1.2 Crore in Annual Sales",
        metric: "₹1.2 Cr Revenue",
        description: "How custom 1-page checkout, free shipping progress bar, and 1.6s load speeds lifted store conversion rate from 1.2% to 3.4%.",
      },
      {
        title: "Migrating an Offline Wholesaler to an Automated B2B WooCommerce Portal",
        metric: "80% Time Saved",
        description: "Case study creating custom post types, wholesale pricing tiers, and automated invoice generation for a regional distributor.",
      },
    ],
    portfolioProjects: [
      {
        title: "Live Production WordPress Business Portal",
        format: "Live Website",
        description: "A fast, beautifully designed multi-page website featuring custom post types, portfolio showcase, and dynamic lead capture.",
      },
      {
        title: "Fully Configured Commercial Shopify Store",
        format: "Live Shopify Store Demo",
        description: "A conversion-optimized Shopify storefront featuring custom Liquid sections, sticky add-to-cart, reviews, and polished aesthetics.",
      },
      {
        title: "Site Speed & Performance Audit Case Study",
        format: "Technical Case Study Deck",
        description: "Documented proof of taking a slow client site from a 38 score to a 94+ Google PageSpeed score with sub-2s load time.",
      },
    ],
    capstoneProject: {
      title: "Commercial E-Commerce Store Launch & Speed Optimization",
      timeline: "Final 4 Weeks of Program",
      description:
        "Students select a commercial brand niche, build a complete high-performance e-commerce store on either Shopify (with custom Liquid sections) or WordPress/WooCommerce (with custom dynamic fields). The store must include custom sections, mobile-first navigation, payment gateway integration, automated cart recovery, and a sub-2s mobile load time.",
      deliverables: [
        "Live functional e-commerce store with product catalog, cart, and payment gateway",
        "At least 2 custom-coded sections built from scratch in Liquid or HTML/CSS",
        "Google PageSpeed Insights report scoring 90+ on mobile performance",
        "Automated transactional emails and abandoned cart recovery workflows configured",
        "Client handover video tutorial explaining how to add products and manage orders",
      ],
    },
    certification: {
      title: "Diploma in Professional WordPress & Shopify Store Development",
      description: "Awarded following live store review, code quality check, and capstone presentation to senior web directors.",
      issuer: "New Digital Era Academy",
      accreditations: [
        "New Digital Era Certified E-Commerce & CMS Developer Diploma",
        "Shopify Partner Academy Alignment",
        "HubSpot CMS for Developers Alignment",
      ],
    },
    career: {
      roles: [
        { role: "Shopify Developer", exp: "Entry to Mid", salaryRange: "₹4.0 LPA - ₹8.0 LPA" },
        { role: "WordPress & WooCommerce Developer", exp: "Entry to Mid", salaryRange: "₹3.8 LPA - ₹7.0 LPA" },
        { role: "E-Commerce Web Specialist", exp: "Entry to Mid", salaryRange: "₹4.2 LPA - ₹7.5 LPA" },
        { role: "CMS Web Project Manager", exp: "Mid Level", salaryRange: "₹5.5 LPA - ₹10.0 LPA" },
      ],
      freelancing: {
        platforms: ["Upwork", "Fiverr Pro", "Shopify Experts", "Direct Local Business Outreach"],
        earningPotential: "₹50,000 - ₹2,50,000+ / month",
        typicalServices: [
          "Custom Shopify store builds ($800 - $3,000 per store)",
          "WordPress corporate website development ($500 - $2,000 per site)",
          "Website speed optimization & Core Web Vitals fixes ($300 - $800 per site)",
          "Monthly website maintenance retainers ($250 - $800/mo per client)",
        ],
      },
      placement: {
        features: [
          "Live portfolio store review and code cleanup with senior web engineers",
          "Freelance proposal writing and client pricing negotiation coaching",
          "Mock technical interviews covering theme hierarchy, Liquid loops, and hooks",
          "Direct placement interviews with digital agencies, e-commerce brands, and IT firms",
        ],
        steps: [
          { title: "Store Portfolio Review", description: "Audit your live WordPress and Shopify store builds to ensure flawless mobile responsiveness." },
          { title: "Technical CMS Q&A Prep", description: "Practice answering common technical interview questions on WordPress hooks, Liquid schemas, and speed fixes." },
          { title: "Agency Placement Matching", description: "Interview directly with leading digital agencies and e-commerce companies across Delhi NCR." },
        ],
      },
    },
    faqs: [
      {
        question: "Why should I learn both WordPress and Shopify together?",
        answer:
          "WordPress powers 43% of all websites globally, while Shopify is the dominant leader for e-commerce brands. By mastering both, you become capable of handling any web client—from local service providers needing WordPress sites to D2C brands needing high-converting Shopify stores.",
      },
      {
        question: "Do I need prior coding knowledge before joining?",
        answer:
          "No! We teach you everything from foundational web basics. You will learn how to use intuitive visual tools (Elementor, Theme Editor) as well as write custom code (HTML, CSS, Liquid) step-by-step with personal offline mentor guidance.",
      },
      {
        question: "Is this training 100% offline classroom based in Ghaziabad?",
        answer:
          "Yes! This course takes place in our computer labs at Sector 5, Sahibabad, Ghaziabad. You build websites on live development servers with direct instructor support at every step.",
      },
      {
        question: "Can I start freelancing and getting clients while doing this course?",
        answer:
          "Yes. Many of our students land their first paid freelance website projects by Month 3 or 4, building simple business websites or Shopify store setups for local businesses and Upwork clients.",
      },
      {
        question: "Will I learn how to make websites load fast (Core Web Vitals)?",
        answer:
          "Yes! Site speed is a major focus. We teach you caching, image optimization, code minification, and database cleanup so your stores achieve sub-2-second load times and 90+ Google PageSpeed scores.",
      },
      {
        question: "What kind of certificates will I earn upon completion?",
        answer:
          "You will receive the New Digital Era Academy Certified E-Commerce & CMS Developer Diploma, along with alignment and preparation for Shopify Partner Academy credentials.",
      },
    ],
  },
};
