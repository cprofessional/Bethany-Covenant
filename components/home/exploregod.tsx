"use client";

import React from 'react';
import styles from '@/styles/components/exploregod.module.css';

const ExploreGod: React.FC = () => {
  return (
    <div className={styles.exploreGodContainer}>
      <div className={styles.videoSection}>
        <iframe
          width="745"
          height="464"
          src="https://www.youtube.com/embed/kTE2mncpt9c?list=PLC-gEEccAHZhWY30MBdliOZQF3LBWcAfC"
          title="Following God"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.textSection}>
        <h2>Explore God’s Word</h2>
        <h3>with us each Sunday</h3>
        <p>
          Missed a Sunday and want to catch up on the sermon? Most sermons are recorded and uploaded to our YouTube channel. Watch the most recent one here or click below to visit our channel.
        </p>
        <a href="https://www.youtube.com/@BethanyCovSTC" target="_blank" rel="noopener noreferrer" className={styles.youtubeButton}>
          View past sermons on YouTube
        </a>
      </div>
    </div>
  );
};

export default ExploreGod;
