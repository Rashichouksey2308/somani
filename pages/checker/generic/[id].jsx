import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import GenericSummary from '../../../src/components/Checker/Generic/GenericSummary';
import Header from '../../../src/components/Checker/Generic/Header';

function Index() {

  const companyName = sessionStorage.getItem('checkerGenericCompanyName');
  return (
    <Card className={`${styles.card} w-100`}>
      <div>
        <Header companyName={companyName} />
        <GenericSummary />
      </div>
    </Card>
  );
}
export default  Index;
