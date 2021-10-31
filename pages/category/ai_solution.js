import Carrier from "../../components/cat_carrier"
import { useRouter } from 'next/router'
import styles from "../../styles/CatEach.module.css";

export default function AiSolution() {

    const router = useRouter()

    // console.log(router)
    const size = router.query.size

    console.log(size)
    return (
        <Carrier header={"AI Solution"} size={size}>
            <div style={{textAlign:'center', fontSize:'0.8rem'}}>
            &ldquo;머신러닝, 딥러닝과 같은 AI 알고리즘을 활용하면<br/>
            결과에 대한 예측뿐 아니라 문제에 대한<br/>
            Engineering Insight를 얻을 수 있습니다.&rdquo;
            </div>
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#1 데이터 수집과 처리</div>
                <div className={styles.text}>                    
                    &nbsp;무림티씨의 축적된 노하우로 학습에 필요한 데이터를 효율적으로 수집할 수 있는 방법을 제시합니다. 또한 풍부한 엔지니어링 경험을 바탕으로
                    수집된 데이터에 필요한 필터링 및 전처리 작업을 제공해 드립니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;경제지표 예측모델을 위한 주가 등 데이터 수집<br/>
                    &bull;&nbsp;차량고장 예측을 위한 학습데이터 수집<br/>
                    &bull;&nbsp;승객 불편감 모델을 위한 생체신호 수집<br/>
                </div>
            </div>
            
            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#2 모델 학습</div>
                <div className={styles.text}>                    
                    &nbsp;Dataset과 Target 특성에 맞는 최적의 AI 알고리즘 선정에서부터 주요 Metric 관찰을 통한 하이퍼파라메터 튜닝 등,
                    최적의 모델을 얻기 위한 풍부한 경험과 노하우가 있습니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;기계장치 고장 예측모델 (Binary Classification)<br/>
                    &bull;&nbsp;사용자의 주관적 평가점수 예측모델 (Regression)<br/>
                </div>
            </div>

            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#3 모델 분석</div>
                <div className={styles.text}>                    
                    &nbsp;SHAP Analysis, Feature Importance 추출 등, 다양한 최신 모델분석 툴을 활용하면 모델의 적절성을 판달할 수 있을 뿐만 아니라
                    혜결과제에 대한 깊이있고 정확한 이해도 가능합니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;설문결과 예측모델 분석을 통한 주요 인자 발굴
                </div>
            </div>

            <div className={styles.smallContent}>
                <div className={styles.subTitleLast}>무림티씨만의 노하우</div>
                <div className={styles.examples}>                    
                    &bull;&nbsp;최적의 모델을 만들기 위한 데이터 수집 기법<br/>
                    &bull;&nbsp;기계 시스템관련 예측모델 생성에 대한 풍부한 경험<br/>
                    &bull;&nbsp;각종 물리 신호에 대한 경험적 기술적 이해도
                    
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
                Powered by{' '}
                <span className={styles.logo}>
                    {/* <Image src="../vercel.svg" alt="Vercel Logo" width={54} height={12} /> */}
                    {'    '}
                    {/* <Image src="/google-2015-google-new-google-icon.svg" alt="google Logo" width={36} height={12} /> */}
                </span>
                </a>
            </footer>
        </Carrier>
    )
}