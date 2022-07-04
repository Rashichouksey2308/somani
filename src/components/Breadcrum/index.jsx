import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
export default function index({isQuery}) {
  const[show,setShow]=useState({
    units:true,
    currency:true
  })
  useEffect(() => {
    if(isQuery?.match("/leads")||isQuery?.match("/review")) {
      show.units=false
      show.currency=false
      setShow({...show})
    }else if(isQuery?.match("/credit-queue")||isQuery?.match("/termsheet")||isQuery?.match("/margin-money")){
      show.units=false
      show.currency=true
      setShow({...show})
    }
    else if(isQuery?.match("/termsheet/")||isQuery?.match("/margin-money/")){
      show.units=true
      show.currency=true
      setShow({...show})
    }
    else{
       show.units=true
      show.currency=true
      setShow({...show})
    }
  },[isQuery])
  console.log("isqqqq",isQuery)
  return (
    <div className={`${styles.main_container} d-flex justify-content-between background1`}>
      <div>
        <img src="/static/home.svg"></img>
        <span>/</span>
        <span>Dashboard</span>
     </div>
      <div className={`${styles.unit_container} d-flex`}>
           {show.units?<div className="mr-0 mr-sm-2">
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Units :
            </h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
           </div>:null}
           {show.currency? <div>
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select className={`${styles.options} bg-transparent px-0 accordion_DropDown`}>
              <option>INR</option>
            </select>
           </div>:null}
          </div>
          </div>
   
  )
}