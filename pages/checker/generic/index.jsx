import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import GenericSummary from '../../../src/components/Checker/Generic/GenericSummary';
import Header from '../../../src/components/Checker/Generic/Header';

export default function index() {
  return (
    <Card className={`${styles.card} w-100`}>
      <div>
        <Header />
        <GenericSummary />
      </div>
    </Card>
  );
}
