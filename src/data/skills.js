import {
  Code,
  BrainCircuit,
  PanelsTopLeft,
  Cpu,
  Database,
  GitBranch,
  Users,
} from "lucide-react";

export const skillsData = [
  {
    id: 1,
    category: "Programming Languages",
    description:
      "Strong foundation in object-oriented programming and core programming concepts.",
    level: "Intermediate",
    experience: "2+ Years",
    color: "from-indigo-500 to-purple-500",
    icon: Code,
    skills: [
      "Java",
      "JavaScript"
    ],
  },
  {
    id: 2,
    category: "Java & Core Concepts",
    description:
      "Strong understanding of object-oriented programming and core Java concepts, including multithreading and data handling.",
    level: "Intermediate",
    experience: "2+ Years",
    color: "from-amber-500 to-orange-500",
    icon: BrainCircuit,
    skills: [
      "OOP",
    "Multithreading",
    "Collections",
    "Exception Handling",
    "JDBC",
    ],
  },
  {
    id: 3,
    category: "Frontend Technologies",
    description:
      "Building responsive, interactive, and modern user interfaces for the web.",
    level: "Intermediate",
    experience: "1.5+ Years",
    color: "from-blue-500 to-cyan-400",
    icon: PanelsTopLeft,
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Tailwind CSS",
      "Responsive Web Design"
    ],
  },
  {
    id: 4,
    category: "Backend Technologies",
    description:
      "Building scalable and efficient server-side applications.",
    level: "Intermediate",
    experience: "1.5+ Years",
    color: "from-emerald-500 to-green-400",
    icon: Cpu,
    skills: [
      "Node.js",
      "Express.js",
      "JWT Authentication",
    ],
  },
  {
    id: 5,
    category: "Database",
    description:
      "Working with relational databases and writing optimized SQL queries.",
    level: "Beginner",
    experience: "1+ Year",
    color: "from-blue-500 to-indigo-500",
    icon: Database,
    skills: [
    " MongoDB","Mongoose"
    ],
  },
  {
    id: 6,
    category: "Version Control System",
    description:
      "Managing source code efficiently with version control and collaboration tools.",
    level: "Intermediate",
    experience: "1.5+ Years",
    color: "from-orange-500 to-red-500",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    id: 7,
    category: "Soft Skills",
    description:
      "Professional skills that help deliver quality projects and collaborate effectively.",
    level: "Strong",
    experience: "Ongoing",
    color: "from-sky-500 to-blue-500",
    icon: Users,
    skills: [
      "Critical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
    ],
  },
];
