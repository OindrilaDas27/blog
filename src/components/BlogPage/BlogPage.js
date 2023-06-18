import React from "react";
import styles from "./BlogPage.module.css";

import fitnessPosts from "../../BlogPosts/fitnessPosts";
import BlogCard from "../BlogCard/BlogCard";
import travelBlogs from "../../BlogPosts/travelPosts";
import foodBlogs from "../../BlogPosts/foodPosts";

const BlogPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.blogs}>Lifestyle</div>
      <div className={styles.blog}>
        <header className={styles.heading}>Fitness and Health</header>
        <div className={styles.content}>
          {fitnessPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              limit={100}
            />
          ))}
        </div>
      </div>
      <div className={styles.blog}>
        <header className={styles.heading}>Travel</header>
        <div className={styles.content}>
          {travelBlogs.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              limit={100}
            />
          ))}
        </div>
      </div>
      <div className={styles.blog}>
        <header className={styles.heading}>Food</header>
        <div className={styles.content}>
          {foodBlogs.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              limit={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
