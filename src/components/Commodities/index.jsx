import React, { useMemo } from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import {crConverter} from '@/utils/helper'

const getGraph = (data) => {
  return data
    .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))
    .map((val, index) => {
      return (
        <div key={index} className={`${styles.wrapper} commodities`}>
          <span className={`heading`}>{val._id}</span>
          <div className={styles.graph}>
            <span className="val">{crConverter(val?.total)}</span>
            <div className={`${styles.bar} bar`} style={{ width: `${100-(index*10)}%` }}></div>
          </div>
        </div>
      )
    })
}

const Index = ({ data }) => {
  const graphData = useMemo(() => getGraph(data), [data])
  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header} border_color heading_card`}>
        <h3 className={styles.title}>Top 5 Commodities</h3>
      </Card.Header>
      <Card.Body className={styles.body}>
        {graphData}
      </Card.Body>
    </Card>
  )
}

export default Index
