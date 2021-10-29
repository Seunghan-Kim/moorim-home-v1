import Router from "next/router";
import styles from "../styles/CatCarrier.module.css"

export default function Carrier ({children, header, size}) {

  return (
      <div className={styles.main}>
        <div className={styles.headTitle} style={{fontSize : size > 800 ? '3rem' : '2.0rem'}}>
            {header}
        </div>
       
        <div className={styles.childContainer}>
            {children}
        </div>
        <div onClick={()=> Router.back()} className={styles.goBack}>Back</div>
      </div>
  )
}