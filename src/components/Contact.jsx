import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:prsperera@ms.ac.lk" className="contact-link">
            <FaEnvelope />
          </a>
          <a href="https://github.com/pereraprs" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/prsperera" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}