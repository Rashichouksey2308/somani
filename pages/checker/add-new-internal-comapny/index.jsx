import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/AddNewInternalCompany/Header';
import InternalCompanies from '../../../src/components/Checker/AddNewInternalCompany/InternalCompanies';
import Remark from '../../../src/components/Checker/Common/Remarks';

function Index() {
  return (
    <Card className={`${styles.card} container-fluid`}>
      <div className="m-2">
        <Header />
        <InternalCompanies />
        <Remark />
        <div className={`${styles.footer_content} d-flex justify-content-end`}>
          <p>
            Created By <span>Balakrishna SGF001</span>
          </p>
          <p className="ml-5">
            Approved By <span>Ramakrishna SGF001</span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Index;
