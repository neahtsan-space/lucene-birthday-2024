import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import DashBoard from '@/components/dashboard';
import WishCommand from '@/components/wishcommand';
import RecentWish from '@/components/recentWish';
import Footer from '../components/footer';
import styles from './page.module.css';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.flexContainer}>
        <Link href="/view-all-wishcard" />
        <div className={styles.topRow}>
          <div className={styles.dashboardContainer}>
            <DashBoard />
          </div>
          <div className={styles.box2}>
            <div className={styles.box2Title}>
              <WishCommand />
            </div>
          </div>
        </div>
        <div className={styles.fullWidthBox}>
          <RecentWish />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;


