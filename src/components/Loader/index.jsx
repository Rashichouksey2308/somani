import React,{useEffect} from 'react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
const Index = () => {
  const {isOpen} = useSelector((state) => state.Load)

  useEffect(() => {
    if(isOpen){
   document.body.style.overflow = 'hidden';
 
    }else{
   document.body.style.overflow = 'auto';
    }
  },[isOpen])
  
  return (
    <>
    {isOpen ?
    <>
     <div className={`${styles.backDrop}`}></div>
    <main className={`${styles.main}`}>
        <div className={`${styles.loader}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </main>
    </>
    :null}
    </>
 
  )
}
export default Index