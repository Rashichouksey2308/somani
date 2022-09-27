import React, {useState} from 'react'
import styles from './index.module.scss'
import {Row, Col,Form} from "react-bootstrap"
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
import { useDispatch, useSelector } from 'react-redux'
import { updateGenericData } from '../../redux/generic/actionsType'

import { cssNumber } from 'jquery'


function Index(props) {
    const dispatch = useDispatch()

  console.log(props,"sales")
  const [active,setActive]=useState("Supplier")
  const [multiPart,setMultiPart]=useState(false)
  const [saveData,setSaveData]=useState(false)
  const [submitData,setSubmitData]=useState(false)
  const changeActiveValue=(val,index)=>{

  setActive(val)
  showContent()
  setSaveData(false)
  let tempArr=sideBar;
  for(let i=0;i<tempArr.length;i++) {
    if(i==index){
      tempArr[i].state="current"
       tempArr[i].image="/static/currnet.svg"
    }
    else{
      if(tempArr[i].state!="pending" && tempArr[i].state!="complete"){
         tempArr[i].state="default"
         tempArr[i].image="/static/Group 3256.svg"
      }
    }

  }
  console.log(tempArr,"name")
  setSidebar(tempArr)
  }
  
  
  const showContent =(sellerData)=>{
    if(active=="Buyer"){
      return(
        <Buyer
         saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />
      )
    }
    if(active=="Associate Buyer"){
      return(
        <AssociateBuyer/>
      )
    }
    if(active=="Seller"){
      return(
        <Seller 
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />
      )
    }
        if(active=="CHA"){
      return(
        <CHA 
         saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />


      )
    }
    if(active=="CMA"){
      return(
        <CMA 
         saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />
      )
    }
      if(active=="Supplier"){
      return(
        <Manufecture 
        saveData={saveData} 
        sendData={sendData} 
        multiPart={multiPart}
        submitData={submitData} 
        updateData={updateData}
         active={active}
        />
      )
    }
      if(active=="Shipping Line"){
      return(
        <Shipping
         saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />
      )
    }
      if(active=="Financing Bank"){
      return(
        <Finance 
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        />
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
    {name:"Seller",state:"current",value:"Seller"},
    {name:"Buyer",state:"default",value:"Buyer"},
    {name:"Manufacturer/Supplier /Shipper",state:"default",value:"Manufacturer/Supplier /Shipper"},
    {name:"End User / Buyer",state:"default",value:"End User / Buyer"},
    {name:"Execution Date",state:"default",value:"Execution Date"},
    {name:"Commodity, Quantity, Unit Price",state:"default",value:"Commodity, Quantity, Unit Price"},
    {name:"Product Specifications",state:"default",value:"Product Specifications"},
    {name:"Total Order Value",state:"default",value:"Total Order Value"},
    {name:"Discharge Port",state:"default",value:"Discharge Port"},
    {name:"Loading Port",state:"default",value:"Loading Port"}
    ]
  )
  const onLeftChange=()=>{
  let tempArr=sideBar;
  for(let i=0;i<tempArr.length;i++) {
    if(tempArr[i].state=="current"){
     if(i!=0){
      tempArr[i].state="default"
     tempArr[i].image="/static/Group 3256.svg"
      let a=i-1
      console.log(a,"tempArr[a]234")
      tempArr[a].state="current"
      tempArr[a].image="/static/currnet.svg"
      setActive(tempArr[a].name)
     }
    }

  }
  console.log("aasdaa",tempArr)
  setSidebar(tempArr)
  }
  const onRightChange=()=>{
     let tempArr=sideBar;
     console.log(tempArr,"987789")
  for(let i=0;i<tempArr.length;i++) {
    console.log(tempArr[i],"987")
    if(tempArr[i].state=="current"){
     if(i!=tempArr.length){
        tempArr[i].state="default"
        tempArr[i].image="/static/Group 3256.svg"
        console.log( tempArr[i].state,"tempArr[a]")
      let a=i+1
        console.log(a,"tempArr[a]234")
       tempArr[a].state="current"
       tempArr[a].image="/static/currnet.svg"
      setActive(tempArr[a].name)
      break;

     }
    }

  }
  console.log("aasdaa",tempArr)
  setSidebar(tempArr)
  }
 console.log(sideBar,"sideBar")

const onSave=()=>{
  setSaveData(true)
 }
 const onSubmit=()=>{
  setSubmitData(true)
 }
 const updateData=async(key,data)=>{
  let dataToSend={}
  if(key=="Supplier"){
   dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       supplier:{
        "name": data.supplierState.name,
        "shortName": data.supplierState.shortName,
        "bankDetails": {
            "bankName": data.supplierState.bankDetails.bankName,
            "accountNo": data.supplierState.bankDetails.accountNo,
            "swiftCode": data.supplierState.bankDetails.swiftCode,
            "city": data.supplierState.bankDetails.city
        },
        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
        "multiParty":data.supplierState.multiParty,
    }
  }
    console.log(dataToSend,"dataToSend")
   
  
   

  

  }
   if(key=="Seller"){
   dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       seller:{
        "name": data.sellerData.name,
        "shortName": data.sellerData.shortName,
        
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
    }
  }
    console.log(dataToSend,"dataToSend")
   
    sessionStorage.removeItem("Seller")
   

  

  }
  if(key=="Buyer"){
   dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       seller:{
        "name": data.buyerData.name,
        "branchName": data.buyerData.branchName,
        
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
    }
  }
    console.log(dataToSend,"dataToSend")
   
   

  

  }
  if(key=="Finance"){
   dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       finance:{
        "name": data.financeData.name,
        "branchName": data.financeData.branchName,
        
       
       
    }
  }
    console.log(dataToSend,"dataToSend")
   
   

  

  }
  if(key=="Cma"){
    dataToSend={
        genericId:"62df99e8592ccd0022401c76",
     cma:{
        "name": data.cmaData.name,
        "shortName": data.cmaData.shortName,
        "shortName": data.cmaData.gstin,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
     }
    
        
       
  
  }
    

  }
   if(key=="Cha"){
       dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       cha:{
        "name": data.chaState.name,
        "shortName": data.chaState.shortName,
         "gstin": data.chaState.gstin,

        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
        
    }
  }
  }
  if(key=="Stevedore"){
       dataToSend={
      genericId:"62df99e8592ccd0022401c76",
       cha:{
        "name": data.chaState.name,
        "shortName": data.chaState.shortName,
         "gstin": data.chaState.gstin,

        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
        
    }
  }
 }


   
    await dispatch(updateGenericData(dataToSend))
  let tempArr=sideBar;
    sideBar.forEach((val,index)=>{
      if(val.value==key){
      tempArr[index].state="complete"
      tempArr[index].image="/static/done.svg"
    }
     setSidebar(tempArr)
    })
    setSubmitData(false)
  
}
const sendData=(key,data)=>{
  console.log(data,"sendData")
  let dataToSend={}
  if(key=="Supplier"){
     dataToSend={
    
        "name": data.supplierState.name,
        "shortName": data.supplierState.shortName,
        "bankDetails": {
            "bankName": data.supplierState.bankDetails.bankName,
            "accountNo": data.supplierState.bankDetails.accountNo,
            "swiftCode": data.supplierState.bankDetails.swiftCode,
            "city": data.supplierState.bankDetails.city
        },
        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
        "multiParty":data.supplierState.multiParty,
    
  }
    sessionStorage.setItem("Supplier",JSON.stringify(dataToSend))


    

  }
  if(key=="Seller"){
    dataToSend={
     
    
        "name": data.sellerData.name,
        "shortName": data.sellerData.shortName,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Seller",JSON.stringify(dataToSend))

  }
   if(key=="Buyer"){
    dataToSend={
     
    
        "name": data.buyerData.name,
        "branchName": data.buyerData.branchName,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Buyer",JSON.stringify(dataToSend))

  }
   if(key=="Finance"){
   dataToSend={
      
        "name": data.financeData.name,
        "branchName": data.financeData.branchName,
        
       
       
    
  }
   sessionStorage.setItem("Finance",JSON.stringify(dataToSend))
   

  

  }
  if(key=="Cma"){
    dataToSend={
     
    
        "name": data.cmaData.name,
        "shortName": data.cmaData.shortName,
        "shortName": data.cmaData.gstin,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Cma",JSON.stringify(dataToSend))

  }
  if(key=="Cha"){
    dataToSend={
     
     
       "name": data.chaState.name,
        "shortName": data.chaState.shortName,
         "gstin": data.chaState.gstin,

        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Cha",JSON.stringify(dataToSend))

  }
  if(key=="Stevedore"){
    dataToSend={
     
     
       "name": data.chaState.name,
        "shortName": data.chaState.shortName,
         "gstin": data.chaState.gstin,

        "addresses": data.addressList,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Cha",JSON.stringify(dataToSend))

  }

//       setSidebar(prevState => {
//       const newState = prevState.map((obj ,i)=> {
        
//         if (obj.value == key) {
//           return {...obj, state: 'pending',image:"/static/pending2.svg"};
//         }
// // 👇️ otherwise return object as is
//         return obj;
//       });

//       return newState;
//     });
    let tempArr=sideBar;
    sideBar.forEach((val,index)=>{
      if(val.value==key){
      tempArr[index].state="pending"
      tempArr[index].image="/static/pending2.svg"
    }
     setSidebar(tempArr)
    })
   
    



  


    

  

  

  
}

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
             
               <img src={row.image}></img>
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
      <div className={`${styles.content} card p-0 card-body`}>
      <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
        <h2 className="mb-0">{active}</h2>
                <div
                    className={`${styles.pageList}  d-flex justify-content-end align-items-center`}

                  >
                 
                    <div className={`${styles.multiPart} d-flex justify-content-center align-items-center`}>
                      <span className={`mr-4 label`}>Multiple Parties Involved</span>
                      <div className={`d-flex mr-4`}>
                        <div className={`form-check  mr-4`}>
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>{
                          setMultiPart(true)
                        }}
                        checked={multiPart==true?true:false}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Table
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" 
                         checked={multiPart==false?true:false}
                        onChange={()=>{
                          setMultiPart(false)
                        }}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Text Field
                        </label>
</div>                   
                      </div>
              <Form.Group className={`${styles.form_group} `}>
            

            </Form.Group>
                    </div>
                   
                   {active=="Stevedore"?
                    <div className={`${styles.switchContainer} d-flex align-items-center`}>
                      <span>Same as CHA</span>
                      <span className={` ${styles.yes}`}>Yes</span>
                      <label className={styles.switch}>
                        <input type="checkbox"></input>
                        <span className={`${styles.slider} ${styles.round}` }></span>
                      </label>
                      <span  className={`${styles.no}`}>No</span>
                    </div>
                   :null}
                    <a href="#" className={`${styles.arrow} ${`leftArrow`}`} 
                    onClick={()=>{
                      onLeftChange()
                    }}
                    >
                      {' '}
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className="img-fluid"

                      />
                    </a>
                    <a href="#" className={`${styles.arrow} ${`rightArrow`}`}
                                        onClick={()=>{
                      onRightChange()
                    }}
                    >
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />
                    </a>
                  </div>
                                              
                                           
          </div>
           {payment()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject} onClick={(e)=>{
                onSave()
              }}><span>Save</span></div>
              <div className={styles.approve}
              onClick={(e)=>{
                onSubmit()
              }}
              ><span>Submit</span></div>                                
                                               
                                           
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
const payment=()=>{
  return(
     <div className={`${styles.paymet} card-body`}>
     <div className={`d-flex justify-content-between align-items-between`}>
       <input placeholder={``}></input>
       <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"></img>
     </div>
     <div className={`${styles.button_container} d-flex justify-content-start  align-items-center `}>
        <div className={`${styles.button} d-flex justify-content-center align-items-center`}>
           <span>Upload Specifications</span>
        </div>
        <div className={`${styles.file_text}`}>
            <span><span className={`${styles.danger} ml-n2 mr-1`}>* </span>ONLY .XLSX FILES ARE ALLOWED &amp; MAX FILE SIZE UP TO 50 MB</span>
        </div>
     </div>
     <span>Comments</span>
     <div className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
       <input placeholder={``}></input>
       <div className={`d-flex justify-content-evenly align-items-center`}>
         <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"></img>
         <img src="/static/delete 2.svg" className="img-fluid" alt="delete"></img>
       </div>
     </div>
     </div>
  )
}