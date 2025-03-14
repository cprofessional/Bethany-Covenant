import React from 'react';
import styles from '@/styles/layout/footer.module.css';
import facebookIcon from '@/public/assets/Facebook.png';
import mailIcon from '@/public/assets/Mail.png';
import instagramIcon from '@/public/assets/Instagram.png';
import youtubeIcon from '@/public/assets/YouTube.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.middleSection}>
          <h3 className={styles.sectionTitle}>Subscribe</h3>
          <p className={styles.subscribeText}>Sign up to receive weekly news and updates for Bethany Covenant Church</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.button}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className={styles.leftSection}>
          <a href="/about" className={styles.link}>About Us</a>
          <a href="/events" className={styles.link}>Events</a>
          <a href="/news" className={styles.link}>News</a>
          <a href="/contact" className={styles.link}>Contact</a>
          <a href="/donate" className={styles.link}>Donate</a>
          <a href="/privacy-policy" className={`${styles.link} ${styles.privacyPolicy}`}>Privacy Policy</a>
        </div>

        <div className={styles.rightSection}>
          <h3 className={styles.sectionTitle}>Bethany Covenant</h3>
          <p>106 S Riverside Ave, St. Charles, IL 60174</p>
          <p>Inside Pollyanna’s Brewing Co.</p>
          <p className={styles.contactInfo}>331.481.9861</p>
          <a href="mailto:info@bethanycov.org" className={styles.link}>info@bethanycov.org</a>
          <p className={styles.joinUs}>Join us Sundays at 9am</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon.src} alt="Facebook" className={styles.icon} />
            </a>
            <a href="#" aria-label="Email">
              <img src={mailIcon.src} alt="Mail" className={styles.icon} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon.src} alt="Instagram" className={styles.icon} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon.src} alt="YouTube" className={styles.icon} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
