import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
function index() {
  let tempArr = [
    { name: 'Iron', val: '1,837', val2: 1837 },
    { name: 'Steel', val: '1,341', val2: 1837 },
    { name: 'Aluminium', val: '1,000', val2: 1837 },
    { name: 'Copper', val: '600', val2: 1837 },
    { name: 'Brass', val: '400', val2: 1837 },
  ]
  return (
    <Card className={`${styles.card} border` }>
      <Card.Header className={`${styles.header} heading_card`}>Top 5 Commodities </Card.Header>
      {/* <hr className={styles.hr}/> */}
      <Card.Body className={styles.body}>
        {tempArr.map((val, index) => {
          return (
            <div key={index} className={styles.wrapper}>
              <span className={`heading`} >{val.name}</span>
              <div className={styles.graph}>
                <span> ₹{val.val}</span>
                <div className={styles.bar} data-percentage="69.6%"></div>
              </div>
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default index
