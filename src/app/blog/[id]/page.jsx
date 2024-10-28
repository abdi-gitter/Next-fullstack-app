import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,   {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const post = async ({ params }) => {
  const data = await getData(params.id);
  // const { id } = params; // Get the id from the URL parameters
  // const post = items.find(item => item.id === parseInt(id)); // Find the post by id

  // if (!post) {
  //   return <p>Post not found.</p>; // Handle case when post is not found
  // }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{items.title}</h1>
          <p className={styles.desc}>{items.desc}</p>
          <div className={styles.author}>
            <Image
              src={items.img} // Author image
              alt="Author Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{items.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={items.image}
            alt={items.title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{items.content}</p>
      </div>
    </div>
  );
};

export default post
