import type React from "react"
import styles from "@/styles/layout/footer.module.css"
import facebookIcon from "@/public/assets/Facebook.png"
import mailIcon from "@/public/assets/Mail.png"
import instagramIcon from "@/public/assets/Instagram.png"
import youtubeIcon from "@/public/assets/YouTube.png"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.middleSection}>
          <h3 className={styles.sectionTitle}>Subscribe</h3>
          <p className={styles.subscribeText}>Sign up to receive weekly news and updates for Bethany Covenant Church</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email Address" className={styles.input} aria-label="Email Address" />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </form>
        </div>

        <div className={styles.leftSection}>
          <Link href="/about-us/our-church" className={styles.link}>
            About Us
          </Link>
          <Link href="https://bethanycov.churchcenter.com/calendar?view=month" className={styles.link}>
            Events
          </Link>
          <Link href="/news" className={styles.link}>
            News
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link
            href="https://www.covchurchgiving.com/p-3456-give-to-bethany-covenant-church.aspx"
            className={styles.link}
          >
            Donate
          </Link>
          <Link href="/privacy-policy" className={`${styles.link} ${styles.privacyPolicy}`}>
            Privacy Policy
          </Link>
        </div>

        <div className={styles.rightSection}>
          <h3 className={styles.sectionTitle}>Bethany Covenant</h3>
          <p>106 S Riverside Ave, St. Charles, IL 60174</p>
          <p>Inside Pollyanna's Brewing Co.</p>
          <p className={styles.contactInfo}>331.481.9861</p>
          <a href="mailto:info@bethanycov.org" className={styles.link}>
            info@bethanycov.org
          </a>
          <p className={styles.joinUs}>Join us Sundays at 9am</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/BethanyCovSTC" aria-label="Facebook">
              <Image
                src={facebookIcon || "/placeholder.svg"}
                alt="Facebook"
                className={styles.icon}
                width={24}
                height={24}
              />
            </a>
            <a href="mailto:info@bethanycov.org" aria-label="Email">
              <Image src={mailIcon || "/placeholder.svg"} alt="Mail" className={styles.icon} width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/bethanycovstc/" aria-label="Instagram">
              <Image
                src={instagramIcon || "/placeholder.svg"}
                alt="Instagram"
                className={styles.icon}
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.youtube.com/@BethanyCovSTC" aria-label="YouTube">
              <Image
                src={youtubeIcon || "/placeholder.svg"}
                alt="YouTube"
                className={styles.icon}
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

