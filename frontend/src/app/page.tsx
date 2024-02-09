import React from 'react';
import Link from 'next/link';
import ViewAllWishcard from './view-all-wishcard/page';
import Header from '../components/header';
import DashBoard from '@/components/dashboard';
import RecentWish from '@/components/recentWish';
import Footer from '../components/footer';
import styles from './page.module.css';
import * as body from '@/params/navbar_params';


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
            <span className={styles.text}>{body.textbody}</span>
            <hr className={styles.line} /> {/* Horizontal line */}
            <div className={styles.buttoncontainer}>
            <a href={body.body_link1} className="body-link">
            <button className="custom-button">{body.body_button1}</button></a>
            <a href={body.body_link2} className="body-link">
            <button className="custom-button">{body.body_button2}</button></a>
            <a href={body.body_link3} className="body-link">
            <button className="custom-button">{body.body_button3}</button></a>
            </div>
            <span className={styles.text2}>{body.wish}</span>
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


