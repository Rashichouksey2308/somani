
<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ handleSubmit }) {
  const { updatingLcAmendment } = useSelector((state) => state.lc);
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
=======
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index ({ handleSubmit }) {
  const { updatingLcAmendment } = useSelector((state) => state.lc)
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
<<<<<<< Updated upstream
     
      <div
        id="nextbutton"
        onClick={() => {
          if (!updatingLcAmendment) {
            handleSubmit();
=======

      <div
        id='nextbutton'
        onClick={() => {
          if (!updatingLcAmendment) {
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
