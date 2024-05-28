import styles from '../styles/bio.module.css';
import Image from 'next/image';
import React from 'react';


export default function BioPage() {
    return (
        <div className={styles.bioMain}>
            <div className={styles.bio}>
                <div className={styles.achievements}>
                    <div className={styles.header}>
                        <h2>Certificates</h2>
                        <Image src='/certificate.png' alt='Certificates' height={50} width={50}/>
                    </div>

                    <div className={styles.certificates}>
                        
                        <div className={styles.certificate}>
                            <p>Master of Data Science (Current)</p>
                            <Image src='/deakin.png' alt='Deakin' height={35} width={35}/>
                        </div>

                        <div className={styles.certificate}>
                            <p>Bachelor of Computer Science</p>
                            <Image src='/uvic.png' alt='UVic' height={35} width={35}/>
                        </div>

                        <div className={styles.dojoCertificate}>
                            <p>Full-Stack Dev Bootcamp</p>
                            <Image src='/codingdojo.png' alt='CodingDojo' height={20} width={50}/>
                        </div>

                    </div>
                </div>

                <div className={styles.bioContent}>
                    <div className={styles.headline}>
                        <h1><span className={styles.highlight}>01.</span> About Me</h1>
                        <p>Transform setbacks into comeacks</p>
                    </div>
                    <div className={styles.bioContentBody}>
                        <p className={styles.introduction}>
                        Hey I&apos;m Majeed - a creative full-stack engineer, originally from Jeddah, Saudi Arabia. 
                        </p>
                        <p>
                        I focus on crafting seamless web applications, from concept and design to deployment on the cloud using GCP, Docker, and CI/CD pipelines.
                        I&apos;ve delivered innovative solutions for the fitness, photography, and e-learning sectors.
                        </p>
                    </div>
                </div>

                <div className={styles.bioImage}>
                    <Image src='/character9.png' alt='characterImage' height={100} width={65} />
                </div>

            </div>

        </div>
        
    );
}
