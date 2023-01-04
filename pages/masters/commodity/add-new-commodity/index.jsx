import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './index.module.scss';
import Header from '../../../../src/components/Masters/Commodity/AddNewCommodity/Header';
import AddNewCommodity from '../../../../src/components/Masters/Commodity/AddNewCommodity';

function Index() {
  return (
    <Card className={`${styles.card} container-fluid `}>
      <div className="m-2">
        <div className={`${styles.footer_content}`}>
          <Header />
          <AddNewCommodity />
          <div className={`${styles.footer_created}`}>
            <p>
              Created By <span>Balakrishna SGF001</span>
            </p>
            <p className="ml-5">
              Approved By <span>Ramakrishna SGF001</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Index;
