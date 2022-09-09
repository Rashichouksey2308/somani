// import  Router  from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({ handleSubmit }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div className={`${styles.root} ${
      !sidebar ? styles.no_sidebar : null
    }
    ${isMobile ? styles.no_sidebar_mobile : null} card`}>
      {/* <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div> */}
      <div
        id="nextbutton"
        onClick={() => {
          {
            handleSubmit()
          }
        }}
        className={`${styles.approve} ml-3`}
      >
        <span>Share</span>
      </div>
    </div>
  )
}

export default Index
