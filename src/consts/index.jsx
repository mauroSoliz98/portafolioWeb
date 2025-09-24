import { Link } from "react-router";
import { VscVmConnect, VscTerminal, VscDebugConsole } from "react-icons/vsc";
import InmersionDev from "../assets/Certificado_Alura_Latam-Inmersion_Dev.jpg"
import InmersionIA from "../assets/Certificado_Alura-Inmersion_IA.jpg"
import EnglishForIT1 from "../assets/english-for-it-1.png"
import {
    ReachOriginal,
    FastapiOriginal,
    SupabaseOriginal,
    TailwindcssOriginal,
    AntdesignOriginal,
    PrismaOriginal,
    PostmanOriginal,
    PostgresqlOriginal,
    GithubOriginal,
    GitlabOriginal,
    PythonOriginal,
    JavascriptOriginal,
    CypressioOriginal,
} from "devicons-react";

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
        icon: <VscVmConnect size={50} color="#1890ff" />
    },
    {
        title: "Back-End Development",
        description: "Creating robust back-end systems and APIs to support web applications, ensuring scalability and performance.",
        icon: <VscTerminal size={50} color="#1890ff" />
    },
    {
        title: "Testing & Debugging",
        description: "Implementing testing strategies to ensure code quality and reliability, using tools like Jest and Mocha.",
        icon: <VscDebugConsole size={50} color="#1890ff" />
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
export const projectsData = [
    {
        name: "MyStore_WebApp",
        description: "In this project I was responsible for developing Front-End and Back-End using React with JavaScript, Node.js, Express, and PostgreSQL. The application features user authentication, product management, and a shopping cart system. I implemented RESTful APIs to handle data interactions and ensured a responsive design for optimal user experience across devices.",
        intitution: "Personal Project",
        date: "August 2024",
        technologies: [
            {
                title: 'ReactJS',
                icon: <ReachOriginal />
            },
            {
                title: 'FastAPI',
                icon: <FastapiOriginal />
            },
            {
                title: 'Supabase',
                icon: <SupabaseOriginal />
            },
            {
                title: 'Tailwind CSS',
                icon: <TailwindcssOriginal />
            },
            {
                title: 'Prisma',
                icon: <PrismaOriginal />
            },
            {
                title: 'GitHub',
                icon: <GithubOriginal />
            }
        ],
        images: [
            "https://i.imgur.com/LLX5796.png",
            "https://i.imgur.com/McUXFPs.png",
            "https://i.imgur.com/Zz4E4gY.png",
            "https://i.imgur.com/iXyecm4.png",
            "https://i.imgur.com/9rRTNfi.png",
            "https://i.imgur.com/qtIp5fw.png",
            "https://i.imgur.com/rssM1MD.png",
            "https://i.imgur.com/dmmXNnu.png",
            "https://i.imgur.com/pgtgLze.png",
            "https://i.imgur.com/q3mWDzO.png"
        ]
    },
    {
        name: "DigiD",
        description: "We developed a mobile application to scan documents using React Native. The app allows users to capture images of documents, automatically crops and enhances them, and saves them in various formats such as PDF and JPEG. We implemented features like multi-page scanning, image filters, and cloud storage integration for easy access and sharing.",
        institution: "Catastro Municipality",
        date: "June 2025",
        technologies: [
            {
                title: 'React Native',
                icon: <ReachOriginal />
            },
            {
                title: 'FastAPI',
                icon: <FastapiOriginal />
            },
            {
                title: 'Postman',
                icon: <PostmanOriginal />
            },
            {
                title: 'GitLab',
                icon: <GitlabOriginal />
            },
        ],
        images: [
            "https://i.imgur.com/4THS0Re.png",
            "https://i.imgur.com/odJKzG3.png",
            "https://i.imgur.com/zXQ7iE9.png",
            "https://i.imgur.com/VIlu9vx.png",
            "https://i.imgur.com/GQlk47R.png",
            "https://i.imgur.com/B6j5J1v.png",
            "https://i.imgur.com/WA0kE88.png",
            "https://i.imgur.com/dWwZS7c.png",

        ]
    },
    {
        name: "New Catastro WebApp",
        description: "In this project, I contributed to the development of a web application for managing cadastral data using React for the front-end and Node.js with Express for the back-end. The application includes features such as property search, data visualization on maps, and report generation. I collaborated with a team to implement RESTful APIs and ensure seamless integration between the front-end and back-end components.",
        institution: "Catastro Municipality",
        date: "June 2025",
        technologies: [
            {
                title: 'ReactJS',
                icon: <ReachOriginal />
            },
            {
                title: 'FastAPI',
                icon: <FastapiOriginal />
            },
            {
                title: 'JavaScript',
                icon: <JavascriptOriginal />
            },
            {
                title: 'Python',
                icon: <PythonOriginal />
            },
            {
                title: 'PostgreSQL',
                icon: <PostgresqlOriginal />
            },
            {
                title: 'Postman',
                icon: <PostmanOriginal />
            },
            {
                title: 'PyTest',
                icon: <PythonOriginal />
            },
            {
                title: 'GitLab',
                icon: <GitlabOriginal />
            }
        ],
        images: [
            "https://i.imgur.com/0oEdIaG.png",
            "https://i.imgur.com/0y3Hxto.png",
            "https://i.imgur.com/MIJZlwQ.png",
            "https://i.imgur.com/E4cGdlz.png",
            "https://i.imgur.com/49JWFpY.png",
            "https://i.imgur.com/1js7o9p.png",
            "https://i.imgur.com/pue0RDS.png"
        ]
    },
    {
        name: "Integrative Project - Personal Project",
        descrition: "This project was developed to assist volunteer rescuers in managing and coordinating aid for people affected by natural disasters in rural areas. In this project I was enble to hanble map with Leaflet library, also I worked with form validation and I implemented a responsive design using Ant Design to ensure optimal user experience across devices.",
        institution: "Private University Franz Tamayo",
        date: "Frebruary 2025",
        technologies: [
            {
                title: 'ReactJS',
                icon: <ReachOriginal />
            },
            {
                title: 'Ant Design',
                icon: <AntdesignOriginal />
            },
            {
                title: 'JavaScript',
                icon: <JavascriptOriginal />
            },
            {
                title: 'GitHub',
                icon: <GithubOriginal />
            },
            {
                title: 'Pytest',
                icon: <PythonOriginal />
            },
            {
                title: 'Superbase',
                icon: <SupabaseOriginal />
            },
            {
                title: 'Cypress',
                icon: <CypressioOriginal />
            }
        ],
        images: [
            "https://i.imgur.com/ticObmC.png",
            "https://i.imgur.com/qxew7KU.png",
            "https://i.imgur.com/7k2jzZn.png",
            "https://i.imgur.com/nu2uRcQ.png",
            "https://i.imgur.com/PkZey5C.png",
            "https://i.imgur.com/dM2qsjv.png"
        ]
    }
]