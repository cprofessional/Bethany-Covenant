"use client";

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/contact.module.css';

import purpleImage from '@/public/assets/PurpleCircle.jpg';
import drugImage from '@/public/assets/DrugCircle.jpg';
import ethanImage from '@/public/assets/EthanCircle.jpg';
import greenImage from '@/public/assets/GreenCircle.png';
import groupImage from '@/public/assets/GroupCircle.jpg';
import crossImage from '@/public/assets/CrossCircle.png';
import childImage from '@/public/assets/ChildCircle.jpg'

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
        <button onClick={() => window.location.href = "/contact"} className={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default ContactUs;
