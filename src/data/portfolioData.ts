import { CompanyData, Skill, Project, Certification, Internship, Service } from '../types';

export const companyData: CompanyData = {
  name: "Bluecrest",
  tagline: "Building Secure, Scalable Digital Solutions.",
  subTagline: "Turning Ideas Into Secure Digital Products.",
  heroText: "We're Bluecrest — a full-stack development team building real-world web apps and helping local businesses grow online with embedded cybersecurity standards.",
  aboutText: "Founded by a passionate team of Computer Science Engineering (Cyber Security) students at K.S.R College of Engineering (2024–2028 batch), Bluecrest combines full-stack web engineering with practical security principles. We specialize in building custom web applications, e-commerce stores, college portals, and software solutions for startups, students, and local businesses across Namakkal, Salem, and Kadayanallur.",
  foundedYear: "2024",
  college: "K.S.R College of Engineering",
  batch: "2024-2028 (3-Year B.E. CSE - Cyber Security)",
  program: "Computer Science Engineering (Cyber Security)",
  location: "Namakkal, Tamil Nadu, India",
  serviceRegions: ["Namakkal", "Salem", "Kadayanallur", "Remote / Global"],
  contact: {
    email: "bluecrest.devs@gmail.com",
    phone: "+91 63825 99927",
    whatsapp: "6382599927",
    whatsappFormatted: "+91 63825 99927",
    instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=scw64fs",
    linkedin: "https://www.linkedin.com/in/gopinath-varutharaj-2b44493a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/gopinathvarudharaj-bot/",
    location: "Namakkal, Tamil Nadu, India",
    address: "K.S.R College of Engineering Campus Road, Tiruchengode, Namakkal District, Tamil Nadu - 637215",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST"
  },
  stats: [
    { label: "Production Projects", value: "4+", description: "Live client & full-stack web applications" },
    { label: "Security First Mindset", value: "100%", description: "Vulnerability audit & clean code focus" },
    { label: "Local Businesses Empowered", value: "10+", description: "Namakkal & Salem digital expansion" },
    { label: "Industry Credentials", value: "3+", description: "AWS & Pentesting certified background" }
  ]
};

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    level: "Advanced",
    description: "Component architecture, custom hooks, state management, SPA optimization",
    featured: true
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "FileCode2",
    level: "Advanced",
    description: "Type safety, interfaces, strict mode pattern design, API contracts",
    featured: true
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    level: "Expert",
    description: "Utility-first responsive layouts, dark mode, custom design systems",
    featured: true
  },
  {
    name: "Framer Motion",
    category: "frontend",
    icon: "Sparkles",
    level: "Proficient",
    description: "Smooth scroll interactions, UI transitions, gesture-driven animations",
    featured: true
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    level: "Advanced",
    description: "RESTful API routes, Express middleware, authentication, security headers",
    featured: true
  },
  {
    name: "Firebase",
    category: "backend",
    icon: "Flame",
    level: "Advanced",
    description: "Firestore database, Auth popups, security rules, cloud hosting",
    featured: true
  },
  {
    name: "MySQL",
    category: "backend",
    icon: "Database",
    level: "Proficient",
    description: "Relational schema design, SQL queries, join operations, indexing",
    featured: true
  },

  // Languages
  {
    name: "Java",
    category: "languages",
    icon: "Code",
    level: "Proficient",
    description: "Object-oriented programming, data structures, backend algorithm logic",
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    icon: "FileJson",
    level: "Expert",
    description: "Asynchronous patterns, promises, DOM manipulation, ESNext syntax",
    featured: true
  },

  // Cybersecurity
  {
    name: "Wireshark",
    category: "cybersecurity",
    icon: "Activity",
    level: "Proficient",
    description: "Network packet inspection, protocol analysis, traffic anomaly detection",
    featured: true
  },
  {
    name: "Burp Suite",
    category: "cybersecurity",
    icon: "ShieldAlert",
    level: "Proficient",
    description: "Web application penetration testing, XSS/SQLi vulnerability inspection",
    featured: true
  },
  {
    name: "Nmap",
    category: "cybersecurity",
    icon: "Radar",
    level: "Proficient",
    description: "Network discovery, port auditing, service version identification",
    featured: true
  },
  {
    name: "Netdiscover",
    category: "cybersecurity",
    icon: "Search",
    level: "Proficient",
    description: "ARP reconnaissance, passive/active IP scanning on internal networks",
    featured: false
  },
  {
    name: "Shodan",
    category: "cybersecurity",
    icon: "Globe2",
    level: "Proficient",
    description: "Internet-connected device reconnaissance & threat surface mapping",
    featured: false
  },

  // Other
  {
    name: "Git & GitHub",
    category: "other",
    icon: "GitBranch",
    level: "Advanced",
    description: "Version control, feature branching, pull request code reviews, CI/CD",
    featured: true
  },
  {
    name: "REST APIs",
    category: "other",
    icon: "Network",
    level: "Advanced",
    description: "Endpoint architecture, JSON payload validation, status codes, CORS setup",
    featured: true
  },
  {
    name: "Responsive & Mobile-First",
    category: "other",
    icon: "Smartphone",
    level: "Expert",
    description: "Cross-device compatibility, touch-friendly UI, fluid typography",
    featured: true
  }
];

