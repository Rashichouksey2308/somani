import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
function Index({data}) {
  console.log(data,"commoditySummary")
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
        {data.sort((a, b) => parseFloat(b.total) - parseFloat(a.total)).map((val, index) => {
          return (
            <div key={index} className={`${styles.wrapper} commodities`}>
              <span className={`heading`} >{val._id}</span>
              <div className={styles.graph}>
                <span className="val"> ₹{" "}{ Number(val?.total/10000000).toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    })} {" "} Cr</span>
                <div className={`${styles.bar} bar`} style={{width:`${tempArr[index].percentage}`}}></div>
              </div>
            </div>
          )
        })}
      </Card.Body>
    </Card>
  )
}

export default Index
