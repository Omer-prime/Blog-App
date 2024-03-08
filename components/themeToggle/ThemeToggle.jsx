"use client"
import Image from 'next/image';
import styles from "./themeToggle.module.css";
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';


const ThemeToggle = () => {

const { toggle,theme } = useContext(ThemeContext)
console.log(theme)
  return (
    <div className={styles.container} onClick={toggle}
    style={
      theme === "dark" ? {backgroundColor:"white"} : {backgroundColor:"#0f172a"}
    }>
       <Image src="/moon.png" alt='moon' width={16} height={19} className={styles.img}/> 
       <div className={styles.ball}
       style={
        theme === "dark"
        ? {left:1, background:"#0f172a"}
        : {right:1, background:"white"}
       }></div>
       <Image src="/sun.png" alt='moon' width={17} height={21} className={styles.img}/> 
    </div>
  );
}

export default ThemeToggle