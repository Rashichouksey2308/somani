import React from 'react'
import styles from './index.module.scss'

function index() {
  return (
    <div className={styles.root}>
        <div className={styles.reject}><span>Termsheet</span>
        <img src="#"></img>
        </div>
        <div className={styles.navigate}>
            <span>2</span> / 10  |
             <div className={styles.button}></div>
            <span className={styles.zoom}>80%</span>
             <div className={styles.button2}></div> |
             <img src="#"></img>
            
        </div>
        <div className={styles.approve}><span>Sent to Buyer</span></div>
    </div>
  )
}

export default index