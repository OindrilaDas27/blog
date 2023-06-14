import React from 'react';
import styles from './MainSegment.module.css';

const MainSegment = () => {
  return (
    <div className={styles.mainSegment}>
        <li className={styles.feed}>Upcoming event</li>
        <li className={styles.feed}>News</li>
        <li className={styles.feed}>Jobs</li>
    </div>
  )
}

export default MainSegment