import Link from 'next/link';
import Image from 'next/image';
import styles from './notFound.module.css';
import { images } from '@/constants';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <Image src={images.monkey} alt="Monkey Not Found" width={200} height={200} className={styles.monkeyImage} />
      <p className={styles.description}>Oops! Looks like the page you're looking for doesn't exist.</p>
      <Link href="/news" className={styles.link}>
        Go back to News
      </Link>
    </div>
  );
};

export default NotFoundPage;
