import React,{useState,useEffect} from 'react'
import Register from '../../src/components/Register'
import styles from './register.module.scss'
import Footer from '../../src/components/Footer'
import { setPageName ,setDynamicName} from '../../src/redux/userData/action'
import { useDispatch, useSelector } from 'react-redux'
const Index = () => {
   const dispatch = useDispatch()
    useEffect(() => {
    dispatch(setPageName('leads/'))
     dispatch(setDynamicName(null))
  },[])
  return (
    <div className={styles.root_Container}>
      <Register />
    </div>
  )
}

export default Index
