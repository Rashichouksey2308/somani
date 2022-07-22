// import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index({handleApprove, handleReject,button,button2}) {
  return (
    <div className={`${styles.root} cta_bar`}>
        <div className={`${styles.reject} ml-3`} onClick={()=>{handleReject()}}><span>{button}</span></div>
        <div className={`${styles.approve} ml-3`} onClick={()=>{ handleApprove()}}><span>{button2}</span></div>
    </div>
  )
} 

export default index
