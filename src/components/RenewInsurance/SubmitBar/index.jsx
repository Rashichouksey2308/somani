
<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ handleSubmit }) {
  const { renewingInsurance } = useSelector((state) => state.insurance);
=======
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index ({ handleSubmit }) {
  const { renewingInsurance } = useSelector((state) => state.insurance)
>>>>>>> Stashed changes
  return (
    <div className={`${styles.root} card`}>
      {/* <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div> */}
      <div
<<<<<<< Updated upstream
        id="nextbutton"
        onClick={() => {
          if (!renewingInsurance) {
            handleSubmit();
=======
        id='nextbutton'
        onClick={() => {
          if (!renewingInsurance) {
            handleSubmit()
>>>>>>> Stashed changes
          }
        }}
        className={`${styles.approve} ml-3`}
      >
        <span>Submit</span>
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
