import MainCard from '../../components/main_card'
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Solutions() {

    // Move to lib, future
    const [size, setSize] = useState(0);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
        setSize(window.innerWidth);
        };
    },[])
    //

    return (
        <div className={styles.grid}>    

            <MainCard size={size} link={`/category/test_solution?size=${size}`}>            
              <h2>Test Solution</h2>
              <p>
                신호계측 / 학습용 데이터셋 / 특수 계측시스템
              </p>           
            </MainCard>

            <MainCard size={size} link={`/category/eng_solution?size=${size}`}>            
              <h2>Engineering Solution</h2>
              <p>
                데이터분석 / 문제해결 / 성능개선
              </p>            
            </MainCard>

            <MainCard size={size} link={`/category/ai_solution?size=${size}`}>
              <h2>AI Solution</h2>
              <p>
                머신러닝 / 데이터 Eng. / Feature Eng.
              </p>
            </MainCard>

            <MainCard size={size} link={`/category/sw_solution?size=${size}`}>            
              <h2>S/W Solution</h2>
              <p>
                PC App. / Web App. / Mobile App.
              </p>              
            </MainCard>

            <MainCard size={size} link={`/category/training_program?size=${size}`}>            
              <h2>Training Program</h2>
              <p>
                Python / Javascript / FrameWorks
              </p>              
            </MainCard>

            <MainCard size={size} link={`/category/portfolio?size=${size}`}> 
              <h2>Portfolio</h2>
              <p>
                Testing / Engineering / S/W
              </p>  
            </MainCard>

          </div>

    )
}
       
       
       
       
       
       
       
       
       
       
       
       
       