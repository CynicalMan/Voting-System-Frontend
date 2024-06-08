import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Page Not Found</p>
        <Link to="/" className={styles.homeButton}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
