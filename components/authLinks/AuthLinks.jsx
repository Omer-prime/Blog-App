"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import styles from "./authLinks.module.css"
import { signOut, useSession } from 'next-auth/react';
const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  
   const {status} = useSession();
  return (
  <>
    {status === "unauthenticated" ? (
      <Link href="/login" className={styles.Link} id={styles.login}>Login</Link>
    ) : (
      <>
      <Link href ="/write" className={styles.Link}>Write</Link>
      <span className={styles.link} onClick={signOut}>Logout</span>
      </>
    )}
    <div className={styles.burger} onClick={()=>setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open &&(
      <div className={styles.responsiveMenu}>
        <Link href="/" className={styles.new}>Homepage</Link>
        <Link href="/blog" className={styles.new}>Blogs</Link>
        <Link href="/about" className={styles.new}>About</Link>
        <Link href="/contact" className={styles.new}>Contact</Link>
        {status === "authenticated" ? (
      <Link href="/login" className={styles.new} id={styles.login}>Login</Link>
    ) : (
      <>
      <Link href ="/write" id={styles.login}>Write</Link>
      <span className={styles.link} id={styles.login}>Logout</span>
      </>
    )}


      </div>
    )}
    </>
  );
};

export default AuthLinks;