import React from 'react'
import styles from './index.module.scss'
import ProgressBar from '@ramonak/react-progress-bar'
import {checkNan} from '../../utils/helper'
import { number } from 'prop-types'

const Index = (props) => {
  let backgroundColor=["#2884DE","#876EB1","#4CAF50"]
  const getPercentage=(value)=>{
   
    return Number(((Number(value)/Number(props.total))*100).toFixed(2))
  }
  const getClass =(index)=>{
    if (index==0){
      return styles.barCompleted0
    }
     if (index==1){
      return styles.barCompleted1
    }
     if (index==2){
      return styles.barCompleted2
    }
     if (index==3){
      return styles.barCompleted3
    }
     if (index==4){
      return styles.barCompleted4
    }
  }
 
  return (
    <div className={`${styles.main} border card`}>
      <div
        className={`${styles.top_container} border_color d-flex align-items-center justify-content-between`}
      >
        <h1 className={styles.heading}>Top 5 Countries Of Origin </h1>
       
      </div>
    
      <div className={`${styles.country_container} label_heading`}>
        {props.data.length > 0 && props.data.map((val,index)=>{
          return(
             <div key={index} className={styles.each_progress}>
                <h1 className={styles.country}>{val?._id?.toUpperCase()??""}</h1>
                <div className={styles.bar_container}>
                  <div className={styles.progress_bar}>
                    
                    <ProgressBar
                      completed={Number(getPercentage(val?.total).toFixed(0))}
                      barContainerClassName={styles.container}
                      completedClassName={getClass(index)}
                      isLabelVisible={false}
                    />
                  </div>
                  <div className={styles.number_container}>
                    <h3 className={styles.percent}>{getPercentage(val?.total)?.toFixed(2)}%</h3>
                    <h3 className={`${styles.amount} text1`}> ₹{" "} {
                    Number(val?.total).toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    })}
                </h3>
                  </div>
                </div>
        </div>
          )
        })}
  
      </div>
    </div>
  )
}

export default Index
