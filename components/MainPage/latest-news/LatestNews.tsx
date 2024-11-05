"use client"; // Ensure this is at the very top of the file

import React from 'react';
import styles from './LatestNews.module.css';

const LatestNews: React.FC = () => {
  return (
    <div className={styles.latestNewsContainer}>
      <div className={styles.latestNewsOverlay}>
        <h2>Check Out Our Latest News</h2>
        <a href="/news" className={styles.readMoreButton}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default LatestNews;
