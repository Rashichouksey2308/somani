import React from 'react'
import styles from "./index.module.scss";
import dash from '../../../public/static/Dashboard.svg'
import accord from '../../../public/static/next-logo.png'

function index() {

    let tempArr=[
        {
            main:"Dashboard",
            Other:[],
            image:dash
        },
        {
            main:"Leads",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:dash

        },
        {
            main:"Loading, Transit & Unloading",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:dash
        },
          {
            main:"Agreement & Lc Module",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:dash
        },
          {
            main:"Custom Clearance & WareHouse",
           Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:dash
        },
          {
            main:"Masters",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:dash
        },
     
    ]


  return (
    <div className={styles.main_container}>
      {tempArr.map((val,index)=>{
            return (
           <>
                <div key={index} className={styles.wrapper}>
                <div className={styles.header}>
                   <div>
                    <img src={dash}></img>
                    <span>{val.main}</span>
                   </div>
                   {val.Other.length>0?
                   <img src={accord} className={styles.icon}></img>
                   : <div className={styles.icon}></div>}
                   
                </div>
                <div className={styles.sub_wrapper}>
                  {val.Other.length>0?
                     val.Other.map((other,index2)=>{
                     return(
                     <>
                      <div index={index2} className={styles.sub_header}>
                      <div>
                      <img src={accord}></img>
                      <span>{other}</span>
                      </div>
                     </div>
                     </>

                 )})
                
                :null}
                 </div>
              
            </div>  
           </>
            )
         
        })}
    </div>
  )
}

export default index