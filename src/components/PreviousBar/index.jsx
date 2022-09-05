import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index(props) {
  return (
    <div className={`${styles.root} cta_bar`}>
        <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div>
        <div  id='nextbutton' onClick={props.rightButtonClick} className={`${styles.approve} ml-3`}><span >Next</span></div>
    </div>
  )
}

export default index
