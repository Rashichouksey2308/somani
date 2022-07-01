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
           <div className="mr-0 mr-sm-2">
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Units :
            </h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
           </div>
           <div>
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select className={`${styles.options} bg-transparent px-0 accordion_DropDown`}>
              <option>INR</option>
            </select>
           </div>
          </div>
          </div>
   
  )
}