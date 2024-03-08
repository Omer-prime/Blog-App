import React from 'react'
import Image from 'next/image';
import styles from "./featured.module.css"
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> "Welcome to WriteVibes,</b> where we explore, inspire, and engage with a world of captivating stories and insightful perspectives!"</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/img.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Endless Horizons and Timeless Mysteries: The Sea</h1>
          <p className={styles.postdesc}>The sea, with its endless horizon and soothing waves, whispers stories of distant shores and timeless mysteries.
             Its boundless expanse holds the secrets of a thousand adventures, waiting to be explored. With every crashing wave,
              the sea offers a timeless melody, serenading all who listen. Its ever-changing colors and moods make the sea a constant source of wonder and inspiration.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;