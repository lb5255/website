import React from 'react';
import styles from './Home.module.css'; // Import CSS Module

const Home = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.center} > 
        <h1 className={styles.title}> 
          Hi, my name is <span className={styles.name}> Lea Boyadjian</span>. <br/> 
          I'm a software engineer.
        </h1>
        <a className={styles.ghostbutton} href="/about">View my work →</a>
      </div>

    </div>
  );
};

export default Home;
