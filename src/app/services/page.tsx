import Link from 'next/link';
import styles from "../../styles/services.module.css";


export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.description}>We offer a variety of high-quality services to meet your needs.</p>
      
      <div className={styles.serviceList}>
        <div className={styles.serviceCard}>
          <h2><Link href={"/services/webdevelopment"}>Web Development</Link></h2>
          <p>We create fast, responsive websites tailored to your business needs.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Mobile App Development</h2>
          <p>We build cross-platform mobile apps that provide a seamless user experience.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>UI/UX Design</h2>
          <p>Our design team creates intuitive and visually appealing user interfaces.</p>
        </div>
      </div>
    </div>
  );
}
