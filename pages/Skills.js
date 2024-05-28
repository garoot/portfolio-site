import { useEffect, useState } from 'react';
import styles from '../styles/skills.module.css';
import React from 'react';


export default function SkillsPage() {

    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (index) => {
        setActiveButton(index);
    }

    return (
        <div className={styles.skillsMain}>
            <div className={styles.skills}>
                <div className={styles.tabsContainer}>
                    <div className={styles.verTabs}>
                        <button className={activeButton === 0? styles.clicked : ''} onClick={() => handleClick(0)}>
                            Frontend
                        </button>
                        <button className={activeButton === 1? styles.clicked : ''} onClick={() => handleClick(1)}>
                            Backend
                        </button>
                        <button className={activeButton === 2? styles.clicked : ''} onClick={() => handleClick(2)}>
                            Design & Prototype
                        </button>
                        <button className={activeButton === 3? styles.clicked : ''} onClick={() => handleClick(3)}>
                            Collaboration
                        </button>
                        <button className={activeButton === 4? styles.clicked : ''} onClick={() => handleClick(4)}>
                            Deployment
                        </button>
                        <button className={activeButton === 5? styles.clicked : ''} onClick={() => handleClick(5)}>
                            Honorable Mentions
                        </button>
                    </div>
                </div>
                
                <div className={styles.skillsContent}>
                    <div className={styles.headline}>
                        <h1><span className={styles.highlight}>02.</span> Skills </h1>
                        <p>A problem is an opportunity for you to excel</p>
                    </div>
                    <p className={styles.skillsIntro}>
                        I specialize in the MERN stack, harnessing HTML, CSS, and JavaScript to deliver cohesive and dynamic web applications. 
                    </p>

                    <div className={styles.skillsIcons}>

                        <div className={activeButton === 0? styles.skillIcon : styles.hidden}>
                            <img src='/html.png' alt='' />
                            <p>HTML</p>
                        </div>

                        <div className={activeButton === 0? styles.skillIcon : styles.hidden}>
                            <img src='/css.png' alt='' />
                            <p>CSS</p>
                        </div>

                        <div className={activeButton === 0? styles.skillIcon : styles.hidden}>
                            <img src='/javascript.png' alt='' />
                            <p>JavaScript</p>
                        </div>

                        <div className={activeButton === 0? styles.skillIcon : styles.hidden}>
                            <img src='/nextjs.png' alt='' />
                            <p>Next.js</p>
                        </div>

                        <div className={activeButton === 0? styles.skillIcon : styles.hidden}>
                            <img src='/react.png' alt=''  />
                            <p>React.js</p>
                        </div>

                        <div className={activeButton === 1? styles.skillIcon : styles.hidden}>
                            <img src="/express.png" alt=""  />
                            <p>Express.js</p>
                        </div>

                        <div className={activeButton === 1? styles.skillIcon : styles.hidden}>
                            <img src='/mongodb.png' alt='' />
                            <p>MongoDB</p>
                        </div>

                        <div className={activeButton === 2? styles.skillIcon : styles.hidden}>
                            <img src="/adobexd.png" alt="" />
                            <p>AdobeXD</p>
                        </div>

                        <div className={activeButton === 3? styles.skillIcon : styles.hidden}>
                            <img src='/git.png' alt='' />
                            <p>Git</p>
                        </div>

                        <div className={activeButton === 3? styles.skillIcon : styles.hidden}>
                            <img src="/trello.png" alt="" />
                            <p>Trello</p>
                        </div>

                        <div className={activeButton === 4? styles.skillIcon : styles.hidden}>
                            <img src='/docker.png' alt='' />
                            <p>Docker</p>
                        </div>

                        <div className={activeButton === 4? styles.skillIcon : styles.hidden}>
                            <img src='/bitbucket.png' alt='' />
                            <p>Bitbucket</p>
                        </div>

                        <div className={activeButton === 4? styles.skillIcon : styles.hidden}>
                            <img src='/terraform.png' alt='' />
                            <p>Terraform</p>
                        </div>

                        <div className={activeButton === 4? styles.skillIcon : styles.hidden}>
                            <img src='/kubernetes.png' alt='' />
                            <p>Kubernetes</p>
                        </div>

                        <div className={activeButton === 4? styles.skillIcon : styles.hidden}>
                            <img src='/azure.png' alt='' />
                            <p>Azure</p>
                        </div>

                        <div className={activeButton === 5? styles.skillIcon : styles.hidden}>
                            <img src='/photoshop.png' alt='' />
                            <p>Photoshop</p>
                        </div>
                        <div className={activeButton === 5? styles.skillIcon : styles.hidden}>
                            <img src='/aftereffects.png' alt=''/>
                            <p>After Effects</p>
                        </div>
                        <div className={activeButton === 5? styles.skillIcon : styles.hidden}>
                            <img src='/premiere.png' alt='' />
                            <p>Premiere Pro</p>
                        </div>



                    </div>
                </div>



            </div>

        </div>
        
    );
};

