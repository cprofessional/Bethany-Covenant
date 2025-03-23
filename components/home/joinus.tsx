"use client";

import React from 'react';
import styles from '@/styles/components/joinus.module.css';

const JoinUs: React.FC = () => {
  return (
    <div className={styles.joinUsContainer}>
      <div className={styles.joinUsOverlay}></div>
      <h1 className={styles.joinUsMainText}>Encountering Jesus.<br />Experiencing Transformation.</h1>
      <p className={styles.joinUsSubText}>Join us Sundays at 9 am</p>
    </div>
  );
};

export default JoinUs;
