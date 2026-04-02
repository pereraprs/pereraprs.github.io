import React from "react";
import { FaReact, FaNode, FaPython, FaDatabase, FaHtml5, FaCss3 } from "react-icons/fa";

export default function Projects(){
    const projects = [
        {
            id: 1,
            title: "Travel Agency Website",
            description: "Description of your project",
            image: "/travel-web.png",
            technologies: ["React", "Node", "Firebase"],
            techIcons: [<FaReact key="react" />, <FaNode key="node" />, <FaDatabase key="db" />],
            link: "#"
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description of your project",
            image: "/project2.jpg",
            technologies: ["HTML", "CSS", "JavaScript"],
            techIcons: [<FaHtml5 key="html" />, <FaCss3 key="css" />],
            link: "#"
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description of your project",
            image: "/project3.jpg",
            technologies: ["Python", "React", "Database"],
            techIcons: [<FaPython key="python" />, <FaReact key="react" />, <FaDatabase key="db" />],
            link: "#"
        }
    ];

    return (
        <section className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.techIcons.map((icon, index) => (
                                    <span key={index} className="tech-icon" title={project.technologies[index]}>
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
