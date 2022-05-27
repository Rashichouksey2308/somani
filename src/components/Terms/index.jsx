import React from 'react'
import styles from './index.module.scss'
import Router from 'next/router'

const index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.term_container}>
        <input className={styles.check_box} type="checkbox" name="check1" />
        <p className={styles.term_para}>
          By clicking on sign-up, you agree to Simport's Terms and Conditions of
          Use. To learn more about how Spotify collects uses, shares and
          protects your personal data, please see Simport's Privacy Policy.
        </p>
      </div>

      <div className={styles.btn_container}>
        <button className={styles.cancel_btn}>Cancel</button>
        <button
          className={styles.submit_btn}
          onClick={() => Router.push('/leads')}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default index
