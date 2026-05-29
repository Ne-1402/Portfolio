// =============================================
// portfolioData.js — All CV data lives here.
// Update this file to update the entire site.
// =============================================

export const personalInfo = {
  name: "Arnesh Munj",
  initials: "AM",
  tagline: "First Year CS Student  //  Low-Level Systems Enthusiast",
  intro:
    "A first-year B.Tech student passionate about writing code close to the metal — assembly, C, and systems that run fast and lean. Currently exploring embedded systems, fintech backends, and kernel internals.",
  email: "sunfun207@gmail.com",
  github: "https://github.com/Ne-1402",
  linkedin: "https://www.linkedin.com/in/arnesh-munj-6aa043375/",
};

export const about = {
  bio: `I am a first-year B.Tech Computer Science Engineering student with a deep interest in how systems work at the lowest level. My primary focus is low-level programming — writing in Assembly (x86 Intel), C, and C++ — and understanding how software interacts with hardware. I am drawn to areas like embedded development, system design, and scalable backend architecture using Java and Spring Boot. Beyond the technical side, I enjoy exploring historical empires and military strategy through books and documentaries.`,

  objective: `I want to build a career at the intersection of performance and precision — whether that's fintech infrastructure, shellcoding, open-source kernel contributions, or driver development. I'm looking for opportunities that challenge me at the systems level.`,

  hobbies: [
    "Reading",
    "History Documentaries",
    "Napoleonic Era",
    "Byzantine Empire",
    "Venetian Republic",
    "Military Strategy",
  ],
};

export const education = [
  {
    id: 1,
    institution: "ITM Skills University",
    degree: "B.Tech — Computer Science Engineering",
    year: "2025 – 2029",
    score: "CGPA: 9.25  (Semester I)",
    status: "Ongoing",
    location: "Mumbai, India",
  },
];

export const skills = {
  languages: [
    "Assembly (x86 32-bit Intel)",
    "C",
    "C++",
    "Java",
  ],
  frameworks: [
    "Spring Boot",
  ],
  tools: [],           // Will be updated when tools are used
  interests: [
    "Low-Level Systems",
    "Embedded Development",
    "Kernel / Driver Dev",
    "Fintech Backend",
    "Shellcoding",
    "Scalable Architecture",
  ],
};

// No projects yet — will be updated over time
export const projects = [];

export const socialLinks = [
  {
    id: 1,
    label: "GitHub",
    url: "https://github.com/Ne-1402",
    icon: "github",
  },
  {
    id: 2,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/arnesh-munj-6aa043375/",
    icon: "linkedin",
  },
  {
    id: 3,
    label: "Email",
    url: "mailto:sunfun207@gmail.com",
    icon: "email",
  },
];

// Nav sections — order matters for scroll tracking
export const navSections = [
  { id: "hero",      label: "Home" },
  { id: "about",     label: "About" },
  { id: "education", label: "Education" },
  { id: "skills",    label: "Skills" },
  { id: "projects",  label: "Projects" },
  { id: "contact",   label: "Contact" },
];