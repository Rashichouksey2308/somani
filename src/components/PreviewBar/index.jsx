import Router from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function index(props) {
  return (
    <div className={`${styles.root} card`}>
      <div
        id="nextbutton"
        onClick={props.rightButtonClick}
        className={`${styles.reject} ml-3`}
      >
        <span>Save</span>
      </div>

      <div
        id="previousbutton"
        onClick={props.leftButtonClick}
        className={`${styles.approve} ml-3`}
      >
        <span>Preview</span>
      </div>
    </div>
  )
}

export default index
