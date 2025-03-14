"use client";

import React, { FC } from 'react';
import styles from '@/styles/components/welcome.module.css';
import centerImage from '@/public/assets/WelcomeCenter.jpg';
import Image from 'next/image';

const Welcome: FC = () => {
  return (
    <main className={styles.bethanyMain}>
      <div className={styles.imageSection}>
        <Image
          src={centerImage}
          height={500}
          width={500}
          alt="Bethany Covenant Community"
          className={styles.communityPhoto}
        />
      </div>

      <div className={styles.introText}>
        <h1>
          Bethany Covenant is a <span className={styles.highlight}>Welcoming Community</span>
        </h1>
        <p>
          Where people encounter Jesus, experience transformation, grow in faith, and encourage one another.
        </p>
        <p>Not sure how you feel about church?</p>
        <p>
          We’re trying a different approach. We’re a group of people who are trying to hold onto Jesus in the middle of a
          rapidly changing landscape when it comes to church.
        </p>
        <p>
          That’s why, at Bethany Covenant Church, you’ll find relaxed worship. Grab coffee and a snack, join any table,
          and learn about Jesus. We have preaching that is biblical, but not doctrinaire. We are evangelical, but not
          exclusive. We are traditional, but not rigid. We are congregational, but not independent.
        </p>
        <p>
          Together, we look at the whole story of God. This includes hearing the stories of people on the margin who were
          part of God’s story all along. We are an intergenerational setting where our youth matter and have a voice. We
          spend a lot of time around tables and every week we center our worship around the Lord’s Table because we know
          we need Jesus.
        </p>
        <p>
          We’re a group committed to learning together and where every voice matters.
        </p>
        <div className={styles.learnMoreContainer}>
          <button onClick={() => window.location.href = "/our-church"} className={styles.learnMoreButton}>Learn more</button>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
