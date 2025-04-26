import React from 'react'
import {GitHub,  LinkedIn, YouTube, Twitter, Facebook, Instagram} from '@mui/icons-material';
import { Social } from '../data/social'
import styles from '../styles/footer.module.css'

// footer components 
function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.socialMediaWrapper}>
            <a className={styles.socialMediaIcon} href={Social.github} target='_blank'><GitHub /></a>
            <a className={styles.socialMediaIcon} href={Social.linkedin} target='_blank'><LinkedIn /></a>
            <a className={styles.socialMediaIcon} href={Social.youtube} target='_blank'><YouTube /></a>
            <a className={styles.socialMediaIcon} href={Social.twitter} target='_blank'><Twitter /></a>
            <a className={styles.socialMediaIcon} href={Social.facebook} target='_blank'><Facebook /></a>
            <a className={styles.socialMediaIcon} href={Social.instagram} target='_blank'><Instagram /></a>
          </div>
          <div className={styles.copyright}>
            <span>&copy; 2023 </span>
            <span>All rights reserved.</span>
            <span>A Family of Love & Affection. </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer