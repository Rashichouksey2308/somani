<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';

function index({ leftButtonClick, onSave }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
=======
import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index ({ leftButtonClick, onSave }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
<<<<<<< Updated upstream
      <div id="nextbutton" onClick={() => onSave()} className={`${styles.reject} ml-3`}>
        <span>Submit</span>
      </div>

      <div id="previousbutton" onClick={() => leftButtonClick()} className={`${styles.approve} ml-3`}>
        <span>Preview</span>
      </div>
    </div>
  );
}

export default index;
=======
      <div id='nextbutton' onClick={() => onSave()} className={`${styles.reject} ml-3`}>
        <span>Submit</span>
      </div>

      <div id='previousbutton' onClick={() => leftButtonClick()} className={`${styles.approve} ml-3`}>
        <span>Preview</span>
      </div>
    </div>
  )
}

export default index
>>>>>>> Stashed changes
