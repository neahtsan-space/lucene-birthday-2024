import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { topic } from '../params/header_params';
import styles from './index.module.css'; // Import CSS module

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.photoContainer}>
              {/* Photo Content */}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.buttons}>
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
            </div>
            <div className={styles.photoContainer}>
              {/* Photo Content */}
            </div>
            <div className={styles.photoContainer}>
              {/* Photo Content */}
            </div>
            <div className={styles.photoContainer}>
              {/* Photo Content */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;