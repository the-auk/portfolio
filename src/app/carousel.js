'use client';
import styles from './carousel.module.css'

export default function Carousel() {

  const handleClick = () =>{
    console.log("click")
  }

  return (
    <div className={styles.carouselContainer}>
        <div className={styles.movingCarousel}>
            <div className={styles.track1}>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/398f3cb3-02b7-4888-94e8-9922c80cac43_Jolie+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/35bf4b45-2e91-4312-92ce-578b6a23a952_Runi+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/cc116a8a-d94a-4be7-bb98-b3e440f1dfb6_Knowell+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/9bd254b8-ddc5-4d38-b297-fcc6ac2c241f_Proper+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            </div>
            <div className={styles.track2}>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/398f3cb3-02b7-4888-94e8-9922c80cac43_Jolie+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/35bf4b45-2e91-4312-92ce-578b6a23a952_Runi+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/cc116a8a-d94a-4be7-bb98-b3e440f1dfb6_Knowell+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/8ccc4bdb-ad6d-47a0-ae1c-77ec8e479c02_Aurate+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem2}></div>
            <div onClick={handleClick} style={{backgroundImage:'url("https://images.prismic.io/unspoken-agreement/9bd254b8-ddc5-4d38-b297-fcc6ac2c241f_Proper+-+Homepage+Carousel.jpg?auto=compress,format")'}} className={styles.carouselItem1}></div>
            </div>
        </div>
    </div>
  )
}