export const projectsData: Project[] = [
  {
    id: "zenjournal",
    title: "ZenJournal",
    shortDescription: "A secure, private digital journaling app focused on user data protection and a calming, distraction-free writing experience.",
    fullDescription: "ZenJournal provides a serene sanctuary for mindful reflection. Built with high-grade client-side encryption concepts and a distraction-free user interface, it empowers users to log daily entries, track emotional trends, and organize personal memories without privacy concerns.",
    category: "Web App",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Local State", "Netlify"],
    liveUrl: "https://zenjournalapp.netlify.app/",
    githubUrl: "https://github.com/bluecrest-dev/zenjournal",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Distraction-free minimalist canvas with soothing dark/light themes",
      "Privacy-oriented local data storage & zero-tracker policy",
      "Mood tracking analytics & quick entry tagging system",
      "Instant responsive layout with instant autosave"
    ],
    securityFeature: "AES Data Privacy Concept & Zero External Analytics",
    clientType: "Product / Community App"
  },
  {
    id: "nutritrack",
    title: "NutriTrack",
    shortDescription: "A nutrition and health metrics tracker for logging meals, monitoring wellness data, and visualizing progress over time.",
    fullDescription: "NutriTrack empowers health-conscious individuals to achieve their wellness goals. Featuring interactive charts, macro distribution breakdowns, and automated daily goal monitoring, NutriTrack turns complex biometric data into actionable daily habits.",
    category: "Full-Stack",
    techStack: ["React.js", "Tailwind CSS", "Recharts", "Node.js", "Vercel"],
    liveUrl: "https://nutri-track-5toytglnm-gopinathvarudharaj-5095s-projects.vercel.app/metrics",
    githubUrl: "https://github.com/bluecrest-dev/nutri-track",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Comprehensive metric logger for calories, protein, carbs & hydration",
      "Interactive historical data visualization charts",
      "Calculates daily BMR & TDEE based on physical activity goals",
      "Fast client-side calculation engine with instant UI feedback"
    ],
    securityFeature: "Sanitized Health Form Inputs & CORS Secured Endpoints",
    clientType: "Health & Fitness SaaS"
  },
  {
    id: "fresh-farm",
    title: "Fresh Farm",
    shortDescription: "A premium dairy & poultry e-commerce site built for a local Namakkal business, featuring a product catalogue and WhatsApp-based ordering.",
    fullDescription: "Fresh Farm bridges local agricultural producers in Namakkal with direct household consumers. Bluecrest designed a lightning-fast product catalogue that allows customers to assemble their basket and trigger instant 1-click WhatsApp orders directly to the farm owner.",
    category: "E-Commerce",
    techStack: ["React.js", "Tailwind CSS", "WhatsApp Business API", "Netlify"],
    liveUrl: "https://freshfarmshop.netlify.app/",
    githubUrl: "https://github.com/bluecrest-dev/fresh-farm-shop",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Dynamic product catalog for farm-fresh milk, eggs, & organic poultry",
      "One-tap Direct WhatsApp cart dispatch with itemized pricing",
      "Optimized for high performance on 3G/4G mobile networks",
      "Custom localized branding tailored for Salem & Namakkal customers"
    ],
    securityFeature: "No Third-Party Credit Card Exposure — Direct Trusted Checkout",
    clientType: "Local Business (Namakkal)"
  },
  {
    id: "alumni-management",
    title: "Alumni Management System",
    shortDescription: "A platform for colleges to manage alumni records, keep graduates connected, and streamline communication between alumni and the institution.",
    fullDescription: "Designed to solve administrative disconnects in higher education institutions, this system provides central record keeping, job board postings, event invitations, and alumni networking directories.",
    category: "Full-Stack",
    techStack: ["React.js", "Node.js", "MySQL / Firebase", "Tailwind CSS", "Netlify"],
    liveUrl: "https://alumni-lmanagement-system.netlify.app/",
    githubUrl: "https://github.com/bluecrest-dev/alumni-management-system",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Role-based access control for Students, Alumni, and Admin Authorities",
      "Searchable alumni directory filtered by graduation year & domain",
      "Event broadcast system & career opportunity notice board",
      "Structured database queries with relational integrity"
    ],
    securityFeature: "RBAC Authentication & XSS Sanitized Communication Boards",
    clientType: "Higher Education Portal"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "April 17, 2026",
    expiryDate: "April 17, 2029",
    validationNumber: "1213f1754e464440bd88172aa4e5fa01",
    verifyUrl: "https://aws.amazon.com/verification",
    badge: "Cloud",
    description: "Validates overall understanding of AWS Cloud platform, core infrastructure, security compliance, architectural principles, and cloud economics.",
    skillsCovered: ["AWS Cloud Architecture", "IAM & Security Groups", "S3 & EC2", "VPC Networking", "Cloud Security"]
  },
  {
    id: "imagecon-internship",
    title: "Web Development Internship Certificate",
    issuer: "Imagecon India Pvt. Ltd.",
    issueDate: "July 22, 2025",
    validationNumber: "IMIN25082207",
    verifyUrl: "#internships",
    badge: "WebDev",
    description: "Successfully completed intensive hands-on web development training and built 'TeamTask Organizer' — a collaborative task management application.",
    skillsCovered: ["Full-Stack Web Architecture", "React State Management", "REST APIs", "Database Integration", "Team Workflows"]
  },
  {
    id: "pargavan-pentest",
    title: "Cybersecurity Internship (Pentesting)",
    issuer: "Pargavan Cyyber Solutions",
    issueDate: "July 10, 2026",
    verifyUrl: "#internships",
    badge: "CyberSec",
    description: "Completed 15-day hands-on penetration testing internship focusing on network security, threat analysis, vulnerability discovery, and mitigation strategies.",
    skillsCovered: ["Penetration Testing", "Burp Suite & Wireshark", "Network Reconnaissance", "Vulnerability Scanning", "Threat Mitigation"]
  }
];

