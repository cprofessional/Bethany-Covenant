"use client"; // Ensure this is at the very top of the file

import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';

import purpleImage from './assets/purple.jpg';
import drugImage from './assets/drug.jpg';
import ethanImage from './assets/ethan.jpg';
import greenImage from './assets/green.png';
import groupImage from './assets/group.jpg';
import crossImage from './assets/cross.png';
import childImage from './assets/child.jpg'

const ContactUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circleImageContainer}>
        <Image src={purpleImage} alt="Purple Circle" className={`${styles.circleImage} ${styles.purple}`} />
        <Image src={drugImage} alt="Drink" className={`${styles.circleImage} ${styles.drug}`} />
        <Image src={ethanImage} alt="Playing Music" className={`${styles.circleImage} ${styles.ethan}`} />
        <Image src={greenImage} alt="Green Circle" className={`${styles.circleImage} ${styles.green}`} />
        <Image src={groupImage} alt="Group" className={`${styles.circleImage} ${styles.group}`} />
        <Image src={childImage} alt="Child" className={`${styles.circleImage} ${styles.child}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <Image src={crossImage} alt="Cross Icon" width={100} height={100} />
        </div>
        <h2 className={styles.heading}>Need To Reach Out? <br /> We Are Here For You</h2>
        <button onClick={() => window.location.href = "/contact"}className={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default ContactUs;
