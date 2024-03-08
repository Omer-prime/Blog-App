import React from 'react'
import Link from 'next/link'
import styles from "./menucategories.module.css"
const MenuCategories = () => {
  return (
    <div className={styles.container}>
              <div className={styles.categoryList}>
        <Link
          href="/blog?cat=business" className={`${styles.categoryItem} ${styles.bus}`}>
          Business
        </Link>
        <Link
          href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link
          href="/blog?cat=crypto" className={`${styles.categoryItem} ${styles.crypto}`}>
          Crypto
        </Link>
        <Link
          href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fash}`}>
          Fashion
        </Link>
        <Link
          href="/blog?cat=technology" className={`${styles.categoryItem} ${styles.tech}`}>
          Technology
        </Link>
        </div>
    </div>
  )
}

export default MenuCategories