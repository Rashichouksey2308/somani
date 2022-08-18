// import  Router  from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({ handleSubmit }) {
  return (
    <div className={`${styles.root} card`}>
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
