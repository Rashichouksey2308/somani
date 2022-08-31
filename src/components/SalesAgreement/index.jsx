import React, {useState,useEffect} from 'react'
import styles from './index.module.scss'
import {Row, Col,Form} from "react-bootstrap"
import GrowInput from '../GrowInput'
import Buyer from '../AggrementContent/buyer'
import AssociateBuyer from '../AggrementContent/associateBuyer'
import CHA from '../AggrementContent/cha'
import CMA from '../AggrementContent/cma'
import Finance from '../AggrementContent/finance'
import Manufecture from '../AggrementContent/manufecture'
import ProductSpecification from '../AggrementContent/productSpecification'
import AddtionalComments from '../AggrementContent/addtionalComments'
import PlaceOfExecutition from '../AggrementContent/placeOfExecutition'

import Shipping from '../AggrementContent/shipping'
import Seller from '../AggrementContent/seller'

import Stevedore from '../AggrementContent/stevedore'
import Thirdparty from '../AggrementContent/thirdparty'
import { useDispatch, useSelector } from 'react-redux'
import { updateGenericData } from '../../redux/generic/actionsType'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { cssNumber } from 'jquery'
import API from '../../../src/utils/endpoints'
import Cookies from 'js-cookie'
import Axios from 'axios'


function Index(props) {
    const dispatch = useDispatch()

  console.log(props.genericData,"sales")
  const [active,setActive]=useState("Supplier")
  const [multiPart,setMultiPart]=useState(false)
  const [multiPartValue,setMultiPartValue]=useState("Manufacturer")
  const [saveData,setSaveData]=useState(false)
  const [submitData,setSubmitData]=useState(false)
  const [isSideBarOpen,setIsSideBarOpen]=useState(true)
  useEffect(() => {
    if(window){
    props.setDate(localStorage.getItem("timeGenericUpdated"))
    }
  })
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
  setIsSideBarOpen(false)
  }
  const uploadDoc = async (e) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      console.log(response.data.data, 'dischargeOfCargo2')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data
        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())
      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage.toUpperCase())) {
      //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      // }
    }
  }
  const addressValidation=(type,data,check=true)=>{
    console.log(type,data,"type,data")
  if (data.addressType === "" || data.addressType==undefined) {
      let toastMessage = 'Please add address Type'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
     if (data.fullAddress === "" || data.fullAddress==undefined) {
      let toastMessage = 'Please add address'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
      if (data.pinCode === "" || data.pinCode==undefined) {
    let toastMessage = 'Please add pin Code'
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    return false
    }
      if (data.country === "" || data.country==undefined) {
      let toastMessage = 'Please add Country'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
    if(type=="Branch"){
   if(check){
     if (data.gstin === "" || data.gstin==undefined) {
      let toastMessage = 'Please add gstin'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
   }
       if (data.city === "" || data.city==undefined) {
      let toastMessage = 'Please add city'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
        if (data.state === "" || data.state==undefined) {
      let toastMessage = 'Please add state'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return false
      }
    }
     
    return true
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
        data={props?.genericData?.buyer}
        order={props?.genericData}
        uploadDoc={uploadDoc}
        addressValidation={addressValidation}
        />
      )
    }
    if(active=="Associate Buyer"){
      return(
        <AssociateBuyer
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        data={props?.genericData?.associate}
        uploadDoc={uploadDoc}
        addressValidation={addressValidation}
        
        
        />
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
        data={props?.genericData?.seller}
        uploadDoc={uploadDoc}
        addressValidation={addressValidation}

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
        data={props?.genericData?.supplier}
        addressValidation={addressValidation}
        uploadDoc={uploadDoc}
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
         data={props?.genericData?.cma}
         addressValidation={addressValidation}
         uploadDoc={uploadDoc}
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
        multiPartValue={multiPartValue}
        data={props?.genericData?.supplier}
        order={props?.genericData?.order}
        uploadDoc={uploadDoc}
        addressValidation={addressValidation}
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
         data={props?.genericData?.shipping}
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
         data={props?.genericData?.supplier}
        />
      )
    }
        if(active=="Stevedore"){
      return(
        <Stevedore
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        data={props?.genericData?.supplier}
        uploadDoc={uploadDoc}
        addressValidation={addressValidation}
        />
      )
    }
      if(active=="Delivery Terms"){
      return(
        <Thirdparty 
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
         active={active}
         data={props?.genericData?.deliveryTerms}
        />
      )
    }
     if(active=="Product Specifications"){
      return(
        <ProductSpecification
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
         active={active}
         data={props?.genericData?.productSpecifications}
        
        />
      )
    }
    if(active=="Additional Comments"){
      return(
        <AddtionalComments
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
         active={active}
         data={props?.genericData?.additionalComments}
        
        />
      )
    }
     if(active=="Place of Execution"){
      return(
        <PlaceOfExecutition
        saveData={saveData} 
        sendData={sendData} 
        submitData={submitData} 
        updateData={updateData}
        active={active}
        data={props?.genericData?.placeOfExecution}
        
        />
      )
    }
  }
  const [sideBar,setSidebar] =useState(
    [
    {name:"Supplier",state:"current",value:"Supplier",image:"/static/currnet.svg"},
    {name:"Seller",state:"default",value:"Seller",image:"/static/Group 3256.svg"},
    {name:"Buyer",state:"default",value:"Buyer",image:"/static/Group 3256.svg"},
    {name:"Associate Buyer",state:"default",value:"Associate Buyer",image:"/static/Group 3256.svg"},
    {name:"Financing Bank",state:"default",value:"Financing Bank",image:"/static/Group 3256.svg"},
    {name:"Shipping Line",state:"default",value:"Shipping Line",image:"/static/Group 3256.svg"},
    {name:"CHA",state:"default",value:"CHA",image:"/static/Group 3256.svg"},
    {name:"Stevedore",state:"default",value:"Stevedore",image:"/static/Group 3256.svg"},
    {name:"CMA",state:"default",value:"CMA",image:"/static/Group 3256.svg"},
    {name:"Delivery Terms",state:"default",value:"Delivery Terms",image:"/static/Group 3256.svg"},
    {name:"Place of Execution",state:"default",value:"Place of Execution",image:"/static/Group 3256.svg"},
    {name:"Additional Comments",state:"default",value:"Additional Comments",image:"/static/Group 3256.svg"},
    {name:"Product Specifications",state:"default",value:"Product Specifications",image:"/static/Group 3256.svg"},
    
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
 const updateData=async (key,data)=>{
  let toastMessage=""
  console.log("this13",data)
  let dataToSend={}
    if(key=="Supplier"){
    dataToSend={
    genericId:props.genericData?._id,
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
    "multiPartyAddresses":data.supplierState.multiPartyAddresses,
    }
    }
    


   if (dataToSend.supplier.name == "" || dataToSend.supplier.name == undefined) {
      toastMessage = `Please add supplier name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.supplier.shortName== "" || dataToSend.supplier.shortName== undefined) {
      toastMessage = `Please add short name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.supplier.bankDetails.accountNo == "" || dataToSend.supplier.bankDetails.accountNo == undefined) {
      toastMessage = `Please add account number `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
     if (dataToSend.supplier.bankDetails.bankName == "" || dataToSend.supplier.bankDetails.bankName == undefined) {
      toastMessage = `Please add bank name `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.supplier.bankDetails.swiftCode == "" || dataToSend.supplier.bankDetails.swiftCode == undefined) {
      toastMessage = `Please add swift code `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
    if (dataToSend.supplier.addresses.length <= 0 || dataToSend.supplier.addresses == undefined) {
      toastMessage = `Please add address `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
    if (dataToSend.supplier.authorisedSignatoryDetails.length <= 0 || dataToSend.supplier.authorisedSignatoryDetails == undefined) {
      toastMessage = `Please add authorised Signatory Details `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }




    }
    if(key=="Seller"){
    dataToSend={
    genericId:props.genericData?._id,
    seller:{
    "name": "Indo German International",
    "shortName": data.sellerData.shortName,

    "addresses": data.addresses,
    "authorisedSignatoryDetails": data.list,

    }
    }
    console.log(dataToSend,"dataToSend")

    sessionStorage.removeItem("Seller")
   if (dataToSend.seller.name == "" || dataToSend.seller.name == undefined) {
      toastMessage = `Please add seller name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.seller.shortName== "" || dataToSend.seller.shortName== undefined) {
      toastMessage = `Please add short name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
 
  if (dataToSend.seller.addresses.length <= 0 || dataToSend.seller.addresses == undefined) {
      toastMessage = `Please add address `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
  if (dataToSend.seller.authorisedSignatoryDetails.length <= 0 || dataToSend.seller.authorisedSignatoryDetails == undefined) {
      
  
      toastMessage = `Please add authorised Signatory Details `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
  
  
    if (dataToSend.seller.authorisedSignatoryDetails.length >= 0 ) {
      
     for(let i =0;i<dataToSend.seller.authorisedSignatoryDetails.length;i++) {
       if(dataToSend?.seller?.authorisedSignatoryDetails[i]?.document=="new"){
      toastMessage = `Please add authorised Signatory Details document `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      break;
      
       }
     }
    }
      
    
    
    }




    }
    if(key=="Buyer"){
    dataToSend={
    genericId:props.genericData?._id,
    buyer:{
    "name":props.genericData.company.companyName,
    "branchName": data.buyerData.branchName,

    "addresses": data.addresses,
    "authorisedSignatoryDetails": data.list,

    }
    }
  if (dataToSend.buyer.name == "" || dataToSend.buyer.name == undefined) {
      toastMessage = `Please add buyer name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.buyer.shortName== "" || dataToSend.buyer.shortName== undefined) {
      toastMessage = `Please add short name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
 
  if (dataToSend.buyer.addresses.length <= 0 || dataToSend.buyer.addresses == undefined) {
      toastMessage = `Please add address `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
    if (dataToSend.buyer.authorisedSignatoryDetails.length <= 0 || dataToSend.buyer.authorisedSignatoryDetails == undefined) {
      toastMessage = `Please add authorised Signatory Details `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }






    }
    if(key=="Financing Bank"){
    dataToSend={
    genericId:props.genericData?._id,
    finance:{
    "name": data.financeData.name,
    "branchName": data.financeData.branchName,



    }
    }
  if (dataToSend.finance.name == "" || dataToSend.finance.name == undefined) {
      toastMessage = `Please add name `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
   if (dataToSend.finance.branchName== "" || dataToSend.finance.branchName== undefined) {
      toastMessage = `Please add branch name  `
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      setSubmitData(false)
      return
    
    
    }
  }
 


    console.log(dataToSend,"dataToSend")





    }
    if(key=="CMA"){
    dataToSend={
    genericId:props.genericData?._id,
    cma:{
    "name": data.cmaData.name,
    "shortName": data.cmaData.shortName,
    "gstin": data.cmaData.gstin,
    "addresses": data.addresses,
    "authorisedSignatoryDetails": data.list,
    }




    }
    if (dataToSend.cma.name == "" || dataToSend.cma.name == undefined) {
    toastMessage = `Please add cma name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cma.shortName== "" || dataToSend.cma.shortName== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cma.gstin== "" || dataToSend.cma.gstin== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

    if (dataToSend.cma.addresses.length <= 0 || dataToSend.cma.addresses == undefined) {
    toastMessage = `Please add address `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cma.authorisedSignatoryDetails.length <= 0 || dataToSend.cma.authorisedSignatoryDetails == undefined) {
    toastMessage = `Please add authorised Signatory Details `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }



    }
    if(key=="CHA"){
    dataToSend={
    genericId:props.genericData?._id,
    cha:{
    "name": data.chaState.name,
    "shortName": data.chaState.shortName,
    "gstin": data.chaState.gstin,

    "addresses": data.addressList,
    "authorisedSignatoryDetails": data.list,

    }
    }
    if (dataToSend.cha.name == "" || dataToSend.cha.name == undefined) {
    toastMessage = `Please add cha name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cha.shortName== "" || dataToSend.cha.shortName== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cha.gstin== "" || dataToSend.cha.gstin== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

    if (dataToSend.cha.addresses.length <= 0 || dataToSend.cha.addresses == undefined) {
    toastMessage = `Please add address `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.cha.authorisedSignatoryDetails.length <= 0 || dataToSend.cha.authorisedSignatoryDetails == undefined) {
    toastMessage = `Please add authorised Signatory Details `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    }
    if(key=="Stevedore"){
    dataToSend={
    genericId:props.genericData?._id,
    stevedore:{
    "name": data.chaState.name,
    "shortName": data.chaState.shortName,
    "gstin": data.chaState.gstin,

    "addresses": data.addressList,
    "authorisedSignatoryDetails": data.list,

    }
    }
    if (dataToSend.stevedore.name == "" || dataToSend.stevedore.name == undefined) {
    toastMessage = `Please add stevedore name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.stevedore.shortName== "" || dataToSend.stevedore.shortName== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.stevedore.gstin== "" || dataToSend.stevedore.gstin== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

    if (dataToSend.stevedore.addresses.length <= 0 || dataToSend.stevedore.addresses == undefined) {
    toastMessage = `Please add address `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.stevedore.authorisedSignatoryDetails.length <= 0 || dataToSend.stevedore.authorisedSignatoryDetails == undefined) {
    toastMessage = `Please add authorised Signatory Details `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    }
    if(key=="Shipping Line"){
    console.log("this14")
    dataToSend={
    genericId:props.genericData?._id,
    shipping:{
    "name":data.shippingData.name,
    "vesselName":data.shippingData.vesselName,
    "gstin":data.shippingData.gstin,

    }
    }
    if (dataToSend.shipping.name == "" || dataToSend.shipping.name == undefined) {
    toastMessage = `Please add shipping name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.shipping.vesselName== "" || dataToSend.shipping.vesselName== undefined) {
    toastMessage = `Please add vessel Name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.shipping.gstin== "" || dataToSend.shipping.gstin== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

 
   
    }
    if(key=="Delivery Terms"){
    console.log("this14")
    dataToSend={
    genericId:props.genericData?._id,
    delivery:{
    "deliveryTerms":data.deliveryData.delivery,


    }
    }
     if (dataToSend.delivery.deliveryTerms == "" || dataToSend.delivery.deliveryTerms == undefined) {
    toastMessage = `Please select delivery Terms  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

    }
    if(key=="Product Specifications"){
    console.log("this14")
    dataToSend={
    genericId:props.genericData?._id,
    productSpecifications:{
    "comments":data.addressList,


    }
    }
    if (dataToSend.productSpecifications.comments.length <= 0 || dataToSend.productSpecifications.comments == undefined) {
    toastMessage = `Please add comments `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    }
    if(key=="Additional Comments"){
    let list=[];
    data.addressList.forEach((val,index)=>{
    list.push({type:val})
    })
    console.log("this14")
    dataToSend={
    genericId:props.genericData?._id,
    additionalComments:{
    "comments": data.addressList,


    }
    }
     if (dataToSend.additionalComments.comments.length <= 0 || dataToSend.additionalComments.comments == undefined) {
    toastMessage = `Please add address `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    }
    if(key=="Place of Execution"){
    console.log("this14")
    let list=[];
    data.list.forEach((val,index)=>{
    list.push({agreementName:val.name,place:val.execution})
    })
    dataToSend={
    genericId:props.genericData?._id,

    placeOfExecution:{
    "execution":list,


    }
    }
    }
     if(key=="Associate Buyer"){
    console.log("this14")
    let list=[];
    data.list.forEach((val,index)=>{
    list.push({agreementName:val.name,place:val.execution})
    })
    dataToSend={
    genericId:props.genericData?._id,

    associateBuyer:{
      "branchName": data.associate.branchName,
      "shortName": data.associate.shortName,
      "gstin": data.associate.gstin,
      "addresses": list,
      "authorisedSignatoryDetails": data.list,


    }
    }
        if (dataToSend.associateBuyer.branchName == "" || dataToSend.associateBuyer.branchName == undefined) {
    toastMessage = `Please add branch name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    // if (dataToSend.associateBuyer.shortName== "" || dataToSend.associateBuyer.shortName== undefined) {
    // toastMessage = `Please add short name  `
    // if (!toast.isActive(toastMessage.toUpperCase())) {
    // toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    // setSubmitData(false)
    // return


    // }
    // }
    if (dataToSend.associateBuyer.gstin== "" || dataToSend.associateBuyer.gstin== undefined) {
    toastMessage = `Please add short name  `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }

    if (dataToSend.associateBuyer.addresses.length <= 0 || dataToSend.associateBuyer.addresses == undefined) {
    toastMessage = `Please add address `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    if (dataToSend.associateBuyer.authorisedSignatoryDetails.length <= 0 || dataToSend.stevedore.authorisedSignatoryDetails == undefined) {
    toastMessage = `Please add authorised Signatory Details `
    if (!toast.isActive(toastMessage.toUpperCase())) {
    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    setSubmitData(false)
    return


    }
    }
    }


     console.log("this15")
  let timestamp=await dispatch(updateGenericData(dataToSend))
  console.log(timestamp,"timestamp")
  props.setDate(timestamp)
  localStorage.setItem("timeGenericUpdated",timestamp)
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
     
    
        "name": "Indo German International",
        "shortName": data.sellerData.shortName,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Seller",JSON.stringify(dataToSend))

  }
   if(key=="Buyer"){
    dataToSend={
     
    
        "name": props.genericData.company.companyName,
        "branchName": data.buyerData.branchName,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Buyer",JSON.stringify(dataToSend))

  }
   if(key=="Financing Bank"){
   dataToSend={
      
        "name": data.financeData.name,
        "branchName": data.financeData.branchName,
        
       
       
    
  }
   sessionStorage.setItem("Finance",JSON.stringify(dataToSend))
   

  

  }
  if(key=="CMA"){
    dataToSend={
     
    
        "name": data.cmaData.name,
        "shortName": data.cmaData.shortName,
        "shortName": data.cmaData.gstin,
        "addresses": data.addresses,
        "authorisedSignatoryDetails": data.list,
       
  
  }
    sessionStorage.setItem("Cma",JSON.stringify(dataToSend))

  }
  if(key=="CHA"){
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

 
      

    let tempArr=sideBar;
    sideBar.forEach((val,index)=>{
      if(val.value==key){
      tempArr[index].state="pending"
      tempArr[index].image="/static/pending2.svg"
    }
     setSidebar(tempArr)
    })
   
     let toastMessage = 'SAVEd'
        
  toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
    



  


    

  

  

  
}
const onShowSideBar=()=>{
  setIsSideBarOpen(true)
}

  useEffect(() => {
    setMultiPart(props.genericData?.supplier?.multiParty)
  },[props.genericData])
  return (
    <div className={`${styles.root}`}>
    
      <div className={`${styles.sidebar}  ${isSideBarOpen?null:styles.collapseWidth} card card-body`}>
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
     
      
      <div className={`${styles.content} ${isSideBarOpen?null:styles.fullScreen} card p-0 card-body`}>
      <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
         
        <h2 className="mb-0 d-flex">
          {!isSideBarOpen? <a href="#" className={`${styles.arrow} ${`rightArrow`}`}
          onClick={()=>{
            onShowSideBar()
          }}
          >
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className={`${styles.image_reverse} img-fluid mr-2  mb-1`}
            />
          </a>:null}
          {active}</h2>
                <div
                    className={`${styles.pageList}  d-flex justify-content-end align-items-center`}

                  >
                  {active=="Supplier"?
                    <div className={`${styles.multiPart} d-flex justify-content-center align-items-center`}>
                      <span className={`mr-4`}>Multiple Parties Involved</span>
                      <div className={`d-flex mr-4`}>
                        <div className={`form-check  mr-4`}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>{
                          setMultiPart(true)
                        }}
                        checked={multiPart==true?true:false}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                         checked={multiPart==false?true:false}
                        onChange={()=>{
                          setMultiPart(false)
                        }}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                        </label>
</div>                   
                      </div>
              <Form.Group className={`${styles.form_group} `}>
               <div className="d-flex">
                    <select
                className={` ${multiPart==true?styles.input_field:styles.inputDisabled}  ${styles.customSelect} input  form-control`}
                name="countryOfOrigin"
                onChange={(e) => {
                  setMultiPartValue(e.target.value)
                }}
                disabled={multiPart==true?"":"disable"}
                value={multiPartValue}
              >
                <option value="Manufacturer">Manufacturer</option>
                <option value="Mines">Mines</option>
                <option value="Shipper">Shipper</option>
                
              </select>
               <img
                className={`${styles.arrow3} image_arrow img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
                />

               </div>
            </Form.Group>
                    </div>
                   :null}
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
         
              {showContent()}
          
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