import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the News App</h1>
      <p className={styles.description}>This is a simple Next.js news app built with the App Router.</p>
      <Link className={styles.link} href="/news">
        Checkout the latest news
      </Link>
    </main>
  );
}
