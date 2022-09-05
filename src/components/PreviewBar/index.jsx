import Router from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index({ leftButtonClick, onSave }) {
  return (
    <div className={`${styles.root} cta_bar`}>
      <div
        id="nextbutton"
        onClick={() => onSave()}
        className={`${styles.reject} ml-3`}
      >
        <span>Submit</span>
      </div>

      <div
        id="previousbutton"
        onClick={() => leftButtonClick()}
        className={`${styles.approve} ml-3`}
      >
        <span>Preview</span>
      </div>
    </div>
  )
}

export default index
