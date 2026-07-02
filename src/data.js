export const profile = {
  name: "Sadab Khan",
  fullName: "Mohammad Sadman Sadab Khan",
  location: "Vancouver, BC, Canada",
  email: "codecrafterscastell@gmail.com",
  github: "https://github.com/SadabKhan01",
  linkedin: "https://www.linkedin.com/in/sadab-khan-dev/",
  resume: "/assets/NewUpdatedResume.pdf",
  roles: [
    "Software Engineer @ OSI Maritime Systems",
    "Software Lead @ SFU Satellite Design",
    "Chief Product Officer @ Fitsomnia",
  ],
};

export const stats = [
  { value: "100K+", label: "users scaled at Fitsomnia" },
  { value: "2×", label: "hackathon wins with Microsoft & SFU Surge" },
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
      "Building integrated navigation and tactical solutions for naval fleets — mission-critical maritime software trusted by navies worldwide.",
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
    period: "Sep 2024 — Present",
    role: "Software Developer",
    org: "SFU Robot Soccer Club",
    meta: "Burnaby, BC · RoboCup SSL 2026",
    points: [
      "Automating soccer robots for RoboCup SSL — improving the GUI, simulation, and A* shortest-path navigation.",
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
    period: "May 2025 — Aug 2025",
    role: "President",
    org: "SFU Bangladesh Students' Alliance",
    meta: "Volunteering",
    points: [
      "Led the executive team, organized events and fundraising, and represented the student body.",
    ],
  },
];

export const projects = [
  {
    badge: "Best UI · SillyHacks, SFU Surge",
    title: "Us Among AI",
    description:
      "A retro-futuristic browser game built around a reverse Turing test — act machine enough to survive. A Gemini-powered Auditor watches rhythm, hesitation, corrections, and keystroke patterns in real time and judges how convincingly non-human you are.",
    tags: ["Next.js", "TypeScript", "Socket.IO", "Zustand", "Web Audio API", "Gemini"],
    link: "https://github.com/Silly-Hacks/Us-Among-AI",
  },
  {
    badge: "Breakthrough Hacks × Microsoft Garage",
    title: "ClinAI Bridge",
    description:
      "A secure medical scheduling and messaging platform with patient, doctor, and admin portals — built in one day. A structured Gemini pipeline with Zod validation, a server-side policy engine, safety guardrails, and Azure Health Data Services de-identification.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Azure", "Gemini"],
    link: "https://github.com/bidishaaroy/MShacks",
  },
  {
    badge: "In production · 100K+ users",
    title: "Ujjibok — AI Diet Coach",
    description:
      "An AI diet coach and food scanner shipped to production at Fitsomnia. GPT-4.1 prompt engineering combined with image analysis and LLM reasoning to estimate calories for regional Bangladeshi foods — built to be reliable, not just demo-ready.",
    tags: ["GPT-4.1", "NestJS", "Flutter", "Azure", "JWT"],
    link: null,
  },
  {
    badge: "Robotics & simulation",
    title: "Autonomous Submarine Simulation",
    description:
      "ROS 2 and Gazebo simulation pipelines for autonomous underwater navigation at Subvision Engineering, with automated Python validation workflows running on Linux.",
    tags: ["ROS 2", "Gazebo", "Python", "C++", "Linux"],
    link: "https://github.com/SadabKhan01/ros2_ws",
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
