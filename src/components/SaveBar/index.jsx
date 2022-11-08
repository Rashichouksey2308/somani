<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

function Index({ handleSave, rightBtn, rightBtnClick, handleRoute, buttonText = 'Save' }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);

=======
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

function Index ({ handleSave, rightBtn, rightBtnClick, handleRoute, buttonText = 'Save' }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes

  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      {buttonText == 'null' ? null : (
        <div
          onClick={() => {
            if (handleSave) {
<<<<<<< Updated upstream
           
              handleSave();
=======
              handleSave()
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          
            if (rightBtnClick) {

              rightBtnClick();

          
            }

          
=======
            if (rightBtnClick) {
              rightBtnClick()
            }
>>>>>>> Stashed changes
          }}
        >
          <span>{rightBtn}</span>
        </div>
      )}
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
