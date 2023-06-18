import React from 'react';
import styles from './HomePage.module.css';
import Sidebar from '../Sidebar/Sidebar';

import fitnessPosts from '../../BlogPosts/fitnessPosts';
import BlogCard from '../BlogCard/BlogCard';
import travelBlogs from '../../BlogPosts/travelPosts';
import foodBlogs from '../../BlogPosts/foodPosts';
import BlogPage from '../BlogPage/BlogPage';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
        <Sidebar />
        <div className={styles.scroll}><BlogPage /></div>
    </div>
  )
}

export default HomePage