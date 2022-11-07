import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddCommodity from '../../src/components/AddCommodity'

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
    <Card className={`${styles.card}`}>
        <Card.Header
          className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}
        >
          <div className={`${styles.head_header} align-items-center`}>
            <div
              onClick={() => Router.push('/commodity')}
              style={{ cursor: 'pointer' }}
            >
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>BalKrishnan Traders-0011</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
          </div>
        </Card.Header>
     <AddCommodity isUpdate={true}/>
    
    </Card>
    </div>
  );
}

export default Index;
