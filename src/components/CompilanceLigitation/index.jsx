<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';

function index(props) {
=======
import React from 'react'
import styles from './index.module.scss'

function index (props) {
>>>>>>> Stashed changes
  return (
    <div className={`${styles.risk}  d-flex align-items-center`} style={{ backgroundColor: `${props.backColor}` }}>
      <div
        style={{ backgroundColor: `${props.iconBackGroudColor}` }}
        className={`${styles.risk_icon} d-flex align-items-center justify-content-center`}
      >
        <img src={`${props.icon}`} />
      </div>
      <div className={`ml-4`}>
        <div>{props.heading}</div>
        <span>{props.content}</span>
      </div>
    </div>
<<<<<<< Updated upstream
  );
}

export default index;
=======
  )
}

export default index
>>>>>>> Stashed changes
