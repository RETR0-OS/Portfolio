import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2 >Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email"/>
                <a href="mailto:aadityajindal12@gmail.com" target="_blank">aadityajindal12@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin"/>
                <a href="https://linkedin.com/in/aadityajindal12" target="_blank">linkedin.com/in/aadityajindal12</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github"/>
                <a href="https://github.com/RETR0-OS" target="_blank">github.com/RETR0-OS</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
