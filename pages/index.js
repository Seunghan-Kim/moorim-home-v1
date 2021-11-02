import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import MainCard from '../components/main_card'
import styles from '../styles/Home.module.css'

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
          <div className={styles.subTitle} style={{fontSize : size > 800 ? '1.6rem' : '1.0rem'}}>
            &ldquo;Your Best Engineering Partner&rdquo;
          </div>
        </div>

        <div className={styles.grid}>

          <MainCard size={size} link={`/category/ai_solution?size=${size}`}>
            <h2>AI Solution</h2>
            <p>
              &bull;{' '}최신 AI 알고리즘을 활용하여 효율적이고<br/>&nbsp;&nbsp;정확한 예측을 가능하게 합니다. <br/>
              &bull;{' '}주요 Feature 분석을 통해 근본 원인을<br/>&nbsp;&nbsp;구체적으로 이해할 수 있습니다.
            </p>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>     
              <Image src="/google-2015-google-new-google-icon.svg" alt="google Logo" width={48} height={16} />  {/* 3 */}
              <div style={{width:18}}></div>
              <Image src="/catboost.png" alt="google Logo" width={76} height={32} />  {/* 2.378 */}
              <Image src="/tensorflow.png" alt="google Logo" width={76} height={32} />  {/* 2.14 */}
            </div>
          </MainCard>

          <MainCard size={size} link={`/category/eng_solution?size=${size}`}>            
            <h2>Engineering Solution</h2>
            <p>
              &bull;{' '}진동, 소음 관련 Field 문제에 대한 기술적<br/>&nbsp;&nbsp;해결책을 제공합니다.<br/>
              &bull;{' '}솔루션에 필요하다면 맞춤형 S/W 또는<br/>&nbsp;&nbsp; 디바이스 구축도 가능합니다 
            </p>            
          </MainCard>

          <MainCard size={size} link={`/category/test_solution?size=${size}`}>            
            <h2>Test Solution</h2>
            <p>
              &bull;{' '}전통적인 계측 시스템을 이용한 각종 신호<br/>&nbsp;&nbsp;계측 서비스를 제공합니다.<br/>
              &bull;{' '}최신 무선센서와 모바일기기를 이용한 혁신<br/>&nbsp;&nbsp;적인 계측시스템 구성도 가능합니다.<br/>
            </p>    
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:'0.2rem'}}>     
              <Image src="/bluetooth.png" alt="google Logo" width={72} height={18} />  {/* 3 */}
              <div style={{width:18}}></div>
              <Image src="/android.png" alt="google Logo" width={114} height={16} />  {/* 2.378 */}
            </div>        
          </MainCard>

          <MainCard size={size} link={`/category/sw_solution?size=${size}`}>            
            <h2>S/W Solution</h2>
            <p>
              &bull;{' '}반복적이고 정형화된 데이터 처리 업무에<br/>&nbsp;&nbsp;특화된 S/W를 제작합니다.<br/>
              &bull;{' '}업무 효율성의 획기적 증가와 함께 데이터에<br/>&nbsp;&nbsp;대한 새로운 접근이 가능해집니다.
            </p>            
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:'0.2rem'}}>     
              <Image src="/python.png" alt="google Logo" width={72} height={18} />  {/* 3 */}
              <div style={{width:18}}></div>
              <Image src="/javascript.png" alt="google Logo" width={42} height={18} />  {/* 2.378 */}
            </div>     
          </MainCard>

          <MainCard size={size} link={`/category/training_program?size=${size}`}>            
            <h2>Training Program</h2>
            <p>
              &bull;{' '}엔지니어에게 특화된 실무적인 코딩 강의를<br/>&nbsp;&nbsp;제공합니다.<br/>
              &bull;{' '}코딩 강의를 통해 데이터 처리, 분석 및 시각<br/>&nbsp;&nbsp;화등이 가능하게 됩니다.
            </p>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', paddingTop:'0.2rem'}}>     
              <Image src="/python.png" alt="google Logo" width={72} height={18} />  {/* 3 */}
              <div style={{width:18}}></div>
              <Image src="/javascript.png" alt="google Logo" width={42} height={18} />  {/* 2.378 */}
            </div>                 
          </MainCard>

          <div className={styles.portfolio}>
            <Link href={'/category/portfolio'}>
              <h2>Portfolio</h2>
            </Link> 
          </div>

          {/* <MainCard size={size} link={`/category/portfolio?size=${size}`}>            
            <h2>Portfolio</h2>
            <p>
              저희 무림티씨에서 수행해왔던 과제를 소개합니다.
            </p>            
          </MainCard> */}

        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerDesc}>
          무림티씨 / shkim@moorim-tc.com
        </div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={54} height={12} />
            {'    '}
            <Image src="/google-2015-google-new-google-icon.svg" alt="google Logo" width={36} height={12} />
          </span>
        </a>
      </footer>
    </div>
  )
}
