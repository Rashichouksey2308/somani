// import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index({handleApprove, handleReject,button,button2}) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div className={`${styles.root} ${
      !sidebar ? styles.no_sidebar : null
    }
    ${isMobile ? styles.no_sidebar_mobile : null}  cta_bar`}>
        <div className={`${styles.reject} ml-3`} onClick={()=>{handleReject()}}><span>{button}</span></div>
        <div className={`${styles.approve} ml-3`} onClick={()=>{ handleApprove()}}><span>{button2}</span></div>
    </div>
  )
} 

export default index
