import Carrier from "../../components/cat_carrier";
import { useRouter } from 'next/router';
import styles from "../../styles/CatEach.module.css";


export default function TestSolution() {

    const router = useRouter()
    const size = router.query.size

    return (
        <Carrier header={"Test Solution"} size={size}>
    
            <div style={{textAlign:'center', fontSize:'0.8rem'}}>
                &ldquo;각종 신호 계측에 있어 가장 적절한 솔루션을 제공합니다.<br/>
                앱제작 기술, 무선센서 연결기술을 활용하면<br/>기존 장비로 어려운 것도 할 수 있습니다&rdquo;
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#1 고정밀 데이터 계측 </div>
                <div className={styles.text}>                    
                    &nbsp;고성능 데이터 수집기와 센서를 이용하여 고정밀 데이터 계측이 가능합니다.
                    특히 자동차 혹은 로봇과 같이 다이나믹한 운전조건 환경 속에서 가속도, 속도, 변위와 같은
                    물리량 측정에 대한 풍부한 노하우를 보유하고 있습니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;기계장치 작동중 고무부품 변형 및 하중 측정<br/>
                    &bull;&nbsp;기계장치의 작동중 진동 형상 측정 및 시각화<br/>
                </div>
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#2 ML 학습용 데이터 계측 </div>
                <div className={styles.text}>                    
                    &nbsp;전통적인 데이터 계측시스템으로는 머신러닝을 위한 양질의 데이터 수집이 어려운 경우가 많습니다.
                    특히, 시스템의 물리량과 사람의 감정과 같이 서로 다른 Source에서 발생하는 데이터를 동시에 측정해야만 하는 경우가 그렇습니다.<br/>
                    &nbsp;저희 무림티씨는 모바일디바이스, 모바일앱, 무선센서를 조합하여 다양한 Source의 신호를 동시에 측정할 수 있는 경험과 기술이 있습니다.
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;장치 작동 시, 사용자 감정상태 및 생체신호 동시 계측<br/>
                </div>
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#3 특수목적 계측 시스템 구축 </div>
                <div className={styles.text}>                    
                    &nbsp;최신 모바일디바이스를 이용하면 복잡한 계측, 분석, 데이터저장을 간편하게 처리할 수 있습니다.<br/>
                    고객 요구사항에 맞춰진 전용 App으로 문제 상황에 특화된 계측시스템을 구축할 수 있으며, 
                    필요한 거의 모든 수준의 데이터 분석도 실시간으로 처리할 수 있습니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;각종 소음/진동 모니터링 시스템<br/>
                </div>
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