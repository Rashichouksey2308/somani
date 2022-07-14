import React, {useState} from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'
import Buyer from '../AggrementContent/buyer'
import AssociateBuyer from '../AggrementContent/associateBuyer'
import CHA from '../AggrementContent/cha'
import CMA from '../AggrementContent/cma'
import Finance from '../AggrementContent/finance'
import Manufecture from '../AggrementContent/manufecture'

import Shipping from '../AggrementContent/shipping'
import Seller from '../AggrementContent/seller'

import Stevedore from '../AggrementContent/stevedore'
import Thirdparty from '../AggrementContent/thirdparty'
function Index() {
  const [active,setActive]=useState("Manufacturer/ Supplier")
  const changeActiveValue=(val,index)=>{
    console.log(val,"val")
  setActive(val)
  showContent()
  let tempArr=sideBar;
  for(let i=0;i<tempArr.length;i++) {
    if(i==index){
      tempArr[i].state="current"
    }else{
      tempArr[i].state="default"
    }

  }
  console.log(tempArr,"name")
  setSidebar(tempArr)
  }
  
  const showContent =()=>{
    if(active=="Buyer"){
      return(
        <Buyer/>
      )
    }
    if(active=="Associate Buyer"){
      return(
        <AssociateBuyer/>
      )
    }
    if(active=="Seller"){
      return(
        <Seller/>
      )
    }
        if(active=="CHA"){
      return(
        <CHA/>
      )
    }
    if(active=="CMA"){
      return(
        <CMA/>
      )
    }
      if(active=="Manufacturer/ Supplier"){
      return(
        <Manufecture/>
      )
    }
      if(active=="Shipping Line"){
      return(
        <Shipping/>
      )
    }
      if(active=="Financing Bank"){
      return(
        <Finance/>
      )
    }
        if(active=="Stevedore"){
      return(
        <Stevedore/>
      )
    }
            if(active=="Appointment of Third Party"){
      return(
        <Thirdparty/>
      )
    }
  }
  const [sideBar,setSidebar] =useState(
    [
    {name:"Manufacturer/ Supplier",state:"current",value:"Manufacturer/ Supplier"},
    {name:"Seller",state:"default",value:"Seller"},
    {name:"Buyer",state:"default",value:"Buyer"},
    {name:"Associate Buyer",state:"default",value:"Associate Buyer"},
    {name:"Financing Bank",state:"default",value:"Financing Bank"},
    {name:"Shipping Line",state:"default",value:"Shipping Line"},
    {name:"CHA",state:"default",value:"CHA"},
    {name:"Stevedore",state:"default",value:"Stevedore"},
    {name:"CMA",state:"default",value:"CMA"},
    {name:"Appointment of Third Party",state:"default",value:"Appointment of Third Party"}
    ]
  )

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.sidebar} card card-body`}>
       {sideBar.map((row,index)=>{
        return(
          <>
          <div key={index} className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div 
            className={`${styles.content2} ${row.state=="current"?styles.selected:null}  d-flex justify-content-between align-items-center`}
                   onClick={(e)=>{
                    changeActiveValue(row.name,index)
                  }}
            >
             
               <img src={`${
                row.state=="current"?"/static/Group 203255.svg":"/static/Group 3256.svg"
               }`}></img>
                 <span className="ml-3">{row.name}</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
          </>
        )
       })}

      </div>
      <div className={`${styles.content} card`}>
      <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
        <h2 className="mb-0">{active}</h2>
                <div
                    className={`${styles.pageList}  d-flex justify-content-end align-items-center`}

                  >
                   {active=="Stevedore"?
                    <div>
                      <span>Same as CHA</span>
                       <span>Yes</span>
                      <label className={styles.switch}>
                        <input type="checkbox"></input>
                        <span className={`${styles.slider} ${styles.round}` }></span>
                      </label>
                      <span>No</span>
                    </div>
                   :null}
                    <a href="#" className={`${styles.arrow} ${`leftArrow`}`}>
                      {' '}
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className="img-fluid"
                      />
                    </a>
                    <a href="#" className={`${styles.arrow} ${`rightArrow`}`}>
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />
                    </a>
                  </div>
                                              
                                           
          </div>
           {showContent()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default Index

const sales=()=>{
  return(
     <div className="card-body">
            <p className="text_sales" >A. All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and custom clearance shall be to Buyer’s account and shall be solely the Buyer’s responsibility.</p>
            <p  className="text_sales">
                B. The Buyer shall pay for entire cargo within <GrowInput placeholder={90}/> days from the date of <GrowInput placeholder={`B/L`}/> or <GrowInput placeholder={60}/> from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of the material to be lifted through TT remittance. The Seller shall release the part material to Buyer upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions shall be issued for the part material, for which the payment has been made within one banking day. However, Seller will provide first delivery order in Advance as per buyer’s request.
            </p>
            < p  className="text_sales">
                C. The material shall be stored at <GrowInput placeholder={`Visakhapatnam Port, India`}/> for which the cost of such Rent, Claim, and penalty shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity Release Order from the Lending Bank shall be sent to the CMA Agent <GrowInput placeholder={`Dr. Amin Controllers Pvt. Ltd.`}/>, within one banking day.
            </p>
            <p  className="text_sales">D. Documents to be provided to Buyer.
                <br/> 
                (1). The Seller‘s Commercial Invoice;. 
                 <br/>
                (2). Full set of 3/3 originals of Bills of Lading, 
                 <br/>
                (3). Certificate of Quality 
                 <br/>
                (4). Certificate of Weight, 
                 <br/>
                (5). Certificate of Origin. 
                 <br/>
                (6). Copy of Marine Insurance Certificate / Insurance Policy
                 <br/>
                
             All the above documents are subject to receipt from shipper.</p>
     </div>
  )
}