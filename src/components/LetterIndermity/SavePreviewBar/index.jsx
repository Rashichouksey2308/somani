import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function index ({ isDownload, openbar, rightBtn, rightBtnClick, download }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div
      className={`${styles.root}  ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} background1`}
    >
      {isDownload ? (
        <div className={styles.reject} onClick={download}>
          <span>Letter of Indemnity</span>
          <img
            src='/static/file_download.svg'
            className='img-fluid'
            alt='FileDownload'
          />
        </div>
      ) : (
        <div />
      )}
      <div className={styles.navigate}>
        <span>2</span> / 10
        <div style={{ color: '#66708559' }}> | </div>
        <div className={styles.button} />
        <span className={styles.zoom}>80%</span>
        <img src='/static/add-3.svg' className='img-fluid' alt='Add' />
        <div style={{ color: '#66708559' }}> |</div>
        <img src='/static/expand.svg' className='img-fluid' alt='Expand' />
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          // openbar()
          rightBtnClick()
        }}
      >
        <span>{rightBtn}</span>
      </div>
    </div>
  )
}

export default index
