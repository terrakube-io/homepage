"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "./nav-links";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        <a href="#top" className="brand-mark" aria-label="Terrakube home">
          <Image src="/terrakube.png" alt="" width={25} height={29} priority />
          <span>Terrakube</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="nav-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {isOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="nav-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                {link.text} <span aria-hidden>↗</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
