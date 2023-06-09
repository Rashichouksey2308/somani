import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../PreviewBar/index.module.scss'

function Index ({ handleSave, rightBtn, rightBtnClick, handleRoute, buttonText = 'Save' }) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const isMobile = useSelector((state) => state.sidebar.isMobile)

  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      {buttonText == 'null' ? null : (
        <div
          onClick={() => {
            if (handleSave) {
              handleSave()
            }
          }}
          className={`${styles.reject} ml-3`}
        >
          <span>{buttonText}</span>
        </div>
      )}
      {rightBtn == 'null' ? null : (
        <div
          className={`${styles.approve} ml-3`}
          onClick={() => {
            if (rightBtnClick) {
              rightBtnClick()
            }
          }}
        >
          <span>{rightBtn}</span>
        </div>
      )}
    </div>
  )
}

export default Index
