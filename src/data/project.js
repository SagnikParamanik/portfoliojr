import {
  Globe,
  Orbit,
  CloudSun,
  LineChart,
  Grape,
  FolderCheck,
} from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills, and experience with smooth animations and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SagnikParamanik/portfoliojr",
    live: "https://portfoliojr-tau.vercel.app/",
    gradient: "from-indigo-500 to-purple-500",
    type: "Personal Project",
    icon: Globe, // ✅ ADDED
  },
  {
    id: 2,
    title: "Job portal",
    description:
      "An interactive Job portal featuring job listings, application tracking, and a user-friendly interface for job seekers and employers.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Supabase", "Context API",
                  "REST-based auth", "Responsive UI", "Git", "GitHub"],
    github: "https://github.com/SagnikParamanik/job-portal-development",
    live: "https://job-portal-development-eta.vercel.app/",
    gradient: "from-purple-500 to-pink-500",
    type: "Educational Project",
    icon: FolderCheck, // ✅ ADDED
  },
   {
     id: 3,
     title: "Enterprise Hiring & Recruitment Platform",
     description:
      "PlaceCandidate is a modern hiring platform UI built with React and Tailwind CSS, featuring a clean SaaS design and smooth animations",
      technologies: ["React", "Tailwind CSS", "Framer Motion"], 
      github: "https://github.com/SagnikParamanik/-Hiring-Platform",
      live: "https://hiring-platform-steel.vercel.app/",
     gradient: "from-sky-500 to-blue-600",
     type: " Educational Project",
     icon: CloudSun, // ✅ ADDED
   },
  {
    id: 4,
    title: "Smart folder organizer & cleaner",
    description:
      "A modern folder-cleaning utility that organizes files automatically with a clean UI, preview mode, and dark/light theme support.",
    technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
    github: "https://github.com/SagnikParamanik/Smart-Folder-Cleaner",
    live: "",
    gradient: "from-indigo-500 to-purple-500",
    type: "Personal Project",
    icon: FolderCheck, // ✅ ADDED
  },
];
