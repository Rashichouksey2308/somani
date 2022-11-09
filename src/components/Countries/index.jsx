import React from 'react'
import styles from './index.module.scss'

import { crConverter } from '@/utils/helper'

const Index = ({ data = [] }) => {
  const totalValue = data.map(val => val.total).reduce((a, b) => a + b, 0)

  const companyValue = (value) => Number((value / totalValue) * 100).toFixed(2)

  const countriesListing = () => {
    return data.map((val, index) => {
      const percentageValue = companyValue(val.total)
      return <div key={index} className={styles.each_progress}>
        <h1 className={styles.country}>{val._id.toUpperCase() || ''}</h1>
        <div className={styles.bar_container}>
          <div className={styles.progress_bar}>
            <div className={`${styles.bar}`}>
              <div
                className={styles[`barCompleted${index}`]}
                style={{ width: `${percentageValue}%` }}
              />
            </div>
          </div>
          <div className={styles.number_container}>
            <h3 className={styles.percent}>{percentageValue}%</h3>
            <h3 className={`${styles.amount} text1`}>
              {crConverter(val.total)}
            </h3>
          </div>
        </div>
      </div>
    })
  }

  return (<div className={`${styles.main} border card`}>
    <div className={`${styles.top_container} border_color d-flex align-items-center justify-content-between`}>
      <h1 className={styles.heading}>Top 5 Countries Of Origin </h1>
    </div>
    <div className={`${styles.country_container} card-body`}>
      {countriesListing()}
    </div>
  </div>)
}

export default Index
