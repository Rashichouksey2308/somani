import Router from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index({ rightBtn, rightBtnClick }) {
  return (
    <div className={`${styles.root} card`}>
      <div className={`${styles.reject} ml-3`}>
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

export default index
