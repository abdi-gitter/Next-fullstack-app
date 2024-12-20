import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items } from './[id]/data'; // Ensure this path is located in the `data` folder and is correct
import styles from './page.module.css';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',   {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
        <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>  

        <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/14391906/pexels-photo-14391906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={item.title}
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          
        </Link>
      ))}
    </div>
  );
};

export default Blog;
