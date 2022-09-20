import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'
import _get from 'lodash/get'
function Index({exposureSummary}) {
  console.log(exposureSummary,"exposureSummary")
  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header} border_color heading_card`}> Exposure </Card.Header>
      <Card.Body className={styles.body}>
        <div className={styles.progress_container}>
          <ProgressBar
            completed={75.2}
            barContainerClassName={styles.container}
            completedClassName={styles.barCompleted}
            isLabelVisible={false}
          />
        </div>
        <div className={styles.percent}>75.20%</div>

        <div className={styles.total}>
          <div className={styles.totalText}><span>TOTAL</span></div>
          <div className={styles.dotted}></div>
          <div className={styles.value}><span className='explore-value'>{_get(exposureSummary,"[0].totalLimit","")}</span></div>
          
        </div>
        <div className={styles.total}>
         <div className={styles.totalText}><span>UTILISED</span></div>
          <div className={styles.dotted}></div>
          <div className={styles.value}><span className='explore-value'>{_get(exposureSummary,"[0].totalUtilizedLimit","")}</span></div>
          
          
        </div>
      </Card.Body>
    </Card>
  )
}

export default Index
