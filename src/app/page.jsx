import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better place for your survival journey...</h1>
        <p className={styles.desc}> I am here to help in your survival journey, 
        so that you can focus on what matters most. 
        Did you know that survival is not easy?
        </p>
        <Button url="/portfolio" text="Get Started"/>
      </div>

      <div className={styles.item}>  
        <Image src={Hero} alt="Survival 101" className={styles.img} />
      </div>
    </div>
  );
}
