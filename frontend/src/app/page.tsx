'use client';
import Link from 'next/link';
import Header from '../components/header';
import DashBoard from '@/components/dashboard';
import WishCommand from '@/components/wishcommand';
import RecentWish from '@/components/recentWish';
import Footer from '../components/footer';
import styles from './page.module.css';
import { WISHCOMMAND_BG } from '@/params/background_params';
import { allWish } from '../../data/allWish';


const Home: React.FC = () => {

const wishData = allWish.slice(-4).reverse();

const wishCount = wishData[0]?.cardNumber || 0;

  return (
    <div>
      <Header wishCount={wishCount}/>
      <div className={styles.flexContainer}>
        <Link href="/view-all-wishcard" />
        <div className={styles.topRow}>
          <div className={styles.dashboardContainer}>
            <DashBoard />
          </div>
          <div className={styles.box2} style={{backgroundColor: WISHCOMMAND_BG}}>
            <div className={styles.box2Title}>
              <WishCommand />
            </div>
          </div>
        </div>
        <div className={styles.fullWidthBox}>
          <RecentWish wishData={wishData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;


