import React from 'react';
import styles from '../styles/Card.module.css';

function ColorCardCorr({ num, value }) {
  
  return (
    <div className={styles.colorCard}>
      <div>{num}, {value}</div>
    </div>
  );
}

export default ColorCardCorr;