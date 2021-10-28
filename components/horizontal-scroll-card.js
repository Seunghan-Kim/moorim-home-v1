import React from 'react';
import styles from '../styles/hScrollCard.module.css';

function Card({ num, value }) {
  
  return (
    <div className={styles.colorCard}>
      <div>{num}, {value}</div>
    </div>
  );
}

export default Card;