'use client';
import styles from './carousel.module.css'

export default function Carousel() {

  const handleClick = () =>{
    console.log("building")
  }

  return (
    <div className={styles.carouselContainer}>
        <div className={styles.movingCarousel}>
            <div className={styles.track1}>
            <div onClick={handleClick} style={{backgroundImage:'url("/card.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/35bf4b45-2e91-4312-92ce-578b6a23a952_Runi+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/spotify.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/theta.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/garage.png")'}} className={styles.carouselItem1}></div>
            </div>
            <div className={styles.track2}>
            <div onClick={handleClick} style={{backgroundImage:'url("/card.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/35bf4b45-2e91-4312-92ce-578b6a23a952_Runi+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/spotify.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/theta.png")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("/garage.png")'}} className={styles.carouselItem1}></div>
            </div>
        </div>
    </div>
  )
}
