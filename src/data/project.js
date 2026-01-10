import {
  Globe,
  Orbit,
  CloudSun,
  LineChart,
} from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills, and experience with smooth animations and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio-website",
    live: "https://your-portfolio.vercel.app",
    gradient: "from-indigo-500 to-purple-500",
    type: "Personal Project",
    icon: Globe, // ✅ ADDED
  },
  {
    id: 2,
    title: "Solar System Explorer",
    description:
      "An interactive Solar System Explorer featuring planet data visualization, orbital simulations, and a user-friendly interface for educational engagement.",
    technologies: ["HTML", "CSS Animations", "JavaScript"],
    github: "https://github.com/yourusername/solar-system-explorer",
    live: "https://solar-system-explorer.vercel.app",
    gradient: "from-purple-500 to-pink-500",
    type: "Educational Project",
    icon: Orbit, // ✅ ADDED
  },
  // {
  //   id: 3,
  //   title: "Mini Weather Monitoring System (Arduino)",
  //   description:
  //     "A compact system designed to monitor environmental conditions such as temperature and humidity using sensors, with data displayed locally or sent to cloud services for analysis.",
  //   technologies: ["Arduino", "Sensors", "Java"],
  
  //   gradient: "from-sky-500 to-blue-600",
  //   type: "Hardware + Software Project",
  //   icon: CloudSun, // ✅ ADDED
  // },
  {
    id: 3,
    title: "Salary Prediction App",
    description:
      "A machine learning application that predicts salary based on years of experience using Simple Linear Regression with real-time visualization.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/yourusername/salary-prediction-app",
    live: "https://salary-prediction.streamlit.app",
    gradient: "from-emerald-500 to-teal-600",
    type: "Machine Learning Project",
    icon: LineChart, // ✅ ADDED

    methodology: [
      "Simple Linear Regression model fitting",
      "Residual analysis to evaluate accuracy and detect outliers",
    ],
    features: [
      "Interactive experience slider",
      "Real-time salary prediction",
      "Graphical regression line visualization",
    ],
    applications: [
      "HR analytics",
      "Career planning",
      "Recruitment forecasting",
    ],
  },
];
