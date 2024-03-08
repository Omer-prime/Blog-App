import React from 'react';
import page from '@/app/blog/page';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import About from '@/app/about/page';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
      <Image src="/facebook.png" alt='facebook' width={23} height={23}/>
      <Image src="/instagram.png" alt='instagram' width={25} height={25}/>
      <Image src="/tiktok.png" alt='tiktok' width={25} height={25}/>
      <Image src="/youtube.png" alt='youtube' width={25} height={25}/>
    </div>
    <div className={styles.logo}>WriteVibes</div>
    <div className={styles.links}>
      <ThemeToggle/>
      <Link href="/" className={styles.link} id={styles.link2}>Homepage</Link>
      <Link href="/blog" className={styles.link}id={styles.link2}>Blogs</Link>
      <Link href="/about" className={styles.link}id={styles.link2}>About</Link>
      <Link href="/contact" className={styles.link}id={styles.link2}>Contact</Link>
      <AuthLinks/>
    </div>
    </div>
  );
};

export default Navbar;