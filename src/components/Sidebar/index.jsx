import React,{useState} from 'react'
import styles from "./index.module.scss";
import dash from '../../../public/static/Dashboard.svg'
import accord from '../../../public/static/next-logo.png'
import Router from "next/router";

function Index() {
  
    let tempArr=[
        {
            main:"Dashboard",
            Other:[],
            image:"/static/Dashboard.svg",
            route:"/"
        },
        {
            main:"Leads",
            Other:[
               {name: "Review Queue",image:"/static/Review Queue.svg",route:""},
               {name: "Credit Queue",image:"/static/Credit Queue.svg", route: "/credit-queue"},
               {name: "Termsheets",image:"/static/Termsheets.svg",route:"/termsheet"},
               {name: "Margin Money",image:"/static/Termsheets.svg",route:"/margin-money"},
                  
            ],
              image:"/static/Leads.svg",
               route:"/leads"

        },
        {
            main:"Loading, Transit & Unloading",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",
                "Money margin"
            ],
              image:"/static/Loading, Transit & Unloading.svg"
        },
          {
            main:"Agreement & Lc Module",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Agreement&LCModule.svg"
        },
          {
            main:"Custom Clearance & WareHouse",
           Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
              image:"/static/Warehouse.svg"
        },
          {
            main:"Masters",
            Other:[
                "Review Queue",
                "Credit Queue",
                "Termsheets",   
            ],
                image:"/static/Masters.svg"
        },
     
    ]
 const [className,setClassName] =useState("")
 const [category,setcategory] =useState("Dashboard")
 const [index12,setIndex] =useState("")
  const handleOpen=(val,index)=>{
    if(index12==index){
   setIndex("")
   return
    }
   console.log("open",val)
   setClassName(`${styles.openlist} `)
   setcategory(val)
    setIndex(index)
   return index
  }
console.log(tempArr,"yem")
  return (
    <div className={`${styles.main_container} sidebar-bg`} >
      {tempArr.map((val,index)=>{
         const className1 = category==val.main?`${styles.selected}`:null
            return (
               
           <>
                <div key={index} className={styles.wrapper}>
                <div className={`${styles.header} ${className1}`} onClick={(e)=>{
                  handleOpen(val.main,index)
                  console.log("router",val.route)
                    Router.push(val.route);
                }}>
                   <div>
                    <img src={`${val.image}`}></img>
                    <span >{val.main}</span>
                   </div>
                   {val.Other.length>0?
                   <img src="/static/Accordion - menu.svg" className={styles.icon}></img>
                   : <div className={styles.icon}></div>}
                   
                </div>
                <div className={`${styles.sub_wrapper} ${index12==index?className:null}`}>
                  {val.Other.length>0?
                     val.Other.map((other,index2)=>{
                         const className12 = 
                         index12 == index?`${styles.openlist} sidebar-selected`: null
                     return(
                     <>
                      <div index={index2} className={`${styles.sub_header} ${className12}`}
                      onClick={()=>{
                         Router.push(other.route);
                      }}
                      >
                      <div>
                      <img src={`${other.image}`}></img>
                      <span>{other.name}</span>
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

export default Index