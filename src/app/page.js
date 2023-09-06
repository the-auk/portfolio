"use client";
import styles from './page.module.css'
import Carousel from './carousel'
import Project from './project'
import Head from 'next/head'
import {useState} from 'react';

export default function Home() {
  const [active, setActive] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const handleClickOpen = (propsId) =>{
    setProjectId(propsId)
    setActive(true)
  }
  const handleClickClose = () =>{
    setProjectId(null)
    setActive(false)
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <a target="_blank" href='https://github.com/the-auk' className={styles.button1}>
          Github
        </a>
        <div className={styles.name}>
          <span>Tanmay</span><span>Siwach</span>
        </div>
        <a target="_blank" href='https://www.linkedin.com/in/tanmaysiwach' className={styles.button2} >
          LinkedIn
        </a>
      </div>
    <Carousel handleClickOpen={handleClickOpen} />
    {active && projectId!=null && <Project handleClickClose={handleClickClose} projectId={projectId} />}
    <Head>
      <title>Tanmay Siwach</title>
    </Head>
    </div>
  )
}
