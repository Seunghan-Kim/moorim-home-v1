import Carrier from "../../components/cat_carrier";
import { useRouter } from 'next/router';
import styles from "../../styles/CatEach.module.css";

export default function TrainingProgram() {

    const router = useRouter()
    const size = router.query.size

    return (
        <Carrier header={"Training Program"} size={size}>
            
            <div style={{textAlign:'center', fontSize:'0.8rem'}}>
                &ldquo;엔지니어 출신으로부터 실전 코딩 기술을 교육 받으실 수 있습니다.&rdquo;
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#1 PYTHON 강좌 </div>
                <div className={styles.text}>                    
                    &nbsp;엔진니어링 업무에 특화된 Python 강좌입니다. 기존 장비에서 수집된 데이터를 불러와서 가공, 분석 및 결과도출하는 일련의 과정에 대해 학습합니다.<br/>
                    &nbsp;이 강좌를 수강하면 데이터 임포팅부터 시각화까지의 모든 프로세스에 대한 코딩이 가능해집니다.
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;Pandas, Numpy, Scikit-learn<br/>
                    &bull;&nbsp;Holoviews, Altair, Matplotlib<br/>
                </div>
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#2 JAVASCRIPT 강좌 </div>
                <div className={styles.text}>                    
                    &nbsp;JAVASCRIPT를 수강하면 웹어플리케이션 및 모바일어플리케이션 제작이 가능합니다.<br/>
                    &nbsp;React.js, Next.js와 같은 최신 Framework 교육이 병행됩니다.
                </div>
                {/* <div className={styles.examples}>
                    &bull;&nbsp;Pandas, Numpy, Scikit-learn<br/>
                    &bull;&nbsp;Holoviews, Altair, Matplotlib<br/>
                </div> */}
            </div>
            
            <footer className={styles.footer}>
                <div className={styles.footerDesc}>
                무림티씨 / shkim@moorim-tc.com
                </div>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                {/* Powered by{' '} */}
                {/* <span className={styles.logo}> */}
                    {/* <Image src="../vercel.svg" alt="Vercel Logo" width={54} height={12} /> */}
                    {'    '}
                    {/* <Image src="/google-2015-google-new-google-icon.svg" alt="google Logo" width={36} height={12} /> */}
                {/* </span> */}
                </a>
            </footer>
        </Carrier>
    )
}