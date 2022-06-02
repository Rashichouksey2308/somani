import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import { showSidebar, hideSidebar } from '../../redux/toggleState/Action/action'
import { sidebar } from 'redux/toggleState/Reducer/reducer'


function index() {
  const sidebar = useSelector((state) => state.sidebar)
   const dispatch = useDispatch();
   //const { menuOpen } = useSelector((state) => state.sidebar);

   const handleOpen = () => {
     if (!sidebar) {
     dispatch(showSidebar())
     } else  {
       dispatch(hideSidebar())
     }  
   }

  return (

    <header
      className={`${`navbar-static-top`} ${styles.main_container}`}
      role="navigation"
    >
      <div className="d-flex align-items-center">
        <div className={`${`flex-grow-1`} ${styles.hamburgureContainer}`}>
          <div className={`${styles.logo2} ${`flex-grow-1`}`}
          onClick={ () => handleOpen() } >
            <a href="#">
              <img src="/static/menu.svg" alt="Logo1" className="img-fluid" />
            </a>
          </div>
          <div className={`${styles.logo} ${`flex-grow-1`}`}>
            <a href="#">
              <img src="/static/logo.svg" alt="Logo" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="theme">
          <a href="#">
            <img src="/static/light.svg" alt="light" className="img-fluid" />
          </a>
          <a href="#">
            <img src="/static/toggle.svg" alt="toggle" className="img-fluid" />
          </a>
          <a href="#">
            <img src="/static/dark.svg" alt="dark" className="img-fluid" />
          </a>
        </div>
        <ul className={styles.header_icon}>
          <li>
            <a href="#">
              <img src="/static/chat.svg" alt="chat" className="img-fluid" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/static/notifications.svg"
                alt="notifications"
                className="img-fluid"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/static/settings.svg"
                alt="settings"
                className="img-fluid"
              />
            </a>
          </li>
        </ul>
        <div className={styles.user_profile}>
          <a
            className="dropdown-toggle"
            href="#"
            role="button"
            id="userProfile"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/static/profile-icon.png"
              alt="profile icon"
              className="img-fluid"
            />
            Javanika Seth<span>ID: 39853-09343</span>
          </a>

          <div className="dropdown-menu" aria-labelledby="userProfile">
            <a className="dropdown-item" href="#">
              Name: Javanika
            </a>
            <a className="dropdown-item" href="#">
              Age : 21 Years
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default index
