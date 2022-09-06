import Router from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({ handleSave, rightBtn, rightBtnClick, handleRoute ,buttonText="Save" }) {
  console.log(rightBtnClick, 'handleSave')
  // const {updatingAmendment} = useSelector((state)=>state.lc)
  return (
    <div className={`${styles.root} cta_bar`}>
      <div
        onClick={() => {
          if (handleSave) {
            console.log('thsu')
            handleSave()
          }
        }}
        className={`${styles.reject} ml-3`}
      >
        <span>{buttonText}</span>
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          console.log('INspection Submitted')
          if (rightBtnClick) {
            console.log('INspection Submitted2')
            rightBtnClick()
            

            // handleRoute()
          }

          // handleSave()
        }}
      >
        <span>{rightBtn}</span>
      </div>
    </div>
  )
}

export default Index
