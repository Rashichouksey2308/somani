import Router from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({
  handleSave,
  rightBtn,
  rightBtnClick,
  handleRoute,
  buttonText = 'Save',
}) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);

 // const {updatingAmendment} = useSelector((state)=>state.lc)
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      {buttonText == 'null' ? null : (
        <div
          onClick={() => {
            if (handleSave) {
           
              handleSave();
            }
          }}
          className={`${styles.reject} ml-3`}
        >
          <span>{buttonText}</span>
        </div>
      )}
      {rightBtn == 'null' ? null : (
        <div
          className={`${styles.approve} ml-3`}
          onClick={() => {
          
            if (rightBtnClick) {

              rightBtnClick();

              // handleRoute()
            }

            // handleSave()
          }}
        >
          <span>{rightBtn}</span>
        </div>
      )}
    </div>
  );
}

export default Index;
