import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';

const tempArr = [
  { percentage: `100%` },
  { percentage: `80%` },
  { percentage: `60%` },
  { percentage: `50%` },
  { percentage: `40%` },
];

function Index({ data }) {
  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header} border_color heading_card`}>Top 5 Commodities </Card.Header>
      <Card.Body className={styles.body}>
        {data
          .sort((a, b) => parseFloat(b.total) - parseFloat(a.total))
          .map((val, index) => {
            return (
              <div key={index} className={`${styles.wrapper} commodities`}>
                <span className={`heading`}>{val._id}</span>
                <div className={styles.graph}>
                  <span className="val">
                    {' '}
                    ₹{' '}
                    {Number(val?.total / 10000000).toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}{' '}
                    Cr
                  </span>
                  <div className={`${styles.bar} bar`} style={{ width: `${tempArr[index].percentage}` }}></div>
                </div>
              </div>
            );
          })}
      </Card.Body>
    </Card>
  );
}

export default Index;
