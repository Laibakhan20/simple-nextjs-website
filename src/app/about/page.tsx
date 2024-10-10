import styles from "../../styles/about.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are a passionate team of developers dedicated to building modern web applications using cutting-edge technologies.
      </p>
      <section className={styles.content}>
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p className={styles.paragraph}>
          Our mission is to create high-quality, scalable, and user-friendly digital solutions for businesses around the world.
        </p>
        <h2 className={styles.subtitle}>Our Values</h2>
        <ul className={styles.list}>
          <li>Innovation and Creativity</li>
          <li>Client Satisfaction</li>
          <li>Quality and Excellence</li>
        </ul>
      </section>
    </div>
  );
}
