// import  Router  from 'next/router'
<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';

function index({ handleApprove, handleReject, button, button2 }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
=======
import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index ({ handleApprove, handleReject, button, button2 }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null}  cta_bar`}
    >
      <div
        className={`${styles.reject} ml-3`}
        onClick={() => {
<<<<<<< Updated upstream
          handleReject();
=======
          handleReject()
>>>>>>> Stashed changes
        }}
      >
        <span>{button}</span>
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
<<<<<<< Updated upstream
          handleApprove();
=======
          handleApprove()
>>>>>>> Stashed changes
        }}
      >
        <span>{button2}</span>
      </div>
    </div>
<<<<<<< Updated upstream
  );
}

export default index;
=======
  )
}

export default index
>>>>>>> Stashed changes
