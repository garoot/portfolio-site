import styles from '../styles/work.module.css'
import React from 'react'
import Image from 'next/image'

export default function WorkPage() {
    return (
        <div className={styles.work}>
            <div className={styles.headline}>
                <h1><span className={styles.highlight}>03.</span>Things I&apos;ve Built</h1>
                <p>Transform setbacks into comebacks</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Image 
                        src="/malakphoto.png" 
                        className={styles.cardImage} 
                        alt="Malak Photo Project"
                        width={500} // Add appropriate width
                        height={300} // Add appropriate height
                    />
                    <div className={styles.cardContent}>
                        <div className={styles.contentHeader}>
                            <p className={styles.highlight}>Client Project</p>
                            <h3>Malak Photo</h3>
                        </div>
                        <div className={styles.contentBody}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, possimus vitae odit vero molestiae accusamus nostrum molestias libero perspiciatis aspernatur!</p>
                        </div>
                        <div className={styles.cardButtons}>
                            <div className={styles.cardButton}>
                                <a href="">Github</a>
                            </div>
                            <div className={styles.cardButton}>
                                <a href="">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
