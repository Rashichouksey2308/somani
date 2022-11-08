<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';

function index({ barName, openbar, download }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
=======
import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index ({ barName, openbar, download }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
>>>>>>> Stashed changes
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      <div
        className={styles.reject}
        onClick={() => {
          if (download) {
<<<<<<< Updated upstream
            download();
=======
            download()
>>>>>>> Stashed changes
          }
        }}
      >
        <span>{barName}</span>
<<<<<<< Updated upstream
        <img src="/static/file_download.svg" className="img-fluid" alt="FileDownload" />
=======
        <img src='/static/file_download.svg' className='img-fluid' alt='FileDownload' />
>>>>>>> Stashed changes
      </div>
      <div className={styles.navigate}>
        <span>2</span> / 10
        <div style={{ color: '#66708559' }}> | </div>
        <div className={styles.button} />
        <span className={styles.zoom}>80%</span>
<<<<<<< Updated upstream
        <img src="/static/add-3.svg" className="img-fluid" alt="Add" />
        <div style={{ color: '#66708559' }}> |</div>
        <img src="/static/expand.svg" className="img-fluid" alt="Expand" />
=======
        <img src='/static/add-3.svg' className='img-fluid' alt='Add' />
        <div style={{ color: '#66708559' }}> |</div>
        <img src='/static/expand.svg' className='img-fluid' alt='Expand' />
>>>>>>> Stashed changes
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
<<<<<<< Updated upstream
          openbar();
=======
          openbar()
>>>>>>> Stashed changes
        }}
      >
        <span>Share</span>
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
