import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    < div className={styles.Footer}>
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
        <Image />
        <h1 className={styles.logoText}>WriteVibes</h1>
        </div>
        <p className={styles.desc}>Explore the art of mindful living and unlock the secrets 
          to a more purposeful and fulfilling life on our blog</p>
          <div className={styles.icon}>
            <Image src="/facebook.png" alt="" width={18} height={18}/>
            <Image src="/instagram.png" alt="" width={18} height={18}/>
            <Image src="/tiktok.png" alt="" width={18} height={18}/>
            <Image src="/youtube.png" alt="" width={18} height={18}/>
          </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Crypto</Link>
          <Link href="/">Business</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Fashion</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">TikTok</Link>
       
        </div>
        
      </div>
     
    </div>
    </div>
  );
};

export default Footer;