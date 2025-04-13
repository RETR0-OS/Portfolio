import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="about" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")}/>
                        <div>
                            <h3>Backend Developer</h3>
                            <p>Specializing in Django, Flask and RESTful APIs for scalable and enterprise applicaitons</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/brainIcon.png")}/>
                        <div>
                            <h3>Generative AI Engineer</h3>
                            <p>Experienced in developing and deploying machine learning models, NLP, and generative AI solutions</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")}/>
                        <div>
                            <h3>Front Developer</h3>
                            <p>Proficient in HTML, CSS, JavaScript, React with expertise in modern CSS frameworks like Bootstrap and Tailwind</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
