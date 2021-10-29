import styles from "../styles/MainCard.module.css";
import Link from "next/link";

export default function MainCard ({children, size, link}) {

    return (
        
        <Link href={link}>
            <a className={styles.card} style={{margin : size > 800 ? '1rem 1rem' : '0.6rem 0rem'}}>
                {children}
            </a>
        </Link>            
        
    )
}