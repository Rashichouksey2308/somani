import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index(props) {
  return (
    <div className={styles.root}>
        <div className={styles.reject}><span>Reject</span></div>
        <div className={styles.approve} onClick={()=>{
          Router.push("/termsheet/123")
        }}><span>Approve</span></div>
    </div>
  )
}

export default index
