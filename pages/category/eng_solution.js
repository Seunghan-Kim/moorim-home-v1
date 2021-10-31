import Carrier from "../../components/cat_carrier"
import { useRouter } from 'next/router'
import styles from "../../styles/CatEach.module.css";

export default function EngSolution() {

    const router = useRouter()

    // console.log(router)
    const size = router.query.size

    return (
        <Carrier header={"Engineering Solution"} size={size}>
            <div style={{textAlign:'center', fontSize:'0.8rem'}}>
                &ldquo;기계장치 또는 구조물의 진동, 소음과 관련된 모든 문제에 대해<br/>
                명확한 Solution을 만들어 드립니다.&rdquo;<br/>
            </div>

            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#1 원인 분석</div>
                <div className={styles.text}>                    
                    &nbsp;ODS(Operational Deflection Analysis), Modal Analysis, Impact Testing 등 각종 신호분석기법을 통해 문제의 근본원인을 찾아내어 시각화 합니다.<br/>
                </div>
                {/* <div className={styles.examples}>
                    &bull;&nbsp;고급 SUV 진동, 소음 최적화 솔루션<br/>
                    &bull;&nbsp;기계장치 작동 소음 측정법 표준화<br/>
                    &bull;&nbsp;기계장치 주요 부품의 작용하중과 변형량 측정 및 분석<br/>
                </div> */}
            </div>

            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#2 해결방안 제시</div>
                <div className={styles.text}>                    
                    &nbsp;다양한 유형의 소음,진동 문제 해결 경험을 바탕으로 문제의 시각화, 해결방안 도출 및 개선 확인의 Full Course Service를 제공합니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;H/W 개선을 통한 문제해결방안 제안 및 검증<br/>
                    &bull;&nbsp;S/W 개선을 통한 문제햐결방안 제안 및 검증<br/>
                    &bull;&nbsp;복합적 해결방안제시 및 모니터링 시스템 적용<br/>
                </div>
            </div>

            <div className={styles.smallContent}>
                <div className={styles.subTitle}>#3 맞춤 시스템 개발</div>
                <div className={styles.text}>                    
                    &nbsp;전통적인 엔지니어링 시스템으로 해결하기 어려운 데이터 수집과 분석 프로세스를 최신 무선기술과 모바일디바이스를 활용하여 해결할 수 있습니다.<br/>
                </div>
                <div className={styles.examples}>
                    &bull;&nbsp;블루투스센서화 모바일디바이스를 이용한 계측분석 시스템<br/>
                    &bull;&nbsp;모바일디바이스를 이용한 진동소음 측정 미 분석 시스템<br/>
                </div>
            </div>

        </Carrier>
    )
}