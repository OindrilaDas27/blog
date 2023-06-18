import { useState } from 'react';
import { ChevronCompactDown } from 'react-bootstrap-icons';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.mainSegment}>
        <Link className={`${styles.feed} ${isOpen ? styles.changed : ''}}`} onCLinkck={toggle}>Blogs<ChevronCompactDown style={{padding: '0 0.5rem', marginTop: '0.5rem'}}/></Link>
        {isOpen && <div className={styles.blogs}>
        <Link to='/' className={styles.blog}>Lifestyle</Link>
        <Link className={styles.blog}>Science and Technology</Link>
        <Link className={styles.blog}>Buisness</Link>
        </div>}
        <Link className={styles.feed}>Upcoming event</Link>
        <Link className={styles.feed}>News</Link>
        <Link className={styles.feed}>Jobs</Link>
      </div>
      
    </div>
  )
}

export default Sidebar