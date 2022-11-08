<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ onSave }) {
  const { placingNewOrder } = useSelector((state) => state.placeOrder);
=======
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index ({ onSave }) {
  const { placingNewOrder } = useSelector((state) => state.placeOrder)
>>>>>>> Stashed changes

  return (
    <div className={`${styles.main} card border_color`}>
      <div
        className={styles.submit}
        onClick={() => {
          if (!placingNewOrder) {
<<<<<<< Updated upstream
            onSave();
=======
            onSave()
>>>>>>> Stashed changes
          }
        }}
      >
        <span>Save</span>
      </div>
    </div>
<<<<<<< Updated upstream
  );
}

export default Index;
=======
  )
}

export default Index
>>>>>>> Stashed changes
