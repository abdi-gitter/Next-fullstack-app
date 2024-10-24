import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { items } from './data';

const Post = ({ params }) => {
  const { id } = params; // Get the id from the URL parameters
  const post = items.find(item => item.id === parseInt(id)); // Find the post by id

  if (!post) {
    return <p>Post not found.</p>; // Handle case when post is not found
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src={post.img} // Author image
              alt="Author Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{post.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
