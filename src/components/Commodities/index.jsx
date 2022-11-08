import React, { useMemo } from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'

const croreConverter = (amount=0) => ` ₹ ${Number(amount / 10000000).toLocaleString('en-IN', {
  maximumFractionDigits: 2,
})} Cr`

const getGraph = (data) => {
  return data
    .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))
    .map((val, index) => {
      return (
        <div key={index} className={`${styles.wrapper} commodities`}>
          <span className={`heading`}>{val._id}</span>
          <div className={styles.graph}>
            <span className="val">{croreConverter(val?.total)}</span>
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
      <Card.Header className={`${styles.header} border_color heading_card`}>Top 5 Commodities </Card.Header>
      <Card.Body className={styles.body}>
        {graphData}
      </Card.Body>
    </Card>
  )
}

export default Index
