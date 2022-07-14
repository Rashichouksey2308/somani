import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index(props) {
  return (
    <div className={`${styles.root} card`}>
        <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span >Submit</span></div>
    </div>
  )
}

export default index
