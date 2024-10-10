import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Website</h1>
        <p className={styles.subtitle}>Building modern web applications with Next.js</p>
      </header>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>
      </nav>
      
      <footer className={styles.footer}>
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
