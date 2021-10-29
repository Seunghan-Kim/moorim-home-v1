import { useState, useEffect } from 'react'
import Router from "next/router";
import styles from "../styles/CatCarrier.module.css"

export default function Carrier ({children, header}) {

// Move to lib, future
  const [size, setSize] = useState(0);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setSize(window.innerWidth);
    };
  },[])
  //

    return (
        <div className={styles.main}>
            <div className={styles.headTitle} style={{fontSize : size > 800 ? '3rem' : '2.0rem'}}>
                {header}
            </div>
            
            <div className={styles.childContainer}>
                {children}
            </div>
            <div onClick={()=> Router.back()} className="goBack">Go Back</div>
        </div>
    )
}