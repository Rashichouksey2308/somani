/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'

import { hideSidebar, showSidebar } from '../../redux/toggleState/Action/action'
import { logoutUser } from 'redux/authentication/actions'
import { ChangeTheme, setTheme } from 'redux/userData/action'
import { settingMobile } from '/redux/toggleState/Action/action'

function Index () {
  const dispatch = useDispatch()
  const a = false

  useEffect(() => {
    dispatch(setTheme())
  }, [dispatch])

  useEffect(() => {
    if (window !== undefined) {
      const px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth
      window.addEventListener('resize', () => {
        function isZooming () {
          const newPx_ratio =
            window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth
          if (newPx_ratio != px_ratio) {
            return true
          } else {
            if (document.body.clientWidth <= 1199) {
              dispatch(settingMobile(true))
              dispatch(hideSidebar())
            } else {
              dispatch(settingMobile(false))
              dispatch(showSidebar())
            }
            return false
          }
        }

        isZooming()
      })
    }
  }, [dispatch])
  useEffect(() => {}, [])

  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const darkMode = useSelector((state) => state.user.isDark)
  const handleOpen = () => {
    if (!sidebar) {
      dispatch(showSidebar(true))
    } else {
      dispatch(hideSidebar(false))
    }
  }
  const changeDarkMode = () => {
    dispatch(ChangeTheme())
  }

  return (
    <header className={`${`navbar-static-top`} ${styles.main_container} darknavbar`} role='navigation'>
      <div className='d-flex align-items-center'>
        <div className={`${`flex-grow-1`} ${styles.hamburgureContainer}`}>
          <div className={`${styles.logo2} ${`flex-grow-1`}`} onClick={() => handleOpen()}>
            <a href='#'>
              <img src='/static/menu.svg' alt='Logo1' className='img-fluid' />
            </a>
          </div>
          <div className={`${styles.logo} ${`flex-grow-1`}`}>
            <a href='#'>
              <img src='/static/logo.svg' alt='Logo' className='img-fluid' />
            </a>
          </div>
        </div>
        <div className={`${styles.theme} d-flex align-items-center`}>
          <a href='#'>
            <img src='/static/light.svg' alt='light' className={`${styles.light} img-fluid mr-3`} />
          </a>
          <label className={styles.switch}>
            <input
              type='checkbox'
              checked={darkMode}
              onChange={(e) => {
                changeDarkMode(e)
              }}
            />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
          <a href='#'>
            <img src='/static/dark.svg' alt='dark' className={`${styles.dark} img-fluid ml-3`} />
          </a>
        </div>
        <ul className={`${styles.header_icon} d-none d-md-inline-block`}>
          <li>
            <a href='#'>
              <img src='/static/chat.svg' alt='chat' className='img-fluid' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/static/notifications.svg' alt='notifications' className='img-fluid' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/static/settings.svg' alt='settings' className='img-fluid' />
            </a>
          </li>
        </ul>
        <div className={styles.user_profile}>
          <a
            className='dropdown-toggle'
            href='#'
            role='button'
            id='userProfile'
            data-toggle='dropdown'
            aria-expanded='false'
          >
            <img src='/static/profile-icon.png' alt='profile icon' className='img-fluid' />
            <name className='d-none d-md-inline-block'>
              Javanika Seth<span>ID: 39853-09343</span>
            </name>
          </a>

          <div className='dropdown-menu' aria-labelledby='userProfile'>
            <a className={`${styles.dropdown_item} dropdown-item`}>Name: Javanika</a>
            <a className={`${styles.dropdown_item} dropdown-item`}>Age : 21 Years</a>
            <a className={`${styles.dropdown_item} dropdown-item`}
              role='button'
              onClick={() => {
                dispatch(logoutUser())
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index
