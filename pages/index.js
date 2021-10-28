import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HorizontalScroll from'../components/horizontal-scroll-function'

const favoriteList = [{key : '1', value :'a'}, {key : '2', value:'b'},{key : '2', value:'b'}]

export default function Home() {
  
  // Move to lib, future
  const [size, setSize] = useState(0);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    };
  },[])
  //
  

  return (
    <div className={styles.container}>
      <Head>
        <title>MOORIM-TC - The Best Engineering Partner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title} style={{fontSize : size > 800 ? '5rem' : '2.4rem'}}>
            MOORIM T.C.
          </div>
          <div style={{textAlign: 'center', fontSize : size > 800 ? '1.6rem' : '0.8rem', marginBottom:'1rem', fontFamily: 'Ubuntu-Light'}}>
            &ldquo;Your Best Engineering Partner&rdquo;
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsTitle}>From Data to ML Model</div>
            <HorizontalScroll data={favoriteList} />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsTitle}>We Can Do,</div>
            <HorizontalScroll data={favoriteList} />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsTitle}>We've Done</div>
            <HorizontalScroll data={favoriteList} />
          </div>



          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Machine Learning &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Vibration & Noise Solution &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Test Solutions &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
