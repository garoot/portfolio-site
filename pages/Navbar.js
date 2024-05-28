import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import React from 'react';


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <ul>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Work</a></li>
                    <li><a href=''>Services</a></li>
                </ul>

                <h2>Majeed Develops</h2>

                <div className={styles.navbarButton}>
                    <div className={styles.navbarButtonButton}>
                        <a href=''>Hit Me Up!</a>
                        <Image src='/message.png' alt='hello' height={15} width={15}/>
                    </div>

                </div>
            </div>
            
        </nav>
    );
};
