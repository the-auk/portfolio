'use client';
import styles from './carousel.module.css'

export default function Carousel(props) {

  const handleClick = (e) =>{
    props.handleClickOpen(e.target.id)
  }

  return (
    <div className={styles.carouselContainer}>
        <div className={styles.movingCarousel}>
            <div className={styles.track1}>
            <div id={101} onClick={handleClick} style={{backgroundImage:'url("/card.png")'}} className={styles.carouselItem1}></div>
            <div id={102} onClick={handleClick} style={{backgroundImage:'url("/jpt1.jpg")'}} className={styles.carouselItem2}></div>
            <div id={103} onClick={handleClick} style={{backgroundImage:'url("/spotify.png")'}} className={styles.carouselItem1}></div>
            <div id={104} onClick={handleClick} style={{backgroundImage:'url("/vritra.jpg")'}} className={styles.carouselItem2}></div>
            <div id={105} onClick={handleClick} style={{backgroundImage:'url("/theta.png")'}} className={styles.carouselItem1}></div>
            <div id={106} onClick={handleClick} style={{backgroundImage:'url("/tourism.jpg")'}} className={styles.carouselItem2}></div>
            <div id={107} onClick={handleClick} style={{backgroundImage:'url("/garage.png")'}} className={styles.carouselItem1}></div>
            </div>
            <div className={styles.track2}>
            <div id={101} onClick={handleClick} style={{backgroundImage:'url("/card.png")'}} className={styles.carouselItem1}></div>
            <div id={102} onClick={handleClick} style={{backgroundImage:'url("/jpt1.jpg")'}} className={styles.carouselItem2}></div>
            <div id={103} onClick={handleClick} style={{backgroundImage:'url("/spotify.png")'}} className={styles.carouselItem1}></div>
            <div id={104} onClick={handleClick} style={{backgroundImage:'url("/vritra.jpg")'}} className={styles.carouselItem2}></div>
            <div id={105} onClick={handleClick} style={{backgroundImage:'url("/theta.png")'}} className={styles.carouselItem1}></div>
            <div id={106} onClick={handleClick} style={{backgroundImage:'url("/tourism.jpg")'}} className={styles.carouselItem2}></div>
            <div id={107} onClick={handleClick} style={{backgroundImage:'url("/garage.png")'}} className={styles.carouselItem1}></div>
            </div>
        </div>
    </div>
  )
}
