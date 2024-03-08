import React from 'react'
import MenuCategories from '../menuCategories/MenuCategories'
import Menuposts from '../menupost/Menuposts'
import styles from "./menu.module.css"
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <Menuposts withimage={false}/>
      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
        <MenuCategories/>
        <h2 className={styles.subtitle}>Chosen by the editor</h2>
        <h1 className={styles.title}>Editor's Pick</h1>
       <Menuposts withimage={true}/>
     
     </div>


  );
};

export default Menu;