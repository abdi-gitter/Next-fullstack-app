import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";




export default function Home() {
  return (
    
    <div >
      <div className={styles.texts}>
      </div>
      <Image src={Hero} alt="Survival 101" className={styles.img} />
    </div>
  );
}
