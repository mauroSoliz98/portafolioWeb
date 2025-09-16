import { Link } from "react-router";
import { VscVmConnect, VscTerminal, VscDebugConsole  } from "react-icons/vsc";
import InmersionDev from "../assets/Certificado_Alura_Latam-Inmersion_Dev.jpg"
import InmersionIA from "../assets/Certificado_Alura-Inmersion_IA.jpg"
import EnglishForIT1 from "../assets/english-for-it-1.png"

export const navigationLinks = [
         { label: <Link to="/my-website/home">Home</Link>, key: "1" },
         { label: <Link to="/my-website/about">About</Link>, key: "2" },
         { label: <Link to="/my-website/projects">Projects</Link>, key: "3" },
         { label: <Link to="/my-website/contact">Contact</Link>, key: "4" }
];

export const servicesData = [
    {
        title: "Front-End Development",
        description: "Building responsive and dynamic websites using modern technologies like React, Node.js, and Express.",
        icon: <VscVmConnect size={50} color="#1890ff"/>
    },
    {
        title: "Back-End Development",
        description: "Creating robust back-end systems and APIs to support web applications, ensuring scalability and performance.",
        icon: <VscTerminal size={50} color="#1890ff"/>
    },
    {
        title: "Testing & Debugging",
        description: "Implementing testing strategies to ensure code quality and reliability, using tools like Jest and Mocha.",
        icon: <VscDebugConsole size={50} color="#1890ff"/>
    }
]
export const skillsData = [
    {
        skill: "JavaScript",
        level: 80,
        color: "#FFFF00"
    },
    {
        skill: "React",
        level: 75,
        color: "#61DBFB"
    },
    {
        skill: "Node.js",
        level: 70,
        color: "#3C873A"
    },
    {
        skill: "HTML/CSS",
        level: 85,
        color: "#E34C26"
    },
    {
        skill: "Python",
        level: 60,
        color: "#306998"
    },
    {
        skill: "FastAPI",
        level: 51,
        color: "#009485"
    },
    {
        skill: "Git",
        level: 85,
        color: "#F05133"
    },
    {
        skill: "GitHub/GitLab",
        level: 80,
        color: "#181717"
    },
    {
        skill: "Docker",
        level: 10,
        color: "#2496ED"
    },
    {
        skill: "PostgreSQL",
        level: 60,
        color: "#336791"
    },
    {
        skill: "Supabase",
        level: 70,
        color: "#3ECF8E"
    },
    {
        skill: "MongoDB",
        level: 30,
        color: "#47A248"
    },
    {
        skill: "Tailwind CSS",
        level: 80,
        color: "#00bcff"
    },
    {
        skill: "Ant Design",
        level: 40,
        color: "#0170fe"
    },
    {
        skill: "Postman",
        level: 70,
        color: "#FF6C37"
    },
    {
        skill: "Pytest",
        level: 40,
        color: "#4B8BBE"
    },
    {
        skill: "Cypress",
        level: 30,
        color: "#17202C"
    }
];
export const certificationsData = [
    {
        name: "Inmersión Dev",
        date: "september 2024",
        parner: "Alura Latam",
        image: InmersionDev
    },
    {
        name: "Inmersión IA",
        date: "september 2025",
        parner: "Alura Latam",
        image: InmersionIA
    },
    {
        name: "English for IT 1",
        date: "july 2024",
        parner: "Cisco Networking Academy",
        image: EnglishForIT1
    }
]