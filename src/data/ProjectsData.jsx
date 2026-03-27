import paycheckImg from "../assets/paycheckImg.png"
import portfolioImg from "../assets/portfolioImg.png"
import studytrackerImg from "../assets/studytrackerImg.jpeg"

const ProjectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "You're already here! This is my portfolio website where I showcase my projects and skills.",
    stack: "React, HTML, CSS, Javascript",
    image: portfolioImg,
    links: { github: "https://github.com/cleamorales/portfolio" },
  },
  
  {
    id: 2,
    title: "Paycheck Calculator",
    description:
      "A program that calculates take-home earnings for tipped employees, based on hours worked, tip-out, and taxes. It is also a Payroll tracking system with a SQLite database integration.",
    stack: "C++, SQLite",
    image: paycheckImg,
    links: { github: "https://github.com/cleamorales/paycheck-calculator"},
  },
  {
    id: 3,
    title: "Study Behavior Tracker",
    description:
      "A personal productivity tool that allows users to log daily study hours, sleep, workouts, focus, and mood. It organizes data over time, tracks progress, highlights trends, and helps users identify patterns in their habits to improve productivity and wellness.",
    stack: "React, Node.js, Express, MySQL",
    image: studytrackerImg,
    links: { github: "#" },
  },
  
];

export default ProjectsData;