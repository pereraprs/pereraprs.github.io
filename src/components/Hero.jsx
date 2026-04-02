import React, { useState, useEffect } from "react";
import "../Style/Hero.css";

export default function Hero() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [isTypingTitle, setIsTypingTitle] = useState(true);
  const [isTypingSubtitle, setIsTypingSubtitle] = useState(false);

  const fullTitle = "Fullstack Developer, UI/UX Designer, Cybersecurity Enthusiast";
  const fullSubtitle = "Creating secure, beautiful solutions through thoughtful design and solid code.";
  const typingSpeed = 50;

  useEffect(() => {
    if (!isTypingTitle) return;
    if (displayedTitle.length < fullTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(fullTitle.slice(0, displayedTitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTypingTitle(false);
      setIsTypingSubtitle(true);
    }
  }, [displayedTitle, isTypingTitle]);

  useEffect(() => {
    if (!isTypingSubtitle) return;
    if (displayedSubtitle.length < fullSubtitle.length) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle(fullSubtitle.slice(0, displayedSubtitle.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTypingSubtitle(false);
    }
  }, [displayedSubtitle, isTypingSubtitle]);

  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="corner-accent corner-tl" />
      <div className="corner-accent corner-tr" />
      <div className="corner-accent corner-bl" />
      <div className="corner-accent corner-br" />

      <div className="hero-inner">
        {/* where the magic happens */}
        <div className="hero-content">
          <div className="tag-line">portfolio.v2 — init</div>

          <h1 className="hero-name">Ravin Perera</h1>

          <div className="hero-title-block">
            <p className="typed-title">
              <span className="prompt-symbol">&gt;_</span>
              {displayedTitle}
              {isTypingTitle && <span className="cursor" />}
            </p>
            {displayedTitle === fullTitle && (
              <p className="typed-sub">
                {displayedSubtitle}
                {isTypingSubtitle && <span className="cursor" />}
              </p>
            )}
          </div>

          <div className="status-row">
            <span className="status-dot" />
            <span className="status-text">available for work</span>
          </div>

          
        </div>

        {/* introducing myself */}
        <div className="hero-image">
          <div className="avatar-border" />
          <img src="/myimg.png" alt="Ravin Perera" className="profile-image" />
        </div>
      </div>
    </section>
  );
}