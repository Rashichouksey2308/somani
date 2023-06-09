import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../PreviewBar/index.module.scss'

function Index ({ handleSubmit }) {
  const { updatingLcAmendment } = useSelector((state) => state.lc)
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      <div
        id='nextbutton'
        onClick={() => {
          if (!updatingLcAmendment) {
            handleSubmit()
          }
        }}
        className={`${styles.approve} ml-3`}
      >
        <span>Submit</span>
      </div>
    </div>
  )
}

export default Index
