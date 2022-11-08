// import  Router  from 'next/router'
<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ handleSubmit }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
=======
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index ({ handleSubmit }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} card`}
    >
      {/* <div id='previousbutton' onClick={props.leftButtonClick} className={`${styles.reject} ml-3`}><span>Previous</span></div> */}
      <div
<<<<<<< Updated upstream
        id="nextbutton"
        onClick={() => {
          {
            handleSubmit();
=======
        id='nextbutton'
        onClick={() => {
          {
            handleSubmit()
>>>>>>> Stashed changes
          }
        }}
        className={`${styles.approve} ml-3`}
      >
        <span>Share</span>
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
