import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.contents}>
            <header className={styles.heading}>Blog</header>
            <ul className={styles.items}>
                <li className={styles.content}>Be a Writer</li>
                <li className={styles.content}>Log In</li>
                <button className={styles.signup}>Sign Up</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar