import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AboutPic from '/public/ab.png'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
        <Image src={AboutPic} 
        fill={true} alt="Survival 101" className={styles.img} 
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Your Survival Expert, Ready to advice you</h1>
          <h2 className={styles.imgDesc}>Delivering you the best survival advice in all kinds of environments</h2>
        </div>
     </div>
     
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Welcome to Survival Experts, where we equip you with essential skills 
          and knowledge for thriving in the great outdoors and overcoming emergencies. 
          Our team of seasoned survival specialists brings a wealth of experience in 
          wilderness training, emergency preparedness, and practical problem-solving. 
          <br /><br />
          Whether you are looking to master outdoor skills, enhance your safety awareness, 
          or prepare for unforeseen challenges, we offer hands-on 
          workshops and expert guidance tailored to all experience levels. 
          Join us on a journey to build confidence, resilience, and a deeper connection 
          with nature, empowering you to navigate any situation with skill and assurance.
        </p>
      </div>


      <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>

      <p className={styles.desc}>
        At Survival Experts, we specialize in providing comprehensive 
        training and resources designed to empower individuals 
        with essential survival skills. Our offerings include immersive workshops 
        that cover topics such as wilderness navigation, shelter building, foraging, 
        first aid, and self-defense techniques. We also conduct 
        customized training programs for groups, organizations, and outdoor enthusiasts, 
        ensuring that everyone, from beginners to seasoned adventurers, can benefit from our 
        expertise. Additionally, we provide valuable resources and informative 
        through our online platforms, enabling you to enhance your knowledge and preparedness 
        at your own pace. <br /><br />
        Whether you are preparing for a weekend camping trip or looking to develop critical 
        life skills, we are dedicated to equipping you with the tools and confidence needed 
        to thrive in any situation.
      </p>
      <Button url="contact" text="Contact Us"/>
      </div>
    </div>
    </div>
  )
}

export default About

