import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
function index() {
  let tempArr = [
    { name: 'Iron', val: '1,837', val2: 1837,percentage:`100%`, },
    { name: 'Steel', val: '1,341', val2: 1837,percentage:`80%` },
    { name: 'Aluminium', val: '1,000', val2: 1837,percentage:`60%` },
    { name: 'Copper', val: '600', val2: 1837 ,percentage:`50%`},
    { name: 'Brass', val: '400', val2: 1837,percentage:`40%` },
  ]
  return (
    <Card className={`${styles.card} border` }>
      <Card.Header className={`${styles.header} border_color heading_card`}>Top 5 Commodities </Card.Header>
      {/* <hr className={styles.hr}/> */}
      <Card.Body className={styles.body}>
        {tempArr.map((val, index) => {
          return (
            <div key={index} className={styles.wrapper}>
              <span className={`heading`} >{val.name}</span>
              <div className={styles.graph}>
                <span> ₹{val.val}</span>
                <div className={styles.bar} style={{width:`${val.percentage}`}}></div>
              </div>
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default index
