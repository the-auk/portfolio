import styles from './page.module.css'
import Carousel from './carousel'
import Head from 'next/head'

export default function Home() {
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
    <Carousel />
    <Head>
      <title>Tanmay Siwach</title>
    </Head>
    </div>
  )
}
