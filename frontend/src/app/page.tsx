import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { topic } from '../params/header_params';
import styles from './index.module.css'; // Import CSS module
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.flexContainer}>
        <div className={styles.flexRow}>
          <div className={styles.box}>Box 1</div>
          <div className={styles.box}>Box 2</div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.box}>Box 3</div>
          <div className={styles.box}>Box 4</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;


