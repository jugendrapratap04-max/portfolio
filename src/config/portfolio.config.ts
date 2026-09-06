/* =============================================================================
   ⭐ THE ONLY FILE YOU NEED TO EDIT ⭐
   Single source of truth for the whole website. Filled with Jugendra's real
   details from his resume. Edit anything here; the site updates everywhere.
   To HIDE an item set hidden:true; to hide a whole section flip it in `sections`.
   ============================================================================= */

import type { PortfolioConfig } from "./types";

export const config: PortfolioConfig = {
  /* -------------------------------------------------------------------------- */
  /*  PERSONAL                                                                  */
  /* -------------------------------------------------------------------------- */
  personal: {
    name: "Jugendra Pratap",
    firstName: "Jugendra",
    headline: "Data Science Undergraduate & Aspiring Machine Learning Engineer",
    typingRoles: [
      "Data Science Undergraduate",
      "Aspiring ML Engineer",
      "Python Developer",
      "AI & Automation Enthusiast",
    ],
    tagline:
      "Building machine learning models and turning real-world data into measurable, data-driven results.",
    bio: "I'm a second-year B.Tech Computer Science (Data Science) student at GLA University with hands-on experience building machine learning models and analyzing real-world datasets using Python, SQL and the Pandas/NumPy/Scikit-learn stack. I've built and deployed an end-to-end ML web application along with data-analytics and automation workflows, and I'm currently strengthening my DSA, Java and Agentic AI skills. I'm seeking a Data Science, Data Analyst, AI or Python Developer internship where I can deliver measurable impact.",
    role: "Student",
    email: "jugendrapratap04@gmail.com",
    phone: "",   // add your real number to show it in Contact; empty = hidden
    location: "India · Open to Remote",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg",
    heroImage: "",
    availableForWork: true,
  },

  /* -------------------------------------------------------------------------- */
  /*  SOCIAL LINKS                                                              */
  /* -------------------------------------------------------------------------- */
  socials: [
    { icon: "Github", label: "GitHub", url: "https://github.com/jugendrapratap04-max", enabled: true },
    { icon: "Linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/jugendra-pratap-ds/", enabled: true },
    { icon: "Mail", label: "Email", url: "mailto:jugendrapratap04@gmail.com", enabled: true },
    { icon: "Twitter", label: "Twitter", url: "", enabled: false },
    { icon: "Instagram", label: "Instagram", url: "", enabled: false },
    { icon: "Youtube", label: "YouTube", url: "", enabled: false },
    { icon: "Globe", label: "Web Studio", url: "https://web-studio-lilac.vercel.app", enabled: true },
  ],

  /* -------------------------------------------------------------------------- */
  /*  NAVIGATION                                                                */
  /* -------------------------------------------------------------------------- */
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Learning", href: "#learning" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  /* -------------------------------------------------------------------------- */
  /*  SECTION TOGGLES                                                           */
  /* -------------------------------------------------------------------------- */
  sections: {
    hero: true,
    about: true,
    skills: false,         // hidden for now — turn back on when you re-add skills
    learning: true,        // "Currently Learning" section
    projects: true,
    experience: false,     // no work experience yet — turn on when you add some
    education: true,
    certifications: false, // hidden until there are 3–4; data kept below, flip to true later
    achievements: false,   // hidden — thin vanity stats; turn on when numbers grow
    github: false,         // embedded graph looks sparse on a new account; GitHub link still in hero
    blog: false,           // future-ready: flip on when you start writing
    contact: true,
  },

  /* -------------------------------------------------------------------------- */
  /*  SKILLS                                                                    */
  /* -------------------------------------------------------------------------- */
  skillCategories: [
    "Programming",
    "Machine Learning",
    "Data Science",
    "Databases & Web",
    "AI & Automation",
    "Tools",
  ],
  skills: [
    { name: "Python", icon: "Code2", category: "Programming", level: "Advanced", proficiency: 88, description: "Primary language for ML, data work and automation." },
    { name: "SQL", icon: "Database", category: "Programming", level: "Intermediate", proficiency: 72, description: "Queries, joins and relational data." },
    { name: "C", icon: "Terminal", category: "Programming", level: "Intermediate", proficiency: 62, description: "Programming fundamentals." },
    { name: "Java", icon: "Coffee", category: "Programming", level: "Beginner", proficiency: 40, description: "Currently learning — OOP & DSA." },

    { name: "Scikit-learn", icon: "BrainCircuit", category: "Machine Learning", level: "Intermediate", proficiency: 72, description: "Training and evaluating ML models." },
    { name: "Classification (RF, KNN, SVM, LogReg)", icon: "Network", category: "Machine Learning", level: "Intermediate", proficiency: 70, description: "Comparing classifiers and selecting the best." },
    { name: "Feature Engineering", icon: "Wand2", category: "Machine Learning", level: "Intermediate", proficiency: 68, description: "Turning raw records into model-ready features." },

    { name: "NumPy", icon: "Sigma", category: "Data Science", level: "Advanced", proficiency: 82, description: "Numerical computing." },
    { name: "Pandas", icon: "Table", category: "Data Science", level: "Advanced", proficiency: 82, description: "Data wrangling and analysis." },
    { name: "Matplotlib", icon: "BarChart3", category: "Data Science", level: "Intermediate", proficiency: 72, description: "Data visualisation." },
    { name: "EDA & Data Cleaning", icon: "LineChart", category: "Data Science", level: "Advanced", proficiency: 78, description: "Exploratory analysis and tidy datasets." },

    { name: "Flask", icon: "Server", category: "Databases & Web", level: "Intermediate", proficiency: 65, description: "Serving ML models as web apps." },
    { name: "DBMS / SQL", icon: "Database", category: "Databases & Web", level: "Intermediate", proficiency: 68, description: "Database design & relational algebra." },
    { name: "HTML & CSS", icon: "Code", category: "Databases & Web", level: "Intermediate", proficiency: 66, description: "Building app interfaces." },

    { name: "Prompt Engineering", icon: "MessagesSquare", category: "AI & Automation", level: "Advanced", proficiency: 80, description: "Getting the best from LLMs." },
    { name: "Agentic AI", icon: "Bot", category: "AI & Automation", level: "Intermediate", proficiency: 62, description: "Building AI agents & workflows." },
    { name: "n8n / Workflow Automation", icon: "Workflow", category: "AI & Automation", level: "Intermediate", proficiency: 65, description: "Automating data pipelines." },
    { name: "Generative AI", icon: "Sparkles", category: "AI & Automation", level: "Intermediate", proficiency: 70, description: "Applying GenAI tools to real tasks." },

    { name: "Git & GitHub", icon: "GitBranch", category: "Tools", level: "Intermediate", proficiency: 74, description: "Version control & collaboration." },
    { name: "Jupyter", icon: "NotebookPen", category: "Tools", level: "Advanced", proficiency: 82, description: "Interactive analysis notebooks." },
    { name: "VS Code", icon: "Code", category: "Tools", level: "Advanced", proficiency: 85, description: "Everyday editor." },
    { name: "Cursor AI", icon: "MousePointer2", category: "Tools", level: "Intermediate", proficiency: 70, description: "AI-assisted coding." },
  ],

  /* -------------------------------------------------------------------------- */
  /*  CURRENTLY LEARNING                                                        */
  /*  Add / edit freely — just copy a line. icon = any lucide name or an emoji. */
  /* -------------------------------------------------------------------------- */
  learning: [
    { name: "Data Structures & Algorithms", icon: "Binary", detail: "Interview-level problem solving in Java." },
    { name: "Java", icon: "Coffee", detail: "Core Java & OOP for DSA and backend basics." },
    { name: "Agentic AI", icon: "Bot", detail: "Building AI agents and automated workflows." },
    { name: "Advanced Python", icon: "Code2", detail: "Deeper Python for ML and data engineering." },
  ],

  /* -------------------------------------------------------------------------- */
  /*  PROJECTS  (real — from resume)                                            */
  /* -------------------------------------------------------------------------- */
  projects: [
    {
      id: "flight-delay-prediction",
      title: "Flight Delay Prediction System",
      subtitle: "End-to-end Machine Learning web app",
      description:
        "An end-to-end ML system that predicts flight delays from historical flight data, deployed as a Flask web application with an HTML/CSS interface.",
      problem:
        "Travellers and operations teams need an early signal of likely flight delays from raw operational data.",
      solution:
        "Built a full pipeline — preprocessing, feature engineering and EDA — then trained and compared four classifiers, selecting Random Forest for the best accuracy (92.14%) and serving real-time predictions via a deployed Flask app.",
      features: [
        "Data preprocessing & feature engineering on airline, route and departure-time records",
        "Exploratory data analysis to convert raw records into model-ready data",
        "Compared Logistic Regression, KNN, SVM and Random Forest",
        "Random Forest selected — 92.14% accuracy",
        "Real-time predictions served through a deployed Flask web app",
      ],
      techStack: ["Python", "Scikit-learn", "Random Forest", "Flask", "Pandas", "NumPy", "HTML", "CSS"],
      image: "",
      github: "https://github.com/jugendrapratap04-max",
      demo: "",
      status: "Completed",
      difficulty: "Advanced",
      type: "Machine Learning",
      featured: true,
      futurePlans: ["Add more features (weather, holidays)", "Hyperparameter tuning", "Public live demo"],
    },
    {
      id: "retail-sales-dashboard",
      title: "Retail Sales Analysis & Interactive Dashboard",
      subtitle: "Data analysis & business dashboard",
      description:
        "Cleaned and analysed a raw retail sales dataset and built a multi-sheet interactive dashboard that communicates findings to non-technical stakeholders.",
      problem:
        "Raw retail sales data was messy and hard for stakeholders to interpret.",
      solution:
        "Cleaned and standardised the dataset, ran EDA across gender, age group, region and channel, and built an interactive dashboard with charts and summary KPIs.",
      features: [
        "Resolved missing values, inconsistent categories and formatting errors",
        "EDA across gender, age group, region and channel",
        "Multi-sheet interactive dashboard with charts and KPIs",
        "Insights presented for non-technical stakeholders",
      ],
      techStack: ["Excel", "Data Cleaning", "EDA", "Pivot Tables", "Data Visualization"],
      image: "",
      github: "https://github.com/jugendrapratap04-max",
      demo: "",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Data Analytics",
      featured: true,
      futurePlans: ["Rebuild in Power BI / Tableau", "Automate the refresh"],
    },
    {
      id: "krishi-procure-ai",
      // HIDDEN 2026-08-30: not finished yet — the farmer/officer portal is incomplete and the deployed tab title is still the Vite default.
      // Data kept — flip to false to bring it back, but re-check the feature list first.
      hidden: true,
      title: "KrishiProcure AI",
      subtitle: "Smart India Hackathon prototype — AgriTech decision system",
      description:
        "A procurement and queue-management platform that routes farmers to the best mandi centre using explainable multi-criteria decision analysis, dynamic waiting-time estimation and demand forecasting.",
      problem:
        "At peak harvest, farmers travel to mandi grain centres with no visibility of queue length, intake capacity or distance — producing 6-12 hour waits and crop spoilage in the open.",
      solution:
        "Built an end-to-end platform that scores candidate centres with explainable MCDA, estimates live waiting time, issues booking tokens, and forecasts demand for mandi officers.",
      features: [
        "Explainable multi-criteria decision analysis for centre recommendation",
        "Dynamic waiting-time estimation from live queue state",
        "Smart token and slot booking with live queue tracking",
        "Demand forecasting dashboard for mandi officers",
      ],
      techStack: ["React", "TypeScript", "Vite", "Python", "Forecasting", "MCDA"],
      image: "",
      github: "https://github.com/jugendrapratap04-max/krishi-procure-ai",
      demo: "https://krishi-procure-ai.vercel.app",
      status: "In Progress",
      difficulty: "Advanced",
      type: "Machine Learning",
      featured: true,
      futurePlans: ["Wire the forecasting model to live intake data", "Officer analytics view"],
    },
    {
      id: "jugendra-web-studio",
      title: "Jugendra Web Studio",
      subtitle: "My web-design studio — live site and lead pipeline",
      description:
        "A bilingual (English/Hindi) studio site where small Indian businesses can see live demos, read fixed package rates and start a conversation. Enquiries are delivered straight to my phone.",
      problem:
        "Local businesses cannot judge a web developer from a price list alone, and lead forms that land in an inbox get answered too late.",
      solution:
        "Built a demo-first site where every claim is shown rather than asserted, with every user-facing string typed as an English/Hindi pair so a missing translation fails the build, and enquiries routed to a Telegram bot for instant notification.",
      features: [
        "Fully bilingual — English server-renders, Hindi applied client-side",
        "Live demo gallery shown in browser and phone device mockups",
        "Transparent package rates, with the half-payment figure computed rather than typed",
        "Telegram-bot lead delivery — no database, instant notification",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Telegram Bot API"],
      image: "",
      github: "",
      demo: "https://web-studio-lilac.vercel.app",
      status: "Completed",
      difficulty: "Advanced",
      type: "Web Development",
      featured: true,
      futurePlans: ["Grounded AI chatbot for pricing questions", "Custom domain"],
    },
    {
      id: "luxora-salon",
      title: "LUXORA Salon & Spa",
      subtitle: "Sample booking site for a premium Agra salon",
      description:
        "A demo site built to show salon owners in Agra what a booking-first website looks like: pick a service, pick a stylist, pick a slot, and watch the estimate update as you go. Built as a sample, not for a paying client.",
      problem:
        "Salons in Sanjay Place take every appointment over the phone or on WhatsApp, so enquiries arriving after closing time are simply lost, and nobody sees a price until they walk in.",
      solution:
        "Designed the whole page around one booking form that prices itself live, so a visitor knows the cost before they commit, and put a WhatsApp button on every screen for people who still prefer to type.",
      features: [
        "Live price estimator that recalculates as services and add-ons are picked",
        "Reservation voucher rendered on submit and kept in localStorage — no backend",
        "Service detail and gallery lightbox modals, all keyboard dismissible",
        "Prices, names and testimonials rewritten for Agra, not the US original",
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Framer Motion"],
      image: "",
      github: "",
      demo: "https://luxora-salon-nine.vercel.app",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Web Development",
      featured: true,
    },
    {
      id: "agra-diagnostics",
      title: "Agra Diagnostics",
      subtitle: "Sample site for a pathology lab with home collection",
      description:
        "A demo site for a diagnostic centre, built around the two things patients actually search for: what a test costs, and whether someone will come to the house to draw the sample. Built as a sample, not for a paying client.",
      problem:
        "Lab pricing in Agra is almost never published, so patients ring around three labs to compare, and home-collection requests get lost between a phone call and a WhatsApp message.",
      solution:
        "Put a filterable test catalogue with visible prices on the front page, added a cart so several tests can be booked in one go, and made every report route end at WhatsApp, which is where patients already expect the PDF.",
      features: [
        "Filterable test catalogue with a cart drawer for multi-test bookings",
        "Report tracker and home-collection booking modals",
        "Turnaround-time table stating the report deadline for each test category",
        "Mobile sticky call bar — most patients arrive on a phone",
      ],
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Framer Motion"],
      image: "",
      github: "",
      demo: "https://agra-diagnostics.vercel.app",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Web Development",
      featured: true,
    },
    {
      id: "mithai-wala-nuh",
      title: "Mithai Wala Nuh",
      subtitle: "Bilingual site for a highway sweet shop",
      description:
        "A Hindi/English single-page site for a sweet shop on NH-248A in Nuh, Haryana, built to reach the Delhi-Alwar weekend traffic that drives past the shop today without stopping.",
      problem:
        "The shop sells well to locals but is invisible to highway travellers, and no photograph of the storefront exists to build a page around.",
      solution:
        "Made the hero a painted signboard instead of a photo so the shop name leads, and hand-coded the page in HTML and CSS with no framework so it opens fast on a 3G phone at the roadside.",
      features: [
        "Hindi/English toggle that leaves the page complete in Hindi if JavaScript never runs",
        "17 KB gzipped — no framework, no build step",
        "Depth built from CSS 3D rather than motion; anything that makes a claim holds still",
        "Hatched placeholders mark every fact the owner has not yet confirmed",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "",
      github: "",
      demo: "https://mithai-wala-nuh.vercel.app",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Web Development",
      featured: false,
    },
    {
      id: "madhav-guest-house",
      // HIDDEN 2026-08-30: not finished yet — and it is a spec demo, no client contact made.
      // Data kept — flip to false to bring it back, but re-check the feature list first.
      hidden: true,
      title: "Madhav Guest House",
      subtitle: "Booking site for a Mathura guest house",
      description:
        "A Hindi/English site for a 4.9-star guest house on Parikrama Marg, Mathura, with a booking enquiry flow that composes a WhatsApp message instead of needing a backend.",
      problem:
        "The property took bookings mainly through travel portals, and pilgrims arriving in Mathura had no direct way to ask about rooms or darshan timings.",
      solution:
        "Built a single vanilla HTML page around the property's own photographs and its guests' own review quotes, with a booking form that opens a pre-filled WhatsApp message and a map that loads only when tapped.",
      features: [
        "Booking enquiry form that composes a WhatsApp message — no backend needed",
        "Google Map loaded on tap only, so nothing third-party runs until asked",
        "9.3 KB gzipped page plus AVIF photography",
        "Scroll reveals and card tilt in pure CSS, inside prefers-reduced-motion",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "AVIF", "WhatsApp Deep Links"],
      image: "",
      github: "",
      demo: "https://madhav-guest-house.vercel.app",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Web Development",
      featured: false,
    },
    {
      id: "aamvan-orchards",
      // HIDDEN 2026-08-30: not finished yet.
      // Data kept — flip to false to bring it back, but re-check the feature list first.
      hidden: true,
      title: "Aamvan Orchards",
      subtitle: "B2B bulk mango supply site",
      description:
        "A commercial site for a Kasganj mango orchard selling truck-load volumes to wholesalers, fruit traders and regional distributors.",
      problem:
        "Bulk fruit buyers judge a supplier on scale and process, which a phone number alone cannot communicate.",
      solution:
        "Built a procurement-focused site that walks a buyer through the five stages from orchard to delivery, then lets them pick a volume scale before starting a conversation.",
      features: [
        "Five-stage orchard-to-delivery sourcing walkthrough",
        "Commercial volume selector for truck-load and batch procurement",
        "Crate and packaging specification for transit planning",
        "Written for commercial buyers rather than retail shoppers",
      ],
      techStack: ["React", "TypeScript", "Vite", "Responsive Design"],
      image: "",
      github: "https://github.com/jugendrapratap04-max/aamvan-orchards",
      demo: "https://aamvan-orchards.vercel.app",
      status: "Completed",
      difficulty: "Intermediate",
      type: "Web Development",
      featured: false,
    },
    {
      id: "kasganj-mango-farms",
      // HIDDEN 2026-08-30: not finished yet.
      // Data kept — flip to false to bring it back, but re-check the feature list first.
      hidden: true,
      title: "Kasganj Mango Farms",
      subtitle: "Direct-to-home mango ordering site",
      description:
        "A consumer-facing site for a Kasganj mango farm, with a variety catalogue and WhatsApp ordering for home delivery.",
      problem:
        "Seasonal fruit sells on variety and freshness, and neither survives a plain WhatsApp forward.",
      solution:
        "Built a catalogue of the farm's mango varieties with season and taste notes, priced on enquiry, where every card opens a WhatsApp order message.",
      features: [
        "Variety catalogue — Dasheri, Langra, Chausa and desi — with season notes",
        "Price-on-enquiry cards that open a WhatsApp order",
        "Built as the D2C counterpart to the Aamvan Orchards bulk site",
        "Mobile-first, for buyers ordering from a phone",
      ],
      techStack: ["React", "TypeScript", "Vite", "Responsive Design"],
      image: "",
      github: "https://github.com/jugendrapratap04-max/kasganj-mango-farms",
      demo: "https://kasganj-mango-farms.vercel.app",
      status: "Completed",
      difficulty: "Beginner",
      type: "Web Development",
      featured: false,
    },
  ],

  /* -------------------------------------------------------------------------- */
  /*  EXPERIENCE  (none yet — section is off)                                   */
  /* -------------------------------------------------------------------------- */
  experience: [],

  /* -------------------------------------------------------------------------- */
  /*  EDUCATION                                                                 */
  /* -------------------------------------------------------------------------- */
  education: [
    {
      degree: "B.Tech in Computer Science Engineering (Data Science)",
      institution: "GLA University",
      location: "Mathura, Uttar Pradesh",
      startDate: "2024",
      endDate: "2028 (Expected)",
      grade: "Currently in 2nd Year",
      coursework: [
        "Python Programming",
        "C Programming",
        "Data Science Fundamentals",
        "Database Management Systems",
        "Data Analytics",
        "Computer Organization",
      ],
      description:
        "Specialising in Data Science. Currently learning DSA, Java, Machine Learning, Agentic AI, AI workflow automation and advanced Python.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /*  CERTIFICATIONS                                                            */
  /* -------------------------------------------------------------------------- */
  certifications: [
    {
      title: "AI Tools & ChatGPT Workshop",
      issuer: "be10x",
      date: "May 2025",
      credentialUrl: "", // add your certificate/verification link if you have one
      image: "",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /*  ACHIEVEMENTS  (real numbers from your work)                              */
  /* -------------------------------------------------------------------------- */
  achievements: [
    { label: "Projects Built", value: 2, icon: "FolderGit2" },
    { label: "ML Models Compared", value: 4, icon: "BrainCircuit" },
    { label: "Best Model Accuracy", value: 92, suffix: "%", icon: "Target" },
    { label: "Certifications", value: 1, icon: "Award" },
  ],

  /* -------------------------------------------------------------------------- */
  /*  BLOG  (future-ready)                                                      */
  /* -------------------------------------------------------------------------- */
  blog: [],

  /* -------------------------------------------------------------------------- */
  /*  GITHUB                                                                    */
  /* -------------------------------------------------------------------------- */
  github: {
    username: "jugendrapratap04-max",
    showStats: true,
    showPinned: true,
    showContributionGraph: true,
    showLanguages: true,
    pinnedRepos: [],
  },

  /* -------------------------------------------------------------------------- */
  /*  CONTACT                                                                   */
  /* -------------------------------------------------------------------------- */
  contact: {
    formEnabled: true,
    emailjsServiceId: "",
    emailjsTemplateId: "",
    emailjsPublicKey: "",
    fallbackToMailto: true,
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
  },

  /* -------------------------------------------------------------------------- */
  /*  THEME                                                                     */
  /* -------------------------------------------------------------------------- */
  theme: {
    background: "#0b0d10",
    surface: "#14181d",
    foreground: "#e7eaee",
    muted: "#8a93a0",
    primary: "#10b981",
    secondary: "#059669",
    accent: "#34d399",
    border: "rgba(255,255,255,0.08)",
    radiusCard: "1.25rem",
    fontSans: "Inter",
    fontHeading: "Inter",
    fontMono: "JetBrains Mono",
    defaultDark: true,
    enableThemeToggle: true,
  },

  /* -------------------------------------------------------------------------- */
  /*  ANIMATIONS                                                                */
  /* -------------------------------------------------------------------------- */
  animations: {
    enableLoadingScreen: false,   // instant load — feels more professional
    enableCustomCursor: false,    // keep the normal cursor (better UX for recruiters)
    enableScrollProgress: true,   // subtle top progress bar
    enableParallax: false,        // no mouse-drift; calmer, cleaner
    enableTypingAnimation: false, // hero now shows one static headline (no loop)
    enableFloatingShapes: false,  // no floating blobs; clean background
  },

  /* -------------------------------------------------------------------------- */
  /*  SEO                                                                       */
  /* -------------------------------------------------------------------------- */
  seo: {
    title: "Jugendra Pratap — Data Science Undergraduate & Aspiring ML Engineer",
    description:
      "Portfolio of Jugendra Pratap, a B.Tech Computer Science (Data Science) student at GLA University. Machine learning, data analysis and an end-to-end ML web app (Flight Delay Prediction, 92% accuracy).",
    keywords: [
      "Jugendra Pratap",
      "Data Science",
      "Machine Learning",
      "ML Engineer",
      "Python Developer",
      "Data Analyst",
      "GLA University",
      "Flask",
      "Scikit-learn",
      "Portfolio",
    ],
    author: "Jugendra Pratap",
    siteUrl: "https://jugendra-pratap.vercel.app",
    ogImage: "/og-image.png",
    twitterHandle: "",
    favicon: "/favicon.ico",
    robots: "index, follow",
  },

  /* -------------------------------------------------------------------------- */
  /*  FOOTER                                                                    */
  /* -------------------------------------------------------------------------- */
  footer: {
    note: "Designed & built with Next.js, TypeScript & Tailwind CSS.",
    showBackToTop: true,
  },
};

export default config;
