import React from 'react'
import styles from './index.module.scss'

const Index = ({ data }) => {
  return (
    <div className={`${styles.tw_toggle}`}>
      <input type="radio" className={styles.toggle_left} name={`toggle_${data?.createdAt}`} value="true" checked={data?.profileDetails?.status} />
      <label className={`${styles.toggle} ${styles.toggle_label_left}`}>
        <img src="/static/check.svg" className={`${styles.toggle_check} img_fluid`} alt="check" />
      </label>
      <input className={styles.toggle_between} type="radio" name={`toggle_${data?.createdAt}`} value="-1" checked={data?.profileDetails?.status !== true && data?.profileDetails?.status !== false} />
      <label className={`${styles.toggle} ${styles.toggle_label_between}`}></label>
      <input type="radio" className={styles.toggle_right} name={`toggle_${data?.createdAt}`} value="false" checked={!data?.profileDetails?.status} />
      <label className={`${styles.toggle} ${styles.toggle_label_right}`}>
        <img src="/static/close-b.svg" className={`${styles.toggle_close} img_fluid`} alt="close" />
      </label>
      <span></span>
    </div>
  )
}

export default Index