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
        <h4 className={styles.country}>{val._id.toUpperCase() || ''}</h4>
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
            <h5 className={styles.percent}>{percentageValue}%</h5>
            <h5 className={`${styles.amount} text1`}>
              {crConverter(val.total)}
            </h5>
          </div>
        </div>
      </div>
    })
  }

  return (<div className={`${styles.main} border card`}>
    <div className={`${styles.top_container} border_color d-flex align-items-center justify-content-between`}>
      <h3 className={styles.title}>Top 5 Countries Of Origin </h3>
    </div>
    <div className={`${styles.country_container} card-body`}>
      {countriesListing()}
    </div>
  </div>)
}

export default Index
