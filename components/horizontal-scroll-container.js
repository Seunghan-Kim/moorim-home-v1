import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useScrollBox from './horizontal-scroll-motionFunction'
import styles from '../styles/hScrollContainer.module.css';

function ScrollBox({ children }) {
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <div className={styles.scrollbox}>
      <div className={styles.scrollboxwrapper} ref={scrollWrapperRef}>
        <div className={styles.scrollboxcontainer} role="list" style={{ pointerEvents: isDragging ? 'none' : undefined }}>
          {children.map((child, i) => (
            <div role="listitem" key={`scroll-box-item-${i}`} className={styles.scrollboxitem}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollBox;