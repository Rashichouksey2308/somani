import React from 'react'
import styles from './index.module.scss'
export default function index() {
  return (
    <div className={`${styles.main_container} d-flex justify-content-between background1`}>
      <div>
        <img src="/static/home.svg"></img>
        <span>/ Dashboard</span>
     </div>
      <div className={`${styles.unit_container} d-flex`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select className={`${styles.options} text accordion_DropDown`}>
              <option>INR</option>
            </select>
          </div>
          </div>
   
  )
}