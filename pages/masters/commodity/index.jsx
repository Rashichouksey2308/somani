/* eslint-disable */
import React from 'react';
import styles from './index.module.scss';
import Commodity from '../../../src/components/Masters/Commodity';

function Index() {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <Commodity />
      </div>
    </div>
  );
}

export default Index;
