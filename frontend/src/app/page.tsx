import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.flexContainer}>
        <div className={styles.topRow}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
        </div>
        <div className={styles.fullWidthBox}>Merged Box 3 & 4</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;


