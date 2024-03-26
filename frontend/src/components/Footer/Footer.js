import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  const date= new Date()
  const year = date.getFullYear()
    return (
    <div className={styles.footer}> &copy; {year}  
       <span> All Rights Reserved</span>
    
    </div>
  )
}

export default Footer