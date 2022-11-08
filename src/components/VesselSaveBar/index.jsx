<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';

function Index({ handleSave, rightBtn, rightBtnClick }) {
=======
import React from 'react'
import styles from './index.module.scss'

function Index ({ handleSave, rightBtn, rightBtnClick }) {
>>>>>>> Stashed changes
  return (
    <div className={`${styles.root} cta_bar`}>
      <div
        onClick={() => {
<<<<<<< Updated upstream
          handleSave();
=======
          handleSave()
>>>>>>> Stashed changes
        }}
        className={`${styles.reject} ml-3`}
      >
        <span>Save</span>
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
<<<<<<< Updated upstream
          rightBtnClick();
=======
          rightBtnClick()
>>>>>>> Stashed changes
        }}
      >
        <span>{rightBtn}</span>
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
