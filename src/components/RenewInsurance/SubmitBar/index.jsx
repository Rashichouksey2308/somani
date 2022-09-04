// import  Router  from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index({handleSubmit}) {
  const {renewingInsurance} = useSelector((state)=>state.insurance)
  return (
    <div className={`${styles.root} card`}>
        {/* <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div> */}
        <div  id='nextbutton' onClick={()=> {if(!renewingInsurance) {handleSubmit()}}} className={`${styles.approve} ml-3`}><span >Submit</span></div>
    </div>
  )
}

export default Index
