"use client";

import React from 'react';
import styles from '@/styles/components/helpothers.module.css';
import Image from 'next/image';
import lunchImage from '@/public/assets/BannerLunch.jpg';

const HelpOthers: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Help more people encounter Jesus.</h1>
        <p>
          We need your help to give more people an opportunity to have a
          life-changing encounter with Jesus.
        </p>
        <p>
          God has given us a growing love for people in our community who have not yet
          experienced transformation in Christ. We need your help to create a welcoming
          community of Christ followers that draws people to Jesus. We are building a new
          kind of church where people can bring their hurts and their questions, their hopes
          and their longings, their pain and their needs to a community of faith who is ready
          to journey alongside them. We need your help as we nurture first steps of faith in a
          church designed for people to encounter Christ for the very first time. Help us as we
          challenge people to develop risk-taking faith that is determined to follow wherever
          Jesus leads. We need a team of people who will join together to fund this vision.
        </p>
        <button onClick={() => window.location.href = "https://www.covchurchgiving.com/p-3456-give-to-bethany-covenant-church.aspx"} className={styles.donateButton}>Donate</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={lunchImage} alt="Community lunch" />
      </div>
    </div>
  );
};

export default HelpOthers;
