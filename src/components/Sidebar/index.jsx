import React,{useState} from 'react'
import styles from "./index.module.scss";
import dash from '../../../public/static/Dashboard.svg'
import accord from '../../../public/static/next-logo.png'

function index() {

    let tempArr=[
        {
            main:"Dashboard",
            Other:[],
            image:"/static/Dashboard.svg"
        },
        {
            main:"Leads",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Dashboard.svg"

        },
        {
            main:"Loading, Transit & Unloading",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Dashboard.svg"
        },
          {
            main:"Agreement & Lc Module",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Dashboard.svg"
        },
          {
            main:"Custom Clearance & WareHouse",
           Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Dashboard.svg"
        },
          {
            main:"Masters",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Dashboard.svg"
        },
     
    ]
 const [className,setClassName] =useState("")
 const [category,setcategory] =useState("Dashboard")
  const [index12,setIndex] =useState("")
  const handleOpen=(val,index)=>{
   console.log("open",val)
   setClassName(`${styles.openlist}`)
   setcategory(val)
    setIndex(index)
   return index
  }
console.log(category)
  return (
    <div className={styles.main_container}>
      {tempArr.map((val,index)=>{
         const className1 = category==val.main?`${styles.selected}`:null
            return (
               
           <>
                <div key={index} className={styles.wrapper}>
                <div className={`${styles.header} ${className1}`} onClick={(e)=>{
                  handleOpen(val.main,index)
                }}>
                   <div>
                    <img src='/static/Dashboard.svg'></img>
                    <span >{val.main}</span>
                   </div>
                   {val.Other.length>0?
                   <img src={accord} className={styles.icon}></img>
                   : <div className={styles.icon}></div>}
                   
                </div>
                <div className={`${styles.sub_wrapper} ${index12==index?className:null}`}>
                  {val.Other.length>0?
                     val.Other.map((other,index2)=>{
                         const className12 = index12==index?`${styles.openlist}`:null
                     return(
                     <>
                      <div index={index2} className={`${styles.sub_header} ${className12}`}>
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