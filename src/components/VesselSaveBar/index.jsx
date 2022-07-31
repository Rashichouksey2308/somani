import Router from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({handleSave, rightBtn, rightBtnClick }) {
  
  return (
    <div className={`${styles.root} card`}>
      <div onClick={()=>{handleSave()}} className={`${styles.reject} ml-3`}>
        <span>Save</span>
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          rightBtnClick()
        }}
      >
        <span>{rightBtn}</span>
      </div>
    </div>
  )
}

export default Index
