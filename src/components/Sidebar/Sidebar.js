import { useState } from 'react';
import { ChevronCompactDown } from 'react-bootstrap-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.mainSegment}>
        <li className={`${styles.feed} ${isOpen ? styles.changed : ''}}`} onClick={toggle}>Blogs<ChevronCompactDown style={{padding: '0 0.5rem', marginTop: '0.5rem'}}/></li>
        {isOpen && <div className={styles.blogs}>
        <li className={styles.blog}>Lifestyle</li>
        <li className={styles.blog}>Science and Technology</li>
        <li className={styles.blog}>Buisness</li>
        </div>}
        <li className={styles.feed}>Upcoming event</li>
        <li className={styles.feed}>News</li>
        <li className={styles.feed}>Jobs</li>
      </div>
      
    </div>
  )
}

export default Sidebar