import {
  Code,
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
      "JavaScript",
      "OOPs",
      "Multithreading",
      "Collections",
      "JDBC",
    ],
  },
  {
    id: 2,
    category: "Frontend Technologies",
    description:
      "Building responsive, interactive, and modern user interfaces for the web.",
    level: "Intermediate",
    experience: "1.5+ Years",
    color: "from-purple-500 to-pink-500",
    icon: Cpu,
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Responsive Web Design",
    ],
  },
  {
    id: 3,
    category: "Database",
    description:
      "Working with relational databases and writing optimized SQL queries.",
    level: "Beginner",
    experience: "1+ Year",
    color: "from-emerald-500 to-teal-500",
    icon: Database,
    skills: [
      "SQL",
    ],
  },
  {
    id: 4,
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
    ],
  },
  {
    id: 5,
    category: "Soft Skills",
    description:
      "Professional skills that help deliver quality projects and collaborate effectively.",
    level: "Strong",
    experience: "Ongoing",
    color: "from-sky-500 to-blue-500",
    icon: Users,
    skills: [
      "Critical Thinking",
      "Project Ownership",
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
    ],
  },
];
