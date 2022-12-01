import React from 'react';
import styles from './index.module.scss';
import InternalCompany from './InternalCompany';
import BankDetails from './BankDetails';
import AuthorisedSignatoriesDetails from './AuthorisedSignatoriesDetails';

function Index() {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <InternalCompany />
        <BankDetails />
        <AuthorisedSignatoriesDetails />
      </div>
    </div>
  );
}

export default Index;
