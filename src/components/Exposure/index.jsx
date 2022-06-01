import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'
function index() {
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.header}> Exposure </Card.Header>
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
          TOTAL ...........................................................
          50,00,000
        </div>
        <div className={styles.total}>
          UTILISED ........................................................
          3,20,000
        </div>
      </Card.Body>
    </Card>
  )
}

export default index
