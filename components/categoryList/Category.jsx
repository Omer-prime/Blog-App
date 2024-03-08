
import React from 'react';
import styles from "./category.module.css";
import Link from 'next/link';
import Image from 'next/image';
const getData = async () =>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"default",
  });
  
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
};
const Category = async() => {
 const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
      {data?.map((item)=>(
        <Link href="/blog?cat=style" className={`${styles.category} ${styles[item.slug]}`}
        key={item._id}
        >
         {item.img &&( <Image src={item.img}
            alt="style"
            width={42}
            height={29}
            className={styles.image}
          />)}
          <a className={styles.a}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            {item.title}
          </a>
        </Link>
      ))}
        
        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
          <Image src="/style.png"
            alt="fashion"
            width={42}
            height={35}
            className={styles.image}
          />
        <a className={styles.a}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
        Style
        </a> 
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png"
            alt="culture"
            width={35}
            height={35}
            className={styles.image}
          />
         <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
         Culture
         </a>
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png"
            alt="food"
            width={38}
            height={32}
            className={styles.image}
          />
        <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Food</a> 
        </Link> 
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png"
            alt="travel"
            width={42}
            height={32}
            className={styles.image}
          />
         <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
         Travel
         </a> 
        </Link>
        <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png"
            alt="coding"
            width={32}
            height={32}
            className={styles.image}
          />
        <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Coding
        </a>
        </Link>
        <Link href="/blog?cat=technology" className={`${styles.category} ${styles.coding}`}>
          <Image src="/tech.png"
            alt="tecgnology"
            width={42}
            height={42}
            className={styles.image}
          />
        <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Technology
        </a> 
        </Link>
        <Link href="/blog?cat=astronomy" className={`${styles.category} ${styles.coding}`}>
          <Image src="/asrtro.png"
            alt="astronomy"
            width={52}
            height={42}
            className={styles.image}
          />
        <a className={styles.a}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        Astronmy</a>  
        </Link>
        <Link href="/blog?cat=physics" className={`${styles.category} ${styles.coding}`}>
          <Image src="/phy.png"
            alt="physics"
            width={32}
            height={32}
            className={styles.image}
          />
        <a className={styles.a}>
        <span></span>
            <span></span>
            <span></span>
            <span></span> 
        Physics
        </a>  
        </Link>
        <Link href="/blog?cat=chemistry" className={`${styles.category} ${styles.coding}`}>
          <Image src="/chem.png"
            alt="chemistry"
            width={32}
            height={32}
            className={styles.image}
          />
        <a className={styles.a}>
        <span></span>
            <span></span>
            <span></span>
            <span></span> Chemistry</a> 
        </Link>
        <Link href="/blog?cat=biology" className={`${styles.category} ${styles.coding}`}>
          <Image src="/bio.png"
            alt="biology"
            width={32}
            height={32}
            className={styles.image}
          />
         <a className={styles.a}> 
         <span></span>
            <span></span>
            <span></span>
            <span></span>
         Biology</a>
        </Link>
        <Link href="/blog?cat=agriculture" className={`${styles.category} ${styles.coding}`}>
          <Image src="/agri.png"
            alt="agriculture"
            width={32}
            height={32}
            className={styles.image}
          />
         <a className={styles.a}>
         <span></span>
            <span></span>
            <span></span>
            <span></span>
          Agriculture</a> 
        </Link>
        <Link href="/blog?cat=wildlife" className={`${styles.category} ${styles.coding}`}>
          <Image src="/wild.png"
            alt="wildlife"
            width={62}
            height={42}
            className={styles.image}
          />
          <a href="#" className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Wildlife
          </a>
         
        </Link>
        <Link href="/blog?cat=healthcare" className={`${styles.category} ${styles.coding}`}>
          <Image src="/care.png"
            alt="health and care"
            width={62}
            height={42}
            className={styles.image}
          />
          <a href="#" className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Health care
          </a>
         
        </Link>
        <Link href="/blog?cat=history" className={`${styles.category} ${styles.coding}`}>
          <Image src="/history.png"
            alt="history"
            width={62}
            height={42}
            className={styles.image}
          />
          <a href="#" className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            History
          </a>
         
        </Link>
        <Link href="/blog?cat=crypto" className={`${styles.category} ${styles.coding}`}>
          <Image src="/stock.jpg"
            alt="crypto"
            width={45}
            height={42}
            className={styles.image} id={styles.img}
          />
          <a href="#" className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Crypto
          </a>
         
        </Link>
        <Link href="/blog?cat=business" className={`${styles.category} ${styles.coding}`}>
          <Image src="/busines.jpg"
            alt="business"
            width={45}
            height={42}
            className={styles.image} id={styles.img}
          />
          <a href="#" className={styles.a}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Business
          </a>
         
        </Link>  

      </div>
    </div>
  );
};
export default Category