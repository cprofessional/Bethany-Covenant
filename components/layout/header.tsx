"use client"

import { type FC, useState, useEffect } from "react"
import styles from "@/styles/layout/header.module.css"
import logoImage from "@/public/assets/Logo.png"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  theme: "light" | "dark"
}

const Header: FC<HeaderProps> = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    // Toggle body scroll when menu is open/closed
    if (!menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <header className={`${styles.bethanyHeader} ${theme === "dark" ? styles.dark : styles.light}`}>
      <Link href="/">
        <Image
          src={logoImage || "/placeholder.svg"}
          alt="Bethany Covenant Logo"
          className={styles.logo}
          height={400}
          width={400}
          priority
        />
      </Link>
      <div className={styles.navWrapper}>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {menuOpen && (
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          )}

          <div
            className={styles.dropdown}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className={styles.navButton}>About Us</button>
            {aboutOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/about-us/our-church" onClick={() => setMenuOpen(false)}>
                  Our Church
                </Link>
                <Link href="/about-us/our-story" onClick={() => setMenuOpen(false)}>
                  Our Story
                </Link>
                <Link href="/about-us/who-we-are" onClick={() => setMenuOpen(false)}>
                  Who We Are
                </Link>
                <Link href="/about-us/what-we-believe" onClick={() => setMenuOpen(false)}>
                  What We Believe
                </Link>
                <Link href="/about-us/church-planting" onClick={() => setMenuOpen(false)}>
                  Church Planting
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => (window.location.href = "https://bethanycov.churchcenter.com/calendar?view=month")}
            className={styles.navButton}
          >
            Events
          </button>
          <Link href="/news" onClick={() => setMenuOpen(false)}>
            News
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            className={styles.donateButton}
            onClick={() =>
              (window.location.href = "https://www.covchurchgiving.com/p-3456-give-to-bethany-covenant-church.aspx")
            }
          >
            Donate
          </button>
        </nav>
      </div>
      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className={styles.menuIcon}>{menuOpen ? "✖" : "☰"}</span>
      </button>
    </header>
  )
}

export default Header

