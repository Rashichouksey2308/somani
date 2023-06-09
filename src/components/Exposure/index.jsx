import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'
import _get from 'lodash/get'
import { checkNan } from 'utils/helper'

function Index ({ data }) {
  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header} border_color heading_card`}>
        <h3 className={styles.title}>Exposure</h3>
      </Card.Header>
      <Card.Body className={styles.body}>
        <div className={styles.progress_container}>
          <div className={styles.bar_container}>
            <div className={styles.progress_bar}>
              <div className={`${styles.bar}`}>
                <div
                  className={styles.barCompleted}
                  style={{
                    width: `${checkNan(
                      Number(
                        (Number(_get(data, '[0].totalUtilizedLimit', 0)) / Number(_get(data, '[0].totalLimit', 0))) *
                          100
                      )
                    )}%`
                  }}
                />
              </div>
            </div>
          </div>
          {/* <ProgressBar
            completed={ Number((Number(_get(data,"[0].totalUtilizedLimit",0))/Number(_get(data,"[0].totalLimit",0)))*100)}
            barContainerClassName={styles.container}
            completedClassName={styles.barCompleted}
            isLabelVisible={false}
          /> */}
        </div>
        <div className={styles.percent}>
          {checkNan(
            Number((Number(_get(data, '[0].totalUtilizedLimit', 0)) / Number(_get(data, '[0].totalLimit', 0))) * 100)
          )}{' '}
          %
        </div>

        <div className={`${styles.total} border-top-0`}>
          <div className={styles.totalText}>
            <span>TOTAL</span>
          </div>
          <div className={styles.dotted} />
          <div className={styles.value}>
            <span className='explore-value'>
              ₹{' '}
              {Number(_get(data, '[0].totalLimit', 0) / 1000000).toLocaleString('en-IN', {
                maximumFractionDigits: 2
              })}{' '}
              Cr
            </span>
          </div>
        </div>
        <div className={`${styles.total} border_color`}>
          <div className={styles.totalText}>
            <span>UTILISED</span>
          </div>
          <div className={styles.dotted} />
          <div className={styles.value}>
            <span className='explore-value'>₹ {_get(data, '[0].totalUtilizedLimit', '')} Cr</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Index
