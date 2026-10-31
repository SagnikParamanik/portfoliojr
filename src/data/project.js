import {
  Globe,
  LineChart,
 MessagesSquare,
 BriefcaseBusiness,
  ShoppingBagIcon,
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
    gradient: "from-blue-500 to-green-500",
    type: "Personal Project",
    icon: Globe, // ✅ ADDED
  },
  {
    id: 2,
    title: "InterviewIQ",
    description:
      "An AI-powered mock interview platform that helps candidates prepare for real-world interviews through resume-based question generation, voice-based interviews, and detailed performance analysis.",
    technologies: [ "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Firebase Authentication",
    "JWT",
    "REST API",
    "Tailwind CSS"],
    github: "https://github.com/SagnikParamanik/interviewIQ",
    live: "https://interviewiq-client-szqr.onrender.com/",
    gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
    type: "Personal Project",
    icon: MessagesSquare, // ✅ ADDED
  },
  {
    id: 3,
    title: "Job portal",
    description:
      "An interactive Job portal featuring job listings, application tracking, and a user-friendly interface for job seekers and employers.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Supabase", "Context API",
                  "REST-based auth", "Responsive UI", "Git", "GitHub"],
    github: "https://github.com/SagnikParamanik/job-portal-development",
    live: "https://job-portal-development-eta.vercel.app/",
    gradient: "from-slate-400 to-Deep slate-500",
    type: "Personal Project",
    icon: BriefcaseBusiness, // ✅ ADDED
  },
   
  {
    id: 4,
    title: "Mini E-commerce Web Application",
    description:
      "Mini E-commerce web application built with React (Vite) and Tailwind CSS, featuring product listings, category filtering, search functionality, and a responsive modern UI. Deployed on Vercel to demonstrate real-world frontend development and deployment skills.",
    technologies: ["React.js (Vite)", "JavaScript", "Tailwind CSS", "HTML & CSS", "Git & GitHub", "Vercel (Deployment)"],
    github: "https://github.com/SagnikParamanik/e-Commerce",
    live: "https://mini-e-commerce-tan.vercel.app/",
    gradient: "from-yellow-400 to-red-500",
    type: "Client Project",
    icon: ShoppingBagIcon, // ✅ ADDED
  },
   {
    id: 5,
    title: "Therapy Web UI Clone",
    description:
      "A therapy web UI clone built with React.js, Node.js, Express.js, and Tailwind CSS, featuring a responsive design and smooth animations to replicate the user experience of a popular therapy platform.",
    technologies: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SagnikParamanik/Clone-and-Redesign",
    live: "https://clone-and-redesign.vercel.app/",
    gradient: "from-green-400 to-blue-500",
    type: "Client Project",
    icon: LineChart, // ✅ ADDED
  },
];
