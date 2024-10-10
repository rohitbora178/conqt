import React from 'react'
import styles from './Navbar.module.css';
import circle from '../assets/circle.svg'
const Navbar = () => {
  return (
    <div className={styles.header}>
<div className={styles.circleImgContainer}>
    <img  src={circle} alt='img' className={styles.circleImg}/>
</div>
<p className={styles.text}>Inventory Management System</p>
<p className={styles.text2}>Home</p>
    </div>
  )
}

export default Navbar