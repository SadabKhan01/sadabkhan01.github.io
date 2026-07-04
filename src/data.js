export const profile = {
  name: "Sadab Khan",
  fullName: "Mohammad Sadman Sadab Khan",
  location: "Vancouver, BC, Canada",
  email: "sadab_khan@sfu.ca",
  github: "https://github.com/SadabKhan01",
  linkedin: "https://www.linkedin.com/in/sadab-khan-dev/",
  roles: [
    "Software Engineer @ OSI Maritime Systems",
    "Software Lead @ SFU Satellite Design",
    "Chief Product Officer @ Fitsomnia",
  ],
};

export const stats = [
  { value: "100K+", label: "users scaled at Fitsomnia" },
  { value: "Best UI", label: "winner at SillyHacks, SFU Surge" },
  { value: "3", label: "concurrent engineering & product roles" },
  { value: "2027", label: "BSc Computer Science, SFU" },
];

export const experience = [
  {
    period: "May 2026 — Present",
    role: "Software Engineer Co-op",
    org: "OSI Maritime Systems",
    meta: "Burnaby, BC · Hybrid",
    points: [
      "Working on automation for OSI's latest integrated navigation software, the mission-critical bridge systems that naval fleets around the world rely on.",
    ],
  },
  {
    period: "Apr 2026 — Present",
    role: "Software Team Lead",
    org: "SFU Satellite Design",
    meta: "Surrey, BC",
    points: [
      "Leading the Software & Embedded Systems subteam of Project Polaris for the Canadian Space Agency's CIRC.",
    ],
  },
  {
    period: "Apr 2025 — Present",
    role: "Chief Product Officer",
    org: "Fitsomnia",
    meta: "Remote · previously Chief Digital Officer & Agentic Engineer",
    points: [
      "Led backend & AI development in production, scaling the platform from 30K to 100K+ users.",
      "Designed and deployed Ujjibok, an AI diet coach on GPT-4.1, engineered to minimize hallucinations.",
      "Built an AI food scanner combining image analysis with LLM reasoning to estimate calories for regional foods.",
      "Shipped backend services in NestJS with JWT auth on Azure; built frontend features in Flutter.",
    ],
  },
  {
    period: "Oct 2024 — Feb 2025",
    role: "Software Engineer",
    org: "Subvision Engineering",
    meta: "Burnaby, BC · Hybrid",
    points: [
      "Developed ROS 2 and Gazebo simulation pipelines for autonomous submarine navigation.",
      "Automated Python simulation workflows on Linux, cutting manual validation effort.",
    ],
  },
  {
    period: "Sep 2024 — Jan 2025",
    role: "Software Developer",
    org: "SFU Robot Soccer Club",
    meta: "Burnaby, BC · RoboCup SSL",
    points: [
      "Worked on the GUI, simulation, and A* shortest-path navigation for autonomous soccer robots.",
    ],
  },
];

export const projects = [
  {
    badge: "Best UI · SillyHacks, SFU Surge",
    title: "Us Among AI",
    description:
      "A retro-futuristic browser game built around a reverse Turing test. Act machine enough to survive: a Gemini-powered Auditor watches rhythm, hesitation, corrections, and keystroke patterns in real time and judges how convincingly non-human you are.",
    tags: ["Next.js", "TypeScript", "Socket.IO", "Zustand", "Web Audio API", "Gemini"],
    link: "https://github.com/Silly-Hacks/Us-Among-AI",
  },
  {
    badge: "Breakthrough Hacks × Microsoft Garage",
    title: "ClinAI Bridge",
    description:
      "A secure medical scheduling and messaging platform with patient, doctor, and admin portals, built in one day. A structured Gemini pipeline with Zod validation, a server-side policy engine, safety guardrails, and Azure Health Data Services de-identification.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Azure", "Gemini"],
    link: "https://github.com/bidishaaroy/MShacks",
  },
  {
    badge: "In production · 100K+ users",
    title: "Ujjibok — AI Diet Coach",
    description:
      "An AI diet coach and food scanner shipped to production at Fitsomnia. GPT-4.1 prompt engineering combined with image analysis and LLM reasoning to estimate calories for regional Bangladeshi foods, built to be reliable rather than just demo-ready.",
    tags: ["GPT-4.1", "NestJS", "Flutter", "Azure", "JWT"],
    link: null,
  },
  {
    badge: "CMPT 340 · Deep learning",
    title: "STONE-SEE",
    description:
      "A deep learning system that detects kidney stones in CT scan images, giving healthcare professionals fast and accurate diagnostic support. Trained on real CT data with an augmentation pipeline for more robust classification.",
    tags: ["Python", "Deep Learning", "CNN", "Jupyter", "Medical Imaging"],
    link: "https://github.com/sfu-cmpt340/Stone-See",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "Python", "C++", "JavaScript", "Dart", "SQL"] },
  { group: "Frameworks", items: ["React", "Next.js", "NestJS", "Flutter", "Express", "Tailwind CSS"] },
  { group: "AI & Data", items: ["Gemini API", "GPT-4.1", "Prompt Engineering", "Prisma", "PostgreSQL"] },
  { group: "Systems & Cloud", items: ["ROS 2", "Gazebo", "Linux", "Microsoft Azure", "Socket.IO", "Git"] },
];

export const education = {
  school: "Simon Fraser University",
  degree: "BSc Computer Science · 2023 — 2027",
  focus: "Specializing in Artificial Intelligence",
  coursework:
    "Data Structures & Algorithms · Software Engineering · Artificial Intelligence · Human-Centred Computing · Database Systems · Computer Systems (Assembly) · Computer Networking",
  clubs: "Robot Soccer Club · Subvision Engineering · Satellite Design Club · Co-op",
  languages: "English · Bangla · Hindi",
};
