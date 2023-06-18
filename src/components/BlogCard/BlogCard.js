import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ title, image, content, limit}) => {
  const truncatedContent = content.length > limit ? content.substring(0, limit) + '...' : content;

  return (
    <div className={styles.blogCard}>
        <img src={image} alt={title} className={styles.img}/>
        <div className={styles.writeup}>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.content}>{truncatedContent}</p>
            <button className={styles.btn}>Read more</button>
        </div>
    </div>
  )
}

export default BlogCard;