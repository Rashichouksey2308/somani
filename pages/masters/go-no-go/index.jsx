import React from 'react';
import GoNoGo from '../../../src/components/Masters/GoNoGo';
import styles from './index.module.scss';
function Index() {
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
       <GoNoGo />
      </div>
    </div>
  );
}
export default Index;