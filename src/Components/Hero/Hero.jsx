import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Aaditya Jindal</h1>
            <p className={styles.description}>I am a full-stack developer specializing in Generative AI, Django, React.</p>
            <a className={styles.contactBtn} href="mailto:aadityajindal12@gmail.com">Get in Touch</a>
        </div>
        <img 
            src={getImageUrl('hero/heroImage.png')} 
            alt="Hero" className={styles.heroImage}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}

export default Hero
