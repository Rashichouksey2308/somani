// import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index({handleApprove}) {
  return (
    <div className={styles.root}>
        <div className={styles.reject}><span>Reject</span></div>
        <div className={styles.approve} onClick={()=>{ handleApprove()}}><span>Approve</span></div>
    </div>
  )
}

export default index
