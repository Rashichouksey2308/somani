import React from 'react';
import styles from '../../ports/port.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddVendor from '../../../src/components/AddVendor';

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/vendors')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Add New Vendor</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
            <button className={`${styles.clear_btn} ml-5 clear_btn`}>Edit</button>
          </div>
        </Card.Header>
        <AddVendor />
      </Card>
    </div>
  );
}

export default Index;
