import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index(props) {
  return (
    <div className={`${styles.root} card`}>
        <div id='previousbutton' onClick={props.leftButtonClick} className={styles.reject}><span>Previous</span></div>
        <div  id='nextbutton' onClick={props.rightButtonClick} className={styles.approve}><span >Next</span></div>
    </div>
  )
}

export default index
