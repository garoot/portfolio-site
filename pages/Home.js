import styles from '../styles/HomePage.module.css';
import Image from 'next/image';
import React from 'react'



export default function HomePage() {
    return (
        <div className={styles.home}>

            <div className={styles.content}>
                <Image src='/character9.png' alt='' width={200} height={300}/>

                <p>Passionate about creating web solutions, I focus on enhancing business 
                    workflows with tailored digital platforms that drive growth</p>

                <div className={styles.buttons}>
                    <div className={styles.aboutMe} onClick={() => {console.log('About Me clicked..')}}>
                        <a href=''>About Me</a>
                    </div>
                    <div className={styles.hitMe}>
                        <a href=''>Hit Me Up!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

