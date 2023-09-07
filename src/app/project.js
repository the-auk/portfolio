'use client';
import { useState, useEffect } from "react";
import styles from "./project.module.css";
import {projects} from "./projectsData";

export default function Project(props) {
    const [animation, setAnimation] = useState(`${styles.animationIn} ${styles.projectStructure}`);
    const [projectData, setProjectData] = useState(null);

    useEffect(()=>{
      let temp = {
        'name':projects[props.projectId].name,
        'description':projects[props.projectId].description,
        'url':projects[props.projectId].url
      }
      setProjectData(temp);
    }, [])

    const handleClose = () =>{
      setAnimation(`${styles.animationOut} ${styles.projectStructure}`)
      setTimeout(()=>{
        props.handleClickClose()
      }, 350)
    }

  return (
    <div className={styles.project}>
        <div className={animation}>
        <div onClick={handleClose} className={styles.cross}>
        <svg style={{width:"4vh", height:"4vh"}} x="0px" y="0px" viewBox="0 0 70 70">
          <path d="M-212.8,298.3"/>
          <g><path d="M46.2,28.4c-4,3-8,6.4-11.8,10.1C32.1,34.9,30,31,28.2,27c-0.4-0.8-1.3-1.2-2.2-0.8c-0.8,0.4-1.4,1.4-0.9,2.4   c2,4.4,4.2,8.6,6.7,12.6c-2.5,2.6-5,5.4-7.4,8.3c-0.6,0.7-0.5,1.8,0.3,2.4c0.7,0.6,1.6,0.5,2.2-0.2c2.1-2.6,4.4-5.1,6.8-7.6   c2.4,3.5,5,7,8.2,9.7c0.3,0.3,0.7,0.4,1,0.4c0.4,0,0.8-0.2,1.2-0.5c0.6-0.5,0.6-1.4,0.2-2c-1.2-1.6-2.4-3.1-3.6-4.6   c-1.5-1.8-3-3.7-4.4-5.6c3.6-3.6,7.6-7.1,11.8-10.4c0.7-0.5,0.7-1.5,0.2-2.2C47.8,28.1,46.8,27.9,46.2,28.4z"/><path d="M62.6,35.2c-1.2-8.4-6-17.9-14.7-20.2c-0.1-0.1-0.3-0.2-0.5-0.2c-7.9-2.1-15.4-2.8-23,0.5c-7.1,3.1-13,7.6-15.7,15   C4.9,40.9,8.4,56,17.6,63c9.5,7.2,26.9,3.7,35.8-3.4C60.8,53.8,63.8,44.4,62.6,35.2z M55.1,51.9c-5.7,8.4-16.8,10.9-26.4,10.6   C17.8,62.2,12,51.2,11.2,41.4c-0.7-9.1,3.6-16.6,11.5-20.9c7.8-4.3,15.1-4.3,23.7-2.2c0.1,0,0.2,0,0.2,0C59,23.1,62,41.8,55.1,51.9z"/></g></svg>
        </div>
    <div className={styles.folderParent}>
      <div className={styles.folder}>
        <div className={styles.folderFront}>
        <div className={styles.heroProject}>
          <div className={styles.absoluteBgWrapper}>
          <div style={{backgroundImage:`url(${projectData?.url})`}} className={styles.absoluteBg} /></div>
            <div className={styles.header}>
                <div className={styles.projectName}>
                    {projectData?.name}
                </div>
                <div className={styles.button2}>
                    Visit
                </div>
            </div>
        </div>
        <div className={styles.projectText}>
          {projectData?.description} 
        </div>
      </div>
      </div>
      <svg className={styles.flt_svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      </div>
      </div>
    </div>
  );
}
