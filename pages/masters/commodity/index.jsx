import React from 'react';
import Commodity from '../../../src/components/Masters/Commodity';
import styles from './index.module.scss';

function Index() {
  return (
    <div className={`${styles.backgroundMain} w-100`}>
      <div className={`${styles.vessel_card} border_color`}>
        <Commodity />
      </div>
    </div>
  );
}

export default Index;
