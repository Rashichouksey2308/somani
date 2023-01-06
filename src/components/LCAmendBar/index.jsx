import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

function Index ({ barName, openbar, download }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      <div
        className={styles.reject}
        onClick={() => {
          if (download) {
            download()
          }
        }}
      >
        <span>{barName}</span>
        <img src='/static/file_download.svg' className='img-fluid' alt='FileDownload' />
      </div>
      <div className={styles.navigate}>
        <span>2</span> / 10
        <div className={styles.line_color}> | </div>
        <div className={styles.button} />
        <span className={styles.zoom}>80%</span>
        <img src='/static/add-3.svg' className='img-fluid' alt='Add' />
        <div className={styles.line_color}> |</div>
        <img src='/static/expand.svg' className='img-fluid' alt='Expand' />
      </div>
      <div
        className={`${styles.approve} ml-3`}
        onClick={() => {
          openbar()
        }}
      >
        <span>Share</span>
      </div>
    </div>
  )
}

export default Index
