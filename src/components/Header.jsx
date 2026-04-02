import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className='container'>
                <div className='logo'>
                    <span className='logo-text'></span>
                    <span className='logo-cursor'></span>
                </div>
                <nav className='nav'>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                    <Link to='projects' smooth={true} duration={500}>Works</Link>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}