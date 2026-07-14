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
    phone: "+91 84393 XXXXX",
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
    { icon: "Globe", label: "Portfolio", url: "", enabled: false },
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
    certifications: true,  // be10x workshop added below
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
