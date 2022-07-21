import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
function Index({onSave}) {

  const {placingNewOrder} = useSelector((state)=>state.placeOrder)

  return (
     <div className={`${styles.main} card border_color`}>
       
       <div className={styles.submit} onClick={()=>{if(!placingNewOrder){onSave()}}}><span>Save</span></div>
      
      
      </div>
  )
}

export default Index