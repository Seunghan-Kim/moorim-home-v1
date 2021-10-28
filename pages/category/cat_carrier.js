import Router from "next/router";
import styles from "../../styles/CatCarrier.module.css"

export default function Carrier ({children, header}) {
    return (
        <div className={styles.main}>
            <div className={styles.headTitle}>
                {header}
            </div>
            <div className={styles.childContainer}>
                {children}
            </div>
            <div onClick={()=> Router.back()} className="goBack">Go Back</div>
        </div>
    )
}