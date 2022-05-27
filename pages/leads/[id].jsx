import React from 'react'
import Register from '../../src/components/Register'
import styles from './register.module.scss'
import Footer from '../../src/components/Footer/index'

const index = () => {
  return (
    <div className={styles.root_Container}>
      <Register />
    </div>
  )
}

export default index
