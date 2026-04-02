import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>./contact</h2>
        <p className="contact-sub">// let's connect and create something awesome</p>

        <div className="contact-links">
          <a href="mailto:prsperera@ms.ac.lk" className="contact-link">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-info">
              <span className="contact-label">email</span>
              <span className="contact-value">prsperera@ms.ac.lk</span>
            </div>
          </a>

          <a href="https://github.com/pereraprs" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-icon"><FaGithub /></div>
            <div className="contact-info">
              <span className="contact-label">github</span>
              <span className="contact-value">pereraprs</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/prsperera" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-icon"><FaLinkedin /></div>
            <div className="contact-info">
              <span className="contact-label">linkedin</span>
              <span className="contact-value">prsperera</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}