export const internshipsData: Internship[] = [
  {
    id: "pargavan",
    role: "Cybersecurity Intern (Pentesting)",
    company: "Pargavan Cyyber Solutions",
    period: "June 23 – July 10, 2026",
    duration: "15 Days Intensive",
    type: "Cybersecurity Pentesting",
    location: "Tamil Nadu, India",
    description: "Gained hands-on experience in vulnerability assessment, threat surface mapping, and penetration testing methodologies across web applications and network nodes.",
    highlights: [
      "Executed network discovery and vulnerability identification using Wireshark, Burp Suite, and Nmap",
      "Performed threat analysis and drafted detailed remediation reports for web security risks",
      "Studied OWASP Top 10 vulnerabilities including SQL Injection, XSS, and Broken Access Control",
      "Simulated real-world security scenarios to strengthen defensive posture"
    ],
    technologies: ["Burp Suite", "Wireshark", "Nmap", "Shodan", "Network Protocols"]
  },
  {
    id: "imagecon",
    role: "Web Development Intern",
    company: "Imagecon India Pvt. Ltd.",
    period: "July 8 – July 22, 2025",
    duration: "15 Days Intensive",
    internshipId: "IMIN25082207",
    type: "Web Development",
    location: "Tamil Nadu, India",
    description: "Designed and engineered 'TeamTask Organizer', a full-stack project management web app built with React and Node backend services.",
    highlights: [
      "Architected responsive user interfaces with modular React component patterns",
      "Implemented asynchronous RESTful API calls and local state synchronization",
      "Optimized page rendering times and UI accessibility compliance",
      "Collaborated with senior software mentors on clean code standards"
    ],
    technologies: ["React.js", "Node.js", "JavaScript", "CSS3", "REST APIs"]
  },
  {
    id: "bluecrest-agency",
    role: "Full-Stack & Security Lead",
    company: "Bluecrest Digital Solutions",
    period: "2024 – Present",
    duration: "Ongoing Team Venture",
    type: "Freelance Agency",
    location: "Namakkal & Salem, Tamil Nadu",
    description: "Co-founded Bluecrest as a freelance web development company providing end-to-end digital transformation for local businesses, educational initiatives, and startups.",
    highlights: [
      "Delivered production web products (Fresh Farm, ZenJournal, NutriTrack, Alumni System)",
      "Helped traditional Namakkal businesses transition to online catalogue & WhatsApp ordering",
      "Incorporated security audits into every client deliverable to prevent data leaks",
      "Provided 24/7 technical maintenance and high-speed cloud deployments"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "Security Auditing"]
  }
];

export const servicesData: Service[] = [
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development",
    description: "Custom, high-performance web applications built from scratch using React, TypeScript, and robust backend frameworks.",
    icon: "Layout",
    features: ["Single Page Applications (SPAs)", "Database & API Integrations", "Optimized Mobile Responsiveness", "SEO Friendly Architecture"],
    popularFor: "Startups, SaaS platforms & Businesses"
  },
  {
    id: "cybersecurity-audit",
    title: "Security Auditing & Hardening",
    description: "Practical web application security assessments to identify vulnerabilities before attackers do.",
    icon: "ShieldCheck",
    features: ["OWASP Top 10 Threat Checks", "Input Sanitization & XSS Defense", "Secure Authentication Setup", "SSL & Header Hardening"],
    popularFor: "E-Commerce & User Data Apps"
  },
  {
    id: "local-business",
    title: "Local Business Digitalization",
    description: "Helping local enterprises in Namakkal, Salem & Kadayanallur establish a digital presence and sell online effortlessly.",
    icon: "Store",
    features: ["1-Click WhatsApp Ordering Systems", "Digital Product Catalogues", "Google My Business Integration", "Fast Mobile Loading"],
    popularFor: "Retailers, Farms & Services"
  },
  {
    id: "college-portals",
    title: "College & Student Solutions",
    description: "Tailored management software, alumni networks, and project showcases for academic institutions and students.",
    icon: "GraduationCap",
    features: ["Alumni Record Management", "Student Portfolio Portals", "Event Notice Boards", "Secure Admin Control"],
    popularFor: "Colleges & Academic Teams"
  }
];
