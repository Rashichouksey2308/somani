import React from 'react'
import styles from './index.module.scss'
function index({onSave}) {
  return (
     <div className={`${styles.main} card border_color`}>
       
       <div className={styles.submit} onClick={()=>{onSave()}}><span>Save</span></div>
      
      
      </div>
  )
}

export default index