'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HamburgerMenuProps {
  links: {
    href: string;
    icon: string;
    alt: string;
    text: string;
  }[];
}

export default function HamburgerMenu({ links }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button 
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          {links.map((link, index) => (
            <a 
              key={index} 
              className="mobile-menu-item" 
              href={link.href}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={link.icon} alt={link.alt} width={20} height={20} />
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}