import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/Common/Header';
import InternalCompanies from '../../../src/components/Checker/AddNewInternalCompany/InternalCompanies';

function Index() {

  const internalCompany = sessionStorage.getItem('checkerInternalCompanyName');

  return (
    <Card className={`${styles.card} container-fluid`}>
      <div className="m-2">
        <Header heading={`${internalCompany}`} path="/checker/internal-companies" />
        <InternalCompanies />
      </div>
    </Card>
  );
}

export default Index;
