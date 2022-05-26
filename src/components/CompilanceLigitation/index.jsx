import React from 'react'
import styles from './index.module.scss'

function index() {
 return (
     <div className={`${styles.risk}  d-flex align-items-center`}>
         <div className={`${styles.risk_icon} d-flex align-items-center justify-content-center`}>
                <img src="#"></img>
         </div>
         <div className={`ml-4`}>
         <div>High Risk (5)</div>
         <span>Pending Case: 4 Disposed Case: 4</span>
      </div>
    </div>
  )
}

export default index