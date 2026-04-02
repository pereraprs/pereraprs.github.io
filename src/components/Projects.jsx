import React from "react";
import "../Style/Project.css";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Travel Agency Website",
            description: "A full-featured travel booking platform for Sri Lanka — destinations, packages, custom trips and secure booking.",
            badge: null,
            image: "/travel-web.png",
            techs: [
                { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
                { name: "Node.js", icon: "fa-brands fa-node-js", color: "#68A063" },
                { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
                { name: "GitHub Actions", icon: "fa-brands fa-github", color: "#aaa" },
            ],
            link: "https://github.com/prsperera/Travel-Agency-Website"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Your next project goes here. Add a short description of what it does.",
            badge: null,
            image: '/portfolio-img.png',
            bgClass: "cs1",
            techs: [
                { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
                { name: "Node.js", icon: "fa-brands fa-node-js", color: "#68A063" },
            ],
            link: "https://github.com/pereraprs/portfolio.github.io"
        },
        {
            id: 3,
            title: "NMAP Scanner",
            description: "powerful network scans using Nmap with multiple scan options like SYN, UDP, and OS detection. It allows users to easily execute scans, view results in a terminal-like UI, and save detailed reports for later analysis.",
            badge: null,
            image: '/nmap.png',
            bgClass: "cs2",
            techs: [
                { name: "Python, Flask", icon: "fa-brands fa-python", color: "#3776AB" },
                
            ],
            link: "https://github.com/prsperera/nmap-web-scanner"
        },
        {
            id: 4,
            title: "Notepad",
            description: "A simple Notepad application built using Java that allows users to create, edit, and save text files with a clean and user-friendly interface. It demonstrates basic file handling, GUI development, and event-driven programming concepts in Java.",
            badge: null,
            image: '/notepade.png',
            bgClass: "cs3",
            techs: [
                { name: "Java", icon: "fa-brands fa-java", color: "#e6b42d" },
            ],
            link: "https://github.com/pereraprs/CSEdge-Java-Programming-Internshiphttps://github.com/pereraprs/CSEdge-Java-Programming-Internship/tree/main/Task%202"
        },
        {
            id: 5,
            title: "SIEM Dashboard",
            description: "A Security Information and Event Management (SIEM) dashboard built with the ELK Stack",
            badge: null,
            image: '/siem.png',
            bgClass: "cs3",
            techs: [
                { name: "Python, Flask", icon: "fa-brands fa-python", color: "#3776AB" },
                
            ],
            link: "https://github.com/pereraprs/siem-dashboard"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2>./projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="pcard">
                            <div className="img-wrap">
                                {project.image
                                    ? <img src={project.image} alt={project.title} className="pcard-img" />
                                    : <div className={`coming-soon-img ${project.bgClass}`}>Coming Soon</div>
                                }
                                {project.badge && <span className="badge">{project.badge}</span>}
                            </div>
                            <div className="pcard-body">
                                <h3 className="pcard-title">{project.title}</h3>
                                <p className="pcard-desc">{project.description}</p>
                                <hr className="divider" />
                                <div className="tech-row">
                                    {project.techs.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            {tech.img
                                                ? <img src={tech.img} alt={tech.name} />
                                                : <i className={tech.icon} style={{ color: tech.color }}></i>
                                            }
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="pcard-footer">
                                    <a href={project.link} className="view-btn">view →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}