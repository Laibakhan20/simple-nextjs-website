import Link from 'next/link';
import styles from '../../../styles/webdevelop.module.css';

export default function WebDevelopment() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Web Development Services</h1>
      <p className={styles.description}>
        We specialize in building fast, responsive, and scalable web applications tailored to your business needs. Our team uses the latest technologies to deliver top-notch websites that provide exceptional user experiences.
      </p>
      
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>What We Offer</h2>
        <ul className={styles.featuresList}>
          <li>Custom Web Application Development</li>
          <li>Responsive Web Design</li>
          <li>eCommerce Solutions</li>
          <li>Content Management Systems (CMS)</li>
          <li>Progressive Web Apps (PWA)</li>
          <li>SEO Optimization</li>
        </ul>
      </section>
      
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Interested in Working With Us?</h2>
        <p>Contact us today to discuss your web development needs and get a free consultation.</p>
        <button className={styles.contactButton}><Link href={"/contact"}>Contact Us</Link></button>
      </section>
    </div>
  );
}
