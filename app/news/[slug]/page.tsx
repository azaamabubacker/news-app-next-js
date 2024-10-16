'use client';

import { newsData } from '@/newsData';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import styles from './page.module.css';

const NewsDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const article = newsData.find((news) => news.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.title}</h1>
      <Image src={article.image} alt={article.title} width={600} height={400} className={styles.image} />
      <p className={styles.content}>{article.content}</p>
      <p className={styles.newsId}>Published on: {article.date}</p>
    </div>
  );
};

export default NewsDetailsPage;
