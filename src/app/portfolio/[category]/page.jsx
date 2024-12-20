// page.jsx
import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { items } from "./data.js";

const Category = ({ params }) => {
  // Retrieve items based on the category from params
  const categoryItems = items[params.category] || []; // Handle if the category doesn't exist

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {categoryItems.map(item => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More..." />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image} // Use the image URL from the item
              fill={true}
              className={styles.img}
              alt={item.title} // Provide a meaningful alt text
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
