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
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [menuOpen]);

  return (
    <header className={styles.bethanyHeader}>
      <Image
        src={logoImage}
        alt="Bethany Covenant Logo"
        className={styles.logo}
        height={400}
        width={400}
      />
      <div className={styles.navWrapper}>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="#about">About Us</a>
          <a href="#events">Events</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <button className={styles.donateButton}>Donate</button>
        </nav>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <span className={styles.menuIcon}>{menuOpen ? '✖' : '☰'}</span>
      </button>
    </header>
  );
};

export default Header;
