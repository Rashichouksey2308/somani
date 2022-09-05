import React, { useState, useEffect } from 'react'
import LcApplication from '../../../src/components/LcApplication'
import PreviewBar from '../../../src/components/PreviewBar'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule, UpdateLcModule } from '../../../src/redux/lcModule/action'
import {removePrefixOrSuffix} from '../../../src/utils/helper'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
function Index() {
  const dispatch = useDispatch()

  const { lcModule } = useSelector((state) => state.lc)

  const lcModuleData = _get(lcModule, 'data[0]', {})


  useEffect(() => {
    let id = sessionStorage.getItem('lcOrder')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const [lcData, setLcData] = useState()

  // console.log(lcData, "THIS IS LC USE STATE")

  useEffect(() => {
    setLcData({
    formOfDocumentaryCredit: lcModuleData?.lcApplication?.formOfDocumentaryCredit,
    applicableRules: lcModuleData?.lcApplication?.applicableRules,
    dateOfExpiry: lcModuleData?.lcApplication?.dateOfExpiry,
    placeOfExpiry: lcModuleData?.lcApplication?.placeOfExpiry,
    lcIssuingBank: lcModuleData?.lcApplication?.lcIssuingBank,
    applicant: lcModuleData?.lcApplication?.applicant,
    beneficiary: lcModuleData?.lcApplication?.beneficiary,
    currecyCodeAndAmountValue: lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
    currecyCodeAndAmountUnit: lcModuleData?.lcApplication?.currecyCodeAndAmountUnit,
    tolerancePercentage: lcModuleData?.lcApplication?.tolerancePercentage,
    creditAvailablewith: lcModuleData?.lcApplication?.creditAvailablewith,
    creditAvailableBy: lcModuleData?.lcApplication?.creditAvailableBy,
    atSight: lcModuleData?.lcApplication?.atSight,
    numberOfDays: lcModuleData?.lcApplication?.numberOfDays,
    drawee: lcModuleData?.lcApplication?.drawee,
    deferredPayment: lcModuleData?.lcApplication?.deferredPayment,
    partialShipment: lcModuleData?.lcApplication?.partialShipment,
    transhipments: lcModuleData?.lcApplication?.transhipments,
    shipmentForm: lcModuleData?.lcApplication?.shipmentForm,
    portOfLoading: lcModuleData?.lcApplication?.portOfLoading,
    portOfDischarge: lcModuleData?.lcApplication?.portOfDischarge,
    latestDateOfShipment: lcModuleData?.lcApplication?.latestDateOfShipment,
    DescriptionOfGoods: lcModuleData?.lcApplication?.DescriptionOfGoods,
    presentaionPeriod: lcModuleData?.lcApplication?.presentaionPeriod,
    confirmationInstructions: lcModuleData?.lcApplication?.confirmationInstructions,
    reimbursingBank: lcModuleData?.lcApplication?.reimbursingBank,
    adviceThroughBank: lcModuleData?.lcApplication?.adviceThroughBank,
    secondAdvisingBank: lcModuleData?.lcApplication?.secondAdvisingBank,
    requestedConfirmationParty: lcModuleData?.lcApplication?.requestedConfirmationParty,
    charges: lcModuleData?.lcApplication?.charges,
    instructionToBank: lcModuleData?.lcApplication?.instructionToBank,
    senderToReceiverInformation: lcModuleData?.lcApplication?.senderToReceiverInformation,
    })
  }, [lcModuleData])

  console.log(lcData, "THIS IS LC DATA")
  

  const saveLcData = (name, value) => {
    const newInput = { ...lcData }
    newInput[name] = value
    // console.log(newInput)
    setLcData(newInput)
  }

  

  const [currentComment,setCurrentComment]=useState("")
  const [lcDocuments, setLcDocuments] = useState(lcModuleData?.documentRequired)
  const [lcComments, setLcComments] = useState(
    lcModuleData?.additionalConditions,
  )
  const [lcCondition, setLcCondition] = useState(
    lcModuleData?.additionalConditions
  )
  console.log(lcCondition,"lcCondition1223")
  const [currentComment2,setCurrentComment2]=useState("")
  

  const addCommentArr = (lcComment) => {
    let newArr = [...lcComments]
    newArr.push(lcComment)
    setLcComments(newArr)
  }
 
  const addComment=(val)=>{
    setCurrentComment(val)
  }
  const addDocArr = () => {
   
   setLcDocuments([...lcDocuments,currentComment])
   setCurrentComment("")
  }
  const deleteLcDoc=(index)=>{
    setLcDocuments([...lcDocuments.slice(0,index), ...lcDocuments.slice(index+1)])
  }
  const lcDocEdit=(e,index)=>{
    let tempArr=[...lcDocuments]
  
    tempArr[index]=e.target.value
    setLcDocuments(tempArr)
  }
  
  

 
  const addConditionComment=(val)=>{
    setCurrentComment2(val)
  }
  const addConditionArr = () => {
  // console.log("thsbhjsbdjh",lcCondition,currentComment2)
   setLcComments([...lcComments,currentComment2])
   setCurrentComment2("")
  }
  const deleteLcCondition=(index)=>{
    setLcComments([...lcComments.slice(0,index), ...lcComments.slice(index+1)])
  }
  const lcConditionEdit=(e,index)=>{
    let tempArr=[...lcComments]
  
    tempArr[index]=e.target.value
    setLcComments(tempArr)
  }

  useEffect(() => {
    let commentLcArr = []
    lcModuleData?.additionalConditions?.forEach((element) => {
      commentLcArr.push(element)
    })
    setLcComments(commentLcArr)
    
    let docLcArr = []
    lcModuleData?.documentRequired?.forEach((element) => {
      docLcArr.push(element)
    })
    setLcDocuments(docLcArr)

  }, [lcModuleData])

  const checkValidation =()=>{
    console.log("valid",lcData.applicableRules)
    let  toastMessage
   if (lcData.formOfDocumentaryCredit == "" || lcData.formOfDocumentaryCredit == undefined) {
      toastMessage = 'Please Select Form Of Documentary Credit'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false 
    }
  }  if(lcData.applicableRules === "" || lcData.applicableRules ==undefined){
       toastMessage = 'Please add Application Rules'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
    if(lcData.applicableRules === "" || lcData.applicableRules ==undefined){
       toastMessage = 'Please add Application Rules'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
  //   if(lcData.dateOfExpiry === "" || lcData.dateOfExpiry ==undefined){
  //      toastMessage = 'Please add  Date Of Expiry'
  //     if (!toast.isActive(toastMessage.toUpperCase())) {
  //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
  //     return false  
  //   }
  // }
  //    if(lcData.placeOfExpiry === "" || lcData.placeOfExpiry ==undefined){
  //      toastMessage = 'Please add Place Of Expiry'
  //     if (!toast.isActive(toastMessage.toUpperCase())) {
  //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
  //     return false  
  //   }
  // }
     if(lcData.applicant === "" || lcData.applicant ==undefined){
       toastMessage = 'Please Select Applicant'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
     if(lcData.beneficiary === "" || lcData.beneficiary ==undefined){
       toastMessage = 'Please add Beneficiary'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
     if(lcData.currecyCodeAndAmountValue === "" || lcData.currecyCodeAndAmountValue ==undefined){
       toastMessage = 'Please add Currency Code Amount'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
    if(lcData.tolerancePercentage === "" || lcData.tolerancePercentage ==undefined){
       toastMessage = 'Please add Tolerance Percentage'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.creditAvailablewith === "" || lcData.creditAvailablewith ==undefined){
       toastMessage = 'Please select Credit Available With'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
   if(lcData.creditAvailableBy === "" || lcData.creditAvailableBy ==undefined){
       toastMessage = 'Please select Credit Available By'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
    if(lcData.atSight === "" || lcData.atSight ==undefined){
       toastMessage = 'Please select At Sight'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
     if(lcData.numberOfDays === "" || lcData.numberOfDays ==undefined){
       toastMessage = 'Please add number of Days'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
   if(lcData.partialShipment === "" || lcData.partialShipment==undefined){
       toastMessage = 'Please select  Partial Shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
     if(lcData.transhipments === "" || lcData.transhipments ==undefined){
       toastMessage = 'Please select  Transhipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.shipmentForm === "" || lcData.shipmentForm ==undefined){
       toastMessage = 'Please select  shipment Form'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
   if(lcData.portOfLoading === "" || lcData.portOfLoading ==undefined){
       toastMessage = 'Please select  port Of Loading'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
     if(lcData.portOfDischarge === "" || lcData.portOfDischarge ==undefined){
       toastMessage = 'Please select  port Of Discharge'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
       if(lcData.latestDateOfShipment === "" || lcData.latestDateOfShipment ==undefined){
       toastMessage = 'Please select latest Date Of Shipment'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
   if(lcData.presentaionPeriod === "" || lcData.presentaionPeriod ==undefined){
       toastMessage = 'Please add presentaion Period'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
    if(lcData.confirmationInstructions === "" || lcData.confirmationInstructions ==undefined){
       toastMessage = 'Please add confirmation Instructions'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
    if(lcData.reimbursingBank === "" || lcData.reimbursingBank ==undefined){
       toastMessage = 'Please select  reimbursing Bank'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.adviceThroughBank === "" || lcData.adviceThroughBank ==undefined){
       toastMessage = 'Please select  advice Through Bank'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.requestedConfirmationParty === "" || lcData.requestedConfirmationParty ==undefined){
       toastMessage = 'Please select requested Confirmation Party'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.charges === "" || lcData.charges ==undefined){
       toastMessage = 'Please select charges'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
      if(lcData.instructionToBank === "" || lcData.instructionToBank ==undefined){
       toastMessage = 'Please add instruction To Bank'
      if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      return false  
    }
  }
  return true
}
  const handleLcSave = () => {
     if(checkValidation()){
    let lcObj={ ...lcData }
    lcObj.currecyCodeAndAmountValue= removePrefixOrSuffix(lcData?.currecyCodeAndAmountValue)
    lcObj.tolerancePercentage = removePrefixOrSuffix(lcData?.tolerancePercentage)
    let obj = {
      lcApplication: { ...lcObj },
      additionalConditions: [...lcComments],
      documentRequired: [...lcDocuments],
      lcModuleId: lcModuleData._id,
    }
    dispatch(UpdateLcModule({obj: obj}))
  }
  }

  const changeRoute = () => {
    if(checkValidation()){
      let task = 'preview'
      let lcObj={ ...lcData }
      lcObj.currecyCodeAndAmountValue= removePrefixOrSuffix(lcData?.currecyCodeAndAmountValue)
      lcObj.tolerancePercentage = removePrefixOrSuffix(lcData?.tolerancePercentage)
      let obj = {
        lcApplication: { ...lcObj },
        additionalConditions: [...lcComments],
        documentRequired: [...lcDocuments],
        lcModuleId: lcModuleData._id,
      }
      dispatch(UpdateLcModule({obj : obj, task: task}))
    dispatch(GetLcModule(`?lcModuleId=${lcModuleData?.order?.lc}`))
    sessionStorage.setItem('lcPreviewId', lcModuleData?.order?.lc)
    // Router.push('/letter-table/letter-amend/id')
    }
  }
  return (
    <>
      <LcApplication
        addDocArr={addDocArr}
       
        saveLcData={saveLcData}
        lcComments={lcComments}
        lcDocuments={lcDocuments}
        lcData={lcData}
        addComment={addComment}
        deleteLcDoc={deleteLcDoc}
        lcDocEdit={lcDocEdit}
        currentComment={currentComment}
        addConditionArr={addConditionArr}
        deleteLcCondition={deleteLcCondition}
        lcConditionEdit={lcConditionEdit}
        addConditionComment={addConditionComment}
        lcCondition={lcCondition}
        
        currentComment2={currentComment2}
      />
      <PreviewBar onSave={handleLcSave} leftButtonClick={changeRoute} />
    </>
  )
}

export default Index
