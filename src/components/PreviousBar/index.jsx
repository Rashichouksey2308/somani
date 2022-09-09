import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index(props) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div className={`${styles.root} ${
      !sidebar ? styles.no_sidebar : null
    }
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}>
        <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div>
        <div  id='nextbutton' onClick={props.rightButtonClick} className={`${styles.approve} ml-3`}><span >Next</span></div>
    </div>
  )
}

export default index
