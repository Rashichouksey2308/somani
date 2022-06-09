import React from 'react'
import styles from './index.module.scss'
export default function index() {
  return (
    <div className={`${styles.main_container} background1`}>
      <div>
        <img src="/static/home.svg"></img>
        <span>/ Dashboard</span>
      </div>
    </div>
  )
}