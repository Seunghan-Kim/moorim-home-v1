import Carrier from "../../components/cat_carrier";
import { useRouter } from 'next/router';
import styles from "../../styles/CatEach.module.css";

export default function SwSolution() {

    const router = useRouter()
    const size = router.query.size

    return (
        <Carrier header={"Software Solution"} size={size}>
            <div style={{textAlign:'center', fontSize:'0.8rem'}}>
                &ldquo;무림티씨에서 제작되는 S/W는 엔지니어의<br/> 실무경험을 바탕으로<br/>만들어집니다.&rdquo;
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#1 엔지니어링 S/W </div>
                <div className={styles.text}>                    
                    &nbsp;측정된 데이터 분석작업에 특화된 S/W를 도입하면 오류 데이터 필터링부터 데이터 분석 결과 도출까지, 일련의 프로세스를 자동화할 수 있습니다.
                    &nbsp;또한, 최신 UI/UX 라이브러리를 활용하여 간결하고 Interactive한 데이터 분석툴도 구축할 수 있습니다.
                </div>
                {/* <div className={styles.examples}>
                    &bull;&nbsp;기계장치 작동중 고무부품 변형 및 하중 측정<br/>
                    &bull;&nbsp;기계장치의 작동중 진동 형상 측정 및 시각화<br/>
                </div> */}
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#2 데이터 시각화 S/W </div>
                <div className={styles.text}>                    
                    &nbsp;정리된 데이터를 여러 각도에서 시각화하면 문제에 대한 새로운 해석을 도출할 수 있습니다.<br/>
                    &nbsp;간단한 통계적 도식화에서부터 최신 머신러닝 알고리즘을 활용한 클러스터링, 주파수분석 등 하나의 데이터셋을 다양한 각도로 확인해 볼 수 있습니다.
                </div>
                {/* <div className={styles.examples}>
                    &bull;&nbsp;기계장치 작동중 고무부품 변형 및 하중 측정<br/>
                    &bull;&nbsp;기계장치의 작동중 진동 형상 측정 및 시각화<br/>
                </div> */}
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#3 Application Throug CLOUD</div>
                <div className={styles.text}>                    
                    &nbsp;구글, 아마존, 마이크로소프트 등의 클라우드 시스템과 연동한 어플리케이션을 제작할 수 있으며, 장소와 기기의 제한없는 시스템 구축이 가능해집니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;실시간 데이터 측정, 저장 및 머신러닝 모델 학습 시스템<br/>
                    &bull;&nbsp;기계장치 모니터링 시스템<br/>
                </div>
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#4 제작 S/W 유형</div>
                <div className={styles.text}>                    
                    &nbsp;일반적인 PC용 어플리케이션 뿐만아니라 웹앱 및 모바일앱 등 다양한 형태의 S/W제작이 가능합니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;PC용 어플리케이션<br/>
                    &bull;&nbsp;인터넷 브라우져(크롬, 익스플러어, 사파리 등)을 이용한<br/>&nbsp;&nbsp;멀티플랫폼 어플리케이션<br/>
                    &bull;&nbsp;모바일디바이스 전용 어플리케이션<br/>
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