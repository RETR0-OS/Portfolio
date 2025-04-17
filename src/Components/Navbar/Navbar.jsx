import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'
import {getImageUrl} from '../../utils'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href='/' className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img 
              className={styles.menuIcon} 
              src={isMenuOpen?getImageUrl("nav/closeIcon.png"):getImageUrl('nav/menuIcon.png')} 
              alt="Menu Icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <ul className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ''}`}
              onClick={() => setIsMenuOpen(false)}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
