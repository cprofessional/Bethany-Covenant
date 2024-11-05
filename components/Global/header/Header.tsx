"use client"; // Ensure this is at the very top of the file

import React, { FC, useState, useEffect } from 'react';
import styles from './Header.module.css';
import logoImage from './assets/logo.png';
import Image from 'next/image';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
    }
  }, [menuOpen]);

  return (
    <header className={styles.bethanyHeader}>

      <a href="https://www.bethanycov.org/">
        <Image
          src={logoImage}
          alt="Bethany Covenant Logo"
          className={styles.logo}
          height={400}
          width={400}
        />
      </a>
      <div className={styles.navWrapper}>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="/news" onClick={() => setMenuOpen(false)}>News</a>
          <a href="/contact" onClick={() => setMenuOpen(false) }>Contact</a>
          <button className={styles.donateButton} onClick={() => window.location.href = 'https://www.covchurchgiving.com/p-3456-give-to-bethany-covenant-church.aspx'}>Donate</button>
        </nav>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <span className={styles.menuIcon}>{menuOpen ? '✖' : '☰'}</span>
      </button>
    </header>
  );
};

export default Header;
