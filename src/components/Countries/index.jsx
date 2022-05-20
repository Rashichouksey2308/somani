import React from 'react'
import styles from './index.module.scss'
//import {ProgressBar} from 'react-bootstrap'
import ProgressBar from "@ramonak/react-progress-bar";


  const index = () => {


  return (
    <div className={styles.main}>
      <div className={styles.top_container}>
      
      <h1 className={styles.heading}>Top 5 Countries Of Origin </h1>
      <div className={styles.image_main_container}>
      <div className={styles.image_container}>
         <img className={styles.image}
         src="/static/keyboard_arrow_right-3.svg"
         alt="arrow"
          />
          </div>
          <div className={styles.image_container}>
         <img className={styles.image}
         src="/static/keyboard_arrow_right-3.svg"
         alt="arrow"
         />
        </div> 
      </div>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.country_container}>
        <div className={styles.each_progress }>
          <h1 className={styles.country}>INDIA</h1>
          <div className={styles.bar_container}>
            <div className={styles.progress_bar}>
            <ProgressBar
              completed={80}
              barContainerClassName={styles.container}
              completedClassName={styles.barCompleted}
              isLabelVisible={false}
            />
             
            </div>
            <div className={styles.number_container}>
            <h3 className={styles.percent}>80%</h3>
          <h3 className={styles.amount}> ₹ 1,837</h3>
          </div>
          </div>
      </div>

      <div className={styles.each_progress }>
          <h1 className={styles.country}>CHINA</h1>
          <div className={styles.bar_container}>
            <div className={styles.progress_bar}>
            <ProgressBar
              completed={40}
              barContainerClassName={styles.container}
              completedClassName={styles.barCompleted1}
              isLabelVisible={false}
            />
          
          
          </div>
          <div className={styles.number_container}>
          <h3 className={styles.percent}>40%</h3>
          <h3 className={styles.amount}> ₹ 1,837</h3>
          </div>
          </div>
      </div>

      <div className={styles.each_progress }>
          <h1 className={styles.country}>RUSSIA</h1>
          <div className={styles.bar_container}>
            <div className={styles.progress_bar}>
            <ProgressBar
              completed={70}
              barContainerClassName={styles.container}
              completedClassName={styles.barCompleted2}
              isLabelVisible={false}
            />
          
          </div>
          <div className={styles.number_container}>
          <h3 className={styles.percent}>70%</h3>
          <h3 className={styles.amount}> ₹ 1,837</h3>
          </div>
          </div>
      </div>

      </div>

      
    </div>
  )
}

export default index
