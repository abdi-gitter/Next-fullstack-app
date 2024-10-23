import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
//import { items } from "./data.js";
import Libra from './public/libra.png'

const Category = ({params}) => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More..." />
        </div>
        <div className={styles.imgContainer}>
        <Image src={Libra} fill={true} className={styles.img} alt="Survival 101" />
        </div>
      </div>
    </div>
  )
}

export default Category
