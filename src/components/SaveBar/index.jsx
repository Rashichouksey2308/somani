import Router from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({handleSave, rightBtn, rightBtnClick }) {
  console.log(handleSave,"handleSave")
  // const {updatingAmendment} = useSelector((state)=>state.lc)
  return (
    <div className={`${styles.root} card`}>
      <div onClick={()=>{ 
        if(handleSave){
          console.log("thsu")
          handleSave()
        }
      }} className={`${styles.reject} ml-3`}>
        <span>Save</span>
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          if(rightBtnClick){
            rightBtnClick()
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
