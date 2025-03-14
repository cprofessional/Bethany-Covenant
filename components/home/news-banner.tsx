"use client";

import React from 'react';
import styles from '@/styles/components/news.module.css';

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
