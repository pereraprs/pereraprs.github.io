import React from 'react';
import { FaCode, FaDatabase, FaPalette, FaTools, FaSync } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <FaCode />,
      skills: 'React, CSS, HTML'
    },
    {
      name: 'Backend',
      icon: <FaDatabase />,
      skills: 'Spring Boot, Node.js, Django'
    },
    {
      name: 'Database',
      icon: <FaDatabase />,
      skills: 'MySQL, MongoDB, Firebase'
    },
    {
      name: 'Design',
      icon: <FaPalette />,
      skills: 'Figma, Adobe XD, UI/UX'
    },
    {
      name: 'DevOps',
      icon: <FaSync />,
      skills: 'Docker, Kubernetes, GitHub Actions'
    },
    {
      name: 'Tools',
      icon: <FaTools />,
      skills: 'Git, VS Code'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}