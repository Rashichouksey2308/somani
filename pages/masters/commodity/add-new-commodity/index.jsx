import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import AddNewCommodity from '../../../../src/components/Masters/Commodity/AddNewCommodity';
import Header from '../../../../src/components/Masters/Commodity/AddNewCommodity/Header';



function Index() {
  return (
    <Card className={`${styles.card} container-fluid `}>
      <div className="m-2">
        <div className={`${styles.footer_content} `}>
          <Header />
          <AddNewCommodity />
          {/* <p>
            Created By <span>Balakrishna SGF001</span>
          </p>
          <p className="ml-5">
            Approved By <span>Ramakrishna SGF001</span>
          </p> */}
        </div>
      </div>
    </Card>
  );
}

export default Index;
