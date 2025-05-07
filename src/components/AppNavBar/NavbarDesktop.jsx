import React from 'react'
import { NavLink } from 'react-router-dom'
import resume_builder from '../../assets/image.jpg'
import styles from '../../styles/navbar.module.css'

// navbar for device of screen size greater than mobile size 
function NavbarDesktop() {
    return (
        <div className={styles.navbarContainer}>
            <NavLink to={'/'} className={styles.logoWrapper}>
                <img
                    className={styles.logoImg}
                    src={resume_builder}
                    alt="logo"
                />
                <div className={styles.logo}>Resume Builder</div>
            </NavLink>
            <div className={styles.navLinksGroup}>
                <NavLink to={"/"} className={styles.navEachLink} > Home </NavLink>
                <NavLink to={"/filldetails"} className={styles.navEachLink} > Fill Details </NavLink>
                <NavLink to={"/myresume"} className={styles.navEachLink}>My Resume </NavLink>
                <NavLink to={"/about"} className={styles.navEachLink}>About </NavLink>
            </div>


            

        </div>
    )
}

export default NavbarDesktop