import React from 'react';
import styles from './index.module.scss'
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddCommodity from '../../src/components/AddCommodity';

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container} d-flex justify-content-between border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/commodity')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Go No Go Logic</h1>
          </div>
        </Card.Header>
        {/* <AddCommodity /> */}
      </Card>
    </div>
  );
}

export default Index;
