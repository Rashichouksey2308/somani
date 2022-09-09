import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

export default function index() {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div className={`${styles.main_container} ${ !sidebar ? styles.no_sidebar : null
  }
  ${isMobile ? styles.no_sidebar_mobile : null} background1`}>
      <div>
        <span className='color' >2022 © Simport.</span>
        <span className='color' >Copyright © Somani Group Inc. All rights reserved.</span>
      </div>
    </div>
  )
}
