// import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

function index({handleApprove, handleReject,downLoadButtonName,isPrevious,leftButtonName,rightButtonName}) {
  return (
    <div className={`${styles.root} card`}>
     
       <div className="d-flex justify-content-between align-items-center w-100"> 
          <div className={`${styles.reject} `} onClick={()=>{handleReject()}}><span className={`mr-2`}>{downLoadButtonName}</span>
          <Image
         
          src="/static/file_download.svg"
          alt="Picture of the author"
          width={14}
          height={17}
    />
         </div>
        {isPrevious?<div className={styles.reject} onClick={()=>{handleReject()}}><span>{leftButtonName}</span></div>:null}
        <div className={styles.approve} onClick={()=>{ handleApprove()}}><span>{rightButtonName}</span></div>
        </div>
    </div>
  )
} 

export default index
