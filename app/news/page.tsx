import { newsData } from '@/newsData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const News: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest News</h1>
      <ul className={styles['news-item']}>
        {newsData.map((article) => (
          <li key={article.slug}>
            <Link href={`/news/${article.slug}`}>
              <Image src={article.image} alt={article.title} className={styles.images} />
              <span className={styles.title}>{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
