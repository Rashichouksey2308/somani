import React from 'react'
import styles from './index.module.scss'
export default function index() {
  return (
    <div className={`${styles.main_container} background1`}>
      <div>
        <span className='color' >2022 © Simport.</span>
        <span className='color' >Copyright © Somani Group Inc. All rights reserved.</span>
      </div>
    </div>
  )
}
