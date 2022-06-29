import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'

import { showSidebar, hideSidebar } from '../../redux/toggleState/Action/action'
import { sidebar } from 'redux/toggleState/Reducer/reducer'
import { logoutUser } from 'redux/authentication/actions';




function Index() {
   const dispatch = useDispatch();
    let a=false
    const [darkMode,setDarkMode] = useState(false)
    useEffect(() =>{
    
    
    if( localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true){
      console.log("this")
     setDarkMode(true)
    }else{
      console.log("this2")
       setDarkMode(false)
    }
 
    },[])

    // console.log(darkMode,"darkMode")
     const sidebar = useSelector((state) => state.sidebar.show_sidebar)
     const handleOpen = () => {
      if (!sidebar) {
      dispatch(showSidebar(true))
      } else  {
       dispatch(hideSidebar(false))
      }  
    }  
  const changeDarkMode=()=>{
  let isLight= document.body.classList.contains(
                      'light-mode'
                     );
                     console.log(isLight)
                     if(isLight){
                      document.body.classList.remove(
                      'light-mode'
                     );
                      document.body.classList.add(
                      'dark-mode'
                     );
                     setDarkMode(true)
                     localStorage.setItem("darkMode",true)
                     }else{
                        document.body.classList.remove(
                      'dark-mode'
                     );
                      document.body.classList.add(
                      'light-mode'
                     );
                      setDarkMode(false)
                      localStorage.setItem("darkMode",false)
                     }
  }
  console.log(darkMode,"darkmode123")
  
  return (

    <header
      className={`${`navbar-static-top`} ${styles.main_container} darknavbar`}
      role="navigation"
    >
      <div className="d-flex align-items-center">
        <div className={`${`flex-grow-1`} ${styles.hamburgureContainer}`}>
          <div className={`${styles.logo2} ${`flex-grow-1`}`} 
           onClick={ () => handleOpen() }  
          >
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
        <div className={`${styles.theme} d-flex align-items-center`}>
        <a href="#">
            <img src="/static/light.svg" alt="light" className={`${styles.light} img-fluid mr-3`}/>
          </a>
         <label className={styles.switch}>
          <input type="checkbox" checked={darkMode}  onChange={(e)=>{changeDarkMode(e) 
            }}/>
          <span className={`${styles.slider} ${styles.round}` }></span>
        </label>
          <a href="#">
            <img src="/static/dark.svg" alt="dark"  className={`${styles.dark} img-fluid ml-3`}/>
          </a>
        </div>
        <ul className={`${styles.header_icon} d-none d-md-inline-block`}>
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
            <a className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index
