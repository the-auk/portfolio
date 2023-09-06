'use client';
import { useState } from "react";
import styles from "./project.module.css";

export default function Project(props) {
    const [animation, setAnimation] = useState(`${styles.animationIn} ${styles.projectStructure}`);
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
            X
        </div>
    <div className={styles.folderParent}>
      <div className={styles.folder}>
        <div style={{backgroundImage:'url("/garage.png")'}} className={styles.heroProject}>
            <div className={styles.header}>
                <div className={styles.projectName}>
                    Testing Name
                </div>
                <div className={styles.button2}>
                    Visit
                </div>
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
