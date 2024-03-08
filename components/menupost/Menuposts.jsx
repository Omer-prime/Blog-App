import React from 'react'
import Image from 'next/image'
import styles from "./menupost.module.css"
import Link from 'next/link'
const Menuposts = ({ withimage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
      {withimage &&  (<div className={styles.imagecontainer}>
          <Image src="/travelling.jpg" alt='' fill className={styles.img} />
        </div>)} 
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>
            Explore the world, write your story.
          </h3>
          <div className={styles.detailm}>
            <span className={styles.user}>John Doe </span>
            <span className={styles.date}> - 11.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
       {withimage &&  (<div className={styles.imagecontainer}>
          <Image src="/cult.jpg" alt='' fill className={styles.img} />
        </div>)} 
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Dive into diverse cultures.
          </h3>
          <div className={styles.detailm}>
            <span className={styles.user}>John Doe </span>
            <span className={styles.date}> - 11.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withimage &&  (<div className={styles.imagecontainer}>
          <Image src="/hist.jpg" alt='' fill className={styles.img} />
        </div>)}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.history}`}>
            History
          </span>
          <h3 className={styles.postTitle}>
            Explore history's timeless tales.
          </h3>
          <div className={styles.detailm}>
            <span className={styles.user}>John Doe </span>
            <span className={styles.date}> - 11.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withimage &&  (<div className={styles.imagecontainer}>
          <Image src="/techno.jpg" alt='' fill className={styles.img} />
        </div>)}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.techno}`}>
            Technology
          </span>
          <h3 className={styles.postTitle}>
            Tech shaping tomorrow.
          </h3>
          <div className={styles.detailm}>
            <span className={styles.user}>John Doe </span>
            <span className={styles.date}> - 11.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
      {withimage &&  (<div className={styles.imagecontainer}>
          <Image src="/crypto.jpg" alt='' fill className={styles.img} />
        </div>)}
        <div className={styles.textcontainer}>
          <span className={`${styles.category} ${styles.crypto}`}>
            Cryptocrrency
          </span>
          <h3 className={styles.postTitle}>
            Unlock the future with cryptocurrency
          </h3>
          <div className={styles.detailm}>
            <span className={styles.user}>John Doe </span>
            <span className={styles.date}> - 11.10.2023</span>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Menuposts