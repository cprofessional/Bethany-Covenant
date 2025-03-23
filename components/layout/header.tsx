"use client";

import React, { FC, useState } from "react";
import styles from "@/styles/layout/header.module.css";
import logoImage from "@/public/assets/Logo.png";
import Image from "next/image";

interface HeaderProps {
  theme: "light" | "dark";
}

const Header: FC<HeaderProps> = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.bethanyHeader} ${theme === "dark" ? styles.dark : styles.light}`}>
      <a href="/">
        <Image src={logoImage} alt="Bethany Covenant Logo" className={styles.logo} height={400} width={400} />
      </a>
      <div className={styles.navWrapper}>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {menuOpen ? <a href="/" onClick={() => setMenuOpen(false)}>Home</a> : ""}

          <div
            className={styles.dropdown}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className={styles.navButton}>About Us</button>
            {aboutOpen && (
              <div className={styles.dropdownMenu}>
                <a href="/about-us/our-church">Our Church</a>
                <a href="/about-us/our-story">Our Story</a>
                <a href="/about-us/who-we-are">Who We Are</a>
                <a href="/about-us/what-we-believe">What We Believe</a>
                <a href="/about-us/church-planting">Church Planting</a>
              </div>
            )}
          </div>

          <button onClick={() => window.location.href = "https://bethanycov.churchcenter.com/calendar?view=month"}>Events</button>
          <a href="/news" onClick={() => setMenuOpen(false)}>News</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className={styles.donateButton} onClick={() => window.location.href = "https://www.covchurchgiving.com/p-3456-give-to-bethany-covenant-church.aspx"}>Donate</button>
        </nav>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <span className={styles.menuIcon}>{menuOpen ? "✖" : "☰"}</span>
      </button>
    </header>
  );
};

export default Header;
